"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
    name,
    description,
    tech,
    link
}: {
    name: string,
    description: string,
    tech: string[],
    link: string
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl backdrop-blur-sm group cursor-pointer h-full flex flex-col"
        >
            <div className="h-48 bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 overflow-hidden relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-neutral-900/50 flex items-center justify-center">
                    <span className="text-neutral-600 font-mono text-sm group-hover:text-violet-500/50 transition-colors">[{name.toLowerCase().replace(/\s/g, '-')}-img]</span>
                </div>
            </div>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-violet-400 transition-colors">{name}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-violet-400 transition-colors">
                    <ArrowUpRight size={20} />
                </a>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm flex-1">{description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
                {tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 text-violet-300 rounded-full border border-neutral-300 dark:border-neutral-700/50">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}
