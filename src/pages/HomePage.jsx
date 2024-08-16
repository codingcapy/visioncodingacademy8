
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Home page for Vision Coding Academy
 */

import $ from 'jquery';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import codingClass from "/coding-class1.jpg"
import techIcon from "/icon1.svg"
import techIcon2 from "/icon2.svg"
import techIcon3 from "/icon3.svg"
import techIcon4 from "/icon4.svg"
import techIcon5 from "/icon5.svg"
import bgVideo from '/bg2-7.mp4';
import logoAlpha from "/logo_alpha.png"
import homeBanner from "/home-banner.jpg"
import visionCodingIcon from "/yellow1.png"
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import FloatingNav from '../components/FloatingNav';

export default function HomePage() {

    useEffect(() => {
        document.title = 'Home | Vision Coding';
    }, []);

    const [showPopUp, setShowPopUp] = useState(true)

    $(function () {
        window.sr = ScrollReveal();
        if ($(window).width() < 768) {
            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        else {
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInBottom', {
                origin: 'bottom',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInTop', {
                origin: 'top',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    });

    return (
        <main className="flex-1 mx-auto">
            <div>
                <video id="background-video" autoPlay loop muted preload="auto" poster={homeBanner}
                    className="h-[400px] md:h-[700px]">
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="timeline-content js--fadeInRight absolute top-[15%] md:left-[5%] z-10">
                    <div className="flex pt-5 ">
                        <img src={logoAlpha} alt="" className="w-[90px] h-[100px] md:w-[360px] md:h-[405px]" />
                        <div className="flex flex-col md:my-24 md:ml-40 md:pl-10 md:border-l-8">
                            <h1 className="text-4xl md:text-8xl text-yellow-100">VISION CODING ACADEMY</h1>
                            <p className="text-lg md:text-7xl py-2 md:pt-10 pb-0 mulish-light">Become a Great Engineer</p>
                        </div>
                    </div>
                    <p className="text-center text-lg md:text-2xl py-5 md:py-0 md:pb-5 drop-shadow">Discover the Power to
                        <span
                            className="pl-2 bg-gradient-to-r from-yellow-400 to-yellow-100 inline-block text-transparent bg-clip-text">Transform
                            the Future</span> with
                        Every Line
                        of
                        <span
                            className="pl-2 bg-gradient-to-r from-yellow-400 to-yellow-100 inline-block text-transparent bg-clip-text">Code</span>
                    </p>
                    <div className="flex flex-col mx-auto mt-10">
                        <NavLink to="/courses"
                            className="mx-auto px-3 py-3 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">View
                            Courses</NavLink>
                    </div>
                </div>
            </div>
            <section className="intro py-20 md:py-32">
                <div className="md:max-w-[1400px] mx-auto">
                    <h2 className="timeline-content js--fadeInBottom text-4xl pb-4 text-yellow-200">
                        Who we are
                    </h2>
                    <div className="md:grid grid-cols-3 py-5">
                        <iframe
                            width="300"
                            height="315"
                            src="https://www.youtube.com/embed/Y4I_PPDyyMI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="js--fadeInRight border-4 rounded-2xl border-gray-800 mb-10 md:mb-0 md:w-[400px]"
                        ></iframe>
                        <iframe
                            width="300"
                            height="315"
                            src="https://www.youtube.com/embed/VnBJe2vxJjA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="js--fadeInRight border-4 rounded-2xl border-gray-800 mb-10 md:mb-0 md:mx-2 md:w-[400px]"
                        ></iframe>
                        <iframe
                            width="300"
                            height="315"
                            src="https://www.youtube.com/embed/GrfhatH_YjU?start=88"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="js--fadeInRight border-4 rounded-2xl border-gray-800 my-2 md:my-0 md:w-[400px]"
                        ></iframe>
                    </div>
                    <p className="timeline-content js--fadeInBottom pb-2 text-lg md:text-2xl md:py-5">Welcome to Vision
                        Coding
                        Academy,
                        where we fuel young minds with a passion for
                        coding
                        and
                        innovation. Our vibrant team of IT educators in Vancouver creates a dynamic learning environment
                        for students in Grades 1-12.</p>
                    <p className="hidden md:block timeline-content js--fadeInBottom py-2 text-lg md:text-2xl md:py-10">We
                        don't just teach
                        coding;
                        we
                        open doors to creativity and future
                        possibilities. Our
                        curriculum
                        is designed to be engaging, accessible, and tailored to each student's journey, from beginners
                        to advanced student. We aim to build the tech leaders of tomorrow through problem-solving,
                        critical thinking, and teamwork. Discover the joy of coding and the power of imagination with
                        us!</p>
                    <div className="md:static py-20">
                        <img src={codingClass} alt="Coding Class"
                            className="timeline-content js--fadeInBottom md:max-w-[700px] rounded-xl border-white border-4 my-5 md:my-3 md:mr-5" />
                        <div
                            className="md:timeline-content md:js--fadeInRight md:relative md:border md:rounded-3xl md:bottom-[525px] md:left-[500px] md:py-10 md:px-10 md:bg-stone-800 opacity-95 md:max-w-[300px] lg:max-w-[500px] xl:max-w-[900px]">
                            <div className="flex">
                                <IoEyeOutline size={70} color='rgb(253 224 71)' className="hidden md:block w-[50px] pb-5" />
                                <h3
                                    className="timeline-content js--fadeInRight text-4xl md:pl-4 pb-5 text-yellow-200 md:text-yellow-300">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">To forge a future
                                where our
                                students
                                become the
                                leaders
                                of
                                technology, driving innovation and
                                creativity in the digital age.</p>
                            <div className="flex">
                                <TbTargetArrow size={100} color='rgb(253 224 71)' className="hidden md:block w-[50px] pb-5" />
                                <h3
                                    className="timeline-content js--fadeInRight text-4xl md:pl-4 py-5 text-yellow-200 md:text-yellow-300">
                                    Our Mission</h3>
                            </div>
                            <p className="timeline-content js--fadeInRight text-lg md:text-2xl">Ignite a passion for
                                technology in
                                young
                                minds and to
                                equip
                                them with the skills they need to
                                turn their most ambitious dreams into reality.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-10 max-w-[1000px] mx-auto">
                <div className="py-5">
                    <h2 className="timeline-content js--fadeInRight text-4xl md:text-6xl text-center py-5 text-yellow-200">
                        Choose the
                        Class That Fits You Best</h2>
                    <p className="timeline-content js--fadeInRight text-center text-lg md:text-2xl">Every course designed by
                        IT
                        professionals in Canada</p>
                </div>
                <div className="md:hidden mt-16 mb-7 h-[60px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div
                    className="relative md:bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-tr-3xl rounded-bl-3xl md:py-[2px] px-[2px] md:my-10 hover:transform hover:scale-110 transition-all ease duration-300">
                    <div className="bg-black rounded-tr-3xl rounded-bl-3xl md:py-5 px-5">
                        <NavLink to="/courses">
                            <p
                                className="md:absolute md:top-[-20px] md:left-[50px] md:px-5 md:z-[5] md:bg-black timeline-content js--fadeInRight text-lg md:text-2xl text-yellow-200 text-center md:text-left">
                                All Levels</p>
                            <img src={techIcon} alt="tech-icon"
                                className="timeline-content js--fadeInRight mx-auto md:float-left w-[150px] fill-yellow-300" />
                            <h2
                                className="timeline-content js--fadeInRight text-2xl md:text-4xl text-yellow-200 text-center md:text-left">
                                Programming Language</h2>
                            <p
                                className="timeline-content js--fadeInRight text-lg md:text-2xl italic text-gray-500 py-2 text-center md:text-left">
                                Software
                                development
                                courses</p>
                            <p className="timeline-content js--fadeInRight text-lg md:text-2xl text-center md:text-left">Learn programming languages
                                such as
                                Python, Java, C, C++, C#, and JavaScript. Learn the fundamentals of programming such as
                                Object-Oriented Programming, data structures and algorithms, and
                                more.</p>
                        </NavLink>
                    </div>
                </div>
                <div className="md:hidden mt-20 h-[60px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div
                    className="relative md:bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-tr-3xl rounded-bl-3xl md:py-[2px] px-[2px] md:my-10 hover:transform hover:scale-110 transition-all ease duration-300">
                    <div className="bg-black rounded-tr-3xl rounded-bl-3xl md:py-5 px-5">
                        <NavLink to="/courses">
                            <p
                                className="md:absolute md:top-[-20px] md:left-[50px] md:px-5 md:z-[5] md:bg-black timeline-content js--fadeInRight text-lg md:text-2xl text-yellow-200 text-center md:text-left">
                                All Levels</p>
                            <img src={techIcon2} alt="tech-icon2"
                                className="timeline-content js--fadeInRight md:float-right mx-auto w-[150px]" />
                            <h2
                                className="timeline-content js--fadeInRight text-2xl md:text-4xl text-yellow-200 text-center md:text-left">
                                Computer
                                Science
                            </h2>
                            <p
                                className="timeline-content js--fadeInRight text-lg md:text-2xl italic text-gray-500 py-2 text-center md:text-left">
                                Deepen
                                your
                                understanding</p>
                            <p className="timeline-content js--fadeInRight text-lg md:text-2xl text-center md:text-left">Get a boost in computer
                                science
                                classes
                                taught at schools such as CS 10, CS 11, CS 12 and AP CS A. Receive training for
                                competitive
                                computing events like the Canadian Computing Competition.</p>
                        </NavLink>
                    </div>
                </div>
                <div className="md:hidden mt-20 h-[60px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div
                    className="relative md:bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-tr-3xl rounded-bl-3xl md:py-[2px] px-[2px] md:my-10 hover:transform hover:scale-110 transition-all ease duration-300">
                    <div className="bg-black rounded-tr-3xl rounded-bl-3xl md:py-5 px-5">
                        <NavLink to="/courses/interviewprep">
                            <p
                                className="md:absolute md:top-[-20px] md:left-[50px] md:px-5 md:z-[5] md:bg-black timeline-content js--fadeInRight text-lg md:text-2xl text-yellow-200 text-center md:text-left">
                                Intermediate</p>
                            <img src={techIcon3} alt="tech-icon3"
                                className="timeline-content js--fadeInRight md:float-left mx-auto w-[150px]" />
                            <h2
                                className="timeline-content js--fadeInRight text-2xl md:text-4xl text-yellow-200 text-center md:text-left">
                                Project
                                portfolio & Mentorship</h2>
                            <p
                                className="timeline-content js--fadeInRight text-lg md:text-2xl italic text-gray-500 py-2 text-center md:text-left">
                                Prepare
                                for
                                your
                                career</p>
                            <p className="timeline-content js--fadeInRight text-lg md:text-2xl text-center md:text-left">Design, build, test,
                                optimize,
                                deploy,
                                and update capstone projects in an agile Scrum environment and add them to your GitHub
                                and
                                portfolio to enhance hireability.</p>
                        </NavLink>
                    </div>
                </div>
                <div className="md:hidden mt-20 h-[60px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div
                    className="relative md:bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-tr-3xl rounded-bl-3xl md:py-[2px] px-[2px] md:my-10 hover:transform hover:scale-110 transition-all ease duration-300">
                    <div className="bg-black rounded-tr-3xl rounded-bl-3xl md:py-5 px-5">
                        <NavLink to="/courses/ccc">
                            <p
                                className="md:absolute md:top-[-20px] md:left-[50px] md:px-5 md:z-[5] md:bg-black timeline-content js--fadeInRight text-lg md:text-2xl text-yellow-200 text-center md:text-left">
                                Advanced</p>
                            <img src={techIcon4} alt="tech-icon4"
                                className="timeline-content js--fadeInRight md:float-right mx-auto w-[150px]" />
                            <h2
                                className="timeline-content js--fadeInRight text-2xl md:text-4xl text-yellow-200 text-center md:text-left">
                                Computing
                                Competition</h2>
                            <p
                                className="timeline-content js--fadeInRight text-lg md:text-2xl italic text-gray-500 py-2 text-center md:text-left">
                                Custom
                                tailored
                                tutoring</p>
                            <p className="timeline-content js--fadeInRight text-lg md:text-2xl text-center md:text-left">Geared towards students
                                looking to
                                achieve high placement in competitive computing events. This intense training program
                                helps
                                students code fast in a high pressure environment by solving large amounts of complex
                                computing problems.</p>
                        </NavLink>
                    </div>
                </div>
                <div className="md:hidden mt-20 h-[50px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div
                    className="relative md:bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-tr-3xl rounded-bl-3xl md:py-[2px] px-[2px] md:my-10 hover:transform hover:scale-110 transition-all ease duration-300">
                    <div className="bg-black rounded-tr-3xl rounded-bl-3xl md:py-5 px-5">
                        <NavLink to="/courses/interviewprep">
                            <p
                                className="md:absolute md:top-[-20px] md:left-[50px] md:px-5 md:z-[5] md:bg-black timeline-content js--fadeInRight text-lg md:text-2xl text-yellow-200 text-center md:text-left">
                                Career</p>
                            <img src={techIcon5} alt="tech-icon5"
                                className="timeline-content js--fadeInRight md:float-left mx-auto w-[150px]" />
                            <h2
                                className="timeline-content js--fadeInRight text-2xl md:text-4xl text-yellow-200 text-center md:text-left">
                                Interview
                                Preparation</h2>
                            <p
                                className="timeline-content js--fadeInRight text-lg md:text-2xl italic text-gray-500 py-2 text-center md:text-left">
                                University prep
                                and
                                career
                                reinforcement
                            </p>
                            <p className="timeline-content js--fadeInRight text-lg md:text-2xl text-center md:text-left">This customized consultation
                                focuses
                                on
                                preparing students for university
                                applications with
                                focus in Computer Science. It includes guidance on creating a compelling portfolio with
                                multiple GitHub projects and strategies for career advancement in the tech field.</p>
                        </NavLink>
                    </div>
                </div>
                <div className="md:hidden mt-20 h-[70px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div className="flex flex-col py-30 mx-auto">
                    <NavLink to="/courses"
                        className=" text-center px-3 py-3 border-4 rounded border-yellow-300 text-yellow-300 font-bold text-lg md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500 mx-auto w-[200px]">
                        More Courses</NavLink>
                </div>
            </section>
            <div className="bg-black text-white flex flex-col">
                <section className="md:flex py-10">
                    <div className="ad1 mx-2 md:px-20 md:h-96 md:rounded-3xl">
                        <h2 className="text-2xl md:text-4xl md:text-center text-yellow-200">Industry Expertise in Every
                            Classroom
                        </h2>
                        <p className="md:text-center text-lg md:text-2xl">Our strength is our diverse team of IT industry
                            experts
                            from
                            various sectors. They bring a wealth
                            of real-world tech experience to our classrooms, ensuring that our students don't just learn
                            coding as a subject, but as a practical, applied skill relevant to today’s tech industry.
                        </p>
                    </div>
                    <div className="ad2 mx-2 md:px-20 md:rounded-3xl">
                        <div></div>
                        <h2 className="text-2xl md:text-4xl md:text-center text-yellow-200">Practical, Hands-On Curriculum
                        </h2>
                        <p className="md:text-center text-lg md:text-2xl">Our curriculum is specially handcrafted for
                            practicality.
                            Every
                            lesson is designed for active,
                            hands-on learning, ensuring students don't just understand coding concepts but can apply
                            them
                            creatively in real-world scenarios.</p>
                    </div>
                    <div className="ad3 mx-2 md:px-20 md:rounded-3xl">
                        <h2 className="text-2xl md:text-4xl md:text-center text-yellow-200">From Learning to Application
                        </h2>
                        <p className="md:text-center text-lg md:text-2xl">We bridge the gap between theory and practice. Our
                            approach
                            involves project-based learning and
                            real-world case studies, preparing students to confidently tackle real tech challenges.</p>
                    </div>
                </section>
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-4xl md:text-6xl py-10 text-center text-yellow-200">Our Team</h3>
                    <p className="px-10 text-lg md:text-2xl">Meet the driving force behind Vision Coding Academy - a diverse team of IT
                        industry
                        experts
                        specializing in software, hardware, frontend, backend, automation, UI/UX, and web design. Each
                        member brings a unique blend of theoretical knowledge and practical experience, tailored to meet
                        the
                        individual needs and aspirations of our students. </p>
                </section>
                <NavLink to="/about"
                    className="px-3 py-3 my-10 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500 mx-auto">Learn
                    more about us</NavLink>
                <div className="mt-20">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <section className="py-10 border-b">
                    <h2 className="glow text-4xl md:text-6xl text-center pb-10 text-yellow-200">Code with us</h2>
                    <div className="max-w-[1000px] mx-auto md:grid md:grid-cols-2 px-5">
                        <div className="flex md:py-7">
                            <LuMapPin size={25} />
                            <p className="text-lg pl-2">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                        </div>
                        <div className="flex py-7">
                            <LuMapPin size={25} />
                            <p className="text-lg pl-2">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                        </div>
                        <div className="flex md:py-7">
                            <FaInstagram size={25} />
                            <p className="text-lg pl-2">vision.coding</p>
                        </div>
                        <div className="flex py-7">
                            <FaPhoneAlt size={25} />
                            <p className=" text-lg pl-2">+1 604-900-3707</p>
                        </div>
                        <div className="flex md:py-7">
                            <RiKakaoTalkFill size={25} />
                            <p className="text-lg pl-2">@visioncodingcqt</p>
                        </div>
                        <div className="flex py-7">
                            <TfiEmail size={25} />
                            <p className="text-lg pl-2">visioncodingca@gmail.com</p>
                        </div>
                        <div className="flex md:py-7">
                            <FaWhatsapp size={25} />
                            <p className="text-lg pl-2">6049003707</p>
                        </div>
                    </div>
                </section>
                <section className="md:flex mx-auto py-10 w-[100%]">
                    <div className="mx-2 w-[100%]">
                        <h1 className="text-2xl py-2 text-center md:text-left">Coquitlam Location</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                            width="300" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className="map mx-auto"></iframe>

                    </div>
                    <div className="mx-2 py-10 md:py-0 w-[100%]">
                        <h1 className="text-2xl py-2 text-center md:text-left">West Vancouver Location</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83196.59938726886!2d-123.33264520273437!3d49.33523070000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f5e357e6601%3A0xfe3a1182e56f9edb!2sVision%20Coding%20Academy!5e0!3m2!1sen!2sca!4v1715361821515!5m2!1sen!2sca"
                            width="300" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className="map mx-auto"></iframe>
                    </div>
                </section>
            </div>
            <FloatingNav />
        </main>
    )
}