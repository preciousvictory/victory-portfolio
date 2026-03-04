"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 80], [0.7, 0.95]);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Achievements", href: "#achievements" },
        { name: "Leadership", href: "#leadership" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const handleLinkClick = (href: string) => {
        setMobileOpen(false);
        setActiveSection(href);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-xl bg-white/80 dark:bg-neutral-950/90"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-mono font-black text-violet-500 text-xl tracking-tighter hover:text-violet-400 transition-colors flex-shrink-0"
                    >
                        V<span className="text-neutral-400 dark:text-neutral-400 ml-2">Victory</span>
                    </a>

                    {/* Center nav links — desktop only */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        <ThemeToggle />
                        <div className="hidden sm:block w-px h-5 bg-neutral-200 dark:bg-neutral-800" />
                        <a
                            href="/resume.pdf"
                            download="Victory_Abiodun-Omoniyi_Resume.pdf"
                            className="hidden sm:flex items-center gap-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/20 active:scale-95"
                        >
                            <FileDown size={14} />
                            <span>Resume</span>
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Slide-in panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 32 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 flex flex-col md:hidden shadow-2xl"
                        >
                            {/* Panel header */}
                            <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-100 dark:border-neutral-800/80">
                                <span className="font-mono font-black text-violet-500 text-lg">Menu</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                                {links.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => handleLinkClick(link.href)}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05, duration: 0.3, ease: "easeOut" }}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 font-medium transition-all"
                                    >
                                        <span className="text-violet-400 font-mono text-xs">0{idx + 1}.</span>
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Bottom CTA */}
                            <div className="p-5 border-t border-neutral-100 dark:border-neutral-800/80">
                                <a
                                    href="/resume.pdf"
                                    download="Victory_Abiodun-Omoniyi_Resume.pdf"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/20 active:scale-95"
                                >
                                    <FileDown size={15} />
                                    Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
