/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Clean and engaging homepage
*/

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Components
import HeroBanner from '../components/home/HeroBanner';
import IntroSection from '../components/home/IntroSection';
import CourseCategories from '../components/home/CourseCategories';
import TeamSection from '../components/home/TeamSection';
import ContactSection from '../components/home/ContactSection';
import ParticleBackground from '../components/home/ParticleBackground';

const AnimatedSection = ({ children, className = '' }) => {
    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Content */}
            <div className="relative z-20">
                {children}
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>
        </motion.div>
    );
};

export default function HomePage() {
    useEffect(() => {
        document.title = 'Home | Vision Coding';
    }, []);

    useScrollReveal();

    return (
        <div className="relative">
            {/* Interactive Background */}
            <ParticleBackground />

            {/* Main Content */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <HeroBanner />

                <div className="space-y-24">
                    <AnimatedSection>
                        <IntroSection />
                    </AnimatedSection>

                    <AnimatedSection>
                        <CourseCategories />
                    </AnimatedSection>

                    <AnimatedSection>
                        <TeamSection />
                    </AnimatedSection>

                    <AnimatedSection>
                        <ContactSection />
                    </AnimatedSection>
                </div>
            </motion.div>

            {/* Floating Tech Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400/10 font-mono text-sm"
                        animate={{
                            y: [0, -1000],
                            x: Math.sin(i) * 50,
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear"
                        }}
                        style={{
                            left: `${(i + 1) * 7}%`,
                            top: '100%',
                        }}
                    >
                        {Math.random() > 0.5 ? '1' : '0'}
                    </motion.div>
                ))}
            </div>

            {/* Binary Background Pattern */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-binary opacity-[0.02]" />
            </div>
        </div>
    );
}
