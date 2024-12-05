/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Coding-themed navigation bar
*/

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCode, FaTerminal } from 'react-icons/fa';
import logoAlpha from "/logo_alpha.png";

const NavItem = ({ to, children, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavLink
            to={to}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={({ isActive }) => `
                relative px-6 py-2 font-mono transition-colors duration-300
                ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}
            `}
        >
            <span className="relative z-10">{children}</span>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        exit={{ opacity: 0, width: 0 }}
                        className="absolute inset-0 bg-white/5 rounded-lg"
                        style={{ originX: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
            <motion.span
                className="absolute left-0 text-yellow-400/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{ x: isHovered ? 0 : -10 }}
            >
                &gt;
            </motion.span>
        </NavLink>
    );
};

const CursorBlink = () => (
    <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-yellow-400 ml-1"
    />
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}
            `}
        >
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img 
                                src={logoAlpha} 
                                alt="Vision Coding Academy" 
                                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full bg-yellow-400/20 blur-lg"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-2 text-white font-mono">
                                <FaTerminal className="text-yellow-400" />
                                <span className="font-bold">Vision</span>
                                <span className="text-yellow-400 font-bold">Coding</span>
                                <CursorBlink />
                            </div>
                            <div className="text-white/50 text-sm font-mono">~/academy $</div>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        <NavItem to="/about">About</NavItem>
                        <NavItem to="/courses">Courses</NavItem>
                        <NavItem to="/gallery">Gallery</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-yellow-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-sm border-t border-white/10"
                        >
                            <div className="flex flex-col py-4">
                                <NavItem to="/about" onClick={() => setIsOpen(false)}>About</NavItem>
                                <NavItem to="/courses" onClick={() => setIsOpen(false)}>Courses</NavItem>
                                <NavItem to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavItem>
                                <NavItem to="/contact" onClick={() => setIsOpen(false)}>Contact</NavItem>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
