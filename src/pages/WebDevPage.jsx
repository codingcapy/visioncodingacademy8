/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Web Development course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';
import { FaCode, FaPalette, FaMobileAlt, FaRocket } from 'react-icons/fa';
import CSSPlaygroundDemo from '../components/course-demos/CSSPlaygroundDemo';

const TechStack = ({ icon: Icon, name, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

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

export default function WebDevPage() {
    useEffect(() => {
        document.title = 'Web Development Course | Vision Coding';
    }, []);

    useScrollReveal();

    const technologies = [
        {
            icon: SiHtml5,
            name: "HTML5",
            description: "The building blocks of web pages. Learn to structure content with modern HTML5 features."
        },
        {
            icon: SiCss3,
            name: "CSS3",
            description: "Style your websites with modern CSS techniques, animations, and responsive design."
        },
        {
            icon: SiJavascript,
            name: "JavaScript",
            description: "Add interactivity and dynamic features to your websites with JavaScript."
        },
        {
            icon: SiReact,
            name: "Modern Tools",
            description: "Introduction to modern development tools and workflows used in the industry."
        }
    ];

    const features = [
        {
            icon: FaCode,
            title: "Hands-on Coding",
            description: "Build real websites from day one, with practical exercises and projects in every lesson."
        },
        {
            icon: FaPalette,
            title: "Design Principles",
            description: "Learn fundamental design concepts and how to create visually appealing websites."
        },
        {
            icon: FaMobileAlt,
            title: "Responsive Design",
            description: "Create websites that work beautifully on all devices, from phones to desktops."
        },
        {
            icon: FaRocket,
            title: "Deployment",
            description: "Learn how to deploy your websites to the internet for the world to see."
        }
    ];

    const projects = [
        {
            title: "Fun Mini Games",
            description: "Create interactive browser games like memory cards, whack-a-mole, and puzzle games. Learn game logic and user interactions!",
            skills: ["HTML", "CSS", "JavaScript", "Game Logic"],
            image: "/gallery1.png"
        },
        {
            title: "Online Store",
            description: "Build a cool store with product listings, shopping cart, and checkout. See how real online shops work!",
            skills: ["React", "State Management", "API Integration"],
            image: "/gallery2.png"
        },
        {
            title: "Personal Blog",
            description: "Design your own blog where you can share posts, add comments, and customize the look. Express yourself online!",
            skills: ["Web Design", "Content Management", "User Interaction"],
            image: "/gallery3.png"
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
                        <SiHtml5 size={48} className="text-yellow-400" />
                        <SiCss3 size={48} className="text-yellow-400" />
                        <SiJavascript size={48} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Web Development
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Learn to create stunning websites and web applications with modern technologies.
                    </p>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Technologies You'll Learn</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Master the core technologies that power the modern web.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => (
                            <TechStack 
                                key={index} 
                                {...tech}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Features Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Features</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A comprehensive curriculum that prepares you for web development.
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
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Try Web Development Now</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Experience the power of CSS with our interactive playground. Start styling in real-time!
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <CSSPlaygroundDemo />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Cool Projects You'll Create</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Build exciting web projects and learn by doing!
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
                            Start Building Websites Today
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our Web Development course and learn to create amazing websites!
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
