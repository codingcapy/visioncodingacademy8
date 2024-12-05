/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: C++ course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiCplusplus } from 'react-icons/si';
import { FaGamepad, FaMemory, FaRocket, FaCogs } from 'react-icons/fa';
import CPlusPlusDemo from '../components/course-demos/CPlusPlusDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const ProjectShowcase = ({ title, description, skills }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default function CPlusPlusPage() {
    useEffect(() => {
        document.title = 'C++ Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaMemory,
            title: "Memory Management",
            description: "Learn direct memory control and optimization techniques that make C++ powerful for system programming."
        },
        {
            icon: FaGamepad,
            title: "Game Development",
            description: "Create games and understand how C++ powers major game engines like Unreal Engine."
        },
        {
            icon: FaCogs,
            title: "System Programming",
            description: "Build system-level applications and understand how computers work at a lower level."
        },
        {
            icon: FaRocket,
            title: "Performance",
            description: "Write high-performance code and optimize applications for maximum efficiency."
        }
    ];

    const projects = [
        {
            title: "Game Engine Components",
            description: "Build basic game engine systems including physics simulation and collision detection.",
            skills: ["OOP", "Memory Management", "Physics"]
        },
        {
            title: "Custom Data Structures",
            description: "Implement and optimize custom data structures for specific use cases.",
            skills: ["Data Structures", "Algorithms", "Optimization"]
        },
        {
            title: "System Monitor",
            description: "Create a real-time system monitoring tool that tracks CPU and memory usage.",
            skills: ["System Programming", "Multi-threading", "Performance"]
        }
    ];

    const topics = [
        {
            title: "Fundamentals",
            items: [
                "C++ syntax and basic concepts",
                "Variables, data types, and operators",
                "Control structures and functions",
                "Object-oriented programming basics"
            ]
        },
        {
            title: "Advanced Concepts",
            items: [
                "Memory management and pointers",
                "Templates and generic programming",
                "STL containers and algorithms",
                "Exception handling"
            ]
        },
        {
            title: "Professional Skills",
            items: [
                "Code optimization techniques",
                "Debugging and profiling",
                "Best practices and design patterns",
                "Modern C++ features (C++11/14/17/20)"
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
                        <SiCplusplus size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        C++ Programming
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Master the language that powers game engines, operating systems, and high-performance applications.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Learn C++?</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            C++ combines powerful features with high performance, making it essential for modern software development.
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
                        <h2 className="section-title">Try C++ Now</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Explore how C++ manages memory and see the power of low-level programming.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <CPlusPlusDemo />
                    </div>
                </div>
            </section>

            {/* Course Topics */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Topics</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A comprehensive curriculum covering everything from basics to advanced C++ concepts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {topics.map((topic, index) => (
                            <div key={index} className="card border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">{topic.title}</h3>
                                <ul className="space-y-4">
                                    {topic.items.map((item, itemIndex) => (
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

            {/* Projects Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Projects You'll Build</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Apply your C++ skills to create impressive projects that showcase your abilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectShowcase 
                                key={index} 
                                {...project}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="card text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Master C++?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our C++ course and learn to create powerful, efficient applications.
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
