import { useEffect, useRef, useState } from "react";

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isHovering: boolean;
  isClicking: boolean;
}

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isHovering: false,
    isClicking: false,
  });

  const [isMobile, setIsMobile] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  // Check if device is mobile/touch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
        navigator.maxTouchPoints > 0 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse move tracking
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorState((prev) => ({
        ...prev,
        targetX: e.clientX,
        targetY: e.clientY,
      }));
    };

    const handleMouseDown = () => {
      setCursorState((prev) => ({
        ...prev,
        isClicking: true,
      }));
    };

    const handleMouseUp = () => {
      setCursorState((prev) => ({
        ...prev,
        isClicking: false,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile]);

  // Hover detection for interactive elements
  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = () => {
      setCursorState((prev) => ({
        ...prev,
        isHovering: true,
      }));
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({
        ...prev,
        isHovering: false,
      }));
    };

    // Interactive elements to detect
    const interactiveSelectors = [
      "a",
      "button",
      "[role='button']",
      "input",
      "textarea",
      "select",
      ".cursor-hover",
      ".work-card",
      ".project-card",
      "[data-cursor-hover]",
    ];

    const elements = document.querySelectorAll(interactiveSelectors.join(","));

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        interactiveSelectors.join(",")
      );
      newElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [isMobile]);

  // Smooth cursor animation using requestAnimationFrame
  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      setCursorState((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;

        // Smooth easing: 0.15 for smooth trail effect
        const x = prev.x + dx * 0.15;
        const y = prev.y + dy * 0.15;

        // Update DOM elements
        if (dotRef.current) {
          dotRef.current.style.left = `${prev.targetX}px`;
          dotRef.current.style.top = `${prev.targetY}px`;
        }

        if (circleRef.current) {
          circleRef.current.style.left = `${x}px`;
          circleRef.current.style.top = `${y}px`;
        }

        return {
          ...prev,
          x,
          y,
        };
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isMobile]);

  // Hide default cursor
  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = "auto";
      return;
    }

    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Cursor center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 bg-white rounded-full mix-blend-lighten transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
        style={{
          boxShadow: cursorState.isHovering
            ? "0 0 12px rgba(246, 232, 74, 0.8), inset 0 0 4px rgba(246, 232, 74, 0.4)"
            : "0 0 4px rgba(255, 255, 255, 0.5)",
          backgroundColor: cursorState.isHovering ? "#F6E84A" : "#ffffff",
          filter: cursorState.isClicking ? "blur(0.5px)" : "blur(0px)",
        }}
      />

      {/* Cursor outer circle with delay */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full mix-blend-lighten transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 border"
        style={{
          width: cursorState.isHovering ? "48px" : "32px",
          height: cursorState.isHovering ? "48px" : "32px",
          borderColor: cursorState.isHovering
            ? "rgba(139, 92, 255, 0.8)"
            : "rgba(255, 255, 255, 0.4)",
          borderWidth: "1.5px",
          boxShadow: cursorState.isHovering
            ? "0 0 20px rgba(139, 92, 255, 0.6), inset 0 0 20px rgba(139, 92, 255, 0.2)"
            : "0 0 8px rgba(255, 255, 255, 0.2)",
          opacity: cursorState.isClicking ? 0.6 : 1,
          transform: `translate(calc(-50% + ${cursorState.isHovering ? "-2px" : "0px"}), calc(-50% + ${cursorState.isHovering ? "-2px" : "0px"}))`,
        }}
      />

      {/* Global cursor styles */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        /* Allow text selection cursor on text elements */
        p, span, h1, h2, h3, h4, h5, h6, li, label, td, th {
          cursor: none !important;
          user-select: text;
        }
        
        /* Ensure form elements and interactive elements don't show default cursor */
        input, textarea, select, button, a, [role="button"] {
          cursor: none !important;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
