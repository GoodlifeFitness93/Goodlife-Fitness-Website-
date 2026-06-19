import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Weight, Flower2, Sparkles, Waves, Droplets, Swords, Camera } from "lucide-react";
import { SectionHeader } from "./Section";
import equipment from "@/assets/strength training.png";
import cardio from "@/assets/cardio-zone.png";
import weights from "@/assets/Weight training area.png";
import yoga from "@/assets/yoga-zone.png";
import spa from "@/assets/Spa.png";
import steam from "@/assets/Steam.png";
import bath from "@/assets/Bath.png";
import boxing from "@/assets/Boxing Area.png";
import selfie from "@/assets/Selfie Point.png";

const facilities = [
  { icon: Dumbbell, img: equipment, title: "Advanced Equipment", desc: "Latest plate-loaded & functional rigs." },
  { icon: HeartPulse, img: cardio, title: "Cardio Center", desc: "Premium treadmills & cross trainers." },
  { icon: Weight, img: weights, title: "Weight Training Zone", desc: "Full dumbbell rack & power racks." },
  { icon: Flower2, img: yoga, title: "Yoga Center", desc: "Mindfulness, flexibility & balance." },
  { icon: Sparkles, img: spa, title: "Luxury Spa", desc: "Wellness & deep relaxation." },
  { icon: Waves, img: steam, title: "Steam Room", desc: "Detox & full-body reset." },
  { icon: Droplets, img: bath, title: "Bath & Recovery", desc: "Premium changing & recovery suite." },
  { icon: Swords, img: boxing, title: "Boxing Arena", desc: "Heavy bags & conditioning drills." },
  { icon: Camera, img: selfie, title: "Selfie Points", desc: "Capture your journey, share the win." },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 md:py-32 px-6 bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader eyebrow="Inside Goodlife" title="One Roof." accent="Everything Elite." sub="Nine world-class facilities engineered for performance, recovery and lifestyle — under the largest gym footprint in Solapur." />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {facilities.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} className="group relative bg-background overflow-hidden aspect-[4/5] cursor-pointer">
              <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="size-12 grid place-items-center border border-ember/40 bg-background/40 backdrop-blur-md mb-5 group-hover:bg-ember group-hover:border-ember transition-all">
                  <f.icon className="size-5 text-ember group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wider">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                <div className="mt-4 h-px w-0 bg-ember group-hover:w-full transition-all duration-500" />
              </div>
              <div className="absolute top-4 right-4 text-xs text-muted-foreground tracking-widest">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
