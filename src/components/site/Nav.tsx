import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoMasterAssetImg from "@/assets/goodlife-logo-master-transparent.png";

const facilities = [
  { href: "#strength", label: "Strength Training" },
  { href: "#equipment", label: "Advanced Equipment" },
  { href: "#spin-studio", label: "Spin Studio" },
  { href: "#cardio", label: "Cardio Training" },
  { href: "#boxing", label: "Combat Fitness (Boxing Arena)" },
  { href: "#yoga", label: "Yoga & Wellness" },
  { href: "#lockers", label: "Locker Room" },
  { href: "#salon", label: "Grooming Lounge (Salon)" },
  { href: "#steam", label: "Steam Room" },
  { href: "#spa", label: "Spa" },
  { href: "#bath", label: "Refresh Zone (Bath Room)" },
  { href: "#planning", label: "Transformation Journey" },
  { href: "#selfie-point", label: "Selfie Point" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", h);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const navLinkClass =
    "text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember hover:after:w-full after:transition-all uppercase text-sm tracking-wider";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img 
            src={logoMasterAssetImg} 
            alt="Goodlife Fitness Club logo" 
            className="h-9 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">GOODLIFE</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.3em] -mt-1">FITNESS CLUB</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-sm tracking-wider uppercase">
          <a href="#about" className={navLinkClass}>About</a>
          
          <div 
            ref={dropdownRef}
            className="relative py-2"
          >
            <button 
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
              }}
              className={`${navLinkClass} flex items-center gap-1 cursor-pointer outline-none border-none bg-transparent p-0`}
            >
              Facilities <ChevronDown className={`size-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div 
                className="absolute top-full left-0 z-50 mt-1 w-64 bg-charcoal border border-border/60 py-2 px-1 rounded-[6px] shadow-2xl"
              >
                {facilities.map(f => (
                  <a 
                    key={f.href} 
                    href={f.href} 
                    onClick={() => setDropdownOpen(false)}
                    className="text-zinc-300 hover:text-white transition-colors cursor-pointer w-full block py-2 px-3 hover:bg-ember/20 rounded-[4px] text-xs uppercase tracking-wider"
                  >
                    {f.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#trainers" className={navLinkClass}>Trainers</a>
          <a href="#reviews" className={navLinkClass}>Reviews</a>
          <a href="#transformations" className={navLinkClass}>Results</a>
          <a href="#contact" className={navLinkClass}>Visit</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+919325342686" className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground hover:text-ember transition-colors">
            <Phone className="size-4 text-ember" /> +91 93253 42686
          </a>
          <a href="https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans." target="_blank" rel="noopener" className="hidden md:inline-flex bg-ember text-primary-foreground px-5 py-2.5 text-sm tracking-wider uppercase font-semibold hover:bg-ember-glow transition-colors">
            Join Now
          </a>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden glass mt-3 mx-6 p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
          <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider py-1">About</a>

          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}
              className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider flex items-center justify-between w-full text-left outline-none cursor-pointer py-1"
            >
              <span>Facilities</span>
              <ChevronDown className={`size-4 transition-transform duration-200 ${mobileFacilitiesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileFacilitiesOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l border-border/40 mt-1 max-h-[250px] overflow-y-auto">
                {facilities.map(f => (
                  <a 
                    key={f.href} 
                    href={f.href} 
                    onClick={() => {
                      setOpen(false);
                      setMobileFacilitiesOpen(false);
                    }} 
                    className="text-muted-foreground/80 hover:text-foreground text-xs uppercase tracking-wider py-1"
                  >
                    {f.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#trainers" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider py-1">Trainers</a>
          <a href="#reviews" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider py-1">Reviews</a>
          <a href="#transformations" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider py-1">Results</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground uppercase text-sm tracking-wider py-1">Visit</a>
        </div>
      )}
    </header>
  );
}
