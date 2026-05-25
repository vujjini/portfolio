import React, { useState, useEffect, useRef, useMemo } from 'react';
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';

/**
 * PretextHeaderWrap wraps Name and Headline around a circular profile picture obstacle.
 * It uses a convergence loop to dynamically scale the avatar size to perfectly match
 * the combined height of the Name and Headline lines, and curves both texts around it.
 */
const PretextHeaderWrap = ({
  nameText,
  headlineText,
  avatarUrl,
  gap = 16,
  nameClass = '',
  headlineClass = '',
}) => {
  const containerRef = useRef(null);
  const nameMeasureRef = useRef(null);
  const headlineMeasureRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [nameFont, setNameFont] = useState('bold 48px Syne');
  const [nameLineHeight, setNameLineHeight] = useState(56);
  const [headlineFont, setHeadlineFont] = useState('bold 24px Syne');
  const [headlineLineHeight, setHeadlineLineHeight] = useState(32);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Monitor font loading to ensure accurate canvas measurements
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  // Update dimensions, computed font strings, and line heights
  useEffect(() => {
    if (!containerRef.current) return;

    const updateMeasurements = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerWidth(rect.width);

      if (nameMeasureRef.current) {
        const style = window.getComputedStyle(nameMeasureRef.current);
        setNameFont(`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`);
        const lh = parseFloat(style.lineHeight);
        setNameLineHeight(isNaN(lh) ? parseFloat(style.fontSize) * 1.25 : lh);
      }

      if (headlineMeasureRef.current) {
        const style = window.getComputedStyle(headlineMeasureRef.current);
        setHeadlineFont(`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`);
        const lh = parseFloat(style.lineHeight);
        setHeadlineLineHeight(isNaN(lh) ? parseFloat(style.fontSize) * 1.35 : lh);
      }
    };

    updateMeasurements();

    const observer = new ResizeObserver(() => {
      updateMeasurements();
    });
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [fontsLoaded]);

  // Pretext Preparation Phase
  const preparedName = useMemo(() => {
    if (!nameText) return null;
    return prepareWithSegments(nameText, nameFont);
  }, [nameText, nameFont]);

  const preparedHeadline = useMemo(() => {
    if (!headlineText) return null;
    return prepareWithSegments(headlineText, headlineFont);
  }, [headlineText, headlineFont]);

  // Convergence Loop Layout Phase
  const { nameLines, headlineLines, totalHeight } = useMemo(() => {
    if (!preparedName || !preparedHeadline || containerWidth === 0) {
      return { nameLines: [], headlineLines: [], totalHeight: 0 };
    }

    let currentAvatarHeight = 120; // Initial guess
    let nameResult = [];
    let headlineResult = [];
    let totalH = 0;
    const spacerHeight = 8; // Vertical gap between name and headline

    // Run convergence iterations
    for (let iter = 0; iter < 4; iter++) {
      nameResult = [];
      headlineResult = [];
      let currentY = 0;

      const R = currentAvatarHeight / 2;

      // 1. Layout Name text
      let nameCursor = { segmentIndex: 0, graphemeIndex: 0 };
      while (true) {
        let obstacleWidth = 0;
        const currentLineCenterY = currentY + nameLineHeight / 2;
        const dy = currentLineCenterY - R;
        if (R > 0 && Math.abs(dy) <= R) {
          const dx = Math.sqrt(R * R - dy * dy);
          obstacleWidth = R + dx + gap;
        }

        let limit = containerWidth;
        if (obstacleWidth > 0) {
          limit = containerWidth - obstacleWidth;
        }
        limit = Math.max(limit, 80);

        const line = layoutNextLine(preparedName, nameCursor, limit);
        if (!line) break;

        nameResult.push({
          text: line.text,
          xOffset: obstacleWidth > 0 ? obstacleWidth : 0,
        });

        nameCursor = line.end;
        currentY += nameLineHeight;
      }

      // Add name-to-headline spacing to layout calculations
      currentY += spacerHeight;

      // 2. Layout Headline text
      let headlineCursor = { segmentIndex: 0, graphemeIndex: 0 };
      while (true) {
        let obstacleWidth = 0;
        const currentLineCenterY = currentY + headlineLineHeight / 2;
        const dy = currentLineCenterY - R;
        if (R > 0 && Math.abs(dy) <= R) {
          const dx = Math.sqrt(R * R - dy * dy);
          obstacleWidth = R + dx + gap;
        }

        let limit = containerWidth;
        if (obstacleWidth > 0) {
          limit = containerWidth - obstacleWidth;
        }
        limit = Math.max(limit, 80);

        const line = layoutNextLine(preparedHeadline, headlineCursor, limit);
        if (!line) break;

        headlineResult.push({
          text: line.text,
          xOffset: obstacleWidth > 0 ? obstacleWidth : 0,
        });

        headlineCursor = line.end;
        currentY += headlineLineHeight;
      }

      totalH = currentY;

      // Check convergence
      if (Math.abs(totalH - currentAvatarHeight) < 2) {
        break;
      }
      currentAvatarHeight = totalH;
    }

    return { nameLines: nameResult, headlineLines: headlineResult, totalHeight: totalH };
  }, [preparedName, preparedHeadline, containerWidth, nameLineHeight, headlineLineHeight, gap]);

  const avatarStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: totalHeight,
    height: totalHeight,
    zIndex: 10,
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ minHeight: totalHeight }}>
      {/* Hidden elements for style measurements */}
      <div className="absolute opacity-0 pointer-events-none select-none" style={{ top: -9999 }}>
        <span ref={nameMeasureRef} className={nameClass}>Template</span>
        <span ref={headlineMeasureRef} className={headlineClass}>Template</span>
      </div>

      {avatarUrl && totalHeight > 0 && (
        <div style={avatarStyle} className="group">
          {/* Glowing ring animation */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div
            className="relative rounded-full overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md"
            style={{ width: totalHeight, height: totalHeight }}
          >
            <img
              src={avatarUrl}
              alt="Profile Avatar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      )}

      <div className="w-full flex flex-col justify-start">
        {/* Name Lines */}
        {nameLines.map((line, idx) => (
          <div
            key={`name-${idx}`}
            style={{
              marginLeft: line.xOffset,
              height: nameLineHeight,
              lineHeight: `${nameLineHeight}px`,
              width: containerWidth - line.xOffset,
            }}
            className={`${nameClass} overflow-hidden whitespace-nowrap`}
          >
            {line.text}
          </div>
        ))}

        {/* Name to Headline Spacer */}
        <div style={{ height: 8 }} />

        {/* Headline Lines */}
        {headlineLines.map((line, idx) => (
          <div
            key={`headline-${idx}`}
            style={{
              marginLeft: line.xOffset,
              height: headlineLineHeight,
              lineHeight: `${headlineLineHeight}px`,
              width: containerWidth - line.xOffset,
            }}
            className={`${headlineClass} overflow-hidden whitespace-nowrap`}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PretextHeaderWrap;
