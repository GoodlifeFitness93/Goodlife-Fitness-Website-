import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import t1 from "@/assets/gym transformation 1.webp";
import t2 from "@/assets/gym transformation 2.webp";
import t3 from "@/assets/gym transformation 3.webp";

const cards = [
  { img: t1, name: "Rahul S.", meta: "12 kg lean gain · 6 months", quote: "Goodlife rebuilt me from the inside out." },
  { img: t2, name: "Priya M.", meta: "−18 kg · 8 months", quote: "Real coaching. Real results. Real community." },
  { img: t3, name: "Arjun P.", meta: "−22 kg · 10 months", quote: "I came for a gym. I found a transformation." },
];

export function Transformations() {
  return (
    <section id="transformations" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Proof" title="Real Transformations." accent="Real Results." sub="Every body has a story. These are some of the strongest written at Goodlife." />
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.figure key={c.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group bg-charcoal overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="Body transformation result at Goodlife Fitness Solapur" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-ember text-primary-foreground text-xs px-3 py-1 uppercase tracking-wider font-semibold">Before / After</div>
              </div>
              <figcaption className="p-6">
                <div className="font-display text-2xl uppercase">{c.name}</div>
                <div className="text-xs text-ember tracking-[0.2em] uppercase mt-1">{c.meta}</div>
                <p className="text-muted-foreground mt-4 italic">"{c.quote}"</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
