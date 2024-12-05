/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Gallery page for Vision Coding Academy
*/

import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FaMapMarkerAlt, FaCode, FaLaptopCode, FaRobot, FaGamepad } from 'react-icons/fa';

const LocationTab = ({ name, active, onClick, icon: Icon }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 ${
            active 
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
        }`}
    >
        <Icon size={20} />
        <span className="font-medium">{name}</span>
    </button>
);

const GalleryCard = ({ image, title, description, tags }) => (
    <div className="group relative overflow-hidden rounded-lg">
        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-lg">
            <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/70 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default function GalleryPage() {
    const [activeLocation, setActiveLocation] = useState('west-vancouver');
    useScrollReveal();

    useEffect(() => {
        document.title = 'Gallery | Vision Coding';
    }, []);

    const locations = [
        { id: 'west-vancouver', name: 'West Vancouver', icon: FaMapMarkerAlt },
        { id: 'coquitlam', name: 'Coquitlam', icon: FaMapMarkerAlt }
    ];

    const galleryItems = {
        'west-vancouver': [
            {
                image: '/gallery1.png',
                title: 'Python Game Development',
                description: 'Students creating their first Python games',
                tags: ['Python', 'Gaming', 'Coding']
            },
            {
                image: '/gallery2.png',
                title: 'Web Development Workshop',
                description: 'Learning HTML, CSS, and JavaScript',
                tags: ['Web Dev', 'Frontend']
            },
            {
                image: '/gallery3.png',
                title: 'Arduino Projects',
                description: 'Building electronic projects with Arduino',
                tags: ['Arduino', 'Electronics']
            },
            {
                image: '/gallery24.jpg',
                title: 'Robotics Class',
                description: 'Students working on robotics projects',
                tags: ['Robotics', 'Engineering']
            },
            {
                image: '/gallery25.jpg',
                title: 'Coding Competition',
                description: 'Students participating in coding challenges',
                tags: ['Competition', 'Problem Solving']
            },
            {
                image: '/gallery26.jpg',
                title: 'Group Projects',
                description: 'Collaborative coding projects',
                tags: ['Teamwork', 'Projects']
            }
        ],
        'coquitlam': [
            {
                image: '/gallery27.jpg',
                title: 'Advanced Programming',
                description: 'Learning advanced coding concepts',
                tags: ['Advanced', 'Programming']
            },
            {
                image: '/gallery28.jpg',
                title: 'Game Design Workshop',
                description: 'Creating video games with Unity',
                tags: ['Game Dev', 'Unity']
            },
            {
                image: '/gallery29.jpg',
                title: 'Mobile App Development',
                description: 'Building mobile applications',
                tags: ['Mobile', 'Apps']
            },
            {
                image: '/gallery30.jpg',
                title: 'Coding Lab',
                description: 'Students in our coding laboratory',
                tags: ['Lab', 'Practice']
            },
            {
                image: '/gallery31.jpg',
                title: 'Tech Presentations',
                description: 'Students presenting their projects',
                tags: ['Presentation', 'Projects']
            },
            {
                image: '/gallery32.jpg',
                title: 'Hackathon Event',
                description: 'Students participating in hackathon',
                tags: ['Hackathon', 'Innovation']
            }
        ]
    };

    const categories = [
        { icon: FaCode, name: 'All Activities' },
        { icon: FaLaptopCode, name: 'Coding Classes' },
        { icon: FaRobot, name: 'Robotics' },
        { icon: FaGamepad, name: 'Game Development' }
    ];

    const westVanLocation = "https://www.google.com/maps/search/?api=1&query=Vision+Coding+Academy+West+Vancouver";
    const coquitlamLocation = "https://www.google.com/maps/search/?api=1&query=Vision+Coding+Academy+Coquitlam";

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[url('/binary.png')] bg-repeat animate-scroll" />
                    </div>
                </div>
                <div className="container relative">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6">
                            Our Learning Journey
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Take a look at our students learning and creating amazing things at Vision Coding Academy.
                        </p>
                    </div>

                    {/* Location Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {locations.map((location) => (
                            <LocationTab
                                key={location.id}
                                name={location.name}
                                icon={location.icon}
                                active={activeLocation === location.id}
                                onClick={() => setActiveLocation(location.id)}
                            />
                        ))}
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-colors duration-300"
                            >
                                <category.icon size={16} />
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems[activeLocation].map((item, index) => (
                            <GalleryCard 
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Info */}
            <section className="section bg-black">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <a 
                            href={westVanLocation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card border border-white/10 hover:border-yellow-400/50 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <FaMapMarkerAlt size={24} className="text-yellow-400" />
                                <h2 className="text-2xl font-bold text-white">West Vancouver Campus</h2>
                            </div>
                            <div className="space-y-4 text-white/70">
                                <p>Our main campus featuring:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">•</span>
                                        Modern computer labs with latest hardware
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">•</span>
                                        Robotics and electronics workshop
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">•</span>
                                        Collaborative learning spaces
                                    </li>
                                </ul>
                            </div>
                        </a>

                        <a 
                            href={coquitlamLocation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card border border-white/10 hover:border-yellow-400/50 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <FaMapMarkerAlt size={24} className="text-yellow-400" />
                                <h2 className="text-2xl font-bold text-white">Coquitlam Campus</h2>
                            </div>
                            <div className="space-y-4 text-white/70">
                                <p>Our tech hub featuring:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">•</span>
                                        Advanced programming facilities
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">•</span>
                                        Game development studio
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">•</span>
                                        Project presentation space
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
