import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const targetHash = location.hash;

    const scrollToPosition = () => {
      if (targetHash) {
        const element = document.querySelector(targetHash);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;

          if (window.lenis) {
            window.lenis.scrollTo(offsetTop, { duration: 0.6 });
          } else {
            window.scrollTo({ top: offsetTop });
          }
          return;
        }
      }

      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 0.6 });
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    const rafId = requestAnimationFrame(() => {
      scrollToPosition();
    });

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;
