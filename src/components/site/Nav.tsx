import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#trainer", label: "Trainer" },
  { href: "#transformations", label: "Results" },
  { href: "#contact", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="size-9 grid place-items-center bg-ember text-primary-foreground font-display text-xl ember-glow">G</div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">GOODLIFE</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.3em] -mt-1">FITNESS CLUB</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-10 text-sm tracking-wider uppercase">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember hover:after:w-full after:transition-all">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+919325342686" className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground hover:text-ember transition-colors">
            <Phone className="size-4 text-ember" /> +91 93253 42686
          </a>
          <a href="https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans." target="_blank" rel="noopener" className="hidden md:inline-flex bg-ember text-primary-foreground px-5 py-2.5 text-sm tracking-wider uppercase font-semibold hover:bg-ember-glow transition-colors">
            Join Now
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass mt-3 mx-6 p-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
