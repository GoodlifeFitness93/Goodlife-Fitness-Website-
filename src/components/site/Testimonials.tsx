import { motion } from "framer-motion";
import { Star } from "lucide-react";

const quotes = [
  { n: "Sneha K.", t: "Member · 2 yrs", q: "The energy here is unmatched. Best gym I've trained at — equipment, hygiene, and coaching are world-class." },
  { n: "Vikram R.", t: "Member · 1 yr", q: "Raghu Sir's program changed my physique completely. The spa & steam after a heavy session is luxury." },
  { n: "Anjali D.", t: "Member · 8 mo", q: "Women-friendly, premium, motivating. The yoga center alone is worth the membership." },
  { n: "Mahesh G.", t: "Member · 3 yrs", q: "Biggest, cleanest, most advanced gym in Solapur. Period." },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-display text-4xl md:text-6xl uppercase max-w-2xl leading-[0.95]">Voices Of The <span className="text-ember">Goodlife</span> Tribe</h2>
          <div className="flex items-center gap-2 text-ember">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-ember" />)}
            <span className="text-foreground ml-2 font-semibold">5.0</span>
            <span className="text-muted-foreground text-sm">Google Rated</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote key={q.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass p-8 group hover:border-ember/40 transition-colors">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-ember text-ember" />)}</div>
              <p className="text-lg leading-relaxed text-foreground/90">"{q.q}"</p>
              <footer className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <div className="font-semibold">{q.n}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{q.t}</div>
                </div>
                <div className="size-10 grid place-items-center bg-ember/10 text-ember font-display">{q.n[0]}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
