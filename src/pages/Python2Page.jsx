/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Intermediate Python course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiPython } from 'react-icons/si';
import { FaRobot, FaDatabase, FaChartLine, FaCloud, FaCode, FaBrain, FaGamepad, FaDesktop } from 'react-icons/fa';
import PythonGameDemo from '../components/course-demos/PythonGameDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const ProjectShowcase = ({ icon: Icon, title, description, skills }) => (
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
            {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 text-white/70">
                    <span className="text-yellow-400 mt-1">•</span>
                    {skill}
                </div>
            ))}
        </div>
    </div>
);

export default function Python2Page() {
    useEffect(() => {
        document.title = 'Intermediate Python | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaCode,
            title: "Advanced Python",
            description: "Take your Python skills to the next level with advanced programming concepts."
        },
        {
            icon: FaDatabase,
            title: "Data Handling",
            description: "Learn to work with databases, APIs, and different data formats."
        },
        {
            icon: FaRobot,
            title: "Automation",
            description: "Create programs that automate tasks and make your computer work for you."
        },
        {
            icon: FaChartLine,
            title: "Data Analysis",
            description: "Analyze and visualize data using Python's powerful libraries."
        }
    ];

    const projects = [
        {
            icon: FaGamepad,
            title: "Advanced Games",
            description: "Create more complex games with better graphics and features!",
            skills: [
                "Pygame for game development",
                "Sprite animations and effects",
                "Game physics and collision detection",
                "Sound effects and background music"
            ]
        },
        {
            icon: FaDesktop,
            title: "Desktop Apps",
            description: "Build applications with graphical user interfaces!",
            skills: [
                "GUI development with Tkinter",
                "Event handling and user input",
                "Custom widgets and layouts",
                "File handling and data storage"
            ]
        },
        {
            icon: FaRobot,
            title: "Automation Tools",
            description: "Make programs that help automate daily tasks!",
            skills: [
                "File and folder organization",
                "Web scraping and data collection",
                "Task scheduling and automation",
                "Email and notification systems"
            ]
        }
    ];

    const topics = [
        {
            title: "Advanced Python Features",
            items: [
                "Object-oriented programming",
                "Decorators and generators",
                "Error handling and debugging",
                "File operations and data formats"
            ]
        },
        {
            title: "Libraries and Tools",
            items: [
                "Pygame for game development",
                "Tkinter for desktop apps",
                "Pandas for data analysis",
                "Requests for web APIs"
            ]
        },
        {
            title: "Best Practices",
            items: [
                "Code organization",
                "Documentation",
                "Testing and debugging",
                "Project structure"
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
                        <SiPython size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Intermediate Python
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Level up your Python skills with advanced concepts and cool projects!
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What You'll Learn</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Take your Python programming to the next level!
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
                        <h2 className="section-title">Try Advanced Python</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            See what you can create with more advanced Python concepts!
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <PythonGameDemo />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Cool Projects You'll Build</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Create awesome applications with your new Python skills!
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

            {/* Topics Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Topics</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A comprehensive look at what you'll master in this course.
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

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="card text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Level Up Your Python?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our Intermediate Python course and create amazing projects!
                        </p>
                        <NavLink 
                            to="/contact"
                            className="btn btn-primary inline-block"
                        >
                            Level Up Now
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}
