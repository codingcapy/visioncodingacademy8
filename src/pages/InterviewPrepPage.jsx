/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Tech Interview Prep page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FaCode, FaLaptopCode, FaBrain, FaRocket } from 'react-icons/fa';
import { BsCodeSquare, BsFileCode } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const CurriculumCard = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6 inline-flex">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-4">
            {title}
        </h3>
        <p className="text-lg text-white/70 leading-relaxed">
            {description}
        </p>
    </div>
);

const ProcessStep = ({ number, title, description }) => (
    <div className="relative pl-12 pb-8 last:pb-0">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-400">
            <span className="text-yellow-400 font-bold">{number}</span>
        </div>
        <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 to-transparent last:hidden" />
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-white/70">{description}</p>
    </div>
);

export default function InterviewPrepPage() {
    useEffect(() => {
        document.title = 'Tech Interview Prep | Vision Coding';
    }, []);

    useScrollReveal();

    const curriculumItems = [
        {
            icon: FaCode,
            title: "Data Structures & Algorithms",
            description: "Master essential data structures and algorithms through hands-on coding exercises and real interview questions."
        },
        {
            icon: BsCodeSquare,
            title: "System Design",
            description: "Learn to design scalable systems, handle trade-offs, and communicate your design decisions effectively."
        },
        {
            icon: FaBrain,
            title: "Problem-Solving Strategies",
            description: "Develop systematic approaches to break down complex problems and optimize solutions."
        },
        {
            icon: SiLeetcode,
            title: "LeetCode Training",
            description: "Practice with curated LeetCode problems targeting specific patterns and difficulty levels."
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
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Tech Interview Prep
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl animate-fade-in">
                        Master the art of technical interviews with our comprehensive preparation program
                    </p>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <h2 className="section-title mb-16">Program Curriculum</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {curriculumItems.map((item, index) => (
                            <CurriculumCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <h2 className="section-title mb-16">Our Process</h2>
                    <div className="max-w-3xl mx-auto">
                        <ProcessStep 
                            number="1"
                            title="Initial Assessment"
                            description="We evaluate your current skill level and identify areas for improvement through technical assessments and mock interviews."
                        />
                        <ProcessStep 
                            number="2"
                            title="Customized Learning Path"
                            description="Based on your assessment, we create a personalized curriculum focusing on your specific needs and target companies."
                        />
                        <ProcessStep 
                            number="3"
                            title="Intensive Practice"
                            description="Regular mock interviews, code reviews, and problem-solving sessions with experienced instructors."
                        />
                        <ProcessStep 
                            number="4"
                            title="Interview Readiness"
                            description="Final preparation including behavioral interview practice, portfolio review, and company-specific preparation."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Excel in Your Tech Interviews?
                        </h2>
                        <p className="text-xl text-white/70 mb-8">
                            Join our program and gain the confidence to tackle any technical interview.
                        </p>
                        <a 
                            href="mailto:visioncodingca@gmail.com"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            <span>Contact Us</span>
                            <FaRocket className="text-xl" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
