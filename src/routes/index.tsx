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

import receptionAssetImg from "@/assets/Entrance_Waiting area.webp";
import strengthZoneAssetImg from "@/assets/Weight training area.webp";
import machineZoneAssetImg from "@/assets/strength training.webp";
import yogaStudioAssetImg from "@/assets/yoga-zone.webp";
import spinStudioAssetImg from "@/assets/Spining bicycle.webp";
import cardioZoneAssetImg from "@/assets/cardio-zone.webp";
import boxingArenaAssetImg from "@/assets/Boxing Area.webp";
import transformationLoungeAssetImg from "@/assets/Office.webp";
import selfiePointAssetImg from "@/assets/Selfie Point.webp";
import transform1AssetImg from "@/assets/gym transformation 1.webp";
import transform2AssetImg from "@/assets/gym transformation 2.webp";
import transform3AssetImg from "@/assets/gym transformation 3.webp";
import ownerAssetImg from "@/assets/Owner.webp";
import trainer1AssetImg from "@/assets/Head manager.jpeg";
import trainer2NewAssetImg from "@/assets/Floor manager.webp";
import trainer3AssetImg from "@/assets/trainer 3.webp";
import trainer4AssetImg from "@/assets/trainer 4.webp";
import trainer5NewAssetImg from "@/assets/goodlife-trainer-5-new.jpeg";
import trainerNewAssetImg from "@/assets/goodlife-trainer-new.png";
import familyAssetImg from "@/assets/Goodlife Fitness Team.webp";
import salonAssetImg from "@/assets/goodlife-salon.png.jpeg";
import steamAssetImg from "@/assets/Steam.webp";
import spaAssetImg from "@/assets/Spa.webp";
import bathAssetImg from "@/assets/Bath.webp";
import lockerAssetImg from "@/assets/goodlife-locker.png.jpeg";
import { getUnusedReviewFn, markReviewUsedFn } from "../lib/api/reviews.functions";


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
const trainerNewAsset = { url: trainerNewAssetImg };


const WHATSAPP_URL =
  "https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans.";
const SITE_URL = "https://goodlife-fitness-website.vercel.app/";

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
      { title: "Goodlife Fitness | Best Premium Gym in Solapur | CrossFit, Zumba, Boxing, Yoga" },
      {
        name: "description",
        content:
          "Solapur's #1 premium gym in Murarji Peth. CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Spa & Salon. Expert trainers. Open Mon–Sat 6AM–11PM, Sun 6AM–12PM. Join Goodlife Fitness today.",
      },
      { name: "keywords", content: "gym in Solapur, best gym in Solapur, premium gym Solapur, gym near me Solapur, CrossFit Solapur, Zumba classes Solapur, boxing gym Solapur, weight loss gym Solapur, fitness centre Solapur, gym Murarji Peth, personal trainer Solapur, ladies gym Solapur, gym with steam bath Solapur, Goodlife Fitness Solapur" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Solapur" },
      { name: "geo.position", content: "17.6734376;75.8871958" },
      { name: "ICBM", content: "17.6734376, 75.8871958" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Goodlife Fitness | Best Premium Gym in Solapur" },
      {
        property: "og:description",
        content:
          "Solapur's #1 premium gym. CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Spa & Salon. Open 6AM daily. Join today.",
      },
      { property: "og:url", content: "https://goodlife-fitness-website.vercel.app/" },
      { property: "og:image", content: "https://goodlife-fitness-website.vercel.app/assets/Weight%20training%20area-Bmpzfb-y.webp" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Goodlife Fitness Solapur" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Goodlife Fitness | Best Premium Gym in Solapur" },
      {
        name: "twitter:description",
        content:
          "Solapur's #1 premium gym. CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Spa & Salon.",
      },
      { name: "twitter:image", content: "https://goodlife-fitness-website.vercel.app/assets/Weight%20training%20area-Bmpzfb-y.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://goodlife-fitness-website.vercel.app/" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          "name": "Goodlife Fitness",
          "alternateName": "Goodlife Fitness Club Solapur",
          "description": "Solapur's premium gym offering CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Salon and Spa. Expert personal trainers for weight loss, muscle gain and body transformation.",
          "url": "https://goodlife-fitness-website.vercel.app/",
          "telephone": "+919325342686",
          "priceRange": "₹₹",
          "hasMap": "https://maps.app.goo.gl/sdZ86UwrPESa7u416",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sai Icon, near Ambassador Hotel, Dharamsi Lane, Murarji Peth",
            "addressLocality": "Solapur",
            "addressRegion": "Maharashtra",
            "postalCode": "413001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.6734376,
            "longitude": 75.8871958
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "06:00",
              "closes": "23:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "06:00",
              "closes": "12:00"
            }
          ],
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "CrossFit", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Zumba Classes", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Boxing", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Power Yoga", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Steam Bath", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Spinning Studio", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Salon", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Spa", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Personal Training", "value": true}
          ],
          "sameAs": [
            "https://instagram.com/goodlifefitness_",
            "https://maps.app.goo.gl/sdZ86UwrPESa7u416"
          ]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Goodlife Fitness located in Solapur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Goodlife Fitness is at Sai Icon, near Ambassador Hotel, Dharamsi Lane, Murarji Peth, Solapur, Maharashtra 413001."
              }
            },
            {
              "@type": "Question",
              "name": "What are the timings of Goodlife Fitness Solapur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Open Monday to Saturday 6:00 AM to 11:00 PM and Sunday 6:00 AM to 12:00 PM."
              }
            },
            {
              "@type": "Question",
              "name": "What gym classes are available at Goodlife Fitness Solapur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CrossFit, Zumba, Boxing, Power Yoga, and Spinning for all fitness levels."
              }
            },
            {
              "@type": "Question",
              "name": "Does Goodlife Fitness Solapur have steam bath and spa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Steam Bath, Spa, Salon, and Spinning Studio — all under one roof."
              }
            },
            {
              "@type": "Question",
              "name": "Is Goodlife Fitness the best gym in Solapur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Goodlife Fitness is Solapur's most complete fitness facility with modern equipment, expert trainers, group classes, and premium recovery amenities."
              }
            }
          ]
        })
      }
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
        <FAQSection />
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
          alt="Strength training zone at Goodlife Fitness Solapur"
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
          <p className="sr-only">
            Goodlife Fitness is the best gym in Solapur, Maharashtra.
            Premium fitness centre in Murarji Peth offering CrossFit,
            Zumba, Boxing, Power Yoga, Steam Bath, Spa and Salon.
            Best gym near you in Solapur. Personal trainers available
            for weight loss and body transformation.
          </p>

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
        <ImageFrame src={receptionAsset.url} alt="Premium reception area at Goodlife Fitness Solapur" priority />
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
              Our Facilities — <span className="text-primary">Premium Gym in Solapur</span>
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
      alt="Strength zone at the best gym in Solapur"
      accent="power"
    />
  );
}

function EquipmentSection() {
  return (
    <FeatureShowcase
      id="equipment"
      eyebrow="Advanced Equipment"
      title="World-Class Training Equipment"
      description="Commercial-grade selectorized equipment helps members isolate muscle groups, train with better mechanics and progress with confidence. This is where structured strength training becomes more intelligent and repeatable."
      bullets={[
        "Advanced machines for chest, back, legs and shoulder isolation",
        "Commercial-grade setup for beginners through advanced athletes",
        "Smarter progressive strength training with controlled execution",
      ]}
      image={machineZoneAsset.url}
      alt="Modern gym machines at Goodlife Fitness Solapur"
      reverse
    />
  );
}

function SpinStudioSection() {
  return (
    <section id="spin-studio" className="relative overflow-hidden bg-elevated py-24 md:py-32">
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
          <img src={spinStudioAsset.url} alt="Spinning studio at Goodlife Fitness premium gym Solapur" loading="lazy" className="h-full w-full object-cover" />
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
      id="cardio"
      eyebrow="Cardio Training"
      title="Boost Endurance. Burn Fat."
      description="A premium cardio zone with multiple treadmills and performance displays gives members a dedicated environment for fat loss, conditioning and stamina-building."
      bullets={[
        "Structured treadmill training for weight loss and conditioning",
        "High-capacity lineup for consistent cardio sessions without waiting",
        "A premium cardio gym in Solapur that feels clean, modern and focused",
      ]}
      image={cardioZoneAsset.url}
      alt="Cardio zone at best gym in Solapur"
      metrics
    />
  );
}

function BoxingSection() {
  return (
    <FeatureShowcase
      id="boxing"
      eyebrow="Combat Fitness"
      title="Unleash Your Fighter Spirit"
      description="The boxing arena adds aggression, speed and athletic discipline to the Goodlife experience. It is a clean, focused space for bag work, conditioning drills and explosive training."
      bullets={[
        "Dedicated heavy bag setup for combat conditioning",
        "Agility, endurance and power training in one zone",
        "Boxing training in Solapur with a sharper premium aesthetic",
      ]}
      image={boxingArenaAsset.url}
      alt="Boxing arena at Goodlife Fitness boxing gym Solapur"
      reverse
      aggressive
    />
  );
}

function YogaSection() {
  return (
    <section id="yoga" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,176,73,0.12),transparent_22%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <ImageFrame src={yogaStudioAsset.url} alt="Power Yoga studio at Goodlife Fitness Solapur" />
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
      id="lockers"
      eyebrow="Locker Facility"
      title="Secure Storage. Effortless Comfort."
      description="Clean, organised lockers give every member a safe, private space to store belongings before and after training — one more detail that makes Goodlife feel like a premium club, not just a gym."
      bullets={[
        "Spacious lockers with secure locking system",
        "Dedicated space to change, store and reset before training",
        "Designed for cleanliness, privacy and everyday convenience",
      ]}
      image={lockerAsset.url}
      alt="Premium locker room at Goodlife Fitness Solapur"
    />
  );
}

function SalonSection() {
  return (
    <FeatureShowcase
      id="salon"
      eyebrow="Grooming Lounge"
      title="Polished After Every Session"
      description="The salon space extends the Goodlife experience beyond training. It gives members a clean, premium zone to reset, refresh and leave looking as sharp as they feel."
      bullets={[
        "A dedicated grooming corner with premium lighting and mirror detailing",
        "Ideal for post-workout touch-ups before work, events or social plans",
        "Designed to make recovery and presentation feel equally elevated",
      ]}
      image={salonAsset.url}
      alt="Salon facility at Goodlife Fitness gym Solapur"
    />
  );
}

function SteamSection() {
  return (
    <FeatureShowcase
      id="steam"
      eyebrow="Heat Recovery"
      title="Recover Deeper. Return Stronger."
      description="The steam area is built for restoration after hard sessions. Warm tones, stone finishes and dense steam create a luxury recovery ritual that helps the body unwind and recharge."
      bullets={[
        "A premium steam environment for post-workout decompression",
        "Supports relaxation, circulation and full-body reset",
        "Adds a high-end recovery layer rarely found in local fitness clubs",
      ]}
      image={steamAsset.url}
      alt="Steam bath at Goodlife Fitness premium gym Solapur"
    />
  );
}

function SpaSection() {
  return (
    <FeatureShowcase
      id="spa"
      eyebrow="Recovery Suite"
      title="Luxury Recovery In Quiet Focus"
      description="The spa room brings a calmer rhythm into the club journey. It is a refined space where members can slow down, release tension and pair performance with premium self-care."
      bullets={[
        "Private spa setting with a clean, modern luxury finish",
        "Built for deeper recovery after intense strength or cardio sessions",
        "Balances the club's high-energy floors with a more restorative experience",
      ]}
      image={spaAsset.url}
      alt="Spa facility at Goodlife Fitness gym Solapur"
    />
  );
}

function BathSection() {
  return (
    <FeatureShowcase
      id="bath"
      eyebrow="Refresh Zone"
      title="Clean Finish. Premium Comfort."
      description="The bath area completes the Goodlife experience with hospitality-grade detailing and a polished finish. It gives members a high-quality place to reset before stepping back into the day."
      bullets={[
        "Premium shower area with refined stone surfaces and warm lighting",
        "Built for comfort, privacy and a smoother post-training routine",
        "Turns a basic utility into a premium member experience",
      ]}
      image={bathAsset.url}
      alt="Premium bath facility at Goodlife Fitness Solapur"
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
        <ImageFrame src={transformationLoungeAsset.url} alt="Consultation lounge at Goodlife Fitness Solapur" />
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
              Real Fitness Transformations <span className="text-primary">in Solapur</span>
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
                <img src={item.image} alt="Body transformation result at Goodlife Fitness Solapur" loading="lazy" className="h-full w-full object-cover" />
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
    <section id="selfie-point" className="bg-elevated py-24 md:py-32">
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
            <a href="https://instagram.com/goodlifefitness_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white text-sm">Follow us on Instagram</span>
            </a>
          </div>
        </div>

        <ImageFrame src={selfiePointAsset.url} alt="Selfie point at Goodlife Fitness premium gym Solapur" />
      </div>
    </section>
  );
}

function TrainersSection() {
  const owner = {
    image: ownerAsset.url,
    alt: "Goodlife Fitness owner and head trainer Solapur",
    name: "Raghu Sir",
    role: "Owner",
  };
  const management = [
    { image: trainer1Asset.url, alt: "Head manager at Goodlife Fitness Solapur gym", name: "", role: "Head Manager" },
    { image: trainer2NewAsset.url, alt: "Floor manager at Goodlife Fitness Solapur", name: "", role: "Floor Manager" },
  ];
  const trainers = [
    { image: trainer3Asset.url, alt: "Certified personal trainer at Goodlife Fitness Solapur", name: "", role: "Trainer" },
    { image: trainer4Asset.url, alt: "Certified personal trainer at Goodlife Fitness Solapur", name: "", role: "Trainer" },
    { image: trainer5NewAsset.url, alt: "Certified personal trainer at Goodlife Fitness Solapur", name: "", role: "Trainer" },
    { image: trainerNewAsset.url, alt: "Certified personal trainer at Goodlife Fitness Solapur", name: "", role: "Trainer" },
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
            Expert <span className="text-primary">Personal Trainers</span> in Solapur
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
        <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 mx-auto max-w-5xl">
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
              alt="Expert trainer team at Goodlife Fitness best gym Solapur"
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


interface ReviewGeneratorModalProps {
  onClose: () => void;
}

function ReviewGeneratorModal({ onClose }: ReviewGeneratorModalProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [reviewId, setReviewId] = useState<string | null>(null);
  const [review, setReview] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isPoolExhausted, setIsPoolExhausted] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const fetchReview = async (selectedRating: number) => {
    setLoading(true);
    setIsPoolExhausted(false);
    setFetchError(false);
    setReview("");
    setReviewId(null);
    try {
      const result = await getUnusedReviewFn({ data: { starRating: selectedRating } });
      if (result && "error" in result) {
        if (result.error === "pool_exhausted") {
          setIsPoolExhausted(true);
        } else {
          setFetchError(true);
        }
      } else if (result && "reviewText" in result && result.reviewText) {
        setReview(result.reviewText);
        setReviewId(result.id || null);
      } else {
        setFetchError(true);
      }
    } catch (err) {
      console.error("Failed to fetch review:", err);
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    setStep(2);
    if (selectedRating >= 3) {
      fetchReview(selectedRating);
    }
  };

  const handleRegenerate = () => {
    if (rating !== null && rating >= 3) {
      fetchReview(rating);
    }
  };

  const handleCopy = async () => {
    if (!review) return;
    try {
      await navigator.clipboard.writeText(review);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);

      if (reviewId) {
        await markReviewUsedFn({ data: { id: reviewId } });
      }
    } catch (err) {
      console.error("Failed to copy or mark review as used:", err);
    }
  };

  const feedbackUrl = `https://wa.me/919325342686?text=Hi%20Goodlife%20Fitness%20Club,%20I%20wanted%20to%20share%20some%20feedback%20about%20my%20experience%20and%20how%20you%20can%20make%20it%20right.`;

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
              key={rating}
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

              {rating !== null && rating <= 2 ? (
                <div className="flex flex-col gap-5 text-center">
                  <div className="rounded-lg border border-border/80 bg-black/40 p-4 min-h-[90px] flex items-center justify-center">
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      We'd love to make this right. Please reach out to our management team directly.
                    </p>
                  </div>
                  <a
                    href={feedbackUrl}
                    target="_blank"
                    rel="noopener"
                    className="w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px]"
                  >
                    Contact on WhatsApp
                  </a>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="rounded-lg border border-border/80 bg-black/40 p-4 min-h-[90px] flex items-center justify-center">
                    {loading ? (
                      <span className="text-sm text-muted-foreground animate-pulse">Loading review...</span>
                    ) : fetchError ? (
                      <p className="text-destructive text-sm leading-relaxed">
                        Failed to load review. Please check your connection and try again.
                      </p>
                    ) : isPoolExhausted ? (
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        Thanks for your enthusiasm! Please write a quick line in your own words and tap below to post on Google Maps.
                      </p>
                    ) : (
                      <p className="text-foreground/90 text-sm leading-relaxed italic">
                        "{review}"
                      </p>
                    )}
                  </div>

                  {fetchError && !loading && (
                    <button
                      onClick={handleRegenerate}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px] cursor-pointer"
                    >
                      Retry
                    </button>
                  )}

                  {!isPoolExhausted && !fetchError && (
                    <div className="flex gap-3">
                      <button
                        onClick={handleRegenerate}
                        disabled={loading}
                        className="flex-1 border border-border text-foreground bg-transparent hover:bg-white/5 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px] cursor-pointer disabled:opacity-50"
                      >
                        Regenerate
                      </button>
                      <button
                        onClick={handleCopy}
                        disabled={loading || !review}
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-sm font-semibold uppercase tracking-wider transition rounded-[4px] cursor-pointer disabled:opacity-50"
                      >
                        {copied ? "Copied!" : "Copy Review"}
                      </button>
                    </div>
                  )}

                  <div className="border-t border-border/60 pt-4 flex flex-col items-center">
                    <span className="text-xs text-muted-foreground mb-3 text-center">
                      {isPoolExhausted || fetchError
                        ? "Tap below to post your review directly on Google Maps." 
                        : "Copy your review, then tap below to post it on Google Maps."}
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
                </div>
              )}
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
    <section id="reviews" className="bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Member Reactions</Eyebrow>
            <SectionTitle>
              What Our <span className="text-primary">Solapur Members Say</span>
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Where is Goodlife Fitness located in Solapur?",
      a: "We're at Sai Icon, near Ambassador Hotel, Dharamsi Lane, Murarji Peth, Solapur — Maharashtra 413001. Easily accessible from Solapur Railway Station and Central Bus Stand."
    },
    {
      q: "What are the gym timings?",
      a: "Monday to Saturday: 6:00 AM – 11:00 PM. Sunday: 6:00 AM – 12:00 PM"
    },
    {
      q: "What fitness classes does Goodlife Fitness offer?",
      a: "CrossFit, Zumba, Boxing, Power Yoga and Spinning — for all levels, complete beginners to advanced athletes."
    },
    {
      q: "Is there a steam bath, spa or salon?",
      a: "Yes. Goodlife Fitness has a Steam Bath, Spa and Salon all under one roof — the most complete gym experience in Solapur."
    },
    {
      q: "Do you offer personal training?",
      a: "Yes. Expert certified trainers build personalised programs for weight loss, muscle gain and body transformation."
    },
    {
      q: "Is Goodlife Fitness suitable for beginners and women?",
      a: "Absolutely. Supportive environment for men and women at all fitness levels. Right guidance from Day 1, guaranteed."
    }
  ];

  return (
    <section id="faq" className="relative bg-[#0d0d0d] py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <Eyebrow centered>FAQ</Eyebrow>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase font-bold text-foreground leading-none">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-normal">
            Everything you need to know about Goodlife Fitness, Solapur
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="premium-panel overflow-hidden border border-border/50 bg-[#111111]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-foreground hover:text-primary transition-colors duration-300 outline-none cursor-pointer"
                >
                  <span className="font-display text-lg uppercase tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <span className="text-primary shrink-0 text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/20 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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

  const inputCls = "w-full rounded-[8px] border border-border/50 bg-[#1c1c1c] px-4 py-3 text-sm text-white placeholder:text-muted-foreground/70 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]";

  return (
    <section id="enquiry" className="relative bg-[#0d0d0d] py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Eyebrow centered>Get Started</Eyebrow>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase font-bold text-foreground leading-none">
            Send <span className="text-[#FF6B00]">Enquiry</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-normal">
            We'll get back to you within 24 hours
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
          <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6B00] text-white uppercase font-bold py-3.5 px-6 rounded-[8px] hover:bg-[#e05e00] hover:scale-[1.02] transition-all cursor-pointer">
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
