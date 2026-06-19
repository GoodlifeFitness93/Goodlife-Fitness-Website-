import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
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
  Star,
  Target,
  X,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyMobile } from "@/components/site/StickyMobile";
import { Location } from "@/components/site/Location";

import receptionAssetImg from "@/assets/Entrance_Waiting area.png";
import strengthZoneAssetImg from "@/assets/Weight training area.png";
import machineZoneAssetImg from "@/assets/strength training.png";
import yogaStudioAssetImg from "@/assets/yoga-zone.png";
import spinStudioAssetImg from "@/assets/Spining bicycle.png";
import cardioZoneAssetImg from "@/assets/cardio-zone.png";
import boxingArenaAssetImg from "@/assets/Boxing Area.png";
import transformationLoungeAssetImg from "@/assets/Office.png";
import selfiePointAssetImg from "@/assets/Selfie Point.png";
import transform1AssetImg from "@/assets/gym transformation 1.png";
import transform2AssetImg from "@/assets/gym transformation 2.png";
import transform3AssetImg from "@/assets/gym transformation 3.png";
import ownerAssetImg from "@/assets/Owner.png";
import trainer1AssetImg from "@/assets/Head manager.jpeg";
import trainer2NewAssetImg from "@/assets/Floor manager.png";
import trainer3AssetImg from "@/assets/trainer 3.png";
import trainer4AssetImg from "@/assets/trainer 4.png";
import trainer5NewAssetImg from "@/assets/goodlife-trainer-5-new.jpeg";
import familyAssetImg from "@/assets/Goodlife Fitness Team.png";
import salonAssetImg from "@/assets/goodlife-salon.png.jpeg";
import steamAssetImg from "@/assets/Steam.png";
import spaAssetImg from "@/assets/Spa.png";
import bathAssetImg from "@/assets/Bath.png";
import lockerAssetImg from "@/assets/goodlife-locker.png.jpeg";

const receptionAsset = { url: receptionAssetImg };
const strengthZoneAsset = { url: strengthZoneAssetImg };
const machineZoneAsset = { url: machineZoneAssetImg };
const yogaStudioAsset = { url: yogaStudioAssetImg };
const spinStudioAsset = { url: spinStudioAssetImg };
const cardioZoneAsset = { url: cardioZoneAssetImg };
const boxingArenaAsset = { url: boxingArenaAssetImg };
const transformationLoungeAsset = { url: transformationLoungeAssetImg };
const selfiePointAsset = { url: selfiePointAssetImg };
const transform1Asset = { url: transform1AssetImg };
const transform2Asset = { url: transform2AssetImg };
const transform3Asset = { url: transform3AssetImg };
const ownerAsset = { url: ownerAssetImg };
const trainer1Asset = { url: trainer1AssetImg };
const trainer3Asset = { url: trainer3AssetImg };
const trainer4Asset = { url: trainer4AssetImg };
const familyAsset = { url: familyAssetImg };
const salonAsset = { url: salonAssetImg };
const steamAsset = { url: steamAssetImg };
const spaAsset = { url: spaAssetImg };
const bathAsset = { url: bathAssetImg };
const lockerAsset = { url: lockerAssetImg };
const trainer2NewAsset = { url: trainer2NewAssetImg };
const trainer5NewAsset = { url: trainer5NewAssetImg };


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
        <LockerSection />
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

function LockerSection() {
  return (
    <FeatureShowcase
      eyebrow="Locker Facility"
      title="Secure Storage. Effortless Comfort."
      description="Clean, organised lockers give every member a safe, private space to store belongings before and after training — one more detail that makes Goodlife feel like a premium club, not just a gym."
      bullets={[
        "Spacious lockers with secure locking system",
        "Dedicated space to change, store and reset before training",
        "Designed for cleanliness, privacy and everyday convenience",
      ]}
      image={lockerAsset.url}
      alt="Locker room at Goodlife Fitness Club"
    />
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
  const owner = {
    image: ownerAsset.url,
    alt: "Raghu Sir, owner of Goodlife Fitness Club",
    name: "Raghu Sir",
    role: "Owner",
  };
  const management = [
    { image: trainer1Asset.url, alt: "Head Manager at Goodlife Fitness Club", name: "", role: "Head Manager" },
    { image: trainer2NewAsset.url, alt: "Floor Manager at Goodlife Fitness Club", name: "", role: "Floor Manager" },
  ];
  const trainers = [
    { image: trainer3Asset.url, alt: "Goodlife Fitness Club trainer portrait", name: "", role: "Trainer" },
    { image: trainer4Asset.url, alt: "Goodlife Fitness Club trainer portrait", name: "", role: "Trainer" },
    { image: trainer5NewAsset.url, alt: "Goodlife Fitness Club trainer portrait", name: "", role: "Trainer" },
  ];

  const cardCls =
    "group relative overflow-hidden rounded-[10px] border border-border/60 bg-elevated p-3 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.45)]";

  const renderCard = (person: { image: string; alt: string; name: string; role: string }, index: number, prominent?: boolean) => (
    <motion.article
      key={`${person.role}-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={cardCls}
    >
      <div className="relative overflow-hidden rounded-[6px] bg-background">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={person.image}
            alt={person.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-70" />
      </div>
      <div className="mt-4 px-1 pb-1 text-center">
        {person.name && (
          <h3 className={`font-display uppercase leading-tight tracking-wide text-foreground ${prominent ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl"}`}>
            {person.name}
          </h3>
        )}
        <p className={`${person.name ? "mt-1.5" : "mt-0"} uppercase tracking-[0.3em] text-primary ${prominent ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"}`}>
          {person.role}
        </p>
      </div>
    </motion.article>
  );

  return (
    <section id="trainers" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Eyebrow centered>The Coaching Team</Eyebrow>
          <h2 className="mt-4 font-display text-balance text-[clamp(2.75rem,7vw,6.4rem)] uppercase leading-[0.86] text-foreground">
            Our <span className="text-primary">Trainers</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Certified coaches led by Raghu Sir — building champions through precision programming and relentless accountability.
          </p>
        </div>

        {/* Row 1 — Owner */}
        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md">
            {renderCard(owner, 0, true)}
          </div>
        </div>

        {/* Row 2 — Management */}
        <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 mx-auto max-w-3xl">
          {management.map((m, i) => renderCard(m, i))}
        </div>

        {/* Row 3 — Trainers */}
        <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 mx-auto max-w-5xl">
          {trainers.map((t, i) => renderCard(t, i))}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[1400px] px-4 sm:mt-32 sm:px-6">
        <div className="text-center">
          <Eyebrow centered>One Team. One Family.</Eyebrow>
          <h3 className="mt-4 font-display text-balance text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.9] text-foreground">
            Goodlife Fitness <span className="text-primary">Family</span>
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 overflow-hidden rounded-[12px] border border-border/60 bg-elevated p-2 sm:p-3"
        >
          <div className="relative overflow-hidden rounded-[8px]">
            <img
              src={familyAsset.url}
              alt="The Goodlife Fitness Club team — coaches and staff together"
              loading="lazy"
              className="h-auto w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10" />
          </div>
        </motion.div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          More than coaches — a community. The faces behind every transformation, every PR, and every comeback at Goodlife Fitness Club.
        </p>
      </div>
    </section>
  );
}


const TONES = {
  1: "clearly disappointed but polite and fair — gym looks impressive but personal experience didn't match the setup",
  2: "mixed feelings — some positives but overall underwhelmed, measured and honest",
  3: "genuinely positive but balanced — enjoyed the visit, one thing could be even better",
  4: "enthusiastic and warm — two or three things genuinely stood out, feels like a real recommendation",
  5: "absolutely thrilled — passionate, specific, personal tone — best gym they've ever been to"
};

const ASPECTS = [
  ["boxing arena", "steam room", "trainers"],
  ["spa", "advanced machines", "owner"],
  ["yoga studio", "cardio zone", "staff"],
  ["salon", "spin studio", "entrance"],
  ["strength floor", "bath area", "cleanliness"],
  ["equipment variety", "ambience", "transformations"],
  ["steam room", "owner", "yoga studio"],
  ["boxing arena", "spa", "staff"],
  ["trainers", "spin studio", "cleanliness"],
  ["strength floor", "salon", "entrance"],
  ["cardio zone", "advanced machines", "ambience"],
  ["steam room", "spa", "trainers"],
  ["boxing arena", "yoga studio", "owner"],
  ["salon", "bath area", "staff"],
  ["spin studio", "equipment variety", "cleanliness"]
];

const STYLES = [
  "opens with an observation about the gym space itself",
  "opens with how it felt walking in for the first time",
  "opens with what surprised them most about this gym",
  "opens with a comparison to other gyms they've tried",
  "opens with what they came for and what they found",
  "opens with a recommendation to someone thinking of joining",
  "opens with the recovery facilities, then the workout",
  "opens with the people — trainers, staff, or owner",
  "opens with the machines and how it compares",
  "opens with the vibe and atmosphere"
];

const OPENINGS: Record<number, string[]> = {
  1: [
    "The physical size of this Solapur gym is {massive|huge|very grand}, but the actual experience is {lacking|quite poor|disappointing} for members.",
    "Walking into this {highly hyped|fancy|grand} gym for the first time, I {expected a lot|felt excited} but got a {bad|rough|disappointing} experience.",
    "What {surprised|shocked} me most was how {poorly|badly} things are managed despite such a {grand|large} setup.",
    "Compared to other local gyms in Solapur, the fees here are {too high|premium} for such {bad|mediocre} service.",
    "{I joined this club|I signed up here|I came to this gym} expecting a {highly professional training setup|clean and organized environment|premium workout space}, but I {was met with terrible management|encountered constant operational issues|faced nothing but disappointment} instead.",
    "If you are thinking of joining, {think twice|be careful} because the flashy looks are {misleading|just a show}.",
    "The recovery area looks {good|fancy} on paper, but the actual workout environment is {really chaotic|poorly managed}.",
    "The trainers and staff here {need proper training|seem very indifferent} and {do not help|are not attentive} at all.",
    "They have a lot of machines on the floor, but {half of them|many} are {crowded|poorly maintained}.",
    "The vibe here is {quite chaotic|very off|noisy} and not suitable for a {peaceful|good} training session."
  ],
  2: [
    "The gym space in Solapur is {definitely big|quite spacious}, but the actual daily management is {just average|pretty basic} and needs a lot of work.",
    "Entering the gym, the setup {looks impressive|feels premium}, but the service is {nothing special|quite mediocre} for a newcomer.",
    "What surprised me was that despite {so many machines|such a big area}, the trainers {don't pay attention|seem distracted} to average members.",
    "Having tried other gyms in the area, this place has {better equipment|nicer interiors} but {lacks the personal touch|service is slow}.",
    "I joined expecting a {premium|high class} fitness experience, but it turned out to be {just ordinary|quite normal} on the floor.",
    "Think carefully before signing up; it is {okay|decent} but {not worth the hype|nothing extraordinary} in the long run.",
    "While the spa and changing rooms are {nice|decently clean}, the main workout floor gets {too crowded|very messy} during peak times.",
    "The staff and owner are {polite|decent}, but the trainers {hardly guide you|mostly focus on personal clients} unless you pay extra.",
    "The machine selection is {good|decent}, but many require {maintenance|quick repairs} and parts are delayed.",
    "The atmosphere is {fairly active|okay}, but it feels {more like a business|a bit commercial} than a fitness community."
  ],
  3: [
    "This Solapur facility is {spacious|very large} and well-equipped, though some minor things {need improvement|can be better} to match the premium marketing.",
    "Walking in, you feel the {grand setup|modern design}, but the daily operations are {just decent|average} compared to what is promised.",
    "Surprised to see such a {huge|modern} layout here, but the crowd management {needs work|could be smoother} during busy evening hours.",
    "Compared to other gyms in Solapur, this is {definitely cleaner|more spacious} but slightly {on the expensive side|pricier} for what it offers.",
    "I came to start my fitness routine and found {good equipment|nice vibe}, though the trainers {could be more proactive|are busy}.",
    "A decent choice for fitness lovers in Solapur, but {make sure to clarify|check out} the package details before joining.",
    "The steam and recovery setups are {quite relaxing|very good}, but the workout floor {gets busy in evenings|is crowded} with members.",
    "The staff is {courteous|helpful} and Raghu Sir is {polite|humble}, but the floor trainers {should assist more|are average}.",
    "The machine variety is {good|impressive}, but the weights area {gets messy|is disorganized} during peak hours on weekdays.",
    "The workout energy here is {very positive|quite active}, but the music is {sometimes too loud|a bit distracting} for my taste."
  ],
  4: [
    "This is easily the {most spacious|cleanest} gym in Solapur, with a {fantastic|premium} setup that offers everything you need for a good workout. The overall design is very modern.",
    "My first visit to the gym {left me impressed|felt really good} due to the {luxury entrance|grand layout} and clean environment. They have done a good job.",
    "I was surprised by the {amazing crowd|top-notch maintenance} and how {neat|spotless} everything is kept throughout the day. It feels very premium.",
    "After trying a couple of local gyms, this place {is far better|stands out} in terms of {space and hygiene|equipment quality}. It is a level above.",
    "Joined for regular strength training and found a {very supportive|great} environment for my workouts. The members are also polite.",
    "Definitely recommend this gym if you want a {premium|high quality} training environment in Solapur. It is a solid investment for your health.",
    "Love the spa and shower facilities after a {heavy|intense} training session on the main floor. The amenities are very well managed.",
    "The coaching team is {expert|attentive} and Raghu Sir is {highly supportive|always encouraging}. They always welcome you with a smile.",
    "The selection of machines is {outstanding|excellent} compared to any other gym in town. There is rarely any waiting time.",
    "The workout vibe here is {really motivating|highly energetic} and keeps you {focused|consistent} on your fitness goals every day."
  ],
  5: [
    "Absolutely love the {massive|grand} space and the {elite|premium} workout environment here in Solapur. It is easily the best place to train, and the setup is incredibly modern, spacious, and well-planned for all fitness levels.",
    "Felt {instantly motivated|super excited} walking into this gym; the entrance and lobby look {so luxurious|beautiful}. It is like a luxury club in Solapur.",
    "What surprised me most was the {personal attention|high level of cleanliness} maintained even during peak hours. The staff does an amazing job keeping the premises tidy.",
    "Tried many gyms in Solapur, but nothing comes {close to|near} this place in terms of {quality and vibes|equipment}. It is completely in a class of its own.",
    "Came here for a complete body transformation and found {outstanding results|the perfect support system}. The guidance here has changed my entire routine.",
    "If you want the {best fitness experience|top-tier gym} in Solapur, just join this place without {a second thought|any doubt}. It is absolutely the ultimate fitness destination.",
    "The post-workout recovery here is {luxury level|amazing}; the steam and bath are {always clean|superb}. It is the perfect reward after a hard workout session.",
    "The trainers are {highly knowledgeable|super helpful} and Raghu Sir is {incredibly humble|a true guide}. The staff goes out of their way to support your goals.",
    "The variety of imported machines here {is mind-blowing|is the best}; workouts are {so smooth|great}. You will find every piece of equipment you ever need.",
    "The atmosphere here is {unmatched|pure energy} and the member community is {very encouraging|awesome}. Training here is the highlight of my day."
  ]
};

const CLOSINGS: Record<number, string[]> = {
  1: [
    "I would {strongly advise|urge} people to check out other places in Solapur, as the {aspect1} and the {aspect2} are {just not worth|far below} the premium price.",
    "While they promise {top-tier fitness|a luxury club experience}, the reality of the {aspect1} and the {aspect2} is {extremely disappointing|a major letdown}.",
    "It is {hard to stay motivated|difficult to recommend this place} when you have to deal with the {aspect1} and the {aspect2} {in such poor condition|being so neglected}.",
    "Both the {aspect1} and {aspect2} {need urgent attention|are poorly managed} by the {management|owners}.",
    "Even the quality of the {aspect1} was {extremely disappointing|not up to the mark}, and I found the {aspect2} {always messy|neglected}.",
    "Management should {seriously fix|look into} the {aspect1} and the {aspect2} instead of {just taking high fees|charging so much}."
  ],
  2: [
    "The setup for the {aspect1} is {decent|okay}, but issues with the {aspect2} {make it hard|make me hesitate} to recommend this place to my friends.",
    "Hope they {improve|work on} the {aspect1} and clean the {aspect2} {more regularly|properly} soon.",
    "While I {liked|enjoyed} the {aspect1}, the overall experience with the {aspect2} was {quite average|nothing special} for a gym of this size.",
    "They have a {good|decent} {aspect1}, but the overall setup of the {aspect2} {definitely needs|requires} better upkeep."
  ],
  3: [
    "Overall, the setup for the {aspect1} is {quite good|decent}, but the {aspect2} section has {room for improvement|some issues} that they should fix soon to keep members happy.",
    "My experience with the {aspect1} is {fine|good}, though the {aspect2} {gets crowded|can be managed better} during peak times.",
    "The setup of the {aspect1} is {standard|decent}, and I found the {aspect2} to be {reasonably clean|okay} most of the time.",
    "If they can {tweak|improve} the {aspect1} and pay more attention to the {aspect2}, it would be {great|much better}."
  ],
  4: [
    "Particularly {happy|pleased} with the {aspect1} and the overall {cleanliness|hygiene} of the {aspect2}. It is a great place to stay fit and active, and I always look forward to my daily training sessions.",
    "The setup for the {aspect1} is {super|great}, and the training support around the {aspect2} is {very helpful|highly professional}.",
    "Great experience with the {aspect1}, and the staff keeps the {aspect2} {in great shape|very hygienic}.",
    "Highly recommend {trying|checking out} the {aspect1}; also, the {aspect2} {definitely stands out|makes my workouts very smooth}.",
    "Love how the {aspect1} is {set up|designed}, and the setup of the {aspect2} {always feels premium|is very clean}."
  ],
  5: [
    "The setup for the {aspect1} is {absolutely top-class|world-class}, and the overall experience with the {aspect2} is {fantastic|amazing}. I would highly recommend this gym to anyone looking for serious results and a premium lifestyle experience.",
    "Incredibly {happy|satisfied} with my training here, especially the {aspect1}, and the {aspect2} area {feels like a five-star hotel|is amazing}.",
    "Shoutout to the {team|staff} for the {aspect1}; the quality of the {aspect2} setup is {just elite|fantastic}.",
    "Best decision to {join|sign up}; the {aspect1} and the {aspect2} are {just perfect|absolutely top notch}.",
    "{Outstanding setup for|Phenomenal layout of|Incredible execution in|Superb equipment for} the {aspect1}, and {every session utilizing|regular training around|my personal experience with} the {aspect2} is {pure luxury|deeply satisfying|absolutely wonderful|extremely rewarding}."
  ]
};

function resolveSwapPoints(text: string): string {
  const regex = /\{([^}]+)\}/g;
  return text.replace(regex, (_, optionsStr) => {
    const options = optionsStr.split("|");
    return options[Math.floor(Math.random() * options.length)];
  });
}

interface ReviewGeneratorModalProps {
  onClose: () => void;
}

function ReviewGeneratorModal({ onClose }: ReviewGeneratorModalProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);

  const generateReview = (selectedRating: number) => {
    let candidates: Array<{ styleIndex: number; aspectIndex: number; closingIndex: number }> = [];
    for (let s = 0; s < STYLES.length; s++) {
      for (let a = 0; a < ASPECTS.length; a++) {
        const closingsCount = CLOSINGS[selectedRating].length;
        for (let c = 0; c < closingsCount; c++) {
          candidates.push({ styleIndex: s, aspectIndex: a, closingIndex: c });
        }
      }
    }

    const usedStr = localStorage.getItem("goodlife_used_reviews");
    let used: Array<{ rating: number; styleIndex: number; aspectIndex: number; closingIndex: number }> = usedStr ? JSON.parse(usedStr) : [];

    let filteredCandidates = candidates.filter(cand => 
      !used.some(u => u.rating === selectedRating && u.styleIndex === cand.styleIndex && u.aspectIndex === cand.aspectIndex && u.closingIndex === cand.closingIndex)
    );

    if (filteredCandidates.length === 0) {
      used = used.filter(u => u.rating !== selectedRating);
      localStorage.setItem("goodlife_used_reviews", JSON.stringify(used));
      filteredCandidates = candidates;
    }

    const pick = filteredCandidates[Math.floor(Math.random() * filteredCandidates.length)];

    used.push({ rating: selectedRating, ...pick });
    if (used.length > 200) {
      used = used.slice(used.length - 200);
    }
    localStorage.setItem("goodlife_used_reviews", JSON.stringify(used));

    const rawOpening = OPENINGS[selectedRating][pick.styleIndex];
    const rawClosing = CLOSINGS[selectedRating][pick.closingIndex];

    const aspectGroup = ASPECTS[pick.aspectIndex];
    const shuffledAspects = [...aspectGroup].sort(() => Math.random() - 0.5);
    const aspect1 = shuffledAspects[0];
    const aspect2 = shuffledAspects[1];

    let resolvedClosing = rawClosing
      .replace(/{aspect1}/g, aspect1)
      .replace(/{aspect2}/g, aspect2);

    let fullText = `${rawOpening} ${resolvedClosing}`;
    fullText = resolveSwapPoints(fullText);

    if (selectedRating >= 4 && Math.random() < 0.5) {
      const emojis = ["💪", "🔥", "👍", "🙌"];
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      fullText += ` ${emoji}`;
    }

    setReview(fullText);
  };

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    generateReview(selectedRating);
    setStep(2);
  };

  const handleRegenerate = () => {
    if (rating !== null) {
      generateReview(rating);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(review);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg rounded-xl border border-border bg-[#0f0d0c] p-6 text-foreground shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-white/10 hover:text-foreground transition cursor-pointer"
        >
          <X className="size-5" />
        </button>

        <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-6">
          Rate Your Experience
        </h3>

        {step === 1 && (
          <div className="flex flex-col items-center py-8">
            <p className="text-muted-foreground mb-6 text-center text-sm">
              How would you rate your time at Goodlife Fitness Club?
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className="p-1 transition-transform hover:scale-110 cursor-pointer text-muted-foreground hover:text-primary fill-none hover:fill-primary"
                >
                  <Star className="size-10" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={review}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6 py-2"
            >
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`size-6 ${
                      rating !== null && star <= rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground fill-none"
                    }`}
                  />
                ))}
              </div>

              <div className="rounded-lg border border-border/80 bg-black/40 p-4 min-h-[90px]">
                <p className="text-foreground/90 text-sm leading-relaxed italic">
                  "{review}"
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleRegenerate}
                  className="flex-1 border border-border text-foreground bg-transparent hover:bg-white/5 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px] cursor-pointer"
                >
                  Regenerate
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px] cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy Review"}
                </button>
              </div>

              <div className="border-t border-border/60 pt-4 flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-3 text-center">
                  Copy your review, then tap below to post it on Google Maps.
                </span>
                <a
                  href="https://www.google.com/maps/place/Goodlife+Fitness+Club/@17.6790241,75.8923844,16z/data=!4m8!3m7!1s0x3bc5d16fc2368433:0x710606bb688c8f37!8m2!3d17.6790241!4d75.8923844!9m1!1b1!16s%2Fg%2F11z56_r2x0?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener"
                  className="w-full text-center border border-primary text-primary hover:bg-primary/10 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px]"
                >
                  Paste on Google Maps
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}


function TestimonialsSection() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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
          <div className="w-fit self-start md:self-auto inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
            5.0 Google Rating
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="premium-panel bg-zinc-900/40 md:bg-transparent px-6 py-6"
            >
              <div className="text-xs uppercase tracking-[0.26em] text-primary">{item.detail}</div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/88">“{item.quote}”</p>
              <footer className="mt-6 border-t border-border/60 pt-5 text-sm font-semibold text-foreground">{item.name}</footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setIsReviewModalOpen(true)}
            className="border border-primary text-primary hover:bg-primary/10 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-[4px] cursor-pointer"
          >
            Add Your Review
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isReviewModalOpen && (
          <ReviewGeneratorModal onClose={() => setIsReviewModalOpen(false)} />
        )}
      </AnimatePresence>
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
            Send <span className="text-primary">Enquiry</span>
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
    <h2 className={`text-balance text-[clamp(2.8rem,7vw,6.4rem)] uppercase leading-[1.05] md:leading-[0.86] text-foreground ${accent === "power" ? "text-shadow-power" : ""}`}>
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
