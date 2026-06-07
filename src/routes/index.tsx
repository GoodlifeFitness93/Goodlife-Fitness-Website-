import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Section, SectionHeader, SplitFeature } from "@/components/site/Section";
import { Facilities } from "@/components/site/Facilities";
import { Trainer } from "@/components/site/Trainer";
import { Transformations } from "@/components/site/Transformations";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { StickyMobile } from "@/components/site/StickyMobile";

import equipment from "@/assets/equipment.jpg";
import cardio from "@/assets/cardio.jpg";
import weights from "@/assets/weights.jpg";
import boxing from "@/assets/boxing.jpg";
import yoga from "@/assets/yoga.jpg";
import spa from "@/assets/spa.jpg";
import steam from "@/assets/steam.jpg";
import bath from "@/assets/bath.jpg";
import selfie from "@/assets/selfie.jpg";
import heroImg from "@/assets/hero-gym.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goodlife Fitness Club — Biggest Gym in Solapur" },
      { name: "description", content: "Solapur's biggest premium fitness destination. Advanced equipment, cardio, weights, boxing, yoga, spa, steam & expert coaching by Raghu Sir." },
      { property: "og:title", content: "Goodlife Fitness Club — Biggest Gym in Solapur" },
      { property: "og:description", content: "Transform your body. Build strength. Unlock your best version at Solapur's premier fitness club." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark bg-background text-foreground min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />

        <Section id="about">
          <SplitFeature
            img={heroImg}
            alt="Inside Goodlife Fitness Club"
            eyebrow="About"
            title="The Goodlife"
            accent="Difference."
            copy="Goodlife isn't another gym — it's Solapur's largest advanced fitness ecosystem. A professional training environment built for serious transformation and elite recovery."
            bullets={[
              "Largest premium gym footprint in Solapur",
              "Advanced machines, dedicated zones, expert programming",
              "Spa, steam, yoga & recovery suite under one roof",
              "A community of doers — not just members",
            ]}
          />
        </Section>

        <Facilities />

        <Section className="bg-charcoal">
          <SplitFeature img={equipment} alt="Advanced gym equipment" eyebrow="Equipment" title="Train With The Best" accent="Gear In Solapur." reverse
            copy="From plate-loaded strength machines to functional rigs and free weights — every piece chosen by athletes, for athletes."
            bullets={["Modern strength machines", "Free weights & dumbbells", "Functional training rigs", "Plate-loaded power stations"]} />
        </Section>

        <Section>
          <SplitFeature img={cardio} alt="Cardio Center" eyebrow="Cardio" title="Boost Endurance." accent="Burn Fat."
            copy="A dedicated cardio floor with treadmills, cross trainers and stationary bikes — engineered for sustained performance."
            bullets={["High-incline treadmills", "Premium cross trainers", "Spin & endurance bikes"]} />
        </Section>

        <Section className="bg-charcoal">
          <SplitFeature img={weights} alt="Weight training zone" eyebrow="Strength" title="Where Strength" accent="Is Built." reverse
            copy="Heavy lifting, structured progression, and a zone designed around the iron itself. Build raw power with intent."
            bullets={["Olympic platforms & power racks", "Full dumbbell range", "Specialized muscle isolation"]} />
        </Section>

        <Section>
          <SplitFeature img={boxing} alt="Boxing arena" eyebrow="Combat" title="Unleash Your" accent="Fighter Spirit."
            copy="Heavy bags, speed bags and conditioning drills — the fastest cardio there is, with the discipline of a fighter."
            bullets={["Hanging heavy bags", "Boxing drills & pad work", "Athletic conditioning"]} />
        </Section>

        <Section className="bg-charcoal">
          <SplitFeature img={yoga} alt="Yoga center" eyebrow="Yoga" title="Strength Of Body." accent="Peace Of Mind." reverse
            copy="A serene studio for flexibility, balance and mindfulness — the recovery half of any serious training practice."
            bullets={["Daily group sessions", "Flexibility & mobility", "Breath & meditation"]} />
        </Section>

        <Section>
          <SplitFeature img={spa} alt="Luxury spa" eyebrow="Spa" title="Recover Like" accent="A Champion."
            copy="A full luxury wellness suite. Because elite performance is built between sessions, not just during them."
            bullets={["Deep relaxation", "Stress reduction", "Premium wellness"]} />
        </Section>

        <Section className="bg-charcoal">
          <SplitFeature img={steam} alt="Steam room" eyebrow="Steam" title="Detox. Recover." accent="Recharge." reverse
            copy="Step into the steam — clear the toxins, open every pore, and reset for what's next." />
        </Section>

        <Section>
          <SplitFeature img={bath} alt="Bath and recovery area" eyebrow="Recovery" title="Complete" accent="Post-Workout Recovery."
            copy="Premium changing rooms and bath facilities crafted for comfort. End every session feeling like royalty." />
        </Section>

        <Section className="bg-charcoal">
          <SplitFeature img={selfie} alt="Selfie point" eyebrow="Share" title="Capture Your" accent="Transformation Journey." reverse
            copy="Designed selfie zones, motivational walls and social-ready light — because progress deserves to be seen." />
        </Section>

        <Trainer />
        <Transformations />
        <Testimonials />
        <CTA />
        <Location />
      </main>
      <Footer />
      <StickyMobile />
    </div>
  );
}
