/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Engaging course categories with animations
*/

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaPython, FaHtml5, FaRobot, FaGamepad, FaCode, FaLaptopCode } from 'react-icons/fa';

const courses = [
    {
        id: 'python',
        title: 'Python Programming',
        description: 'Master the fundamentals of Python programming.',
        icon: FaPython,
        color: 'from-blue-400 to-blue-600',
        skills: ['Problem Solving', 'Data Structures', 'Algorithms'],
        path: '/courses/python'
    },
    {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Create stunning websites and web applications.',
        icon: FaHtml5,
        color: 'from-orange-400 to-orange-600',
        skills: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
        path: '/courses/web-dev'
    },
    {
        id: 'arduino',
        title: 'Arduino & STEM',
        description: 'Build amazing electronics and robotics projects.',
        icon: FaRobot,
        color: 'from-green-400 to-green-600',
        skills: ['Electronics', 'Programming', 'Problem Solving'],
        path: '/courses/arduino'
    },
    {
        id: 'game-dev',
        title: 'Game Development',
        description: 'Design and create your own video games.',
        icon: FaGamepad,
        color: 'from-purple-400 to-purple-600',
        skills: ['Game Design', 'C#', 'Unity'],
        path: '/courses/game-dev'
    }
];

const CourseCard = ({ course, onHover, isSelected }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layoutId={`card-${course.id}`}
            className="relative"
            onMouseEnter={() => {
                setIsHovered(true);
                onHover(course);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onHover(null);
            }}
            onClick={() => navigate(course.path)}
            whileHover={{ y: -5 }}
        >
            <div className={`
                relative overflow-hidden rounded-xl cursor-pointer
                bg-white/5 backdrop-blur-sm border border-white/10
                transition-colors duration-300
                ${isSelected ? 'border-yellow-400/50' : ''}
                ${isHovered ? 'border-white/20' : ''}
            `}>
                {/* Background Glow */}
                <div className={`
                    absolute inset-0 opacity-20
                    bg-gradient-to-r ${course.color}
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-30' : ''}
                `} />

                {/* Content */}
                <div className="relative p-6">
                    <div className={`
                        w-16 h-16 rounded-lg mb-4
                        bg-gradient-to-br ${course.color}
                        flex items-center justify-center
                        transform transition-transform duration-300
                        ${isHovered ? 'scale-110' : ''}
                    `}>
                        <course.icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                        {course.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                        {course.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CourseDetails = ({ course }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
        >
            <h4 className="text-lg font-bold text-white mb-4">Course Highlights:</h4>
            <div className="flex flex-wrap gap-2">
                {course.skills.map(skill => (
                    <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default function CourseCategories() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                        Explore Our Courses
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {courses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onHover={setSelectedCourse}
                            isSelected={selectedCourse?.id === course.id}
                        />
                    ))}
                </div>

                {/* Course Details */}
                <AnimatePresence mode="wait">
                    {selectedCourse && (
                        <motion.div
                            key={selectedCourse.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <CourseDetails course={selectedCourse} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400/20"
                        animate={{
                            y: [0, -100],
                            x: [0, Math.sin(i) * 50],
                            opacity: [0, 0.2, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${(i + 1) * 10}%`,
                            top: '100%',
                        }}
                    >
                        <FaCode size={20} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
