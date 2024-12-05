/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Footer with simplified contact info and clickable icons
*/

import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiKakao } from 'react-icons/si';

const FooterLink = ({ to, children }) => (
    <NavLink
        to={to}
        className="text-white/70 hover:text-yellow-400 transition-colors duration-300"
    >
        {children}
    </NavLink>
);

const SocialIcon = ({ href, icon: Icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-yellow-400 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={label}
    >
        <Icon size={20} />
    </motion.a>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const westVanLocation = "https://www.google.com/maps/search/?api=1&query=2428+Haywood+Ave+West+Vancouver+BC+V7V+1Y1";
    const coquitlamLocation = "https://www.google.com/maps/search/?api=1&query=2885+Barnet+Hwy+Coquitlam+BC+V3B+1C1";

    return (
        <footer className="bg-gradient-to-b from-black to-surface relative">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Vision Coding</h3>
                        <p className="text-white/70 mb-6">
                            Empowering the next generation of coders with hands-on learning and innovative teaching methods.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon 
                                href="https://www.instagram.com/vision.coding/"
                                icon={FaInstagram}
                                label="Instagram"
                            />
                            <SocialIcon 
                                href="https://kakao.com"
                                icon={SiKakao}
                                label="KakaoTalk"
                            />
                            <SocialIcon 
                                href="mailto:visioncodingca@gmail.com"
                                icon={FaEnvelope}
                                label="Email"
                            />
                            <SocialIcon 
                                href="tel:+16049003707"
                                icon={FaPhone}
                                label="Phone"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><FooterLink to="/courses">Our Courses</FooterLink></li>
                            <li><FooterLink to="/gallery">Gallery</FooterLink></li>
                            <li><FooterLink to="/about">About Us</FooterLink></li>
                            <li><FooterLink to="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Popular Courses</h3>
                        <ul className="space-y-4">
                            <li><FooterLink to="/courses/python">Python Programming</FooterLink></li>
                            <li><FooterLink to="/courses/web-dev">Web Development</FooterLink></li>
                            <li><FooterLink to="/courses/arduino">Arduino & STEM</FooterLink></li>
                            <li><FooterLink to="/courses/game-dev">Game Development</FooterLink></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Our Locations</h3>
                        <div className="space-y-4">
                            <a 
                                href={westVanLocation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/70 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <FaMapMarkerAlt className="text-yellow-400" />
                                <span>West Vancouver</span>
                            </a>
                            <a 
                                href={coquitlamLocation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/70 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <FaMapMarkerAlt className="text-yellow-400" />
                                <span>Coquitlam</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="text-white/50">
                            © {currentYear} Vision Coding Academy. All rights reserved.
                        </div>
                        <div className="flex gap-4 text-white/50 text-sm">
                            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                            <FooterLink to="/terms">Terms of Service</FooterLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
