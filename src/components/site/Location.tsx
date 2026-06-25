import { MapPin, Phone, Clock } from "lucide-react";
import { SectionHeader } from "./Section";

export function Location() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-charcoal">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeader eyebrow="Visit Us" title="Visit Goodlife Fitness —" accent="Best Gym in Solapur" />
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <MapPin className="size-5 text-ember mt-1 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Address</div>
                <p className="leading-relaxed">
                  Goodlife Fitness<br />
                  Sai Icon, near Ambassador Hotel,<br />
                  Dharamsi Lane, Murarji Peth,<br />
                  Solapur, Maharashtra 413001, India
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="size-5 text-ember mt-1 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
                <a href="tel:+919325342686" className="hover:text-ember transition-colors">+91 93253 42686</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="size-5 text-ember mt-1 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hours</div>
                <p className="leading-relaxed">
                  Mon–Sat: 6:00 AM – 11:00 PM<br />
                  Sun: 6:00 AM – 12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 aspect-[4/3] lg:aspect-auto overflow-hidden border border-border">
          <iframe
            title="Goodlife Fitness Club location"
            src="https://maps.google.com/maps?q=Goodlife+Fitness+Club+Sai+Icon+near+Ambassador+Hotel+Dharamsi+Lane+Murarji+Peth+Solapur+Maharashtra+413001&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
