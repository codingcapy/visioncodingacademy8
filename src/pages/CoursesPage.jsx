
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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <div className="bg-black text-white flex flex-col lg:w-[1000px] xl:w-[1440px] mx-auto">
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-5xl lg:text-8xl py-10 pb-5 text-center">Vision Coding Courses</h3>
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
                        className="relative bottom-[45px] md:bottom-[60px] left-[40%] lg:left-[48%] w-[75px] lg:w-[100px] bg-black" />
                </div>
                <div className='xl:grid grid-cols-2'>
                    <div>
                        <h1 className="pb-10 text-4xl md:text-6xl text-yellow-200 text-center">K-12 Courses</h1>
                        <section className="sm:w-[500px] mx-auto">
                        <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold text-yellow-200">
                                        <img src={icon7} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 pl-10 text-yellow-200">PYTHON BEGINNER</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">Beginner-friendly and powerful programming
                                            language used in data science and AI!</h4>
                                        <NavLink to="/courses/python">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight rounded-4xl rounded-3xl border-2 border-yellow-200 mb-10">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon7} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-[20px] md:text-[22px] font-bold py-10 px-5 md:pl-10 text-yellow-200">PYTHON INTERMEDIATE</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">Challenge your fundamentals of Python skills by
                                            building exciting projects!</h4>
                                        <NavLink to="/courses/python2">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon39} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-[20px] md:text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">WEB DEVELOPMENT</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">HTML, CSS and JavaScript</h3>
                                        <h4 className="text-xl font-bold py-2">The most popular form of software development -
                                            build, design, and deploy websites and web apps!</h4>
                                        <NavLink to="/courses/webdev">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon39} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-[20px] md:text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">WEB DEVELOPMENT 2</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">React and Node.js</h3>
                                        <h4 className="text-xl font-bold py-2">Learn front end development with React.js and back end development with Node.js and become a Full Stack Developer!</h4>
                                        <NavLink to="/courses/webdev2">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon69} alt="course1" className="w-[100px] bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">C#</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">The programming language built by Microsoft! Learn the language most commonly used in game development with Unity engine, as well as web development with ASP.Net</h4>
                                        <NavLink to="/courses/csharp">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon53} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">ROBLOX VR</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Fun Interactive Learning</h3>
                                        <h4 className="text-xl font-bold py-2">Suitable for all ages, learn to program roblox
                                            using Luau!</h4>
                                        <NavLink to="/courses/roblox">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon75} alt="course1" className="w-[100px] py-6 md:py-3 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">ARDUINO & STEM</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Simple and Fun Electronics</h3>
                                        <h4 className="text-xl font-bold py-2">Arduino is an engaging experience for all ages
                                            interested in building and operating electronics!</h4>
                                        <NavLink to="/courses/arduino">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon71} alt="course1" className="w-[100px] bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">C</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">The beating heart and core of programming -
                                            learn one of the oldest and most useful programming languages in the world!</h4>
                                        <NavLink to="/courses/c">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon70} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">C++</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">One of the most powerful languages in the world,
                                            C++ is used in system software, game development, embedded systems, and
                                            scientific computing</h4>
                                        <NavLink to="/courses/cpp">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon23} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">AP CS</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Advanced Placement Computer Science</h3>
                                        <h4 className="text-xl font-bold py-2">Take our AP computer science courses and ace your
                                            exams!</h4>
                                        <NavLink to="/courses/apcs">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon59} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">CCC</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Canadian Computing Competition</h3>
                                        <h4 className="text-xl font-bold py-2">Want to score high in the CCC? Whether you want to
                                            participate in the junior or senior event, our instructors help you ace it!</h4>
                                        <NavLink to="/courses/ccc">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
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
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight rounded-4xl rounded-3xl border-2 border-yellow-200">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon18} alt="course1" className="w-[75px] md:w-[100px] bg-black text-white py-10 md:py-0" />
                                        <h2 className="text-2xl font-bold py-10 pl-10 text-yellow-200 text-center">TECH INTERVIEW PREP</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">TECH INTERVIEW PREP</h3>
                                        <h4 className="text-xl font-bold py-2">Interview Preparation and Hands-on Project</h4>
                                        <NavLink to="/courses/interviewprep">
                                            <div
                                                className="relative top-10 left-20 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight rounded-4xl rounded-3xl border-2 border-yellow-200 mb-10">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon44} alt="course1" className="w-[100px] bg-black text-white py-5 md:py-2" />
                                        <h2 className="text-2xl font-bold py-10 pl-10 text-yellow-200 text-center">ADVANCED CS</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Beyond Boot Camps</h3>
                                        <h4 className="text-xl font-bold py-2">Strengthen your knowledge of Computer Architecture, Operating Systems, Data Communication and Algorithm Analysis beyond HTML, CSS, JS, React, and Node</h4>
                                        <NavLink to="/courses/advancedcs">
                                            <div
                                                className="relative top-10 left-20 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight rounded-4xl rounded-3xl border-2 border-yellow-200 mb-10">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={devops} alt="course1" className="w-[100px] bg-black text-white py-3" />
                                        <h2 className="text-2xl font-bold py-10 pl-10 text-yellow-200 text-center">DEVOPS</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Development and Operations</h3>
                                        <h4 className="text-xl font-bold py-2">Learn Continuous Integraton and Deployment and automation of IT operations</h4>
                                        <NavLink to="/courses/devops">
                                            <div
                                                className="relative top-10 left-20 text-center md:left-[0px] w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon71} alt="course1" className="w-[100px] bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">C</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">The beating heart and core of programming -
                                            learn one of the oldest and most useful programming languages in the world!</h4>
                                        <NavLink to="/courses/c">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon70} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">C++</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">One of the most powerful languages in the world,
                                            C++ is used in system software, game development, embedded systems, and
                                            scientific computing</h4>
                                        <NavLink to="/courses/cpp">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold text-yellow-200">
                                        <img src={icon7} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 pl-10 text-yellow-200">PYTHON BEGINNER</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">Beginner-friendly and powerful programming
                                            language used in data science and AI!</h4>
                                        <NavLink to="/courses/python">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight rounded-4xl rounded-3xl border-2 border-yellow-200 mb-10">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon7} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-[20px] md:text-[22px] font-bold py-10 px-5 md:pl-10 text-yellow-200">PYTHON INTERMEDIATE</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">Challenge your fundamentals of Python skills by
                                            building exciting projects!</h4>
                                        <NavLink to="/courses/python2">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon39} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-[20px] md:text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">WEB DEVELOPMENT</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">HTML, CSS and JavaScript</h3>
                                        <h4 className="text-xl font-bold py-2">The most popular form of software development -
                                            build, design, and deploy websites and web apps!</h4>
                                        <NavLink to="/courses/webdev">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon39} alt="course1" className="w-[100px] py-6 md:py-0 bg-black text-white" />
                                        <h2 className="text-[20px] md:text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">WEB DEVELOPMENT 2</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">React and Node.js</h3>
                                        <h4 className="text-xl font-bold py-2">Learn front end development with React.js and back end development with Node.js and become a Full Stack Developer!</h4>
                                        <NavLink to="/courses/webdev2">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className='mb-10 px-2 md:px-0'>
                                <Accordion sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1rem',
                                    borderColor: 'rgb(254 240 138)',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }} className="timeline-content js--fadeInRight">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content" expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: 'rgb(254 240 138)' }} />} className="text-2xl font-bold py-2 text-yellow-200">
                                        <img src={icon69} alt="course1" className="w-[100px] bg-black text-white" />
                                        <h2 className="text-2xl font-bold py-10 px-5 md:pl-10 text-yellow-200">C#</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className=''>
                                        <h3 className="text-2xl font-bold py-2">Programming Language</h3>
                                        <h4 className="text-xl font-bold py-2">The programming language built by Microsoft! Learn the language most commonly used in game development with Unity engine, as well as web development with ASP.Net</h4>
                                        <NavLink to="/courses/csharp">
                                            <div
                                                className="relative top-10 text-center w-[200px] mx-auto px-3 py-3 bg-black border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">
                                                Learn More
                                            </div>
                                        </NavLink>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}

