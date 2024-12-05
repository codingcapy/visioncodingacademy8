/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Advanced Computer Science course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { FaBrain, FaServer, FaDatabase, FaNetworkWired, FaCode, FaCogs, FaChartLine, FaLock } from 'react-icons/fa';
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

const TopicCard = ({ icon: Icon, title, topics }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500">
        <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Icon size={24} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <ul className="space-y-2">
            {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                    <span className="text-yellow-400 mt-1">•</span>
                    {topic}
                </li>
            ))}
        </ul>
    </div>
);

export default function AdvancedCSPage() {
    useEffect(() => {
        document.title = 'Advanced Computer Science | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaBrain,
            title: "Advanced Algorithms",
            description: "Master complex algorithms and data structures used in modern software systems."
        },
        {
            icon: FaServer,
            title: "System Design",
            description: "Learn to design scalable, reliable, and efficient software systems."
        },
        {
            icon: FaDatabase,
            title: "Database Systems",
            description: "Understand advanced database concepts and optimization techniques."
        },
        {
            icon: FaNetworkWired,
            title: "Computer Networks",
            description: "Explore networking protocols and distributed systems."
        }
    ];

    const topics = [
        {
            icon: FaCode,
            title: "Algorithms & Data Structures",
            topics: [
                "Advanced sorting and searching algorithms",
                "Tree and graph algorithms",
                "Dynamic programming",
                "Algorithm analysis and optimization"
            ]
        },
        {
            icon: FaCogs,
            title: "System Architecture",
            topics: [
                "Distributed systems design",
                "Microservices architecture",
                "Scalability patterns",
                "High availability systems"
            ]
        },
        {
            icon: FaChartLine,
            title: "Performance Engineering",
            topics: [
                "Performance optimization techniques",
                "Memory management",
                "Concurrency and parallelism",
                "System monitoring and profiling"
            ]
        },
        {
            icon: FaLock,
            title: "Security & Best Practices",
            topics: [
                "Secure coding practices",
                "Authentication and authorization",
                "Cryptography basics",
                "Code quality and testing"
            ]
        }
    ];

    const learningOutcomes = [
        "Design and implement complex algorithms",
        "Architect scalable software systems",
        "Optimize application performance",
        "Apply advanced programming concepts",
        "Make informed technical decisions",
        "Lead technical discussions and reviews"
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
                        <FaBrain size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Advanced Computer Science
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Master advanced programming concepts and system design principles.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Features</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Take your programming skills to the next level with advanced concepts and practical applications.
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
                        <h2 className="section-title">Algorithm Visualization</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            See algorithms in action with our interactive visualization tool.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <AlgorithmDemo />
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Topics</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A comprehensive curriculum covering advanced computer science concepts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {topics.map((topic, index) => (
                            <TopicCard 
                                key={index} 
                                {...topic}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Outcomes */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Learning Outcomes</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            After completing this course, you'll be able to:
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="card border border-white/10">
                            <div className="grid gap-4">
                                {learningOutcomes.map((outcome, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-white/80">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="card text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Master Advanced CS?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Take your programming skills to the next level with our advanced computer science course.
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
