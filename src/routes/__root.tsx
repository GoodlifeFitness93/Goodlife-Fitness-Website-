import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* PRIMARY SEO */}
        <title>Goodlife Fitness | Best Premium Gym in Solapur | CrossFit, Zumba, Boxing, Yoga</title>
        <meta name="description" content="Solapur's #1 premium gym in Murarji Peth. CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Spa & Salon. Expert trainers. Open Mon–Sat 6AM–11PM, Sun 6AM–12PM. Join Goodlife Fitness today." />
        <meta name="keywords" content="gym in Solapur, best gym in Solapur, premium gym Solapur, gym near me Solapur, CrossFit Solapur, Zumba classes Solapur, boxing gym Solapur, weight loss gym Solapur, fitness centre Solapur, gym Murarji Peth, personal trainer Solapur, ladies gym Solapur, gym with steam bath Solapur, Goodlife Fitness Solapur" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://goodlife-fitness-website.vercel.app/" />

        {/* GEO TARGETING */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Solapur" />
        <meta name="geo.position" content="17.6734376;75.8871958" />
        <meta name="ICBM" content="17.6734376, 75.8871958" />

        {/* OPEN GRAPH (WhatsApp/Facebook previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Goodlife Fitness | Best Premium Gym in Solapur" />
        <meta property="og:description" content="Solapur's #1 premium gym. CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Spa & Salon. Open 6AM daily. Join today." />
        <meta property="og:url" content="https://goodlife-fitness-website.vercel.app/" />
        <meta property="og:image" content="https://goodlife-fitness-website.vercel.app/assets/Weight%20training%20area-Bmpzfb-y.webp" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Goodlife Fitness Solapur" />

        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Goodlife Fitness | Best Premium Gym in Solapur" />
        <meta name="twitter:description" content="Solapur's #1 premium gym. CrossFit, Zumba, Boxing, Power Yoga, Steam Bath, Spa & Salon." />
        <meta name="twitter:image" content="https://goodlife-fitness-website.vercel.app/assets/Weight%20training%20area-Bmpzfb-y.webp" />

        {/* SCHEMA MARKUP — LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
          }}
        />

        {/* SCHEMA — FAQ (triggers Google FAQ rich results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
          }}
        />

        {/* FAVICON */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#d40000" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
