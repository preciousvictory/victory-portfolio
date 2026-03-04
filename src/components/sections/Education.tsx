"use client";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GraduationCap, Award, BookOpen, ChevronDown } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────
interface Certification {
    name: string;
    issuer: string;
    date: string;
    skills?: string[];
    link: string;
    color?: string;
}

type Education = {
    institution: string;
    shortName: string;
    degree: string;
    period: string;
    location: string;
    grade?: string;
    emoji?: string;
    relevantCoursework?: string;
};

// ─── Animation variants ─────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const Education = () => {
    const educations = cvData.education as Education[];
    const certs = cvData.certifications as Certification[];
    const INITIAL_VISIBLE = 6;
    const [showAll, setShowAll] = useState(false);

    const firstCerts = certs.slice(0, INITIAL_VISIBLE);
    const extraCerts = certs.slice(INITIAL_VISIBLE);
    const hiddenCount = extraCerts.length;

    return (
        <AnimatedSection id="education">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Education & <span className="text-violet-500">Certifications</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {/* ── Education Card ─────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="lg:col-span-2 border border-violet-500/20 bg-violet-500/5 rounded-3xl p-6 sm:p-8 flex flex-col relative overflow-hidden"
                >
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-violet-500/15 border border-violet-500/30 rounded-xl flex items-center justify-center">
                            <GraduationCap size={18} className="text-violet-400" />
                        </div>
                        <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Education</span>
                    </div>

                    {educations.map((edu: Education, idx: number) => (
                        <div key={idx} className="border-t border-neutral-200 dark:border-neutral-800 pt-5 mt-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-xl flex-shrink-0">
                                    🏛️
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-900 dark:text-neutral-100 text-sm leading-tight">{edu.institution}</p>
                                    <p className="text-xs text-neutral-500 font-mono">{edu.location}</p>
                                </div>
                            </div>

                            <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-1">{edu.degree}</h3>
                            <p className="text-xs text-neutral-500 font-mono mb-3">{edu.period}</p>

                            {edu.grade && (
                                <span className="inline-flex items-center gap-2 w-fit bg-violet-500/10 border border-violet-500/25 rounded-full px-3 py-1 mb-3">
                                    <span className="text-violet-400 font-mono text-xs font-bold">{edu.grade}</span>
                                </span>
                            )}

                            {edu.relevantCoursework && (
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <BookOpen size={11} className="text-neutral-500" />
                                        <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Coursework</p>
                                    </div>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{edu.relevantCoursework}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* ── Certifications Grid ─────────────────────────────────────── */}
                <div className="lg:col-span-3">
                    <div className="flex items-center gap-2 mb-6">
                        <Award size={16} className="text-violet-400" />
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">Certifications</span>
                        <span className="text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
                            {certs.length}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Always-visible first 4 */}
                        {firstCerts.map((cert: Certification, idx: number) => (
                            <motion.a
                                key={idx}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                transition={{ duration: 0.4, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -3, scale: 1.01 }}
                                className="group flex flex-col justify-between bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/50 dark:hover:border-violet-500/40 rounded-2xl p-4 transition-all duration-200"
                            >
                                <CertContent cert={cert} />
                            </motion.a>
                        ))}

                        {/* Extra certs — animated in when showAll is true */}
                        <AnimatePresence>
                            {showAll && extraCerts.map((cert: Certification, idx: number) => (
                                <motion.a
                                    key={`extra-${idx}`}
                                    initial={{ opacity: 0, y: 22, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 12, scale: 0.97 }}
                                    transition={{ duration: 0.35, delay: idx * 0.06, ease: "easeOut" }}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    className="group flex flex-col justify-between bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/50 dark:hover:border-violet-500/40 rounded-2xl p-4 transition-all duration-200"
                                >
                                    <CertContent cert={cert} />
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Show more / less */}
                    {hiddenCount > 0 && (
                        <div className="mt-5 text-center">
                            <button
                                onClick={() => setShowAll((prev) => !prev)}
                                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 border border-neutral-200 dark:border-neutral-700 hover:border-violet-400/40 px-5 py-2.5 rounded-full transition-all hover:bg-violet-50 dark:hover:bg-violet-500/10"
                            >
                                {showAll ? "Show less" : `Show ${hiddenCount} more`}
                                <motion.span
                                    animate={{ rotate: showAll ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="inline-flex"
                                >
                                    <ChevronDown size={15} />
                                </motion.span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};

function CertContent({ cert }: { cert: Certification }) {
    return (
        <>
            <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 rounded-full">
                        {cert.issuer}
                    </span>
                    <ExternalLink size={13} className="text-neutral-400 group-hover:text-violet-500 transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors leading-snug mb-2">
                    {cert.name}
                </p>
                {cert.skills && (
                    <p className="text-xs text-neutral-500 leading-relaxed">{cert.skills.join(" · ")}</p>
                )}
            </div>
            <p className="text-xs font-mono text-neutral-500 mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">{cert.date}</p>
        </>
    );
}
