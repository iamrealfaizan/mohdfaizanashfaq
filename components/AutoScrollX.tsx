"use client";

import { useEffect, useRef } from "react";

interface AutoScrollXProps {
  children: React.ReactNode;
  className?: string;
}

export function AutoScrollX({ children, className }: AutoScrollXProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scrollToRight = () => {
      container.scrollLeft = container.scrollWidth;
    };

    scrollToRight();
    const frame = window.requestAnimationFrame(scrollToRight);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
