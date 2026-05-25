import React, { useState, useEffect, useRef, useMemo } from 'react';
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';

/**
 * A component that wraps text around an avatar image (obstacle) using the Pretext.js library.
 * It dynamically measures font size, line height, and avatar size to calculate accurate line-by-line wrapping.
 */
const PretextWrap = ({
  text,
  avatarElement,
  avatarPosition = 'left',
  avatarShape = 'circle',
  gap = 16,
  className = '',
}) => {
  const containerRef = useRef(null);
  const avatarRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [fontString, setFontString] = useState('16px Syne, sans-serif');
  const [lineHeight, setLineHeight] = useState(24);
  const [avatarDimensions, setAvatarDimensions] = useState({ width: 0, height: 0 });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Monitor font loading to ensure accurate canvas measurements
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  // Update dimensions, font size, and line height dynamically
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      setContainerWidth(containerRect.width);

      const style = window.getComputedStyle(containerRef.current);
      setFontString(`${style.fontSize} ${style.fontFamily}`);

      // Computed Line Height
      const lh = style.lineHeight;
      if (lh && lh !== 'normal') {
        const parsed = parseFloat(lh);
        if (!isNaN(parsed)) {
          setLineHeight(parsed);
        }
      } else {
        const fs = parseFloat(style.fontSize);
        setLineHeight(isNaN(fs) ? 24 : fs * 1.5);
      }

      // Measure Avatar dimensions if present
      if (avatarRef.current) {
        const avatarRect = avatarRef.current.getBoundingClientRect();
        setAvatarDimensions({
          width: avatarRect.width,
          height: avatarRect.height,
        });
      }
    };

    // Run measurement
    updateDimensions();

    // Use ResizeObserver for responsive recalculations
    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(containerRef.current);
    if (avatarRef.current) {
      observer.observe(avatarRef.current);
    }

    return () => observer.disconnect();
  }, [fontsLoaded]);

  // Pretext Preparation Phase: Run once per text/font change
  const prepared = useMemo(() => {
    if (!text) return null;
    return prepareWithSegments(text, fontString);
  }, [text, fontString]);

  // Pretext Layout Phase: High-speed arithmetic flow
  const lines = useMemo(() => {
    if (!prepared || containerWidth === 0) return [];

    const result = [];
    let cursor = { segmentIndex: 0, graphemeIndex: 0 };
    let currentY = 0;

    const R = avatarDimensions.width / 2;

    while (true) {
      let obstacleWidth = 0;
      if (avatarDimensions.width > 0 && avatarDimensions.height > 0) {
        if (avatarShape === 'circle') {
          // Circle boundary calculation: (x-R)^2 + (y-R)^2 = R^2
          // right boundary x = R + sqrt(R^2 - (y - R)^2)
          const currentLineCenterY = currentY + lineHeight / 2;
          const dy = currentLineCenterY - R;
          if (Math.abs(dy) <= R) {
            const dx = Math.sqrt(R * R - dy * dy);
            obstacleWidth = R + dx + gap;
          }
        } else {
          // Square/rectangular boundary
          const obstacleHeight = avatarDimensions.height + gap;
          if (currentY < obstacleHeight) {
            obstacleWidth = avatarDimensions.width + gap;
          }
        }
      }

      let limit = containerWidth;
      if (obstacleWidth > 0) {
        limit = containerWidth - obstacleWidth;
      }

      limit = Math.max(limit, 80); // Safeguard against infinite loops

      const line = layoutNextLine(prepared, cursor, limit);
      if (!line) break;

      result.push({
        text: line.text,
        width: line.width,
        xOffset: obstacleWidth > 0 && avatarPosition === 'left' ? obstacleWidth : 0,
      });

      cursor = line.end;
      currentY += lineHeight;
    }
    return result;
  }, [prepared, containerWidth, avatarDimensions, gap, lineHeight, avatarPosition, avatarShape]);

  const avatarStyle = {
    position: 'absolute',
    top: 0,
    ...(avatarPosition === 'left' ? { left: 0 } : { right: 0 }),
    zIndex: 10,
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ minHeight: avatarDimensions.height }}>
      {avatarElement && (
        <div ref={avatarRef} style={avatarStyle}>
          {avatarElement}
        </div>
      )}
      <div className="w-full flex flex-col">
        {lines.map((line, idx) => (
          <div
            key={idx}
            style={{
              marginLeft: line.xOffset,
              height: lineHeight,
              lineHeight: `${lineHeight}px`,
              width: containerWidth - line.xOffset,
            }}
            className={`${className} overflow-hidden whitespace-nowrap`}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PretextWrap;
