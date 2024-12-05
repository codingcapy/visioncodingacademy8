/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Clean and engaging hero banner
*/

import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import homeBanner from "/home-banner.jpg";
import AnimatedLogo from './AnimatedLogo';
import ParticleBackground from './ParticleBackground';
import { FaArrowRight } from 'react-icons/fa';

const FloatingText = ({ text, delay = 0 }) => (
    <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        {text}
    </motion.span>
);

const AnimatedButton = ({ to, children, primary = false }) => (
    <NavLink to={to}>
        <motion.button
            className={`
                px-8 py-4 rounded-lg text-lg font-bold
                flex items-center gap-2
                transition-colors duration-300
                ${primary 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                    : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
                }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            <FaArrowRight className={`transition-transform group-hover:translate-x-1 ${primary ? 'text-black' : 'text-yellow-400'}`} />
        </motion.button>
    </NavLink>
);

export default function HeroBanner() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${homeBanner})` }}
            >
                <motion.div 
                    className="absolute inset-0 bg-black/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* Interactive Background */}
            <ParticleBackground />
            
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatedLogo />
                    </motion.div>

                    {/* Title */}
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mt-8 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FloatingText text="VISION " delay={0.4} />
                        <FloatingText text="CODING " delay={0.5} />
                        <FloatingText text="ACADEMY" delay={0.6} />
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        className="text-xl md:text-2xl text-white/80 mb-12 space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <p>Become a Great Engineer</p>
                        <p className="text-lg text-white/60">
                            Transform your future with hands-on coding education
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <AnimatedButton to="/courses" primary>
                            Explore Courses
                        </AnimatedButton>
                        <AnimatedButton to="/contact">
                            Contact Us
                        </AnimatedButton>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
        </section>
    );
}
