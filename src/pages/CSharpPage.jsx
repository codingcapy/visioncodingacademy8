/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: C# course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiCsharp, SiUnity } from 'react-icons/si';
import { FaGamepad, FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import CSharpDemo from '../components/course-demos/CSharpDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const ProjectShowcase = ({ title, description, skills, icon: Icon }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500">
        <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Icon size={24} className="text-yellow-400" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/70">{description}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default function CSharpPage() {
    useEffect(() => {
        document.title = 'C# Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaGamepad,
            title: "Game Development",
            description: "Learn to create games using Unity, one of the world's most popular game engines."
        },
        {
            icon: FaCode,
            title: "Modern C# Features",
            description: "Master modern C# programming with the latest language features and best practices."
        },
        {
            icon: FaDesktop,
            title: "Desktop Apps",
            description: "Build professional desktop applications using Windows Forms and WPF."
        },
        {
            icon: FaMobileAlt,
            title: "Cross-Platform",
            description: "Create applications that run on multiple platforms with .NET Core."
        }
    ];

    const projects = [
        {
            icon: FaGamepad,
            title: "2D Platformer Game",
            description: "Create a complete 2D platformer game with Unity and C#, including player controls, enemies, and collectibles.",
            skills: ["Unity", "Game Physics", "Animation"]
        },
        {
            icon: FaDesktop,
            title: "Inventory System",
            description: "Build a desktop inventory management system with a modern user interface and database integration.",
            skills: ["WPF", "MVVM", "Database"]
        },
        {
            icon: FaCode,
            title: "Mini Game Engine",
            description: "Develop a simple game engine to understand core game development concepts.",
            skills: ["OOP", "Game Loop", "Collision Detection"]
        }
    ];

    const curriculum = [
        {
            title: "C# Fundamentals",
            topics: [
                "C# syntax and basic concepts",
                "Object-oriented programming",
                "Collections and LINQ",
                "Asynchronous programming"
            ]
        },
        {
            title: "Unity Game Development",
            topics: [
                "Unity interface and workflow",
                "2D and 3D game development",
                "Physics and collision detection",
                "Animation and particle systems"
            ]
        },
        {
            title: "Advanced Topics",
            topics: [
                "Design patterns in game development",
                "Performance optimization",
                "Cross-platform development",
                "Publishing your games"
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
                    <div className="flex gap-4 mb-8">
                        <div className="p-6 rounded-2xl bg-yellow-400/10">
                            <SiCsharp size={48} className="text-yellow-400" />
                        </div>
                        <div className="p-6 rounded-2xl bg-yellow-400/10">
                            <SiUnity size={48} className="text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        C# Programming
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Learn C# and Unity to create amazing games and professional applications.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Learn C#?</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            C# is a versatile language that powers everything from games to enterprise applications.
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
                        <h2 className="section-title">Try C# Now</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Experience game development with C# and Unity through our interactive demo.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <CSharpDemo />
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Curriculum</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A comprehensive journey from C# basics to professional game development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {curriculum.map((section, index) => (
                            <div key={index} className="card border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                                <ul className="space-y-4">
                                    {section.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="flex items-start gap-3 text-white/70">
                                            <span className="text-yellow-400 mt-1">•</span>
                                            {topic}
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
                            Create exciting games and applications while learning C# and Unity.
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
                            Start Your Game Development Journey
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our C# course and learn to create professional games with Unity.
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
