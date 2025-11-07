import { useCallback, useEffect, useRef } from "react";

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback(
    (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2 || !texts || texts.length === 0) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

const Texts = ({ texts, textClassName = "" }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  const baseTextClasses =
    "absolute inset-0 flex items-center justify-center px-2 text-center whitespace-normal break-words text-balance";
  return (
    <>
      <span
        className={`${baseTextClasses} ${textClassName}`.trim()}
        ref={text1Ref}
      />
      <span
        className={`${baseTextClasses} ${textClassName}`.trim()}
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters = () => (
  <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

const LiquidText = ({ texts, className = "", wrapperClassName, textClassName = "" }) => {
  const baseClassName =
    wrapperClassName ??
    "relative mx-auto w-full max-w-8xl px-4 text-center font-title font-bold leading-tight text-[clamp(2.25rem,7vw,4rem)] md:text-[clamp(3.5rem,6vw,5.5rem)] lg:text-[6rem] min-h-[3.5rem] md:min-h-[5rem] [filter:url(#threshold)_blur(0.6px)]";

  const combinedTextClassName = `whitespace-normal break-words text-balance ${textClassName}`.trim();

  return (
    <div className={`${baseClassName} ${className}`.trim()}>
      <Texts texts={texts} textClassName={combinedTextClassName} />
      <SvgFilters />
    </div>
  );
};

export default LiquidText;
