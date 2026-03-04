"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

// ─── X (formerly Twitter) icon ────────────────────────────────────────────
function XIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="X (Twitter)">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

export const Contact = () => {
    return (
        <AnimatedSection id="contact" className="py-32">
            <div className="max-w-2xl mx-auto text-center border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-violet-500/10 blur-[100px] rounded-full"></div>

                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight relative z-10">
                    Get In <span className="text-violet-500">Touch</span>
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-10 relative z-10">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block relative z-10"
                >
                    <a href={`mailto:${cvData.contact.email}`} className="bg-white text-neutral-950 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-violet-500/20 w-auto text-center text-lg flex items-center justify-center gap-3">
                        <Mail size={20} />
                        Say Hello
                    </a>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 relative z-10">
                    <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-violet-400 transition-colors p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-full border border-neutral-200 dark:border-neutral-800">
                        <Github size={24} />
                    </a>
                    <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-violet-400 transition-colors p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-full border border-neutral-200 dark:border-neutral-800">
                        <Linkedin size={24} />
                    </a>
                    <a href={cvData.contact.x} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-violet-400 transition-colors p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-full border border-neutral-200 dark:border-neutral-800">
                        <XIcon size={24} />
                    </a>
                    <a href={cvData.contact.medium} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-violet-400 transition-colors p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-full border border-neutral-200 dark:border-neutral-800">
                        <ExternalLink size={24} />
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};
