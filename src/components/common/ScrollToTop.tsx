import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log("ScrollToTop - Current Scroll position:", scrolled);
      setIsVisible(scrolled > 150);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    console.log("ScrollToTop - Clicked! Attempting to scroll to top...");
    
    // Method 1: standard smooth window scroll
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      console.log("ScrollToTop - Method 1 executed");
    } catch (e) {
      console.error("ScrollToTop - Method 1 failed:", e);
    }

    // Method 2: documentElement smooth scroll
    try {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      console.log("ScrollToTop - Method 2 executed");
    } catch (e) {
      console.error("ScrollToTop - Method 2 failed:", e);
    }

    // Method 3: body smooth scroll
    try {
      document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      console.log("ScrollToTop - Method 3 executed");
    } catch (e) {
      console.error("ScrollToTop - Method 3 failed:", e);
    }

    // Method 4: Instant fallback if smooth is ignored
    setTimeout(() => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (currentScroll > 10) {
        console.log("ScrollToTop - Smooth scroll failed or didn't reach top. Falling back to instant scroll.");
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 500);
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 99999,
        display: isVisible ? "flex" : "none",
        width: "50px",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "9999px",
        border: "none",
        backgroundColor: "var(--color-primary, #1e3a8a)",
        color: "#ffffff",
      }}
      className="gradient-cta text-primary-foreground shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <ArrowUp style={{ width: "22px", height: "22px" }} />
    </a>
  );
}




