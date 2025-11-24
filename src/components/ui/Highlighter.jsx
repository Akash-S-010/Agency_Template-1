import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
  active = true,
  delay = 0, // 👈 new delay prop (in ms)
}) {
  const elementRef = useRef(null);
  const annotationRef = useRef(null);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  const shouldShow = active && (!isView || isInView);

  useEffect(() => {
    if (!shouldShow) return;
    const element = elementRef.current;
    if (!element) return;

    const timeout = setTimeout(() => {
      const annotation = annotate(element, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });

      annotationRef.current = annotation;
      annotationRef.current.show();

      const resizeObserver = new ResizeObserver(() => {
        annotation.hide();
        annotation.show();
      });

      resizeObserver.observe(element);
      resizeObserver.observe(element);

      return () => {
        annotationRef.current?.remove();
        resizeObserver.disconnect();
      };
    }, delay); // 👈 delay before showing highlight

    return () => clearTimeout(timeout);
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    delay,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
