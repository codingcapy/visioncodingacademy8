/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Enhanced animated logo with subtle effects
*/

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logoAlpha from "/logo_alpha.png";

export default function AnimatedLogo() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        // Initial animation
        controls.start({
            scale: [0.9, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        });
    }, []);

    // Subtle floating animation
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Glow effect on hover
    const glowVariants = {
        initial: {
            opacity: 0,
            scale: 1.2
        },
        hover: {
            opacity: [0, 0.5, 0.3],
            scale: 1.3,
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <div className="relative">
            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl"
                variants={glowVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
            />

            {/* Logo Container */}
            <motion.div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={floatingAnimation}
            >
                {/* Main Logo */}
                <motion.img
                    src={logoAlpha}
                    alt="Vision Coding Academy"
                    className="w-24 h-28 md:w-40 md:h-48 xl:w-64 xl:h-72 object-contain relative z-10"
                    animate={controls}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Particle Effects */}
                {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
                                initial={{ 
                                    opacity: 0,
                                    x: 0,
                                    y: 0
                                }}
                                animate={{ 
                                    opacity: [0, 1, 0],
                                    x: Math.cos(i * 60 * Math.PI / 180) * 50,
                                    y: Math.sin(i * 60 * Math.PI / 180) * 50,
                                    scale: [1, 0]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>

            {/* Decorative Ring */}
            <motion.div
                className="absolute inset-0 border border-yellow-400/20 rounded-full"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}
