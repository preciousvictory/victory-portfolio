"use client";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, MessageCircle, FileDown, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
            <div className="z-10 max-w-7xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="flex-1 text-left relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-violet-500 font-mono mb-6 tracking-wide text-sm md:text-base border border-violet-500/20 bg-violet-500/10 px-4 py-2 rounded-full inline-block"
                    >
                        Hi, my name is
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-800 dark:text-neutral-200 mb-4 leading-tight tracking-tighter"
                    >
                        {cvData.name}.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-600 dark:text-neutral-400 mb-6 h-[40px] md:h-[60px]"
                    >
                        I am a {" "}
                        <TypeAnimation
                            sequence={[
                                'Software Engineer.', 1500,
                                'Systems Engineer.', 1500,
                                'Robotics Engineer.', 1500,
                                'Frontend Developer.', 1500,
                                'Web3 Enthusiast.', 1500,
                                'Product Thinker.', 1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600"
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg md:text-xl mb-12 leading-relaxed"
                    >
                        {cvData.about}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        <a href="#projects" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-violet-500/25 flex items-center gap-2 hover:scale-105 transform active:scale-95 text-sm md:text-base">
                            View My Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-violet-600 hover:border-violet-600 hover:text-white text-neutral-800 dark:text-neutral-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 hover:scale-105 transform active:scale-95 text-sm md:text-base">
                            Get In Touch <Mail size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex flex-wrap gap-4 items-center mt-8 text-neutral-600 dark:text-neutral-400 text-sm font-mono"
                    >
                        <a href={cvData.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                            <Github size={16} /> GitHub
                        </a>
                        <span className="opacity-50">•</span>
                        <a href={cvData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                        <span className="opacity-50">•</span>
                        <a href={cvData.contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                            <MessageCircle size={16} /> WhatsApp
                        </a>
                        <span className="opacity-50">•</span>
                        <a href="/resume.pdf" download="Victory_Abiodun-Omoniyi_Resume.pdf" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                            <FileDown size={16} /> Resume
                        </a>
                    </motion.div>
                </div>

                {/* Image / Graphic Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
                    className="flex-shrink-0 relative z-20 mx-auto w-64 h-84 md:w-80 md:h-100 lg:w-96 lg:h-116 group"
                >
                    {/* Glow behind the image */}
                    <div className="absolute inset-0 bg-violet-600/30 blur-[50px] rounded-full scale-110 group-hover:bg-violet-500/50 transition-colors duration-500"></div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-full h-full rounded-[2rem] border border-neutral-200 dark:border-neutral-800/80 shadow-2xl bg-neutral-50 dark:bg-neutral-900 overflow-hidden"
                    >
                        {/* Note: User must supply image at public/images/victory.png or jpg. We will use a standard img tag for ease of drop-in */}
                        <img
                            src="/images/victory.jpg"
                            alt="Victory Abiodun-Omoniyi"
                            className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Background Blobs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-violet-600/30 blur-[150px] rounded-full z-0 pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full z-0 pointer-events-none"
            />
        </section>
    )
}
