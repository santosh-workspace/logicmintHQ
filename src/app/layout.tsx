import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import GradientDefs from "@/components/GradientDefs";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Effects from "@/components/Effects";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LogicMintHQ — AI-Powered Digital Agency | Websites, Chatbots, Voice Agents & Automation",
  description:
    "LogicMintHQ builds premium websites, AI chatbots, AI voice agents, and intelligent automation systems that help businesses increase revenue, automate operations, and scale effortlessly.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "LogicMintHQ — Transform Business with Intelligent AI",
    description:
      "Premium websites, AI chatbots, voice agents & automation systems engineered for growth.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body>
        <GradientDefs />
        <div className="aurora" aria-hidden="true">
          <span className="a1" />
          <span className="a2" />
          <span className="a3" />
        </div>
        <Cursor />
        <Loader />
        {children}
        <Effects />
      </body>
    </html>
  );
}
