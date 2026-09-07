import type { Metadata } from "next";
import { Fraunces,  IBM_Plex_Mono,  IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight:["400", "500"]
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight:["400", "500", "600"]
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight:["400", "500"]
});

export const metadata: Metadata = {
  title: "AfroviaLabs — Innovating African Education",
  description: "Building tools to reinforce Education for Africa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable}  ${plexMono.variable} h-full antialiased`}
    >
      <body className="bg-forest text-ink font-sans antialiased selection:bg-ember/30" suppressHydrationWarning>{children}</body>
    </html>
  );
}
