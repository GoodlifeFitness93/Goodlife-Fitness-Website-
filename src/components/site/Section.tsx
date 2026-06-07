import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, accent, sub }: { eyebrow?: string; title: string; accent?: string; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-3xl">
      {eyebrow && (
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10 bg-ember" />
          <span className="text-xs tracking-[0.4em] text-ember uppercase">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
        {title} {accent && <span className="text-ember">{accent}</span>}
      </h2>
      {sub && <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">{sub}</p>}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`py-24 md:py-32 px-6 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

export function SplitFeature({ img, alt, eyebrow, title, accent, copy, reverse, bullets }: {
  img: string; alt: string; eyebrow: string; title: string; accent?: string; copy: string; reverse?: boolean; bullets?: string[];
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <motion.div initial={{ opacity: 0, x: reverse ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative aspect-[4/3] overflow-hidden group">
        <img src={img} alt={alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
        <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
        <div className="absolute bottom-4 left-4 size-3 bg-ember ember-glow animate-pulse-glow" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <SectionHeader eyebrow={eyebrow} title={title} accent={accent} sub={copy} />
        {bullets && (
          <ul className="mt-8 space-y-3">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-2 size-1.5 bg-ember shrink-0" /> {b}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
