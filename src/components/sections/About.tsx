"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { Server, Database, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export const About = () => {
    const categories = [
        {
            title: "Frontend & UI",
            icon: <Code2 size={22} className="text-violet-400" />,
            desc: "React, Next.js, TypeScript, Tailwind CSS",
            gradient: "from-violet-500/15 to-violet-600/5",
            border: "hover:border-violet-400/50",
        },
        {
            title: "Backend & Systems",
            icon: <Server size={22} className="text-violet-400" />,
            desc: "Node.js, Express, Python, REST APIs",
            gradient: "from-violet-500/10 to-purple-600/5",
            border: "hover:border-violet-400/50",
        },
        {
            title: "Data & Storage",
            icon: <Database size={22} className="text-violet-400" />,
            desc: "PostgreSQL, MongoDB, Redis",
            gradient: "from-purple-500/10 to-violet-600/5",
            border: "hover:border-violet-400/50",
        },
        {
            title: "IoT & Embedded",
            icon: <Cpu size={22} className="text-violet-400" />,
            desc: "Arduino, ESP32, ROS, Raspberry Pi",
            gradient: "from-violet-600/10 to-purple-500/5",
            border: "hover:border-violet-400/50",
        },
    ];

    return (
        <AnimatedSection id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left — Text + Skills */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 tracking-tight">
                        About <span className="text-violet-500">Me</span>.
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed mb-6">
                        {cvData.about}
                    </p>

                    <div className="mt-10 space-y-6">
                        <div>
                            <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold mb-3 tracking-wide text-sm uppercase">Languages</h3>
                            <div className="flex flex-wrap gap-2 text-sm font-mono text-neutral-700 dark:text-neutral-300">
                                {cvData.skills.languages.map((skill: string) => (
                                    <span key={skill} className="px-3 py-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-violet-400/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold mb-3 tracking-wide text-sm uppercase">Frameworks & Libraries</h3>
                            <div className="flex flex-wrap gap-2 text-sm font-mono text-neutral-700 dark:text-neutral-300">
                                {cvData.skills.frameworks.map((skill: string) => (
                                    <span key={skill} className="px-3 py-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-violet-400/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold mb-3 tracking-wide text-sm uppercase">Database & Tools</h3>
                            <div className="flex flex-wrap gap-2 text-sm font-mono text-neutral-700 dark:text-neutral-300">
                                {[...cvData.skills.databases, ...cvData.skills.tools].map((skill: string) => (
                                    <span key={skill} className="px-3 py-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-violet-400/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — Category cards + Core Strengths */}
                <div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 mb-6"
                    >
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariant}
                                whileHover={{ scale: 1.04, y: -4 }}
                                className={`relative bg-gradient-to-br ${cat.gradient} bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 ${cat.border} p-5 rounded-2xl flex flex-col gap-3 transition-all duration-200 cursor-default overflow-hidden`}
                            >
                                {/* Subtle glow */}
                                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                                <div className="w-11 h-11 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl flex items-center justify-center shadow-sm">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-0.5">{cat.title}</h3>
                                    <p className="text-xs text-neutral-500 leading-relaxed">{cat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Core Strengths */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800/50 p-5 sm:p-6 rounded-2xl"
                    >
                        <h3 className="text-violet-400 font-mono text-sm mb-4 uppercase tracking-wider">Core Strengths</h3>
                        <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                            {cvData.skills.core.map((skill: string) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-2.5 py-1 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800/50 hover:border-violet-400/40 hover:text-violet-500 dark:hover:text-violet-400 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
};
