"use client";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { ArrowUpRight, BookOpen, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Article {
    title: string;
    description: string;
    link: string;
    image?: string;
}

const MediumIcon = () => (
    <svg width="14" height="14" viewBox="0 0 1043.63 592.71" fill="currentColor" className="flex-shrink-0">
        <g>
            <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.17-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
        </g>
    </svg>
);

export const Blog = () => {
    const MAX_VISIBLE = 3;
    const [showAll, setShowAll] = useState(false);
    const articles = cvData.articles as Article[];
    const hiddenCount = articles.length - MAX_VISIBLE;

    return (
        <AnimatedSection id="blog">
            <div className="text-center mb-12">
                <p className="text-neutral-500 mb-2 font-mono text-sm uppercase tracking-widest">Check out my latest articles</p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    My <span className="text-violet-500">Blog</span>
                </h2>
                <div className="w-12 h-1 bg-violet-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.slice(0, MAX_VISIBLE).map((article: Article, idx: number) => (
                    <ArticleCard key={idx} article={article} index={idx} />
                ))}

                <AnimatePresence>
                    {showAll &&
                        articles.slice(MAX_VISIBLE).map((article: Article, idx: number) => (
                            <motion.div
                                key={`extra-${idx}`}
                                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                                transition={{ duration: 0.35, delay: idx * 0.07, ease: "easeOut" }}
                            >
                                <ArticleCard article={article} index={MAX_VISIBLE + idx} />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>

            {hiddenCount > 0 && (
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="inline-flex items-center gap-2 border border-neutral-200 dark:border-neutral-700 hover:border-violet-400 dark:hover:border-violet-500 text-neutral-700 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-violet-400 px-7 py-3 rounded-full font-medium transition-all hover:bg-violet-50 dark:hover:bg-violet-500/10"
                    >
                        {showAll ? (
                            <>Show Less <motion.div animate={{ rotate: 180 }} className="inline-flex"><ChevronDown size={16} /></motion.div></>
                        ) : (
                            <>View {hiddenCount} More Article{hiddenCount > 1 ? "s" : ""} <motion.div animate={{ rotate: 0 }} className="inline-flex"><ChevronDown size={16} /></motion.div></>
                        )}
                    </button>
                </div>
            )}
        </AnimatedSection>
    );
};

function ArticleCard({ article, index }: { article: Article; index: number }) {
    const [imgError, setImgError] = useState(false);
    const hasImage = article.image && !imgError;

    return (
        <motion.a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group flex flex-col bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-violet-300 dark:hover:border-violet-500/40 transition-all shadow-sm hover:shadow-md dark:hover:shadow-violet-500/5 h-full"
        >
            {/* Article image / fallback */}
            <div className="h-44 relative flex-shrink-0 overflow-hidden bg-gradient-to-br from-violet-500/10 via-violet-600/5 to-neutral-900/20">
                {hasImage ? (
                    <Image
                        src={article.image!}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen size={36} className="text-violet-400/40" />
                    </div>
                )}
                {/* Overlay gradient for readability */}
                {hasImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                )}
                {/* Medium badge */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1.5 rounded-full border border-white/10">
                    <MediumIcon />
                    Medium
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2 line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-1 line-clamp-3">
                    {article.description}
                </p>
                <div className="flex items-center text-violet-600 dark:text-violet-500 text-sm font-semibold mt-auto">
                    Read on Medium <ArrowUpRight size={15} className="ml-1" />
                </div>
            </div>
        </motion.a>
    );
}
