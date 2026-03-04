"use client";
import React, { useState, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFAQ = (index: number) => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);

        // Smooth scroll the item into view
        if (newIndex !== null) {
            setTimeout(() => {
                itemRefs.current[newIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }, 80);
        }
    };

    return (
        <AnimatedSection id="faq">
            <div className="text-center mb-14">
                <p className="text-neutral-500 mb-2 font-mono text-sm uppercase tracking-widest">Got questions?</p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Frequently Asked <span className="text-violet-500">Questions</span>
                </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
                {(cvData.faqs as FAQItem[]).map((faq: FAQItem, idx: number) => {
                    const isOpen = openIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            ref={(el) => { itemRefs.current[idx] = el; }}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.45,
                                delay: idx * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen
                                    ? "border-violet-400 dark:border-violet-500/60 bg-violet-50 dark:bg-violet-500/5 shadow-md shadow-violet-500/10"
                                    : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/40"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none group"
                            >
                                <div className="flex items-center gap-3 pr-4">
                                    <div
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isOpen
                                                ? "bg-violet-500 text-white"
                                                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 group-hover:text-violet-500 dark:group-hover:text-violet-400"
                                            }`}
                                    >
                                        <MessageSquare size={14} />
                                    </div>
                                    <span
                                        className={`font-semibold text-sm sm:text-base transition-colors ${isOpen
                                                ? "text-violet-600 dark:text-violet-400"
                                                : "text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className={`flex-shrink-0 transition-colors ${isOpen
                                            ? "text-violet-500"
                                            : "text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400"
                                        }`}
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                            <div className="pl-11 text-neutral-600 dark:text-neutral-400 leading-relaxed border-l-2 border-violet-300 dark:border-violet-500/30 ml-4">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </AnimatedSection>
    );
};
