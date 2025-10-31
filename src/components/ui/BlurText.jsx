import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from ?? {}),
    ...steps.flatMap((step) => Object.keys(step ?? {}))
  ]);

  const keyframes = {};
  keys.forEach((key) => {
    keyframes[key] = [from?.[key], ...steps.map((step) => step?.[key])];
  });

  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  as: Component = "p",
  wordClassName = ""
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const defaultSnapshots = useMemo(() => {
    const from = { filter: "blur(10px)", opacity: 0, x: 0, y: 0, scale: 1 };
    const mid = { filter: "blur(5px)", opacity: 0.5, x: 0, y: 0, scale: 1 };
    const end = { filter: "blur(0px)", opacity: 1, x: 0, y: 0, scale: 1 };

    switch (direction) {
      case "bottom":
        from.y = 50;
        mid.y = -5;
        break;
      case "left":
        from.x = -50;
        mid.x = 5;
        break;
      case "right":
        from.x = 50;
        mid.x = -5;
        break;
      case "center":
        from.scale = 0.9;
        mid.scale = 1.05;
        break;
      default:
        from.y = -50;
        mid.y = 5;
        break;
    }

    return { from, steps: [mid, end] };
  }, [direction]);

  const fromSnapshot = animationFrom ?? defaultSnapshots.from;
  const toSnapshots = animationTo ?? defaultSnapshots.steps;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = useMemo(
    () => Array.from({ length: stepCount }, (_, index) => (stepCount === 1 ? 0 : index / (stepCount - 1))),
    [stepCount]
  );

  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots]
  );

  return (
    <Component ref={ref} className={`blur-text ${className}`}>
      {elements.map((segment, index) => {
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        const baseWordClasses =
          animateBy === "words"
            ? "inline-block will-change-[transform,filter,opacity] mr-1 sm:mr-2 last:mr-0"
            : "inline-block will-change-[transform,filter,opacity]";
        const spanClassName = `${baseWordClasses} ${wordClassName}`.trim();

        return (
          <motion.span
            className={spanClassName}
            key={`${segment}-${index}`}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === " " ? "\u00A0" : segment}
          </motion.span>
        );
      })}
    </Component>
  );
};

export default BlurText;
