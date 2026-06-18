import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ChartColumn,
  Clock3,
  Dumbbell,
  Flame,
  HeartPulse,
  Camera as Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyMobile } from "@/components/site/StickyMobile";
import { Location } from "@/components/site/Location";

import receptionAsset from "@/assets/goodlife-reception-lounge.png.asset.json";
import strengthZoneAsset from "@/assets/goodlife-strength-zone.png.asset.json";
import machineZoneAsset from "@/assets/goodlife-machine-zone.png.asset.json";
import yogaStudioAsset from "@/assets/goodlife-yoga-studio.png.asset.json";
import spinStudioAsset from "@/assets/goodlife-spin-studio.png.asset.json";
import cardioZoneAsset from "@/assets/goodlife-cardio-zone.png.asset.json";
import boxingArenaAsset from "@/assets/goodlife-boxing-arena.png.asset.json";
import transformationLoungeAsset from "@/assets/goodlife-transformation-lounge.png.asset.json";
import selfiePointAsset from "@/assets/goodlife-selfie-point.png.asset.json";
import transform1Asset from "@/assets/transform1-new.png.asset.json";
import transform2Asset from "@/assets/transform2-new.png.asset.json";
import transform3Asset from "@/assets/transform3-new.png.asset.json";
import ownerAsset from "@/assets/goodlife-owner.png.asset.json";
import trainer1Asset from "@/assets/goodlife-trainer-1.png.asset.json";
import trainer2Asset from "@/assets/goodlife-trainer-2.png.asset.json";
import trainer3Asset from "@/assets/goodlife-trainer-3.png.asset.json";
import trainer4Asset from "@/assets/goodlife-trainer-4.png.asset.json";
import salonAsset from "@/assets/goodlife-salon.png.asset.json";
import steamAsset from "@/assets/goodlife-steam.png.asset.json";
import spaAsset from "@/assets/goodlife-spa.png.asset.json";
import bathAsset from "@/assets/goodlife-bath.png.asset.json";


const WHATSAPP_URL =
  "https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans.";
const SITE_URL = "https://goodlife-fitness-solapur.lovable.app";

const stats = [
  { value: "5000+", label: "Transformations", icon: Flame },
  { value: "100+", label: "Advanced Machines", icon: Dumbbell },
  { value: "5.0★", label: "Google Rating", icon: BadgeCheck },
  { value: "Premium", label: "Recovery Facilities", icon: Sparkles },
];

const facilities = [
  {
    title: "Strength Zone",
    copy: "Signature mural walls, free weights and raw intensity for serious lifters.",
    image: strengthZoneAsset.url,
    icon: Dumbbell,
  },
  {
    title: "Cardio Center",
    copy: "Treadmills, endurance lanes and a high-output cardio floor built to move.",
    image: cardioZoneAsset.url,
    icon: HeartPulse,
  },
  {
    title: "Yoga Studio",
    copy: "Warm wood, calm lighting and a refined wellness atmosphere for recovery.",
    image: yogaStudioAsset.url,
    icon: Sparkles,
  },
  {
    title: "Boxing Arena",
    copy: "Heavy bags, open movement space and the discipline of combat conditioning.",
    image: boxingArenaAsset.url,
    icon: Swords,
  },
  {
    title: "Transformation Lounge",
    copy: "Goal reviews, accountability and personalized planning before results begin.",
    image: transformationLoungeAsset.url,
    icon: Target,
  },
  {
    title: "Recovery Facilities",
    copy: "A premium environment that balances performance with comfort and restoration.",
    image: receptionAsset.url,
    icon: ShieldCheck,
  },
  {
    title: "Selfie Points",
    copy: "Social-ready corners that turn progress into shareable proof.",
    image: selfiePointAsset.url,
    icon: Camera,
  },
  {
    title: "Premium Equipment",
    copy: "Commercial-grade selectorized machines for structured progressive training.",
    image: machineZoneAsset.url,
    icon: ChartColumn,
  },
];

const testimonials = [
  {
    name: "Aarohi S.",
    detail: "Premium Gym In Solapur",
    quote:
      "This is the first gym in Solapur that genuinely feels world-class. The finish, the coaching and the energy are on another level.",
  },
  {
    name: "Rohan P.",
    detail: "Weight Loss Journey",
    quote:
      "I joined for fat loss and stayed for the system. Training, accountability and the environment kept me consistent.",
  },
  {
    name: "Vikram D.",
    detail: "Strength & Conditioning",
    quote:
      "From the boxing arena to the strength floor, every zone feels built for performance rather than just membership numbers.",
  },
];

const transformations = [
  {
    name: "Weight Loss",
    result: "-18 kg · 8 months",
    image: transform2Asset.url,
  },
  {
    name: "Muscle Gain",
    result: "+11 kg lean mass · 7 months",
    image: transform1Asset.url,
  },
  {
    name: "Body Recomposition",
    result: "3 month transformation",
    image: transform3Asset.url,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Gym in Solapur | Goodlife Fitness Club" },
      {
        name: "description",
        content:
          "Goodlife Fitness Club is a premium fitness club in Solapur with advanced machines, cardio, boxing, yoga, personal training and transformation coaching.",
      },
      { property: "og:title", content: "Best Gym in Solapur | Goodlife Fitness Club" },
      {
        property: "og:description",
        content:
          "Train smarter, recover better and transform faster at Goodlife Fitness Club — a premium gym in Solapur built for serious results.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${strengthZoneAsset.url}` },
      { name: "twitter:title", content: "Best Gym in Solapur | Goodlife Fitness Club" },
      {
        name: "twitter:description",
        content:
          "Premium gym in Solapur with strength training, cardio, yoga, boxing and transformation coaching.",
      },
      { name: "twitter:image", content: `${SITE_URL}${strengthZoneAsset.url}` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Goodlife Fitness Club",
          image: [`${SITE_URL}${strengthZoneAsset.url}`, `${SITE_URL}${receptionAsset.url}`],
          url: SITE_URL,
          telephone: "+91 9325342686",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sai Icon, Near Ambassador Hotel, Dharamsi Lane, Murarji Peth",
            addressLocality: "Solapur",
            addressRegion: "Maharashtra",
            postalCode: "413001",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "100",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <HeroSection />
        <MomentumStrip />
        <ReceptionSection />
        <FacilitiesHeaderSection />
        <StrengthSection />
        <EquipmentSection />
        <SpinStudioSection />
        <CardioSection />
        <BoxingSection />
        <YogaSection />
        <SalonSection />
        <SteamSection />
        <SpaSection />
        <BathSection />
        <PlanningSection />
        <TransformationSection />
        <TrainersSection />
        <SocialSection />

        <TestimonialsSection />
        <EnquirySection />
        <FinalCtaSection />
        <Location />
      </main>
      <Footer />
      <StickyMobile />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden border-b border-border/60">
      <div className="absolute inset-0">
        <img
          src={strengthZoneAsset.url}
          alt="Strength training area inside Goodlife Fitness Club in Solapur"
          className="h-full w-full object-cover object-center"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,8,0.3)_0%,rgba(7,7,8,0.68)_38%,rgba(7,7,8,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,120,31,0.34),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(255,181,72,0.16),transparent_22%),radial-gradient(circle_at_50%_48%,rgba(255,120,31,0.12),transparent_40%)]" />
        <div className="absolute inset-0 grain opacity-30" />
        <motion.div
          animate={{ x: ["-8%", "8%", "-8%"] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute inset-y-0 left-[-10%] w-[32%] bg-[linear-gradient(90deg,transparent,rgba(255,183,76,0.12),transparent)] blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-14 pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 border border-border/70 bg-background/25 px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_rgba(255,120,31,0.85)]" />
            <span className="text-[11px] uppercase tracking-[0.38em] text-primary">
              Best Gym In Solapur
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(4.2rem,13vw,10.5rem)] uppercase leading-[0.84] text-balance text-foreground">
            Biggest <span className="text-primary">Fitness</span>
            <br />
            Destination In <span className="text-outline-gold">Solapur</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/78 md:text-2xl">
            Train Smarter. Recover Better. Transform Faster.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-premium">
              Join Now <ArrowRight className="size-4" />
            </a>
            <a href="tel:+919325342686" className="btn-secondary-premium">
              <Phone className="size-4 text-primary" /> Call Now
            </a>
            <a href="#facilities" className="btn-ghost-premium">
              <Play className="size-4 text-primary" /> Explore Club
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.6 }}
              className="premium-panel group overflow-hidden px-5 py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-4xl uppercase leading-none text-foreground md:text-5xl">{value}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
                </div>
                <div className="grid size-11 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MomentumStrip() {
  const items = [
    "Premium Gym In Solapur",
    "Weight Loss Gym Solapur",
    "Personal Training Solapur",
    "Cardio Gym Solapur",
    "Boxing Training Solapur",
    "Yoga Studio Solapur",
  ];

  return (
    <section className="border-y border-border/60 bg-elevated py-5">
      <div className="flex animate-marquee gap-10 whitespace-nowrap text-lg uppercase tracking-[0.24em] text-foreground/75 md:text-2xl">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
            <span>{item}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function ReceptionSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,123,31,0.12),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <ImageFrame src={receptionAsset.url} alt="Luxury reception lounge at Goodlife Fitness Club" priority />
        <div>
          <Eyebrow>Reception Experience</Eyebrow>
          <SectionTitle>
            First Impressions <span className="text-primary">Of Excellence</span>
          </SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Before the first workout begins, Goodlife sets the tone with a refined arrival experience — premium interiors, luxury finishes and a professional atmosphere that instantly separates it from a typical local gym website or facility.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeaturePill title="Luxury Fitness Ambience" text="Matte textures, warm lighting and brand-led interiors." />
            <FeaturePill title="Professional Environment" text="A serious space for serious members and focused coaching." />
            <FeaturePill title="Premium Club Energy" text="Designed to feel aspirational from entrance to workout floor." />
            <FeaturePill title="High-Trust Brand Presence" text="A modern fitness club in Solapur built to convert confidence." />
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesHeaderSection() {
  return (
    <section id="facilities" className="bg-elevated py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Facilities Overview</Eyebrow>
            <SectionTitle>
              World-Class <span className="text-primary">Facilities</span>
            </SectionTitle>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-right">
            Every space inside Goodlife Fitness Club is designed as a premium experience — from high-energy performance floors to calmer wellness zones and social corners members actually want to share.
          </p>
        </div>
      </div>
    </section>
  );
}

function StrengthSection() {
  return (
    <FeatureShowcase
      id="strength"
      eyebrow="Strength Training"
      title="Where Champions Are Built"
      description="This is the most powerful visual statement inside Goodlife — a strength zone that pairs serious equipment with an unforgettable wall of intent. It is built for lifters who want atmosphere, identity and progression in the same room."
      bullets={[
        "Signature mural environment for high-intensity lifting",
        "Dedicated free-weight setup for progressive overload",
        "Built for muscle gain, body recomposition and raw strength",
      ]}
      image={strengthZoneAsset.url}
      alt="Strength training zone with Today’s Pain Is Tomorrow’s Power mural"
      accent="power"
    />
  );
}

function EquipmentSection() {
  return (
    <FeatureShowcase
      eyebrow="Advanced Equipment"
      title="World-Class Training Equipment"
      description="Commercial-grade selectorized equipment helps members isolate muscle groups, train with better mechanics and progress with confidence. This is where structured strength training becomes more intelligent and repeatable."
      bullets={[
        "Advanced machines for chest, back, legs and shoulder isolation",
        "Commercial-grade setup for beginners through advanced athletes",
        "Smarter progressive strength training with controlled execution",
      ]}
      image={machineZoneAsset.url}
      alt="Premium selectorized strength equipment zone at Goodlife Fitness Club"
      reverse
    />
  );
}

function SpinStudioSection() {
  return (
    <section className="relative overflow-hidden bg-elevated py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(42,160,255,0.2),transparent_22%),radial-gradient(circle_at_88%_14%,rgba(255,58,70,0.16),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Spin Studio</Eyebrow>
          <SectionTitle>
            High-Energy <span className="text-primary">Cardio Experience</span>
          </SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Neon lighting, dark surfaces and performance-driven symmetry turn this studio into a futuristic cardio statement. It feels more like a boutique performance room than a standard bike setup.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["LED", "Immersive Lighting"],
              ["Ride", "Performance Cycling"],
              ["Studio", "Focused Atmosphere"],
            ].map(([value, label]) => (
              <div key={label} className="premium-panel px-4 py-5 text-center">
                <div className="text-2xl uppercase text-foreground">{value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.26em] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[8px] border border-border/70 shadow-premium">
          <img src={spinStudioAsset.url} alt="Neon-lit spin studio at Goodlife Fitness Club" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,15,0.12),rgba(5,8,15,0.42))]" />
          <motion.div
            animate={{ x: ["-15%", "15%", "-15%"] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(76,174,255,0.18),transparent)] blur-2xl"
          />
          <motion.div
            animate={{ x: ["20%", "-12%", "20%"] }}
            transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,76,76,0.14),transparent)] blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function CardioSection() {
  return (
    <FeatureShowcase
      eyebrow="Cardio Training"
      title="Boost Endurance. Burn Fat."
      description="A premium cardio zone with multiple treadmills and performance displays gives members a dedicated environment for fat loss, conditioning and stamina-building."
      bullets={[
        "Structured treadmill training for weight loss and conditioning",
        "High-capacity lineup for consistent cardio sessions without waiting",
        "A premium cardio gym in Solapur that feels clean, modern and focused",
      ]}
      image={cardioZoneAsset.url}
      alt="Premium treadmill lineup in the cardio zone at Goodlife Fitness Club"
      metrics
    />
  );
}

function BoxingSection() {
  return (
    <FeatureShowcase
      eyebrow="Combat Fitness"
      title="Unleash Your Fighter Spirit"
      description="The boxing arena adds aggression, speed and athletic discipline to the Goodlife experience. It is a clean, focused space for bag work, conditioning drills and explosive training."
      bullets={[
        "Dedicated heavy bag setup for combat conditioning",
        "Agility, endurance and power training in one zone",
        "Boxing training in Solapur with a sharper premium aesthetic",
      ]}
      image={boxingArenaAsset.url}
      alt="Boxing arena with punching bags inside Goodlife Fitness Club"
      reverse
      aggressive
    />
  );
}

function YogaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,176,73,0.12),transparent_22%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <ImageFrame src={yogaStudioAsset.url} alt="Premium yoga studio at Goodlife Fitness Club in Solapur" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Eyebrow>Yoga & Wellness</Eyebrow>
          <SectionTitle>
            Strength Of Body. <span className="text-gold">Peace Of Mind.</span>
          </SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Wooden flooring, warmer materials and calmer lighting create a quieter side of Goodlife. This is where flexibility, breathwork and recovery balance the intensity of the strength and cardio floors.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/78">
            <div className="premium-panel px-5 py-4">A premium yoga studio in Solapur for mobility, mindfulness and deeper recovery.</div>
            <div className="premium-panel px-5 py-4">Softer visual rhythm and calmer transitions make this section feel intentionally restorative.</div>
            <div className="premium-panel px-5 py-4">An ideal complement to personal training, weight loss and high-intensity programs.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SalonSection() {
  return (
    <FeatureShowcase
      eyebrow="Grooming Lounge"
      title="Polished After Every Session"
      description="The salon space extends the Goodlife experience beyond training. It gives members a clean, premium zone to reset, refresh and leave looking as sharp as they feel."
      bullets={[
        "A dedicated grooming corner with premium lighting and mirror detailing",
        "Ideal for post-workout touch-ups before work, events or social plans",
        "Designed to make recovery and presentation feel equally elevated",
      ]}
      image={salonAsset.url}
      alt="Premium salon and grooming area at Goodlife Fitness Club"
    />
  );
}

function SteamSection() {
  return (
    <FeatureShowcase
      eyebrow="Heat Recovery"
      title="Recover Deeper. Return Stronger."
      description="The steam area is built for restoration after hard sessions. Warm tones, stone finishes and dense steam create a luxury recovery ritual that helps the body unwind and recharge."
      bullets={[
        "A premium steam environment for post-workout decompression",
        "Supports relaxation, circulation and full-body reset",
        "Adds a high-end recovery layer rarely found in local fitness clubs",
      ]}
      image={steamAsset.url}
      alt="Steam recovery room at Goodlife Fitness Club"
    />
  );
}

function SpaSection() {
  return (
    <FeatureShowcase
      eyebrow="Recovery Suite"
      title="Luxury Recovery In Quiet Focus"
      description="The spa room brings a calmer rhythm into the club journey. It is a refined space where members can slow down, release tension and pair performance with premium self-care."
      bullets={[
        "Private spa setting with a clean, modern luxury finish",
        "Built for deeper recovery after intense strength or cardio sessions",
        "Balances the club's high-energy floors with a more restorative experience",
      ]}
      image={spaAsset.url}
      alt="Luxury spa room at Goodlife Fitness Club"
    />
  );
}

function BathSection() {
  return (
    <FeatureShowcase
      eyebrow="Refresh Zone"
      title="Clean Finish. Premium Comfort."
      description="The bath area completes the Goodlife experience with hospitality-grade detailing and a polished finish. It gives members a high-quality place to reset before stepping back into the day."
      bullets={[
        "Premium shower area with refined stone surfaces and warm lighting",
        "Built for comfort, privacy and a smoother post-training routine",
        "Turns a basic utility into a premium member experience",
      ]}
      image={bathAsset.url}
      alt="Premium bath and shower area at Goodlife Fitness Club"
    />
  );
}

function PlanningSection() {
  return (
    <section className="bg-elevated py-24 md:py-32" id="planning">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Transformation Journey</Eyebrow>
          <SectionTitle>
            Every Transformation <span className="text-primary">Starts With A Plan</span>
          </SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Real results begin before the first rep. Goodlife uses planning, coaching and accountability to move members from vague goals to measurable transformation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeaturePill title="Goal Setting" text="A clear starting point for fat loss, muscle gain or body recomposition." />
            <FeaturePill title="Nutrition Guidance" text="Smarter food decisions that support consistent progress." />
            <FeaturePill title="Coaching" text="Direction that connects effort, technique and routine." />
            <FeaturePill title="Accountability" text="A system that keeps momentum alive when motivation drops." />
          </div>
        </div>
        <ImageFrame src={transformationLoungeAsset.url} alt="Consultation lounge for fitness planning at Goodlife Fitness Club" />
      </div>
    </section>
  );
}


function TransformationSection() {
  return (
    <section id="transformations" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Transformations</Eyebrow>
            <SectionTitle>
              Results That Feel <span className="text-primary">Earned</span>
            </SectionTitle>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-right">
            Results achieved through consistency, proper nutrition and structured training.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="premium-panel overflow-hidden p-4"
            >
              <div className="relative overflow-hidden rounded-[8px] border border-border/70 bg-black">
                <img src={item.image} alt={`${item.name} transformation at Goodlife Fitness Club`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl uppercase text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-primary">{item.result}</p>
                </div>
                <div className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
                  Real Progress
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="bg-elevated py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Social Proof</Eyebrow>
          <SectionTitle>
            Capture Your <span className="text-primary">Fitness Journey</span>
          </SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Goodlife’s Instagram-style selfie point turns progress into social momentum. It feels premium, branded and naturally shareable — perfect for member stories, transformation posts and viral attention.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://instagram.com/goodlifefitness_" target="_blank" rel="noopener" className="btn-secondary-premium">
              <Instagram className="size-4 text-primary" /> Follow @goodlifefitness_
            </a>
          </div>
        </div>

        <ImageFrame src={selfiePointAsset.url} alt="Instagram selfie point at Goodlife Fitness Club" />
      </div>
    </section>
  );
}

function TrainersSection() {
  const trainers = [
    {
      image: ownerAsset.url,
      alt: "Owner portrait at Goodlife Fitness Club",
      name: "Name Placeholder",
      role: "Owner",
    },
    {
      image: trainer1Asset.url,
      alt: "Trainer portrait 1 at Goodlife Fitness Club",
      name: "Name Placeholder",
      role: "Trainer",
    },
    {
      image: trainer2Asset.url,
      alt: "Trainer portrait 2 at Goodlife Fitness Club",
      name: "Name Placeholder",
      role: "Trainer",
    },
    {
      image: trainer3Asset.url,
      alt: "Trainer portrait 3 at Goodlife Fitness Club",
      name: "Name Placeholder",
      role: "Trainer",
    },
    {
      image: trainer4Asset.url,
      alt: "Trainer portrait 4 at Goodlife Fitness Club",
      name: "Name Placeholder",
      role: "Trainer",
    },
  ];

  return (
    <section id="trainers" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-[clamp(3rem,7vw,6.4rem)] uppercase leading-[0.86] text-foreground">
            Our Trainers
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.article
              key={`${trainer.role}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="premium-panel group overflow-hidden p-4"
            >
              <div className="overflow-hidden rounded-[8px] border border-border/70 bg-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="mt-5 text-left">
                <h3 className="text-2xl uppercase text-foreground">{trainer.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-primary">{trainer.role}</p>
              </div>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="premium-panel group overflow-hidden p-4 sm:col-span-2 xl:col-span-3"
          >
            <div className="overflow-hidden rounded-[8px] border border-dashed border-border/70 bg-elevated">
              <div className="grid aspect-[16/7] place-items-center px-6 text-center">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Group Photo Placeholder</div>
                  <div className="mt-3 text-base leading-relaxed text-foreground/72">
                    Upload the team group photo to complete this banner.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 text-left sm:text-center">
              <h3 className="text-2xl uppercase text-foreground md:text-3xl">Goodlife Fitness Family</h3>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}


function TestimonialsSection() {
  return (
    <section className="bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Member Reactions</Eyebrow>
            <SectionTitle>
              The Club People <span className="text-primary">Talk About</span>
            </SectionTitle>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
            5.0 Google Rating
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="premium-panel px-6 py-6"
            >
              <div className="text-xs uppercase tracking-[0.26em] text-primary">{item.detail}</div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/88">“{item.quote}”</p>
              <footer className="mt-6 border-t border-border/60 pt-5 text-sm font-semibold text-foreground">{item.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,124,31,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Eyebrow centered>Join Goodlife</Eyebrow>
        <h2 className="text-balance text-[clamp(3.1rem,9vw,7rem)] uppercase leading-[0.86] text-foreground">
          Premium Training. <span className="text-primary">Real Transformation.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          If you are searching for the best gym in Solapur, a premium fitness club in Solapur, or a place where coaching and environment actually drive results, Goodlife is built for you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-premium">
            Join Now <ArrowRight className="size-4" />
          </a>
          <a href="tel:+919325342686" className="btn-secondary-premium">
            <Phone className="size-4 text-primary" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureShowcase({
  id,
  eyebrow,
  title,
  description,
  bullets,
  image,
  alt,
  reverse,
  metrics,
  aggressive,
  accent,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  metrics?: boolean;
  aggressive?: boolean;
  accent?: "power";
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${reverse ? "bg-background" : "bg-elevated"}`}>
      <div className={`mx-auto grid max-w-7xl gap-10 px-6 lg:items-center lg:gap-16 ${reverse ? "lg:grid-cols-[0.96fr_1.04fr]" : "lg:grid-cols-[1.04fr_0.96fr]"}`}>
        <div className={reverse ? "lg:order-2" : ""}>
          <ImageFrame src={image} alt={alt} aggressive={aggressive} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={reverse ? "lg:order-1" : ""}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle accent={accent}>{title}</SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-foreground/80">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(255,120,31,0.75)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {metrics ? (
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["Fat Loss", "Conditioning"],
                ["Endurance", "Stamina"],
                ["Cardio", "Consistency"],
              ].map(([value, label]) => (
                <div key={value} className="premium-panel px-4 py-5 text-center">
                  <div className="text-xl uppercase text-foreground">{value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

function EnquirySection() {
  const goals = ["Weight Loss", "Muscle Gain", "General Fitness", "Personal Training", "Boxing", "Yoga"];
  const slots = ["Morning (5AM–9AM)", "Afternoon (9AM–1PM)", "Evening (4PM–8PM)", "Night (8PM–11PM)"];
  const [form, setForm] = useState({ name: "", phone: "", goal: goals[0], slot: slots[0], message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = form.name.trim().slice(0, 100);
    const phone = form.phone.trim().slice(0, 20);
    if (!name || !phone) return;
    const text = `Hi Goodlife Fitness Club,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AGoal: ${encodeURIComponent(form.goal)}%0APreferred Slot: ${encodeURIComponent(form.slot)}%0AMessage: ${encodeURIComponent(form.message.trim().slice(0, 500) || "—")}%0A%0AI'd like to book a free trial / send an enquiry.`;
    window.open(`https://wa.me/919325342686?text=${text}`, "_blank", "noopener");
  }

  const inputCls = "w-full rounded-[6px] border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40";

  return (
    <section id="enquiry" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Eyebrow centered>Get Started</Eyebrow>
          <SectionTitle>
            Book A Free Trial / <span className="text-primary">Send Enquiry</span>
          </SectionTitle>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Share a few details — we'll respond on WhatsApp within minutes.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="premium-panel mt-10 grid gap-4 p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input required maxLength={100} type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
            <input required maxLength={20} type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} className={inputCls}>
              {goals.map((g) => <option key={g} value={g}>{`Goal: ${g}`}</option>)}
            </select>
            <select value={form.slot} onChange={(e) => setForm({ ...form, slot: e.target.value })} className={inputCls}>
              {slots.map((s) => <option key={s} value={s}>{`Slot: ${s}`}</option>)}
            </select>
          </div>
          <textarea maxLength={500} rows={4} placeholder="Any specific queries or goals?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
          <button type="submit" className="btn-premium justify-center">
            <MessageCircle className="size-4" /> Send to WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function ImageFrame({
  src,
  alt,
  priority,
  aggressive,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  aggressive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-[8px] border border-border/70 shadow-premium"
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover transition-transform duration-700 ${aggressive ? "group-hover:scale-[1.04]" : "group-hover:scale-[1.03]"}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.02),rgba(8,8,10,0.28))]" />
      <div className="absolute inset-0 rounded-[8px] border border-white/6" />
    </motion.div>
  );
}

function Eyebrow({ children, centered }: { children: string; centered?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
      <div className="h-px w-12 bg-primary" />
      <span className="text-[11px] uppercase tracking-[0.38em] text-primary">{children}</span>
    </div>
  );
}

function SectionTitle({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: "power";
}) {
  return (
    <h2 className={`text-balance text-[clamp(3rem,7vw,6.4rem)] uppercase leading-[0.86] text-foreground ${accent === "power" ? "text-shadow-power" : ""}`}>
      {children}
    </h2>
  );
}

function FeaturePill({ title, text }: { title: string; text: string }) {
  return (
    <div className="premium-panel px-5 py-5">
      <div className="text-sm uppercase tracking-[0.24em] text-primary">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">{text}</p>
    </div>
  );
}
