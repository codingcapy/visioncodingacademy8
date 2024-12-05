/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Engaging intro section with animated tech elements
*/

import { motion } from 'framer-motion';
import { FaRobot, FaLightbulb, FaCode, FaRocket, FaBrain, FaGraduationCap } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ y: -5 }}
        className="relative group"
    >
        <div className={`
            absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300
            bg-gradient-to-r ${color}
        `} />
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10 group-hover:border-white/20 transition-colors duration-300">
            <div className={`
                w-12 h-12 rounded-lg mb-4 flex items-center justify-center
                bg-gradient-to-br ${color}
            `}>
                <Icon size={24} className="text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/70">{description}</p>
        </div>
    </motion.div>
);

const features = [
    {
        icon: FaRobot,
        title: "AI-Powered Learning",
        description: "Experience personalized learning with our advanced AI tutoring system.",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: FaLightbulb,
        title: "Creative Problem Solving",
        description: "Develop innovative solutions through hands-on coding challenges.",
        color: "from-yellow-400 to-yellow-600"
    },
    {
        icon: FaCode,
        title: "Real-World Projects",
        description: "Build impressive portfolio projects that showcase your skills.",
        color: "from-green-400 to-green-600"
    },
    {
        icon: FaRocket,
        title: "Career Launch",
        description: "Get ready for a successful career in tech with industry insights.",
        color: "from-purple-400 to-purple-600"
    },
    {
        icon: FaBrain,
        title: "Critical Thinking",
        description: "Enhance your problem-solving abilities through coding challenges.",
        color: "from-pink-400 to-pink-600"
    },
    {
        icon: FaGraduationCap,
        title: "Comprehensive Learning",
        description: "Master programming concepts with our structured curriculum.",
        color: "from-indigo-400 to-indigo-600"
    }
];

const FloatingIcon = ({ delay }) => (
    <motion.div
        className="absolute text-yellow-400/10"
        animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        }}
    >
        <FaCode size={24} />
    </motion.div>
);

export default function IntroSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            {[...Array(10)].map((_, i) => (
                <FloatingIcon key={i} delay={i * 0.3} />
            ))}

            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                            Start Your Coding Journey
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Discover what makes Vision Coding Academy unique and begin your path to becoming a skilled programmer.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
