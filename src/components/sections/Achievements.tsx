"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Achievement {
    title: string;
    date: string;
    category: string;
    badge: string;
    image: string;
    description: string;
    detail: string;
    tags: string[];
    link: string | null;
}

const categoryIcon: Record<string, React.ReactNode> = {
    Hackathon: <Trophy size={14} className="text-amber-400" />,
    Scholarship: <GraduationCap size={14} className="text-violet-400" />,
};

const categoryColor: Record<string, string> = {
    Hackathon: "border-amber-500/30 bg-amber-500/8 text-amber-400",
    Scholarship: "border-violet-500/30 bg-violet-500/8 text-violet-400",
};

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="group relative bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/40 dark:hover:border-violet-500/30 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/8 flex flex-col sm:flex-row"
        >
            {/* Image panel */}
            <div className="relative w-full sm:w-52 flex-shrink-0 h-52 sm:h-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800">
                {item.image && !imgError ? (
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                        unoptimized
                        sizes="(max-width: 640px) 100vw, 208px"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-500/10 to-purple-500/5">
                        {categoryIcon[item.category] ?? <Trophy size={32} className="text-violet-400/40" />}
                    </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 dark:to-neutral-900/20" />
            </div>

            {/* Content panel */}
            <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Category chip */}
                        <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${categoryColor[item.category] ?? "border-neutral-200 text-neutral-500"}`}>
                            {categoryIcon[item.category]}
                            {item.category}
                        </span>
                        {/* Badge chip */}
                        <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-500 dark:text-amber-400">
                            {item.badge}
                        </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 flex-shrink-0">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 leading-snug mb-3">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2">
                    {item.description}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed mb-4">
                    {item.detail}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {item.tags.map((t) => (
                        <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800">
                            {t}
                        </span>
                    ))}
                </div>

                {/* LinkedIn link */}
                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-violet-500 hover:text-violet-400 transition-colors border border-violet-500/20 hover:border-violet-400/40 bg-violet-500/5 hover:bg-violet-500/10 px-4 py-2 rounded-full"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        View on LinkedIn
                        <ExternalLink size={10} />
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export const Achievements = () => {
    const achievements = (cvData as any).achievements as Achievement[];

    if (!achievements?.length) return null;

    return (
        <AnimatedSection id="achievements">
            <div className="text-center mb-14">
                <p className="text-neutral-500 mb-2 font-mono text-sm uppercase tracking-widest">Milestones</p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Awards & <span className="text-violet-500">Achievements</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
                {achievements.map((item, i) => (
                    <AchievementCard key={i} item={item} index={i} />
                ))}
            </div>
        </AnimatedSection>
    );
};
