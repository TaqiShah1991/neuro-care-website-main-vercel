import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, CalendarCheck } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md data-[status=active]:text-primary data-[status=active]:bg-accent/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="gradient-cta text-primary-foreground shadow-soft hover:shadow-glow border-0">
            <Link to="/appointment">
              <CalendarCheck className="mr-2 h-4 w-4" />
              Book an Appointment
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle><Logo /></SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="px-3 py-3 text-base font-medium rounded-md hover:bg-accent data-[status=active]:text-primary data-[status=active]:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 gradient-cta text-primary-foreground border-0">
                  <Link to="/appointment" onClick={() => setOpen(false)}>
                    <CalendarCheck className="mr-2 h-4 w-4" />
                    Book an Appointment
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
