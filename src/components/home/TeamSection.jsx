/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Team and features section component for homepage
*/

import { NavLink } from "react-router-dom";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card group backdrop-blur-md hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6">
                <Icon size={32} className="text-yellow-400" />
            </div>
            
            {/* Content */}
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-4">
                {title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/70">
                {description}
            </p>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    </div>
);

export default function TeamSection() {
    const features = [
        {
            icon: FaCode,
            title: "Industry Expertise in Every Classroom",
            description: "Our strength lies in our diverse team of IT industry experts from various sectors. They bring real-world tech experience to our classrooms, ensuring students learn coding as a practical, applied skill relevant to today's tech industry."
        },
        {
            icon: FaLaptopCode,
            title: "Practical, Hands-On Curriculum",
            description: "Our curriculum is specially handcrafted for practicality. Every lesson is designed for active, hands-on learning, ensuring students don't just understand coding concepts but can apply them creatively in real-world scenarios."
        },
        {
            icon: FaRocket,
            title: "From Learning to Application",
            description: "We bridge the gap between theory and practice. Our approach involves project-based learning and real-world case studies, preparing students to confidently tackle real tech challenges."
        }
    ];

    return (
        <section className="section relative overflow-hidden bg-gradient-to-b from-black via-surface to-black">
            <div className="container relative z-10">
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            {...feature}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 200}ms` }}
                        />
                    ))}
                </div>

                {/* Team Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="section-title mb-8">
                        Our Team
                    </h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-white/80 mb-12">
                        Meet the driving force behind Vision Coding Academy - a diverse team of IT industry experts 
                        specializing in software, hardware, frontend, backend, automation, UI/UX, and web design. 
                        Each member brings a unique blend of theoretical knowledge and practical experience, 
                        tailored to meet the individual needs and aspirations of our students.
                    </p>
                    
                    <NavLink 
                        to="/about"
                        className="btn btn-primary group relative overflow-hidden"
                    >
                        <span className="relative z-10">Meet Our Team</span>
                        <div className="absolute inset-0 bg-yellow-300 transform translate-y-full transition-transform group-hover:translate-y-0" />
                    </NavLink>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/background2.jpg')] opacity-5 mix-blend-overlay pointer-events-none" />
            
            {/* Decorative Elements */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
        </section>
    );
}
