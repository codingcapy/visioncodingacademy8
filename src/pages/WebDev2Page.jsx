/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Advanced Web Development course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase } from 'react-icons/si';
import { FaServer, FaDatabase, FaCode, FaRocket, FaCloud, FaMobileAlt, FaShoppingCart, FaUsers } from 'react-icons/fa';
import CSSPlaygroundDemo from '../components/course-demos/CSSPlaygroundDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const ProjectShowcase = ({ icon: Icon, title, description, features }) => (
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
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-white/70">
                    <span className="text-yellow-400 mt-1">•</span>
                    {feature}
                </div>
            ))}
        </div>
    </div>
);

export default function WebDev2Page() {
    useEffect(() => {
        document.title = 'Advanced Web Development | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: SiReact,
            title: "React Development",
            description: "Create dynamic user interfaces with React and modern JavaScript."
        },
        {
            icon: SiNodedotjs,
            title: "Backend with Node.js",
            description: "Build powerful server-side applications with Node.js and Express."
        },
        {
            icon: FaDatabase,
            title: "Databases",
            description: "Work with databases like MongoDB to store and manage data."
        },
        {
            icon: FaCloud,
            title: "Cloud Services",
            description: "Deploy your applications using modern cloud platforms."
        }
    ];

    const projects = [
        {
            icon: FaShoppingCart,
            title: "Online Store",
            description: "Build a complete e-commerce website with shopping cart and checkout!",
            features: [
                "Product catalog with categories",
                "Shopping cart functionality",
                "User authentication",
                "Order processing system"
            ]
        },
        {
            icon: FaUsers,
            title: "Social Media App",
            description: "Create a social platform where users can share posts and interact!",
            features: [
                "User profiles and authentication",
                "Post creation and sharing",
                "Comments and likes",
                "Real-time updates"
            ]
        },
        {
            icon: FaMobileAlt,
            title: "Weather Dashboard",
            description: "Make a weather app that shows forecasts and weather data!",
            features: [
                "Weather API integration",
                "Interactive maps",
                "Location-based forecasts",
                "Weather alerts system"
            ]
        }
    ];

    const technologies = [
        {
            icon: SiReact,
            title: "Frontend",
            items: [
                "React components and hooks",
                "State management with Redux",
                "React Router for navigation",
                "Styled components"
            ]
        },
        {
            icon: SiNodedotjs,
            title: "Backend",
            items: [
                "Node.js and Express",
                "RESTful API design",
                "Authentication and security",
                "Server-side rendering"
            ]
        },
        {
            icon: FaDatabase,
            title: "Database & Storage",
            items: [
                "MongoDB database",
                "Firebase integration",
                "File uploads",
                "Data modeling"
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
                        <div className="p-4 rounded-2xl bg-yellow-400/10">
                            <SiReact size={48} className="text-yellow-400" />
                        </div>
                        <div className="p-4 rounded-2xl bg-yellow-400/10">
                            <SiNodedotjs size={48} className="text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Advanced Web Development
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Master modern web development with React and Node.js!
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What You'll Learn</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Take your web development skills to the next level!
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
                        <h2 className="section-title">Try React Components</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            See how React makes web development fun and interactive!
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <CSSPlaygroundDemo />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Cool Projects You'll Build</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Create awesome web applications with modern technologies!
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

            {/* Technologies Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Technologies You'll Master</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Learn the most popular tools in modern web development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {technologies.map((tech, index) => (
                            <div key={index} className="card border border-white/10">
                                <div className="flex items-center gap-4 mb-6">
                                    <tech.icon size={32} className="text-yellow-400" />
                                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {tech.items.map((item, itemIndex) => (
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
                            Ready to Build Modern Web Apps?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our Advanced Web Development course and create amazing applications!
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
