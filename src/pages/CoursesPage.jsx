
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Courses page for Vision Coding Academy
 */

import { useEffect } from 'react';
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { NavLink } from 'react-router-dom';
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import visionCodingIcon from "/yellow1.png"
import icon7 from "/icon7python.png"
import icon18 from "/icon18teamwork.png"
import icon23 from "/icon23mind-map.png"
import icon39 from "/icon39web.png"
import icon44 from "/icon44developer.png"
import icon53 from "/icon53vr.png"
import icon59 from "/icon59hacker.png"
import icon69 from "/icon69cs.png"
import icon70 from "/icon70cpp.svg"
import icon71 from "/icon71c.png"
import icon75 from "/icon75arduino.svg"
import devops from "/devops.jpg"

export default function CoursesPage() {

    useEffect(() => {
        document.title = 'Courses | Vision Coding';
    }, []);

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
        <main className="flex-1">
            <div className="bg-black text-white flex flex-col md:w-[1000px] lg:w-[1440px] mx-auto">
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-5xl md:text-8xl py-10 pb-5 text-center">Vision Coding Courses</h3>
                    <p className="timeline-content js--fadeInLeft text-center text-lg md:text-2xl px-10">Each course is
                        crafted
                        for
                        hands-on, practical learning,</p>
                    <p className="timeline-content js--fadeInLeft text-center text-lg md:text-2xl">guided by our team of
                        industry
                        experts.</p>
                </section>
                <div className="md:hidden h-[60px]">
                    <div
                        className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                    </div>
                    <img src={visionCodingIcon} alt=""
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                </div>
                <div className='md:grid grid-cols-2'>
                    <div>
                        <h1 className="pb-10 text-4xl md:text-6xl text-yellow-200 text-center">K-12 Courses</h1>
                        <section className="md:w-[500px] mx-auto">
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/python">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon7} alt="course1" className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">PYTHON BEGINNER</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">Beginner-friendly and powerful programming
                                            language used in data science and AI!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/python2">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon7} alt="course1" className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">PYTHON INTERMEDIATE</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">Challenge your fundamentals of Python skills by
                                            building exciting projects!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/webdev">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon39} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">WEB DEVELOPMENT</div>
                                        <div className="text-2xl font-bold py-2">HTML, CSS and JavaScript</div>
                                        <div className="text-xl font-bold py-2">The most popular form of software development -
                                            build, design, and deploy websites and web apps!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/webdev2">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon39} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">WEB DEVELOPMENT 2</div>
                                        <div className="text-2xl font-bold py-2">React and Node.js</div>
                                        <div className="text-xl font-bold py-2">Learn front end development with React.js and back end development with Node.js and become a Full Stack Developer!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/csharp">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon69} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">C#</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">The programming language built by Microsoft! Learn the language most commonly used in game development with Unity engine, as well as web development with ASP.Net</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/roblox">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon53} alt="course1" className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">ROBLOX VR</div>
                                        <div className="text-2xl font-bold py-2">Fun Interactive Learning</div>
                                        <div className="text-xl font-bold py-2">Suitable for all ages, learn to program roblox
                                            using Luau!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/arduino">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon75} alt="course1"
                                            className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">ARDUINO & STEM</div>
                                        <div className="text-2xl font-bold py-2">Simple and Fun Electronics</div>
                                        <div className="text-xl font-bold py-2">Arduino is an engaging experience for all ages
                                            interested in building and operating electronics!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/c">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon71} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">C</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">The beating heart and core of programming -
                                            learn one of the oldest and most useful programming languages in the world!
                                        </div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/cpp">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon70} alt="course1" className="w-[80px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">C++</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">One of the most powerful languages in the world,
                                            C++ is used in system software, game development, embedded systems, and
                                            scientific computing
                                        </div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="./apcs">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon23} alt="course1" className="w-[80px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">AP CS</div>
                                        <div className="text-2xl font-bold py-2">Advanced Placement Computer Science</div>
                                        <div className="text-xl font-bold py-2">Take our AP computer science courses and ace your
                                            exams!
                                        </div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="./ccc">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon59} alt="course1" className="w-[80px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">CCC</div>
                                        <div className="text-2xl font-bold py-2">Canadian Computing Competition</div>
                                        <div className="text-xl font-bold py-2">Want to score high in the CCC? Whether you want to
                                            participate in the junior or senior event, our instructors help you ace it!
                                        </div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="md:hidden mt-16 h-[30px]">
                                <div
                                    className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                                </div>
                                <img src="../images/yellow1.png" alt=""
                                    className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                            </div>
                        </section>
                    </div>
                    <div>
                        <h1 className="pb-10 text-4xl md:text-6xl text-yellow-200 text-center" id="computer-science">Adult
                            Courses</h1>
                        <section className="md:w-[500px] mx-auto">
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/interviewprep">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon18} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">TECH INTERVIEW PREP</div>
                                        <div className="text-2xl font-bold py-2">Interview Preparation and Hands-on Project
                                        </div>
                                        <div className="text-xl font-bold py-2">Get personally catered mentorship and coaching
                                            to advance your career in the tech industry!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/advancedcs">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon44} alt="course1" className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">ADVANCED CS</div>
                                        <div className="text-2xl font-bold py-2">Beyond Boot Camps</div>
                                        <div className="text-xl font-bold py-2">Strengthen your knowledge of Computer Architecture, Operating Systems, Data Communication and Algorithm Analysis beyond HTML, CSS, JS, React, and Node</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/devops">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={devops} alt="course1" className="w-[150px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">DEVOPS</div>
                                        <div className="text-2xl font-bold py-2">Development and Operations</div>
                                        <div className="text-xl font-bold py-2">Learn Continuous Integraton and Deployment and automation of IT operations</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="./c">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon71} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">C</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">The beating heart and core of programming -
                                            learn one of the oldest and most useful programming languages in the world!
                                        </div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="./cpp">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon70} alt="course1" className="w-[80px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">C++</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">One of the most powerful languages in the world,
                                            C++ is used in system software, game development, embedded systems, and
                                            scientific computing
                                        </div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="./python">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon7} alt="course1" className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">PYTHON BEGINNER</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">Beginner-friendly and powerful programming
                                            language used in data science and AI!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="./python2">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon7} alt="course1" className="w-[100px] mx-auto mx-center" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">PYTHON INTERMEDIATE</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">Challenge your fundamentals of Python skills by
                                            building exciting projects!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="../courses/webdev">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon39} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">WEB DEVELOPMENT</div>
                                        <div className="text-2xl font-bold py-2">HTML, CSS and JavaScript</div>
                                        <div className="text-xl font-bold py-2">The most popular form of software development -
                                            build, design, and deploy websites and web apps!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="../courses/webdev2">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon39} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">WEB DEVELOPMENT 2</div>
                                        <div className="text-2xl font-bold py-2">React and Node.js</div>
                                        <div className="text-xl font-bold py-2">Learn front end development with React.js and back end development with Node.js and become a Full Stack Developer!</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                            <div className="timeline-content js--fadeInRight mx-5 md:px-5 md:py-2 rounded-4xl">
                                <NavLink to="/courses/csharp">
                                    <div
                                        className="h-[450px] px-5 md:pr-20 py-5 pb-20 bg-black-700 rounded-3xl border-2 border-yellow-200 hover:bg-neutral-600 ease duration-300">
                                        <img src={icon69} alt="course1" className="w-[100px] mx-auto" />
                                        <div className="text-2xl font-bold py-2 text-yellow-200">C#</div>
                                        <div className="text-2xl font-bold py-2">Programming Language</div>
                                        <div className="text-xl font-bold py-2">The programming language built by Microsoft! Learn the language most commonly used in game development with Unity engine, as well as web development with ASP.Net</div>
                                    </div>
                                    <div
                                        className="relative bottom-10 left-2 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                        Learn More
                                    </div>
                                </NavLink>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}

