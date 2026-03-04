"use client";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvData } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Palette, Users, Play, Linkedin, Github, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import Masonry from "react-masonry-css";

type Tab = "web" | "iot" | "graphics";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "web", label: "Web Applications", icon: <Globe size={15} /> },
    { id: "iot", label: "Hardware / IoT", icon: <Cpu size={15} /> },
    { id: "graphics", label: "Graphics Design", icon: <Palette size={15} /> },
];

// ─── Shared animation variants ────────────────────────────────────────────
const grid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};
const card = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
    exit: { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.22 } },
};

// ─── Shared tag pill ─────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
    return (
        <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400">
            {label}
        </span>
    );
}

// ─── Web Card ─────────────────────────────────────────────────────────────
function WebCard({ project }: { project: any }) {
    const [imgError, setImgError] = useState(false);
    const hasImage = project.screenshot && !imgError;

    return (
        <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="group bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/40 dark:hover:border-violet-500/30 rounded-2xl flex flex-col transition-all duration-200 overflow-hidden"
        >
            {/* Screenshot / placeholder */}
            <div className="h-60 relative flex-shrink-0 bg-neutral-50 dark:bg-neutral-800/60 overflow-hidden">
                {hasImage ? (
                    <Image
                        src={project.screenshot}
                        alt={project.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Globe size={28} className="text-violet-400/30" />
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                    </div>
                )}
                {/* Browser chrome overlay */}
                {hasImage && (
                    <div className="absolute inset-x-0 top-0 h-6 bg-neutral-100 dark:bg-neutral-800/90 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-2 gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                )}
                {/* Badge chip */}
                {project.badge && (
                    <div className="absolute bottom-2 right-2 z-10 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-amber-400/30 shadow">
                        {project.badge}
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base leading-tight">{project.name}</h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer"
                                className="text-neutral-400 hover:text-violet-500 transition-colors" aria-label="GitHub">
                                <Github size={15} />
                            </a>
                        )}
                        {project.link && project.link !== "#" && (
                            <a href={project.link} target="_blank" rel="noreferrer"
                                className="text-neutral-400 hover:text-violet-500 transition-colors">
                                <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
                </div>
                {project.period && <p className="text-xs font-mono text-neutral-500 mb-3">{project.period}</p>}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech?.map((t: string) => <Tag key={t} label={t} />)}
                </div>
            </div>
        </motion.div>
    );
}

// ─── IoT Card ────────────────────────────────────────────────────────────
function IotCard({ project }: { project: any }) {
    return (
        <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="group bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/40 dark:hover:border-violet-500/30 rounded-2xl p-5 sm:p-6 flex flex-col transition-all duration-200"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-violet-500/10 border border-violet-500/20 rounded-lg flex items-center justify-center">
                        <Cpu size={14} className="text-violet-400" />
                    </div>
                    {project.isTeamProject && (
                        <span className="text-xs font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded-full flex items-center gap-1">
                            <Users size={10} /> Team
                        </span>
                    )}
                </div>
                {project.period && <p className="text-xs font-mono text-neutral-500">{project.period}</p>}
            </div>

            <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-2">{project.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>

            {project.bullets?.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                    {project.bullets.slice(0, 3).map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="text-violet-500 mt-0.5 flex-shrink-0">▹</span> {b}
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech?.map((t: string) => <Tag key={t} label={t} />)}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
                {project.driveLinks?.map((url: string, i: number) => (
                    <a key={i} href={url} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-violet-500 bg-neutral-100 dark:bg-neutral-800 hover:bg-violet-50 dark:hover:bg-violet-500/10 border border-neutral-200 dark:border-neutral-700 hover:border-violet-400/30 px-3 py-1.5 rounded-full transition-all">
                        <Play size={11} />
                        {project.driveLinks.length > 1 ? `Video ${i + 1}` : "Video Demo"}
                    </a>
                ))}
                {project.linkedinPost && (
                    <a href={project.linkedinPost} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-violet-500 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-violet-400/30 px-3 py-1.5 rounded-full transition-all">
                        <Linkedin size={11} /> LinkedIn
                    </a>
                )}
            </div>
        </motion.div>
    );
}

// ─── Design image type ────────────────────────────────────────────────────
interface Design { src: string; title: string; category: string; }

// ─── Design Modal ─────────────────────────────────────────────────────────
function DesignModal({ design, pinterestUrl, onClose }: { design: Design; pinterestUrl: string; onClose: () => void }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.88, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.88, opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl max-w-md w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
                    >
                        <X size={15} />
                    </button>

                    {/* Image */}
                    <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                        <Image src={design.src} alt={design.title} fill className="object-cover" unoptimized sizes="480px" />
                    </div>

                    {/* Info + actions */}
                    <div className="p-5">
                        <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full mb-2 inline-block">
                            {design.category}
                        </span>
                        <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg mb-4">{design.title}</h3>
                        <div className="flex gap-3">
                            <a
                                href={pinterestUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E60023] hover:bg-[#c0001d] text-white text-sm font-semibold py-2.5 rounded-xl transition-all"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                                </svg>
                                View on Pinterest
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// ─── Graphics Tab — Masonry grid ──────────────────────────────────────────
function GraphicsTab() {
    const graphicsData = (cvData as any).projectCategories?.graphics as { pinterestUrl: string; designs: Design[] };
    const designs: Design[] = graphicsData?.designs ?? [];
    const pinterestUrl = graphicsData?.pinterestUrl ?? "https://www.pinterest.com/preciousvicky_/";
    const [selected, setSelected] = useState<Design | null>(null);

    const breakpointCols = { default: 3, 1024: 3, 768: 2, 640: 2, 480: 1 };

    return (
        <motion.div variants={card}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Graphic Design Portfolio</h3>
                    <p className="text-sm text-neutral-500 mt-1">Branding, social media graphics, event posters & more</p>
                </div>
                <a
                    href={pinterestUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#E60023] hover:bg-[#c0001d] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20"
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                    View More on Pinterest
                    <ExternalLink size={12} />
                </a>
            </div>

            {/* Masonry grid */}
            <Masonry
                breakpointCols={breakpointCols}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
            >
                {designs.map((design, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                        onClick={() => setSelected(design)}
                        className="relative group w-full mb-4 rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
                    >
                        <Image
                            src={design.src}
                            alt={design.title}
                            width={400}
                            height={400}
                            className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                            unoptimized
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <span className="text-white text-xs font-mono bg-violet-500/80 px-2 py-0.5 rounded-full w-fit mb-1">{design.category}</span>
                            <span className="text-white text-sm font-semibold leading-tight">{design.title}</span>
                        </div>
                    </motion.button>
                ))}
            </Masonry>

            {/* Modal */}
            {selected && (
                <DesignModal design={selected} pinterestUrl={pinterestUrl} onClose={() => setSelected(null)} />
            )}
        </motion.div>
    );
}

// ─── Main Projects Component ──────────────────────────────────────────────
export const Projects = () => {
    const [activeTab, setActiveTab] = useState<Tab>("web");
    const cats = cvData.projectCategories;

    return (
        <AnimatedSection id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    My <span className="text-violet-500">Projects</span>
                </h2>
            </div>

            {/* ── Tab Switcher ──────────────────────────────────────────── */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                            ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                            : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-violet-400/40 dark:hover:border-violet-500/30"
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.span layoutId="tab-underline" className="absolute inset-0 rounded-full ring-2 ring-violet-500/30 ring-offset-0" />
                        )}
                    </button>
                ))}
            </div>

            {/* ── Tab Content ───────────────────────────────────────────── */}
            <AnimatePresence mode="wait">
                {activeTab === "web" && (
                    <motion.div
                        key="web"
                        variants={grid}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
                    >
                        {cats.web.map((p: any, i: number) => <WebCard key={i} project={p} />)}
                    </motion.div>
                )}
                {activeTab === "iot" && (
                    <motion.div
                        key="iot"
                        variants={grid}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                        {cats.iot.map((p: any, i: number) => <IotCard key={i} project={p} />)}
                    </motion.div>
                )}
                {activeTab === "graphics" && (
                    <motion.div
                        key="graphics"
                        variants={grid}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                    >
                        <GraphicsTab />
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatedSection>
    );
};
