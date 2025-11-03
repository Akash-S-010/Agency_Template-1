import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const targetHash = location.hash;

    const scrollToPosition = () => {
      if (targetHash) {
        const element = document.querySelector(targetHash);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;

          if (lenis) {
            lenis.scrollTo(offsetTop, { immediate: true });
          } else {
            window.scrollTo({ top: offsetTop });
          }
          return;
        }
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    const rafId = requestAnimationFrame(() => {
      scrollToPosition();
    });

    return () => cancelAnimationFrame(rafId);
  }, [lenis, location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;
