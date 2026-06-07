import { Phone, MessageCircle } from "lucide-react";

export function StickyMobile() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40 grid grid-cols-2 gap-3">
      <a href="tel:+919325342686" className="flex items-center justify-center gap-2 bg-charcoal border border-border text-foreground py-3 uppercase text-xs tracking-wider font-semibold backdrop-blur-xl">
        <Phone className="size-4 text-ember" /> Call
      </a>
      <a href="https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans." target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-ember text-primary-foreground py-3 uppercase text-xs tracking-wider font-semibold ember-glow">
        <MessageCircle className="size-4" /> WhatsApp
      </a>
    </div>
  );
}
