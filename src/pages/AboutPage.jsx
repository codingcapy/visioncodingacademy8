/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: About page for Vision Coding Academy
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LuMapPin } from "react-icons/lu";
import { FaInstagram, FaPhoneAlt, FaWhatsapp, FaCode, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsBuilding } from "react-icons/bs";

// Team Images
import jayImg from "/member1_jay4.png";
import uhdImg from "/member3_uhd3.png";
import paulImg from "/member7_paul.jpg";
import raulImg from "/member9_raul2.jpg";
import noIcon from "/lightbulb-black2.jpg";

// Testimonial Images
import testimonial1 from "/testimonial1.jpg";
import testimonial2 from "/testimonial2.jpg";
import testimonial3 from "/testimonial3.jpg";

const TeamMember = ({ image, name, role, className = "" }) => (
    <div className={`group ${className}`}>
        <div className="relative mb-4 overflow-hidden rounded-2xl">
            <img 
                src={image} 
                alt={name}
                className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-white/70">{role}</p>
    </div>
);

const FutureGoal = ({ icon: Icon, title, description }) => (
    <div className="card group hover:border-yellow-400/30 border border-white/10 transition-all duration-500 hover:translate-y-[-4px]">
        <div className="inline-flex p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 mb-6">
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

const ContactItem = ({ Icon, text, link, type }) => {
    const getHref = () => {
        switch(type) {
            case 'phone': return `tel:${text.replace(/[^0-9]/g, '')}`;
            case 'email': return `mailto:${text}`;
            case 'instagram': return `https://instagram.com/${text.replace('@', '')}`;
            case 'whatsapp': return `https://wa.me/${text}`;
            default: return link || '#';
        }
    };

    return (
        <a 
            href={getHref()}
            target={type === 'phone' || type === 'email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
        >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Icon size={24} className="text-yellow-400" />
            </div>
            <p className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                {text}
            </p>
        </a>
    );
};

export default function AboutPage() {
    useEffect(() => {
        document.title = 'About | Vision Coding';
    }, []);

    useScrollReveal();

    const team = [
        { image: jayImg, name: "Jay", role: "Director & DevOps Engineer" },
        { image: uhdImg, name: "Hwanyong", role: "Backend Engineer" },
        { image: paulImg, name: "Paul", role: "Full Stack Developer" },
        { image: raulImg, name: "Raul", role: "Software Engineer" },
        { image: noIcon, name: "Jessie", role: "Software Engineer" },
        { image: noIcon, name: "Kay", role: "Software Engineer" },
        { image: noIcon, name: "JK", role: "Mentor @ Microsoft" },
        { image: noIcon, name: "Andy", role: "Mentor @ AWS Amazon" }
    ];

    const futureGoals = [
        {
            icon: BsBuilding,
            title: "Expansion of Locations",
            description: "We are expanding to Surrey, UBC, Langley, and West Vancouver in 2024, with more locations planned for the coming years."
        },
        {
            icon: FaGraduationCap,
            title: "Expand Educational Reach",
            description: "Broadening our curriculum to include emerging technologies like AI, robotics, and data science, catering to diverse interests and career paths."
        },
        {
            icon: FaGlobe,
            title: "Enhance Online Learning",
            description: "Developing a robust online learning platform to make our courses accessible to students across Canada and potentially globally."
        }
    ];

    const contactInfo = [
        { Icon: LuMapPin, text: "2885 Barnet Hwy, Coquitlam, BC V3B 1C1", type: "address" },
        { Icon: LuMapPin, text: "2428 Haywood Ave, West Vancouver, BC V7V 1Y1", type: "address" },
        { Icon: FaInstagram, text: "vision.coding", type: "instagram" },
        { Icon: FaPhoneAlt, text: "+1 604-900-3707", type: "phone" },
        { Icon: RiKakaoTalkFill, text: "@visioncodingcqt", type: "kakao" },
        { Icon: TfiEmail, text: "visioncodingca@gmail.com", type: "email" },
        { Icon: FaWhatsapp, text: "6049003707", type: "whatsapp" }
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
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl animate-fade-in">
                        Code with <span className="text-yellow-400">passion</span> and <span className="text-yellow-400">excitement</span>
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section bg-gradient-to-b from-black via-surface to-black">
                <div className="container">
                    <h2 className="section-title mb-16">Our Story</h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-white/80 leading-relaxed mb-8">
                            Vision Coding Academy's story began with a simple yet powerful vision: to transform the way young minds interact with technology. Our director, Jay, combined his extensive experience in tech and education to establish an academy where coding is more than a subject - it's a gateway to innovation and future possibilities.
                        </p>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Over the years, our team of IT industry experts has expanded, each bringing their unique expertise to enrich our curriculum. Together, we have created a dynamic learning environment where students are encouraged to think critically, solve problems creatively, and prepare for a future where they can make a real difference in the world of technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <h2 className="section-title mb-16">Meet Our Team</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <TeamMember 
                                key={index} 
                                {...member}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <h2 className="section-title mb-16">Student Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[testimonial1, testimonial2, testimonial3].map((image, index) => (
                            <div 
                                key={index}
                                className="relative aspect-square rounded-full overflow-hidden border-4 border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 group"
                            >
                                <img 
                                    src={image} 
                                    alt={`Student Testimonial ${index + 1}`}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Goals Section */}
            <section className="section bg-gradient-to-b from-black to-surface">
                <div className="container">
                    <h2 className="section-title mb-16">Our Future Goals</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {futureGoals.map((goal, index) => (
                            <FutureGoal 
                                key={index} 
                                {...goal}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section bg-gradient-to-b from-surface to-black">
                <div className="container">
                    <h2 className="section-title mb-16">Get in Touch</h2>
                    
                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                        {contactInfo.map((item, index) => (
                            <ContactItem 
                                key={index} 
                                {...item}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            />
                        ))}
                    </div>

                    {/* Maps */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                                Coquitlam Location
                            </h3>
                            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-colors duration-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                                West Vancouver Location
                            </h3>
                            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-colors duration-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83196.59938726886!2d-123.33264520273437!3d49.33523070000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f5e357e6601%3A0xfe3a1182e56f9edb!2sVision%20Coding%20Academy!5e0!3m2!1sen!2sca!4v1715361821515!5m2!1sen!2sca"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
