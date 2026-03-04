import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Leadership } from "@/components/sections/Leadership";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import CursorEffect from "@/components/ui/CursorEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200 selection:bg-violet-500/30">
      <CursorEffect />
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-[0] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30 dark:opacity-100"></div>

      <Navbar />

      <div className="relative z-[1] w-full pt-16 pb-32">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Leadership />
        <Blog />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
