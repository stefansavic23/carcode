import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const OFFSET_PX = 36;
const DURATION_MS = 600;

const directionMap = {
  left: { x: -OFFSET_PX, y: 0 },
  right: { x: OFFSET_PX, y: 0 },
  bottom: { x: 0, y: OFFSET_PX },
};

/**
 * Reusable scroll-reveal section. Animates into view when entering the viewport (once).
 * Uses Intersection Observer; no external animation libraries.
 *
 * @param {React.ReactNode} children - Content to reveal
 * @param {'left'|'right'|'bottom'} direction - Slide-in direction
 * @param {number} delay - Optional delay in seconds before animation starts
 * @param {number} threshold - Intersection threshold (0–1), default 0.08
 * @param {string} rootMargin - Root margin for observer (e.g. "0px 0px -40px 0px")
 * @param {object} sx - Extra MUI sx props
 * @param {string} component - Root element type, default 'div'
 */
const RevealSection = ({
  children,
  direction = 'bottom',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  sx = {},
  component = 'div',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
        once: true,
      }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [threshold, rootMargin]);

  const { x, y } = directionMap[direction] || directionMap.bottom;
  const durationSec = DURATION_MS / 1000;

  return (
    <Box
      ref={ref}
      component={component}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate(0, 0)'
          : `translate(${x}px, ${y}px)`,
        transition: `opacity ${durationSec}s ease-out ${delay}s, transform ${durationSec}s ease-out ${delay}s`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default RevealSection;
