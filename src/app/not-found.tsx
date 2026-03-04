"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-neutral-950 text-neutral-200 flex items-center justify-center overflow-hidden">

            {/* Grid background — same as main site */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />

            {/* Animated violet glow blobs */}
            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/30 blur-[140px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 9, repeat: Infinity, delay: 2 }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

                {/* 404 number */}
                <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-4 select-none"
                >
                    {/* Glitch shadow layers */}
                    <span
                        className="absolute inset-0 text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-violet-500/20 blur-[2px] translate-x-[3px] translate-y-[3px]"
                        aria-hidden
                    >
                        404
                    </span>
                    <span
                        className="absolute inset-0 text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-indigo-400/15 blur-[1px] -translate-x-[3px] -translate-y-[1px]"
                        aria-hidden
                    >
                        404
                    </span>
                    {/* Main 404 */}
                    <span className="relative text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter bg-gradient-to-br from-violet-400 via-violet-500 to-indigo-600 bg-clip-text text-transparent">
                        404
                    </span>
                </motion.div>

                {/* Divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-8"
                />

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl md:text-4xl font-bold text-neutral-100 mb-4 tracking-tight"
                >
                    Page not found
                </motion.h1>

                {/* Sub text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-neutral-500 text-base md:text-lg mb-10 font-mono max-w-sm mx-auto"
                >
                    Looks like this page drifted into the void.{" "}
                    <br className="hidden sm:block" />
                    Let&apos;s get you back on track.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 active:scale-95 text-sm"
                    >
                        <Home size={16} />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 border border-neutral-700 hover:border-violet-500/50 text-neutral-400 hover:text-violet-400 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-violet-500/8 text-sm"
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </motion.div>

                {/* V logo watermark */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-16 font-mono text-xs text-neutral-700 flex items-center justify-center gap-2"
                >
                    <span className="text-violet-600 font-black text-base">V</span>
                    <span>Victory&apos;s Portfolio</span>
                </motion.div>
            </div>
        </main>
    );
}
