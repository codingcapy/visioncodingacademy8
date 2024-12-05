/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: DevOps course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { FaCloud, FaDocker, FaGithub, FaAws, FaServer, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';
import DevOpsDemo from '../components/course-demos/DevOpsDemo';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
    </div>
);

const TechnologyCard = ({ icon: Icon, name, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Icon size={24} className="text-yellow-400" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
                <p className="text-white/70">{description}</p>
            </div>
        </div>
    </div>
);

export default function DevOpsPage() {
    useEffect(() => {
        document.title = 'DevOps Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaCloud,
            title: "Cloud Technologies",
            description: "Learn how to use cloud platforms like AWS to deploy and manage applications."
        },
        {
            icon: FaDocker,
            title: "Containerization",
            description: "Master Docker and container orchestration with Kubernetes for modern app deployment."
        },
        {
            icon: FaGithub,
            title: "CI/CD Pipelines",
            description: "Build automated deployment pipelines for continuous delivery of your code."
        },
        {
            icon: FaServer,
            title: "Infrastructure as Code",
            description: "Learn to automate infrastructure setup using tools like Terraform."
        }
    ];

    const technologies = [
        {
            icon: FaDocker,
            name: "Docker",
            description: "Package applications into containers for easy deployment and scaling."
        },
        {
            icon: SiKubernetes,
            name: "Kubernetes",
            description: "Manage containerized applications across multiple servers."
        },
        {
            icon: SiJenkins,
            name: "Jenkins",
            description: "Create automated pipelines for building and testing code."
        },
        {
            icon: FaAws,
            name: "AWS",
            description: "Deploy applications using Amazon's cloud services."
        },
        {
            icon: SiTerraform,
            name: "Terraform",
            description: "Automate infrastructure setup with code."
        },
        {
            icon: FaGithub,
            name: "GitHub Actions",
            description: "Automate your development workflow right from GitHub."
        }
    ];

    const topics = [
        {
            icon: FaCogs,
            title: "DevOps Basics",
            items: [
                "Understanding DevOps principles",
                "Version control with Git",
                "Command line mastery",
                "Basic scripting"
            ]
        },
        {
            icon: FaCloud,
            title: "Cloud & Containers",
            items: [
                "Docker containers",
                "Kubernetes basics",
                "Cloud services",
                "Microservices"
            ]
        },
        {
            icon: FaChartLine,
            title: "Monitoring & Operations",
            items: [
                "System monitoring",
                "Log management",
                "Performance tracking",
                "Troubleshooting"
            ]
        },
        {
            icon: FaShieldAlt,
            title: "Security & Best Practices",
            items: [
                "Security basics",
                "Best practices",
                "Automated testing",
                "Documentation"
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
                        <FaCloud size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        DevOps Engineering
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Learn to automate and improve how applications are built and deployed.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What You'll Learn</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Master the tools and practices used in modern software deployment.
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
                        <h2 className="section-title">Try DevOps Now</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            See how automated deployment pipelines work in action!
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <DevOpsDemo />
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Tools You'll Use</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Get hands-on experience with industry-standard DevOps tools.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech, index) => (
                            <TechnologyCard 
                                key={index} 
                                {...tech}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Topics */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Course Topics</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A step-by-step journey into modern DevOps practices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {topics.map((topic, index) => (
                            <div key={index} className="card border border-white/10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 rounded-lg bg-yellow-400/10">
                                        <topic.icon size={24} className="text-yellow-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                                </div>
                                <ul className="space-y-2">
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
                            Ready to Learn DevOps?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our DevOps course and learn how modern applications are deployed!
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
