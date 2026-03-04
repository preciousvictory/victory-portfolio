import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victory Abiodun-Omoniyi | Intelligent Systems & Digital Products",
  description: "Software Engineer & Systems Engineering student designing intelligent systems and digital products.",
  keywords: ["Software Engineer", "Frontend", "IoT", "Embedded Systems", "Victory Abiodun-Omoniyi", "Nigeria"],
  authors: [{ name: "Victory Abiodun-Omoniyi" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { PageLoader } from "@/components/ui/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
