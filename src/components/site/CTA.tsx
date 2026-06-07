import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal" />
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] bg-ember/15 blur-[140px] rounded-full" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mx-auto max-w-5xl text-center">
        <div className="text-xs tracking-[0.5em] text-ember uppercase mb-6">Your Move</div>
        <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.9]">
          Your Transformation<br /><span className="text-ember">Starts Today</span>
        </h2>
        <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">Join the biggest fitness destination in Solapur and become the strongest version of yourself.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans." target="_blank" rel="noopener" className="group inline-flex items-center gap-3 bg-ember text-primary-foreground px-8 py-4 uppercase tracking-wider font-semibold hover:bg-ember-glow transition-all ember-glow">
            <MessageCircle className="size-5" /> Join via WhatsApp
          </a>
          <a href="tel:+919325342686" className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 uppercase tracking-wider font-semibold hover:border-ember hover:text-ember transition-colors">
            <Phone className="size-5" /> Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
