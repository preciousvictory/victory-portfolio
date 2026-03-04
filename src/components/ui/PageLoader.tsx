"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    // Smooth animated progress
    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, {
        stiffness: 60,
        damping: 20,
    });

    useEffect(() => {
        progress.set(100);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden"
                >
                    {/* Ambient glow background */}
                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute w-[500px] h-[500px] bg-violet-600/30 blur-[160px] rounded-full"
                    />

                    {/* Logo Container */}
                    <div className="relative mb-12">

                        {/* Pulse behind logo */}
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-3xl bg-violet-600/10 blur-xl"
                        />

                        <div className="relative w-24 h-24 rounded-3xl border border-violet-500/40 flex items-center justify-center bg-neutral-900/80 backdrop-blur-xl">
                            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-600">
                                V.
                            </span>
                        </div>

                        {/* Premium glowing spinner ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-3 rounded-[1.7rem] border border-transparent border-t-violet-500 border-r-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                        />
                    </div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-center mb-8"
                    >
                        <p className="text-neutral-200 font-bold text-xl tracking-wide">
                            Loading Portfolio
                        </p>
                        <p className="text-neutral-500 font-mono text-xs tracking-widest mt-1">
                            Victory Abiodun-Omoniyi
                        </p>
                    </motion.div>

                    {/* Progress Section */}
                    <div className="w-56">
                        <div className="flex justify-between text-xs text-neutral-500 font-mono mb-2">
                            <span>Preparing Experience</span>
                            <motion.span>
                                {Math.round(smoothProgress.get())}%
                            </motion.span>
                        </div>

                        <div className="h-[3px] bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 rounded-full"
                                style={{ width: smoothProgress }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}