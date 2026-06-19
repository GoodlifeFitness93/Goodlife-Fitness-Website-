import { motion } from "framer-motion";
import trainerImg from "@/assets/Owner.png";
import { Trophy, Target, Flame, Users } from "lucide-react";

const traits = [
  { i: Trophy, t: "Expert Guidance" },
  { i: Target, t: "Personalised Plans" },
  { i: Flame, t: "Transformation Coaching" },
  { i: Users, t: "Accountability Partner" },
];

export function Trainer() {
  return (
    <section id="trainer" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 -left-40 size-[500px] bg-ember/10 blur-[120px] rounded-full" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center relative">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={trainerImg} alt="Raghu Sir, head trainer at Goodlife Fitness Club" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-ember/30" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-ember text-primary-foreground p-6 ember-glow hidden md:block">
            <div className="font-display text-4xl">10+</div>
            <div className="text-xs uppercase tracking-widest">Years Coaching</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-ember" />
            <span className="text-xs tracking-[0.4em] text-ember uppercase">Meet Your Trainer</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">Raghu <span className="text-ember">Sir</span></h2>
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed">A decade of building champions in Solapur. Raghu Sir blends precision programming with the kind of motivation that turns intent into iron discipline.</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {traits.map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-4 p-4 glass">
                <div className="size-10 grid place-items-center bg-ember/15 text-ember"><Icon className="size-5" /></div>
                <span className="font-semibold tracking-wide">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
