import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full p-0 gradient-cta text-primary-foreground shadow-soft hover:shadow-glow border-0 transition-all duration-300 hover:-translate-y-1 hover:scale-105",
        isVisible ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-90 translate-y-4 invisible pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5 animate-pulse" />
    </Button>
  );
}
