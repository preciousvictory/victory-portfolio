"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
    return (
        <AnimatedSection id="experience">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 md:mb-16 text-center tracking-tight">
                Work <span className="text-violet-500">Experience</span>
            </h2>

            {/* Single-column on mobile, zigzag on md+ */}
            <div className="relative max-w-3xl mx-auto">
                {/* Timeline line — only visible md+ */}
                <div className="hidden md:block absolute left-1/2 -ml-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/60 via-neutral-200 dark:via-neutral-800 to-transparent" />

                {/* Mobile-only left line */}
                <div className="md:hidden absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/60 via-neutral-200 dark:via-neutral-800 to-transparent" />

                {cvData.experience.map((exp: any, idx: number) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative mb-10 last:mb-0"
                        >
                            {/* ── Desktop zigzag layout ── */}
                            <div className={`hidden md:flex items-start gap-0 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                                {/* Card side */}
                                <div className="w-[calc(50%-20px)]">
                                    <ExperienceCard exp={exp} />
                                </div>

                                {/* Centre dot */}
                                <div className="flex-shrink-0 w-10 flex justify-center pt-6">
                                    <div className="w-7 h-7 bg-white dark:bg-neutral-950 border-2 border-violet-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_14px_rgba(139,92,246,0.45)]">
                                        <div className="w-2 h-2 bg-violet-400 rounded-full" />
                                    </div>
                                </div>

                                {/* Empty side spacer */}
                                <div className="w-[calc(50%-20px)]" />
                            </div>

                            {/* ── Mobile single-column layout ── */}
                            <div className="md:hidden flex items-start gap-4 pl-2">
                                {/* Dot */}
                                <div className="flex-shrink-0 mt-5">
                                    <div className="w-5 h-5 bg-white dark:bg-neutral-950 border-2 border-violet-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                                    </div>
                                </div>
                                {/* Card */}
                                <div className="flex-1 min-w-0">
                                    <ExperienceCard exp={exp} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </AnimatedSection>
    );
};

function ExperienceCard({ exp }: { exp: any }) {
    return (
        <div className="group bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 hover:border-violet-400/40 dark:hover:border-violet-500/30 transition-all hover:shadow-lg hover:shadow-violet-500/5">
            {/* Role heading */}
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 leading-tight">
                {exp.role}
            </h3>

            {/* Meta row — wraps cleanly on narrow screens */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
                {exp.link ? (
                    <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-violet-500 hover:text-violet-400 font-mono text-sm font-semibold transition-colors"
                    >
                        @ {exp.company}
                        <ExternalLink size={11} className="opacity-60" />
                    </a>
                ) : (
                    <span className="text-violet-400 font-mono text-sm">@ {exp.company}</span>
                )}

                <span className="text-neutral-300 dark:text-neutral-700 text-xs">|</span>

                <span className="flex items-center gap-1 text-neutral-500 text-xs font-mono">
                    <Calendar size={10} /> {exp.period}
                </span>

                {exp.location && (
                    <>
                        <span className="text-neutral-300 dark:text-neutral-700 text-xs hidden sm:inline">|</span>
                        <span className="flex items-center gap-1 text-neutral-500 text-xs font-mono">
                            <MapPin size={10} /> {exp.location}
                        </span>
                    </>
                )}
            </div>

            {/* Bullets */}
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm space-y-2">
                {exp.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-violet-500 mt-0.5 flex-shrink-0 text-xs">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
                    </li>
                ))}
            </ul>

            {/* Website chip */}
            {exp.link && (
                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-violet-500 transition-colors bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 hover:border-violet-400/40 px-3 py-1.5 rounded-full"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                        {exp.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <ExternalLink size={10} />
                    </a>
                </div>
            )}
        </div>
    );
}
