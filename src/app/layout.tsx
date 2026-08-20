import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.knockittechnologies.co.uk"),
  title: {
    default: "Knockit Technology | Custom Software, CRM & Delivery Systems, Birmingham UK",
    template: "%s | Knockit Technology",
  },
  description:
    "Custom CRM, delivery platforms, AI chatbots and websites built by Knockit Technology, Birmingham. UK-wide delivery. Get a free quote today.",
   keywords: [
    "IT company Birmingham",
    "IT services Birmingham",
    "IT support Birmingham",
    "IT solutions UK",
    "IT support for small businesses",
    "managed IT services Birmingham",
    "business IT support UK",
    "IT consultancy Birmingham",
    "affordable IT support Birmingham",
    "IT company near me",
    "website development Birmingham",
    "web design company Birmingham",
    "affordable website design UK",
    "e-commerce website development",
    "mobile app development Birmingham",
    "Android and iOS app development",
    "custom software development UK",
    "CRM development company",
    "business management software development",
    "restaurant ordering app development",
    "Microsoft 365 support Birmingham",
    "Microsoft 365 migration services",
    "Google Workspace to Microsoft 365 migration",
    "AWS cloud support UK",
    "cloud migration services Birmingham",
    "business email setup services",
    "remote desktop solutions for business",
    "cloud hosting company UK",
    "IT solutions for small businesses",
    "digital transformation services Birmingham",
    "POS system integration",
    "restaurant technology solutions",
    "online ordering system development",
    "customer loyalty app development",
    "booking system development",
    "Wi-Fi captive portal solutions",
    "business automation services UK",
  ],
  openGraph: {
    title: "Knockit Technology | Custom Software, CRM & Delivery Systems",
    description:
      "Custom CRM, delivery platforms, AI chatbots and websites built by Knockit Technology, Birmingham.",
    url: "https://www.knockittechnologies.co.uk",
    siteName: "Knockit Technology",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jakarta.variable} ${jakarta.className} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
               {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Knockit Technology",
              "url": "https://www.knockittechnologies.co.uk",
              "logo": "https://www.knockittechnologies.co.uk/images/logo.png",
              "description": "Knockit Technology is a Birmingham-based software development company helping UK businesses turn ideas into working digital products.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Birmingham",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-7491-014905",
                "contactType": "customer service",
                "email": "official@knockittechnologies.co.uk"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
