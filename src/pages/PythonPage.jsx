/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Python course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiPython } from 'react-icons/si';
import { FaRobot, FaGamepad, FaChartLine, FaBrain } from 'react-icons/fa';
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

const CurriculumSection = ({ title, topics }) => (
    <div className="card group border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
        <ul className="space-y-4">
            {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                    <span className="text-yellow-400 mt-1">•</span>
                    {topic}
                </li>
            ))}
        </ul>
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

export default function PythonPage() {
    useEffect(() => {
        document.title = 'Python Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaGamepad,
            title: "Learn Through Games",
            description: "Create fun games while learning programming concepts. From simple text adventures to graphical games using Pygame."
        },
        {
            icon: FaRobot,
            title: "Automation Projects",
            description: "Build practical automation tools that can handle repetitive tasks, process files, and interact with websites."
        },
        {
            icon: FaChartLine,
            title: "Data Analysis",
            description: "Introduction to data handling with Python, including basic data visualization and analysis techniques."
        },
        {
            icon: FaBrain,
            title: "Problem Solving",
            description: "Develop critical thinking and problem-solving skills through coding challenges and algorithmic thinking."
        }
    ];

    const curriculum = [
        {
            title: "Module 1: Python Basics",
            topics: [
                "Understanding Python syntax and data types",
                "Working with variables and operators",
                "Control flow with if statements and loops",
                "Writing and using functions",
                "Basic error handling and debugging"
            ]
        },
        {
            title: "Module 2: Data Structures",
            topics: [
                "Lists, tuples, and dictionaries",
                "String manipulation and formatting",
                "Working with files and directories",
                "Introduction to modules and packages",
                "Basic algorithm concepts"
            ]
        },
        {
            title: "Module 3: Object-Oriented Programming",
            topics: [
                "Understanding classes and objects",
                "Inheritance and polymorphism",
                "Creating reusable code components",
                "Building larger programs",
                "Best practices in OOP"
            ]
        },
        {
            title: "Module 4: Projects & Applications",
            topics: [
                "Building text-based games",
                "Creating simple GUI applications",
                "Working with external libraries",
                "Basic web scraping",
                "Final project development"
            ]
        }
    ];

    const projects = [
        {
            title: "Adventure Game",
            description: "Create an interactive text-based adventure game with multiple paths and outcomes.",
            skills: ["Control Flow", "Functions", "Text Processing"]
        },
        {
            title: "File Organizer",
            description: "Build a program that automatically organizes files based on their types and dates.",
            skills: ["File Handling", "OS Operations", "Data Structures"]
        },
        {
            title: "Data Visualizer",
            description: "Develop a tool that creates visual representations of data using Python libraries.",
            skills: ["Data Analysis", "Visualization", "Libraries"]
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
                        Python Programming
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Start your coding journey with Python - the most beginner-friendly programming language used by millions of developers worldwide.
                    </p>
                </div>
            </section>

            {/* Course Overview */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Features</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Learn Python through hands-on projects and interactive lessons designed to make programming fun and engaging.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {features.map((feature, index) => (
                            <FeatureCard 
                                key={index} 
                                {...feature}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>

                    {/* Course Details */}
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Course Information</h2>
                            <div className="space-y-6 text-lg text-white/70">
                                <p>
                                    Our Python course is designed for complete beginners with no prior programming experience. 
                                    Through hands-on projects and interactive lessons, you'll learn the fundamentals of programming 
                                    while building real-world applications.
                                </p>
                                <p>
                                    By the end of this course, you'll be able to:
                                </p>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>Write Python programs from scratch</li>
                                    <li>Understand core programming concepts</li>
                                    <li>Create interactive applications</li>
                                    <li>Work with data and files</li>
                                    <li>Debug and solve coding problems</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Course Details</h3>
                            <div className="space-y-4 text-lg">
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span className="text-white/70">Duration</span>
                                    <span className="text-white">12 Weeks</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span className="text-white/70">Level</span>
                                    <span className="text-white">Beginner</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span className="text-white/70">Prerequisites</span>
                                    <span className="text-white">None</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span className="text-white/70">Class Size</span>
                                    <span className="text-white">Max 6 Students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Try Python Now</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Get a taste of Python programming with this interactive demo. No installation required!
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
                        <h2 className="section-title">Projects You'll Build</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Apply your knowledge by building real projects that you can add to your portfolio.
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
            <section className="section bg-black">
                <div className="container">
                    <div className="card text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Python Journey?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our Python course and take your first step into the world of programming.
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
