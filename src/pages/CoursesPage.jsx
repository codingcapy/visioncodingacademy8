/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Courses page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NavLink } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaGamepad, FaRobot, FaBrain, FaGraduationCap } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiCsharp, SiJavascript, SiArduino } from 'react-icons/si';
import { BiCodeBlock } from 'react-icons/bi';

const CourseCategory = ({ title, description, courses }) => (
    <div className="space-y-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-4">
                {title}
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
                {description}
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses}
        </div>
    </div>
);

const CourseCard = ({ icon: Icon, title, subtitle, description, benefits, level, duration, link }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Icon size={32} className="text-yellow-400" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/60">{subtitle}</p>
            </div>
        </div>

        {/* Level & Duration */}
        <div className="flex gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm">
                {level}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                {duration}
            </span>
        </div>

        {/* Description */}
        <p className="text-white/70 mb-6">
            {description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 mb-8">
            <h4 className="text-sm font-medium text-white/80">What you'll learn:</h4>
            <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="text-yellow-400">•</span>
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>

        {/* CTA */}
        <NavLink 
            to={link}
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/link"
        >
            <span className="font-medium">Learn More</span>
            <svg 
                className="w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </NavLink>
    </div>
);

export default function CoursesPage() {
    useEffect(() => {
        document.title = 'Courses | Vision Coding';
    }, []);

    useScrollReveal();

    const beginnerCourses = [
        {
            icon: SiPython,
            title: "Python for Beginners",
            subtitle: "Start Your Coding Journey",
            description: "Learn the world's most beginner-friendly programming language used by tech giants like Google and Instagram.",
            benefits: [
                "Write your first program from day one",
                "Create fun games and applications",
                "Learn problem-solving skills",
                "Build a strong foundation in coding"
            ],
            level: "Beginner",
            duration: "12 Weeks",
            link: "/courses/python"
        },
        {
            icon: SiJavascript,
            title: "Web Development Fundamentals",
            subtitle: "Create Interactive Websites",
            description: "Build beautiful websites and learn the languages that power the internet.",
            benefits: [
                "Create your own website from scratch",
                "Learn HTML, CSS, and JavaScript",
                "Make interactive web pages",
                "Deploy your site to the internet"
            ],
            level: "Beginner",
            duration: "12 Weeks",
            link: "/courses/webdev"
        },
        {
            icon: SiArduino,
            title: "Arduino & STEM",
            subtitle: "Hands-on Electronics",
            description: "Combine coding with electronics to create interactive projects and smart devices.",
            benefits: [
                "Build electronic projects",
                "Learn basic circuits",
                "Program microcontrollers",
                "Create automated systems"
            ],
            level: "Beginner",
            duration: "8 Weeks",
            link: "/courses/arduino"
        }
    ];

    const intermediateCourses = [
        {
            icon: FaLaptopCode,
            title: "Advanced Web Development",
            subtitle: "Full Stack Development",
            description: "Master modern web development with React and Node.js to build professional applications.",
            benefits: [
                "Build full-stack web applications",
                "Learn React.js for frontend",
                "Create APIs with Node.js",
                "Work with databases"
            ],
            level: "Intermediate",
            duration: "16 Weeks",
            link: "/courses/webdev2"
        },
        {
            icon: SiCsharp,
            title: "C# Programming",
            subtitle: "Game Development & More",
            description: "Learn Microsoft's powerful C# language used in game development and enterprise software.",
            benefits: [
                "Create desktop applications",
                "Learn Unity game development",
                "Build .NET applications",
                "Master object-oriented programming"
            ],
            level: "Intermediate",
            duration: "12 Weeks",
            link: "/courses/csharp"
        },
        {
            icon: SiCplusplus,
            title: "C++ Programming",
            subtitle: "High-Performance Computing",
            description: "Master the language powering high-performance applications and game engines.",
            benefits: [
                "Learn systems programming",
                "Create efficient algorithms",
                "Understand memory management",
                "Build complex applications"
            ],
            level: "Intermediate",
            duration: "16 Weeks",
            link: "/courses/cpp"
        }
    ];

    const advancedCourses = [
        {
            icon: FaBrain,
            title: "Advanced Computer Science",
            subtitle: "Deep Dive into Computing",
            description: "Go beyond coding to understand computer architecture, algorithms, and system design.",
            benefits: [
                "Master data structures",
                "Learn system architecture",
                "Study operating systems",
                "Understand algorithms"
            ],
            level: "Advanced",
            duration: "16 Weeks",
            link: "/courses/advancedcs"
        },
        {
            icon: FaGraduationCap,
            title: "AP Computer Science",
            subtitle: "College Preparation",
            description: "Prepare for AP Computer Science exams and build a strong foundation for university.",
            benefits: [
                "Cover AP CS curriculum",
                "Practice exam strategies",
                "Build portfolio projects",
                "Learn Java programming"
            ],
            level: "Advanced",
            duration: "24 Weeks",
            link: "/courses/apcs"
        },
        {
            icon: BiCodeBlock,
            title: "Competitive Programming",
            subtitle: "Problem Solving Excellence",
            description: "Train for programming competitions and develop advanced problem-solving skills.",
            benefits: [
                "Master algorithms",
                "Solve complex problems",
                "Improve coding speed",
                "Prepare for competitions"
            ],
            level: "Advanced",
            duration: "16 Weeks",
            link: "/courses/ccc"
        }
    ];

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[url('/binary.png')] bg-repeat animate-scroll" />
                    </div>
                </div>
                <div className="container relative h-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Our Courses
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fade-in">
                        From your first line of code to advanced programming concepts, 
                        we'll guide you through every step of your coding journey.
                    </p>
                </div>
            </section>

            {/* Course Categories */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container space-y-32">
                    <CourseCategory 
                        title="Start Your Journey"
                        description="Perfect for beginners taking their first steps into coding. These courses provide a solid foundation with hands-on projects and practical skills."
                        courses={beginnerCourses.map((course, index) => (
                            <CourseCard 
                                key={index} 
                                {...course}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    />

                    <CourseCategory 
                        title="Level Up Your Skills"
                        description="Ready for more challenges? These intermediate courses will expand your knowledge and help you build more complex applications."
                        courses={intermediateCourses.map((course, index) => (
                            <CourseCard 
                                key={index} 
                                {...course}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    />

                    <CourseCategory 
                        title="Master Advanced Concepts"
                        description="Take your skills to the professional level with our advanced courses covering complex topics and industry-standard practices."
                        courses={advancedCourses.map((course, index) => (
                            <CourseCard 
                                key={index} 
                                {...course}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <div className="card text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Contact us for a free consultation. We'll help you choose the perfect course based on your goals and experience level.
                        </p>
                        <NavLink 
                            to="/contact"
                            className="btn btn-primary inline-block"
                        >
                            Get in Touch
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}
