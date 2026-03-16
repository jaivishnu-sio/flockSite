import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { AnimatedBackground } from "@/components/animated-background";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Flock | Catching at VBS, Nurturing at Sunday School",
  description:
    "Flock helps churches reach children through engaging VBS programs and nurture them through structured Sunday School discipleship. Build the next generation in faith.",
  keywords: [
    "children's ministry",
    "VBS",
    "Sunday School",
    "church",
    "Christian education",
    "faith",
  ],
};

export const viewport: Viewport = {
  themeColor: "#111315",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans antialiased`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
