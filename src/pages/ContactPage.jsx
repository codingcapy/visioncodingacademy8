/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Contact page with reordered sections
*/

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiKakao } from 'react-icons/si';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import DOMAIN from '../services/endpoint';

const ContactMethod = ({ icon: Icon, label, text, href, delay = 0 }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{ y: -2 }}
    >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 flex items-center justify-center group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-300">
            <Icon size={24} className="text-yellow-400" />
        </div>
        <div>
            <h3 className="text-white text-lg font-medium mb-1">{label}</h3>
            <p className="text-white/70 group-hover:text-yellow-400 transition-colors duration-300">{text}</p>
        </div>
    </motion.a>
);

const Input = ({ label, type = "text", value, onChange, required = false, name, placeholder }) => (
    <div className="mb-6">
        <label className="block text-white/70 mb-2 text-sm">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            id={name}
            placeholder={placeholder}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400/50 text-white/90 outline-none transition-colors duration-300"
        />
    </div>
);

const TextArea = ({ label, value, onChange, required = false, name, placeholder }) => (
    <div className="mb-6">
        <label className="block text-white/70 mb-2 text-sm">{label}</label>
        <textarea
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            id={name}
            placeholder={placeholder}
            rows={6}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400/50 text-white/90 outline-none transition-colors duration-300 resize-none"
        />
    </div>
);

export default function ContactPage() {
    useEffect(() => {
        document.title = 'Contact | Vision Coding';
    }, []);

    const [notification, setNotification] = useState("");
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        content: ''
    });
    const captchaRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        
        if (!token) {
            setNotification("Please confirm that you are human!");
            return;
        }

        const { firstname, lastname, contact, content } = formData;

        // Validation
        if (firstname.length > 200) {
            setNotification("First name is too long!");
            return;
        }
        if (lastname.length > 200) {
            setNotification("Last name is too long!");
            return;
        }
        if (contact.length > 255) {
            setNotification("Contact is too long!");
            return;
        }
        if (content.length > 40000) {
            setNotification("Your message is too long!");
            return;
        }

        const newQuestion = { 
            first_name: firstname, 
            last_name: lastname, 
            contact, 
            content, 
            token 
        };

        try {
            const res = await axios.post(`${DOMAIN}/api/questions`, newQuestion);
            if (res?.data.success) {
                setNotification("Message sent successfully! If you need a response, we will get back to you as soon as possible :)");
                setFormData({
                    firstname: '',
                    lastname: '',
                    contact: '',
                    content: ''
                });
            } else {
                setNotification("There was an error sending the message :( We will look into this issue, please try again in the near future!");
            }
        } catch (err) {
            setNotification("There was an error sending the message :( We will look into this issue, please try again in the near future!");
        }
    }

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
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6">
                            Code With Us
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
                            Coding isn't just for computers, it's the language of the <span className="text-yellow-200 font-bold">future</span>,
                            and your fluency begins <span className="text-yellow-200 font-bold">now!</span>
                        </p>
                        <p className="text-lg text-white/80">English / 한국어</p>
                    </motion.div>

                    {/* Contact Methods Grid */}
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                        <ContactMethod
                            icon={FaPhone}
                            label="Phone"
                            text="(604) 900-3707"
                            href="tel:+16049003707"
                            delay={0.1}
                        />
                        <ContactMethod
                            icon={FaEnvelope}
                            label="Email"
                            text="visioncodingca@gmail.com"
                            href="mailto:visioncodingca@gmail.com"
                            delay={0.2}
                        />
                        <ContactMethod
                            icon={FaInstagram}
                            label="Instagram"
                            text="@vision.coding"
                            href="https://www.instagram.com/vision.coding/"
                            delay={0.3}
                        />
                        <ContactMethod
                            icon={SiKakao}
                            label="KakaoTalk"
                            text="@visioncodingcqt"
                            href="https://kakao.com"
                            delay={0.4}
                        />
                        <ContactMethod
                            icon={FaWhatsapp}
                            label="WhatsApp"
                            text="6049003707"
                            href="https://wa.me/16049003707"
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>

            {/* Message Form Section */}
            <section className="py-20 bg-surface">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Send us a Message</h2>
                        <p className="text-white/70">We'd love to hear from you</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="First Name"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                    required
                                />
                                <Input
                                    label="Last Name (optional)"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                />
                            </div>
                            <Input
                                label="Contact"
                                name="contact"
                                placeholder="Email or Phone #"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                required
                            />
                            <TextArea
                                label="Message"
                                name="content"
                                placeholder="Message"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                required
                            />
                            <div className="flex justify-center mb-6">
                                <ReCAPTCHA
                                    sitekey="6Lc6lSgqAAAAAGuz6cbWxpmEjkgaTRT_8v1sXkEQ"
                                    ref={captchaRef}
                                    theme="dark"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>

                            {notification && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`text-center mt-4 ${
                                        notification.includes("successfully")
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }`}
                                >
                                    {notification}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-black">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h2>
                        <p className="text-white/70">Visit us at our convenient locations</p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <motion.a
                                href="https://www.google.com/maps/search/?api=1&query=2428+Haywood+Ave+West+Vancouver+BC+V7V+1Y1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 flex items-center justify-center group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-300">
                                        <FaMapMarkerAlt size={20} className="text-yellow-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">West Vancouver</h3>
                                </div>
                                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                    2428 Haywood Ave, West Vancouver, BC V7V 1Y1
                                </p>
                            </motion.a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83196.59938726886!2d-123.33264520273437!3d49.33523070000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f5e357e6601%3A0xfe3a1182e56f9edb!2sVision%20Coding%20Academy!5e0!3m2!1sen!2sca!4v1715361821515!5m2!1sen!2sca"
                                width="100%"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="space-y-6">
                            <motion.a
                                href="https://www.google.com/maps/search/?api=1&query=2885+Barnet+Hwy+Coquitlam+BC+V3B+1C1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 flex items-center justify-center group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-300">
                                        <FaMapMarkerAlt size={20} className="text-yellow-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Coquitlam</h3>
                                </div>
                                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                    2885 Barnet Hwy, Coquitlam, BC V3B 1C1
                                </p>
                            </motion.a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                                width="100%"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
