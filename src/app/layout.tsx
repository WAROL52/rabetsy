import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BgParticul } from "@/components/bgParticul";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollAreaController } from "@/components/ScrollAreaController";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RABETSY Rolio",
  description: "RABETSY Rolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script src="//unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden selection:bg-primary selection:text-foreground dark:selection:text-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ScrollAreaController>
            <BgParticul>{children}</BgParticul>
            <Footer />
          </ScrollAreaController>
        </ThemeProvider>
      </body>
    </html>
  );
}
