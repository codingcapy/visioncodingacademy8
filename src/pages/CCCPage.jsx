/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: CCC (Canadian Computing Competition) course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { FaTrophy, FaBrain, FaClock, FaCode, FaLightbulb, FaChartLine, FaPuzzlePiece, FaGraduationCap } from 'react-icons/fa';
import AlgorithmDemo from '../components/course-demos/AlgorithmDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const ProblemType = ({ icon: Icon, title, description, examples }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500">
        <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Icon size={24} className="text-yellow-400" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/70 mb-4">{description}</p>
            </div>
        </div>
        <div className="space-y-2">
            <p className="text-sm font-medium text-white/80">Example Problems:</p>
            <ul className="space-y-2">
                {examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70 text-sm">
                        <span className="text-yellow-400 mt-1">•</span>
                        {example}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default function CCCPage() {
    useEffect(() => {
        document.title = 'CCC Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaBrain,
            title: "Problem Solving",
            description: "Learn systematic approaches to break down and solve complex programming problems."
        },
        {
            icon: FaClock,
            title: "Time Management",
            description: "Master strategies to solve problems efficiently under competition time constraints."
        },
        {
            icon: FaCode,
            title: "Implementation Skills",
            description: "Develop clean and efficient coding practices for competitive programming."
        },
        {
            icon: FaLightbulb,
            title: "Pattern Recognition",
            description: "Learn to identify common problem patterns and their optimal solutions."
        }
    ];

    const problemTypes = [
        {
            icon: FaPuzzlePiece,
            title: "Implementation Problems",
            description: "Practice turning problem statements into working code quickly and accurately.",
            examples: [
                "Simulating game rules and mechanics",
                "Processing strings and arrays",
                "Working with 2D grids and matrices"
            ]
        },
        {
            icon: FaChartLine,
            title: "Data Structures",
            description: "Master essential data structures used in competitive programming.",
            examples: [
                "Using stacks and queues",
                "Tree and graph problems",
                "Hash tables and sets"
            ]
        },
        {
            icon: FaBrain,
            title: "Algorithms",
            description: "Learn fundamental algorithms and when to apply them.",
            examples: [
                "Searching and sorting",
                "Dynamic programming",
                "Graph algorithms"
            ]
        },
        {
            icon: FaGraduationCap,
            title: "Math Problems",
            description: "Tackle problems requiring mathematical understanding and implementation.",
            examples: [
                "Number theory problems",
                "Combinatorics challenges",
                "Geometry calculations"
            ]
        }
    ];

    const preparation = [
        {
            title: "Junior Division",
            items: [
                "Basic programming concepts",
                "Arrays and strings",
                "Simple algorithms",
                "Problem-solving strategies",
                "Time management skills"
            ]
        },
        {
            title: "Senior Division",
            items: [
                "Advanced data structures",
                "Complex algorithms",
                "Dynamic programming",
                "Graph theory",
                "Optimization techniques"
            ]
        }
    ];

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[url('/binary.png')] bg-repeat animate-scroll" />
                    </div>
                </div>
                <div className="container relative h-full flex flex-col items-center justify-center text-center">
                    <div className="p-6 rounded-2xl bg-yellow-400/10 mb-8">
                        <FaTrophy size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        CCC Preparation
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Get ready for the Canadian Computing Competition with expert guidance.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What You'll Learn</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Develop the skills needed to excel in competitive programming.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard 
                                key={index} 
                                {...feature}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Algorithm Practice</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            See sorting algorithms in action and understand how they work!
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <AlgorithmDemo />
                    </div>
                </div>
            </section>

            {/* Problem Types Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Problem Types</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Learn to tackle different types of competitive programming problems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {problemTypes.map((type, index) => (
                            <ProblemType 
                                key={index} 
                                {...type}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Competition Preparation</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Comprehensive preparation for both Junior and Senior divisions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {preparation.map((level, index) => (
                            <div key={index} className="card border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">{level.title}</h3>
                                <ul className="space-y-4">
                                    {level.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-white/70">
                                            <span className="text-yellow-400 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="card text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready for the Challenge?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our CCC preparation course and aim for excellence in competitive programming!
                        </p>
                        <NavLink 
                            to="/contact"
                            className="btn btn-primary inline-block"
                        >
                            Enroll Now
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}
