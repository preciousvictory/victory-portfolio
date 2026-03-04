"use client";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Linkedin, ChevronRight, ChevronDown } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────
interface LeadershipRole {
    title: string;
    period: string;
    duration?: string;
}

interface LeadershipItem {
    organization: string;
    roles: LeadershipRole[];
    totalDuration?: string;
    location?: string;
    description?: string;
    linkedinPost?: string;
    color?: string;
}

// ─── Animation variants ─────────────────────────────────────────────────────
const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const INITIAL_VISIBLE = 4;

function LeadershipCard({ item, idx, expanded, onToggle }: {
    item: LeadershipItem;
    idx: number;
    expanded: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (idx % INITIAL_VISIBLE) * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="group bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/40 dark:hover:border-violet-500/30 rounded-2xl transition-all duration-200 overflow-hidden"
        >
            {/* Card header — always visible, clickable on mobile */}
            <button
                className="w-full text-left p-5 sm:p-6"
                onClick={onToggle}
                aria-expanded={expanded}
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
                        <div>
                            <h3 className="font-bold text-neutral-900 dark:text-neutral-100 leading-tight text-sm sm:text-base">
                                {item.organization}
                            </h3>
                            {item.totalDuration && (
                                <p className="text-xs text-neutral-500 font-mono mt-0.5">{item.totalDuration}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {item.linkedinPost && (
                            <a
                                href={item.linkedinPost}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-neutral-400 hover:text-violet-500 transition-colors"
                            >
                                <Linkedin size={14} />
                            </a>
                        )}
                        {/* Chevron indicator for mobile */}
                        <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-neutral-400 md:hidden"
                        >
                            <ChevronDown size={16} />
                        </motion.span>
                    </div>
                </div>

                {/* Roles — always show on desktop, collapsed on mobile */}
                <div className="mt-3 space-y-1.5 hidden md:block">
                    {item.roles.map((role: LeadershipRole, ri: number) => (
                        <div key={ri} className="flex items-center justify-between gap-2 py-1 border-b border-neutral-100 dark:border-neutral-800/50 last:border-0">
                            <div className="flex items-center gap-1.5">
                                <ChevronRight size={12} className="text-violet-500 flex-shrink-0" />
                                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">{role.title}</span>
                            </div>
                            <span className="text-xs font-mono text-neutral-500 flex-shrink-0">{role.period}</span>
                        </div>
                    ))}
                </div>
            </button>

            {/* Expandable body — on mobile only */}
            <div className="md:hidden">
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-5 pb-5 space-y-3">
                                {/* Roles */}
                                <div className="space-y-1.5">
                                    {item.roles.map((role: LeadershipRole, ri: number) => (
                                        <div key={ri} className="flex items-center justify-between gap-2 py-1 border-b border-neutral-100 dark:border-neutral-800/50 last:border-0">
                                            <div className="flex items-center gap-1.5">
                                                <ChevronRight size={12} className="text-violet-500 flex-shrink-0" />
                                                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">{role.title}</span>
                                            </div>
                                            <span className="text-xs font-mono text-neutral-500 flex-shrink-0">{role.period}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Description */}
                                {item.description && (
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}

                                {/* Location */}
                                {item.location && (
                                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                                        <MapPin size={11} />
                                        {item.location}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop — always show description & location */}
            <div className="hidden md:block px-6 pb-6">
                {item.description && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                        {item.description}
                    </p>
                )}
                {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                        <MapPin size={11} />
                        {item.location}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export const Leadership = () => {
    const items = cvData.leadership as LeadershipItem[];
    const [showAll, setShowAll] = useState(false);
    const [expanded, setExpanded] = useState<number | null>(null);

    const firstItems = items.slice(0, INITIAL_VISIBLE);
    const extraItems = items.slice(INITIAL_VISIBLE);
    const hiddenCount = extraItems.length;

    return (
        <AnimatedSection id="leadership">
            <div className="text-center mb-14">
                <p className="text-neutral-500 mb-2 font-mono text-sm uppercase tracking-widest">Community & Impact</p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Leadership & <span className="text-violet-500">Volunteering</span>
                </h2>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-14">
                {[
                    { value: "10+", label: "Organizations" },
                    { value: "5+", label: "Years Active" },
                    { value: "500+", label: "Lives Impacted" },
                ].map((s) => (
                    <div key={s.label} className="text-center border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 rounded-2xl py-5">
                        <p className="text-2xl font-black text-violet-500 mb-1">{s.value}</p>
                        <p className="text-xs text-neutral-500 font-mono uppercase tracking-wide">{s.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {/* Always-visible first 4 */}
                {firstItems.map((item: LeadershipItem, idx: number) => (
                    <LeadershipCard
                        key={idx}
                        item={item}
                        idx={idx}
                        expanded={expanded === idx}
                        onToggle={() => setExpanded(expanded === idx ? null : idx)}
                    />
                ))}

                {/* Extra items — animated in via AnimatePresence */}
                <AnimatePresence>
                    {showAll && extraItems.map((item: LeadershipItem, idx: number) => (
                        <LeadershipCard
                            key={`extra-${idx}`}
                            item={item}
                            idx={idx}
                            expanded={expanded === INITIAL_VISIBLE + idx}
                            onToggle={() => {
                                const globalIdx = INITIAL_VISIBLE + idx;
                                setExpanded(expanded === globalIdx ? null : globalIdx);
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Show more / less */}
            {hiddenCount > 0 && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="inline-flex items-center gap-2 border border-neutral-200 dark:border-neutral-700 hover:border-violet-400 dark:hover:border-violet-500 text-neutral-700 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-violet-400 px-7 py-3 rounded-full font-medium transition-all hover:bg-violet-50 dark:hover:bg-violet-500/10 text-sm"
                    >
                        {showAll ? "Show Less" : `View ${hiddenCount} More`}
                        <motion.span
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="inline-flex"
                        >
                            <ChevronDown size={16} />
                        </motion.span>
                    </button>
                </div>
            )}
        </AnimatedSection>
    );
};
