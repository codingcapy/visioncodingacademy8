/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Original contact section with updated locations
*/

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiKakao } from 'react-icons/si';

const ContactInfo = ({ icon: Icon, text, href }) => (
    <div className="flex items-center gap-3 text-white/70">
        <Icon size={20} className="text-yellow-400" />
        {href ? (
            <a 
                href={href}
                className="hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        ) : (
            <span>{text}</span>
        )}
    </div>
);

const SocialButton = ({ href, icon: Icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-yellow-400 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon size={24} />
    </motion.a>
);

export default function ContactSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                            Get in Touch
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Have questions? We're here to help! Reach out to us through any of these channels.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                        <ContactInfo 
                            icon={FaPhone} 
                            text="(604) 900-3707"
                            href="tel:+16049003707"
                        />
                        <ContactInfo 
                            icon={FaEnvelope} 
                            text="visioncodingca@gmail.com"
                            href="mailto:visioncodingca@gmail.com"
                        />
                        <ContactInfo 
                            icon={FaMapMarkerAlt} 
                            text="West Vancouver & Coquitlam"
                        />
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Connect With Us</h3>
                        <div className="flex gap-4">
                            <SocialButton
                                href="https://www.instagram.com/vision.coding/"
                                icon={FaInstagram}
                                label="Instagram"
                            />
                            <SocialButton
                                href="https://kakao.com"
                                icon={SiKakao}
                                label="KakaoTalk"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
