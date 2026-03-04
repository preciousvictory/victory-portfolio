"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({
    children,
    delay = 0,
    className = "",
    id,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    id?: string;
}) {
    return (
        <motion.section
            id={id}
            style={{ scrollMarginTop: "88px" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.65,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.08 }}
            className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </motion.section>
    );
}
