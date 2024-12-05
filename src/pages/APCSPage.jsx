/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: AP Computer Science course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { FaJava, FaGraduationCap, FaCode, FaBook, FaLaptopCode, FaChartLine, FaClipboardCheck, FaBrain } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const TopicCard = ({ icon: Icon, title, description, concepts }) => (
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
            {concepts.map((concept, index) => (
                <div key={index} className="flex items-start gap-3 text-white/70">
                    <span className="text-yellow-400 mt-1">•</span>
                    {concept}
                </div>
            ))}
        </div>
    </div>
);

export default function APCSPage() {
    useEffect(() => {
        document.title = 'AP Computer Science | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaJava,
            title: "Java Programming",
            description: "Master Java programming language fundamentals and advanced concepts."
        },
        {
            icon: FaGraduationCap,
            title: "AP Exam Prep",
            description: "Comprehensive preparation for the AP Computer Science A exam."
        },
        {
            icon: FaCode,
            title: "Coding Practice",
            description: "Hands-on coding exercises and projects to reinforce learning."
        },
        {
            icon: FaBook,
            title: "Study Materials",
            description: "Access to practice tests and review materials aligned with AP curriculum."
        }
    ];

    const topics = [
        {
            icon: FaLaptopCode,
            title: "Java Fundamentals",
            description: "Core concepts of Java programming",
            concepts: [
                "Variables and data types",
                "Control structures",
                "Methods and parameters",
                "Object-oriented programming basics"
            ]
        },
        {
            icon: FaChartLine,
            title: "Data Structures",
            description: "Essential data structures in Java",
            concepts: [
                "Arrays and ArrayLists",
                "2D arrays",
                "Searching and sorting",
                "Collections framework"
            ]
        },
        {
            icon: FaClipboardCheck,
            title: "AP Exam Topics",
            description: "Key topics covered in the AP exam",
            concepts: [
                "Class design and inheritance",
                "Algorithm analysis",
                "Recursion",
                "Common AP exam patterns"
            ]
        },
        {
            icon: FaBrain,
            title: "Problem Solving",
            description: "Strategies for solving AP exam questions",
            concepts: [
                "Code analysis",
                "Problem decomposition",
                "Time management",
                "Test-taking strategies"
            ]
        }
    ];

    const examPrep = [
        {
            title: "Practice Tests",
            items: [
                "Multiple-choice questions",
                "Free-response problems",
                "Timed practice sessions",
                "Score analysis and feedback"
            ]
        },
        {
            title: "Exam Strategies",
            items: [
                "Question analysis techniques",
                "Time management tips",
                "Common pitfall avoidance",
                "Scoring guidelines review"
            ]
        }
    ];

    const successTips = [
        "Start practicing early",
        "Focus on understanding concepts, not just memorizing",
        "Take many practice tests",
        "Review and learn from mistakes",
        "Stay organized with study materials"
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
                        <FaJava size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        AP Computer Science A
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Get ready to ace your AP Computer Science exam!
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Features</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Comprehensive preparation for AP Computer Science success.
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

            {/* Topics Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Topics</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Master the key concepts covered in AP Computer Science A.
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

            {/* Exam Prep Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Exam Preparation</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Structured practice and strategies for exam success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {examPrep.map((section, index) => (
                            <div key={index} className="card border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                                <ul className="space-y-4">
                                    {section.items.map((item, itemIndex) => (
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

            {/* Success Tips Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Tips for Success</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Follow these guidelines to maximize your AP exam score.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="card border border-white/10">
                            <div className="grid gap-4">
                                {successTips.map((tip, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-white/80">{tip}</span>
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
                            Ready to Excel in AP CS?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our AP Computer Science course and prepare for exam success!
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
