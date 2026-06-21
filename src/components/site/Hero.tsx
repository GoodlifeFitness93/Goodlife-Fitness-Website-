import heroImg from "@/assets/Entrance_Waiting area.webp";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { v: "5000+", l: "Transformations" },
  { v: "100+", l: "Advanced Machines" },
  { v: "Premium", l: "Spa & Recovery" },
  { v: "Expert", l: "Training Support" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Powerful athlete training inside Goodlife Fitness Club" width={1920} height={1280} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="absolute top-1/3 left-6 hidden md:flex flex-col gap-3 text-xs tracking-[0.4em] text-muted-foreground rotate-180 [writing-mode:vertical-rl]">
        <span>SOLAPUR · MAHARASHTRA</span>
        <span className="text-ember">★ 5.0 GOOGLE RATED</span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-ember" />
            <span className="text-xs tracking-[0.4em] text-ember uppercase">Biggest Gym In Solapur</span>
          </div>
          <h1 className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.9] uppercase">
            Biggest <span className="text-ember">Fitness</span><br />
            Destination<br />
            <span className="text-stroke">In Solapur</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Transform your body. Build strength.<br />
            <span className="text-foreground">Unlock your best version.</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans." target="_blank" rel="noopener" className="group inline-flex items-center gap-3 bg-ember text-primary-foreground px-8 py-4 uppercase tracking-wider font-semibold hover:bg-ember-glow transition-all hover:gap-5">
              Join Now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:+919325342686" className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 uppercase tracking-wider font-semibold hover:border-ember hover:text-ember transition-colors">
              <Phone className="size-4" /> Call Now
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="bg-background/40 backdrop-blur-md p-6">
              <div className="font-display text-3xl md:text-5xl text-ember">{s.v}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
