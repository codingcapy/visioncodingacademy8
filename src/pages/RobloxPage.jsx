/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Roblox course page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { FaGamepad, FaCode, FaPalette, FaUsers, FaCube, FaRobot, FaCoins, FaStar } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';

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

export default function RobloxPage() {
    useEffect(() => {
        document.title = 'Roblox Course | Vision Coding';
    }, []);

    useScrollReveal();

    const features = [
        {
            icon: FaGamepad,
            title: "Game Development",
            description: "Learn to create your own exciting games in Roblox Studio!"
        },
        {
            icon: FaCode,
            title: "Lua Programming",
            description: "Master Lua coding to make your games interactive and fun."
        },
        {
            icon: FaPalette,
            title: "3D Design",
            description: "Design amazing 3D worlds and characters for your games."
        },
        {
            icon: FaUsers,
            title: "Multiplayer Games",
            description: "Create games that you can play with friends online!"
        }
    ];

    const projects = [
        {
            icon: FaCube,
            title: "Obstacle Course Adventure",
            description: "Create a fun obstacle course where players dodge traps and collect prizes!",
            features: [
                "Moving platforms and obstacles",
                "Collectible items and power-ups",
                "Score tracking system",
                "Multiple levels of difficulty"
            ]
        },
        {
            icon: FaRobot,
            title: "Pet Simulator",
            description: "Build a game where players can adopt and train virtual pets!",
            features: [
                "Different types of pets",
                "Pet customization options",
                "Training and leveling system",
                "Pet abilities and tricks"
            ]
        },
        {
            icon: FaCoins,
            title: "Tycoon Game",
            description: "Design a tycoon game where players build their own business empire!",
            features: [
                "Resource management",
                "Building system",
                "Money earning mechanics",
                "Upgrades and improvements"
            ]
        }
    ];

    const learningPath = [
        {
            title: "Getting Started",
            topics: [
                "Introduction to Roblox Studio",
                "Basic building tools",
                "Simple scripts with Lua",
                "Testing your games"
            ]
        },
        {
            title: "Game Mechanics",
            topics: [
                "Player movement and controls",
                "Collectibles and scoring",
                "Basic physics and collisions",
                "Sound effects and music"
            ]
        },
        {
            title: "Advanced Features",
            topics: [
                "Multiplayer functionality",
                "Game saving systems",
                "Special effects and animations",
                "Game optimization"
            ]
        }
    ];

    const funFacts = [
        "Over half of all US kids play Roblox!",
        "You can earn real money from your Roblox games",
        "Roblox has over 40 million games to play",
        "Some Roblox games have billions of visits"
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
                        <SiRoblox size={64} className="text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Roblox Game Creation
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        Turn your game ideas into reality with Roblox Studio!
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What You'll Learn</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Discover the fun of making your own Roblox games!
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

            {/* Projects Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Cool Games You'll Make</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Create awesome games that you can share with friends!
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

            {/* Learning Path Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Your Learning Journey</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Step by step, you'll learn everything needed to make amazing games!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {learningPath.map((path, index) => (
                            <div key={index} className="card border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">{path.title}</h3>
                                <ul className="space-y-4">
                                    {path.topics.map((topic, topicIndex) => (
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

            {/* Fun Facts Section */}
            <section className="section bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Fun Facts About Roblox</h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Did you know these cool things about Roblox?
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {funFacts.map((fact, index) => (
                            <div key={index} className="card border border-white/10 p-6 text-center">
                                <FaStar size={32} className="text-yellow-400 mx-auto mb-4" />
                                <p className="text-white/80">{fact}</p>
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
                            Ready to Make Your Own Games?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Join our Roblox course and start creating amazing games today!
                        </p>
                        <NavLink 
                            to="/contact"
                            className="btn btn-primary inline-block"
                        >
                            Start Creating
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}
