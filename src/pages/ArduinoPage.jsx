/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Arduino course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiArduino } from 'react-icons/si';
import { FaRobot, FaLightbulb, FaMicrochip, FaTools } from 'react-icons/fa';
import ArduinoDemo from '../components/course-demos/ArduinoDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const ProjectShowcase = ({ title, description, skills, image }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500">
        {image && (
            <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-white/5">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        )}
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

export default function ArduinoPage() {
    useEffect(() => {
        document.title = 'Arduino & STEM Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaRobot,
            title: "Hands-on Learning",
            description: "Build real electronic projects that respond to their environment and interact with the world."
        },
        {
            icon: FaLightbulb,
            title: "Creative Projects",
            description: "Design and create your own inventions by combining hardware and software."
        },
        {
            icon: FaMicrochip,
            title: "Electronics Basics",
            description: "Learn fundamental electronics concepts through practical, engaging projects."
        },
        {
            icon: FaTools,
            title: "Problem Solving",
            description: "Develop troubleshooting skills and learn to debug both hardware and software issues."
        }
    ];

    const projects = [
        {
            title: "Smart LED Controller",
            description: "Create an LED system that responds to environmental conditions or user input.",
            skills: ["Digital I/O", "Sensors", "PWM"],
            image: "/arduino-led-project.jpg"
        },
        {
            title: "Weather Station",
            description: "Build a station that measures temperature, humidity, and displays data on an LCD screen.",
            skills: ["Sensors", "LCD Display", "Data Processing"],
            image: "/arduino-weather-project.jpg"
        },
        {
            title: "Robot Car",
            description: "Design and program a robot car that can navigate autonomously and avoid obstacles.",
            skills: ["Motors", "Ultrasonic Sensors", "Control Systems"],
            image: "/arduino-robot-project.jpg"
        }
    ];

    const curriculum = [
        "Introduction to Electronics",
        "Digital Input and Output",
        "Analog Sensors",
        "PWM and Motor Control",
        "LCD Displays and User Interface",
        "Servo Motors and Movement",
        "Wireless Communication",
        "Final Project Development"
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
                        <SiArduino size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Arduino & STEM
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Bring your ideas to life with Arduino - where coding meets the physical world.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Features</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Learn electronics and programming through hands-on projects and interactive lessons.
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
                        <h2 className="section-title">Try Arduino Now</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Control a virtual LED circuit and see Arduino programming in action!
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <ArduinoDemo />
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Curriculum</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A comprehensive journey from basic electronics to building complex projects.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="card border border-white/10">
                            <div className="grid gap-4">
                                {curriculum.map((topic, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-white/80">{topic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Projects You'll Build</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Create exciting electronic projects that combine hardware and software.
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
                            Start Building with Arduino
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our Arduino course and learn to create interactive electronic projects.
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
