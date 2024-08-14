
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: About page for Vision Coding Academy
 */

import { useEffect } from 'react';
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import visionCodingLetters from "/vision-banner-letters.png"
import jayImg from "/member1_jay4.png"
import dannyImg from "/member2_danny4.png"
import uhdImg from "/member3_uhd3.png"
import lukeImg from "/member4_luke4.png"
import raulImg from "/member9_raul2.jpg"
import noIcon from "/lightbulb-black.jpg"
import paulImg from "/member7_paul.jpg"
import taylorImg from "/member8_taylor3.png"
import testimonial1 from "/testimonial1.jpg"
import testimonial2 from "/testimonial2.jpg"
import testimonial3 from "/testimonial3.jpg"

export default function AboutPage() {

    useEffect(() => {
        document.title = 'About | Vision Coding';
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

    useEffect(() => {
        const $images = $('.image');

        $images.each((index, image) => {
            $(image).on('click', () => {
                const lightbox = $('<div></div>').addClass('lightbox')[0];

                const fullSizeImage = document.createElement('img');
                fullSizeImage.src = image.src;
                fullSizeImage.classList.add('lightbox-image');
                lightbox.appendChild(fullSizeImage);

                const leftArrow = document.createElement('div');
                leftArrow.classList.add('arrow', 'left-arrow');
                leftArrow.innerHTML = '&lt;';
                lightbox.appendChild(leftArrow);

                const rightArrow = document.createElement('div');
                rightArrow.classList.add('arrow', 'right-arrow');
                rightArrow.innerHTML = '&gt;';
                lightbox.appendChild(rightArrow);

                let currentIndex = index;

                function showImage(index) {
                    fullSizeImage.classList.add('fade-out');
                    setTimeout(() => {
                        fullSizeImage.src = $images.eq(index).attr('src');
                        fullSizeImage.classList.remove('fade-out');
                        fullSizeImage.classList.add('fade-in');
                    }, 300);
                }

                $(leftArrow).on('click', (event) => {
                    event.stopPropagation();
                    currentIndex = (currentIndex - 1 + $images.length) % $images.length;
                    showImage(currentIndex);
                });

                $(rightArrow).on('click', (event) => {
                    event.stopPropagation();
                    currentIndex = (currentIndex + 1) % $images.length;
                    showImage(currentIndex);
                });

                $(lightbox).on('click', (event) => {
                    if (event.target === lightbox) {
                        lightbox.classList.add('fade-out');
                        setTimeout(() => {
                            document.body.removeChild(lightbox);
                        }, 500);
                    }
                });

                document.body.appendChild(lightbox);

                setTimeout(() => {
                    lightbox.classList.add('fade-in');
                }, 50);
            });
        });
    }, []);

    return (
        <main className="flex-1 overflow-x-hidden">
            <section className="about">
                <h1 className="">
                    <span className="timeline-content js--fadeInRight text-5xl md:text-8xl">About Us</span>
                </h1>
                <p className="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">Code with <span
                    className="text-yellow-200 font-bold">passion</span> and <span
                        className="text-yellow-200 font-bold">excitement</span>
                </p>
            </section>
            <div className="bg-black text-white flex flex-col">
                <section className="py-10 max-w-[1000px] mx-auto">
                    <div className="py-5">
                        <h2 className="text-4xl md:text-6xl text-center py-5 text-yellow-200">Our Story</h2>
                        <p className="hidden md:block text-lg md:text-2xl px-10">Vision Coding Academy's story began with a
                            simple yet
                            powerful
                            vision: to transform the way young minds interact with technology. Our director, Jay,
                            combined his extensive experience in tech and education to establish an academy where coding
                            is more than a subject - it's a gateway to innovation and future possibilities. Over the
                            years, our team of IT industry experts has expanded, each bringing their unique expertise to
                            enrich our curriculum. Together, we have created a dynamic learning environment where
                            students are encouraged to think critically, solve problems creatively, and prepare for a
                            future where they can make a real difference in the world of technology</p>
                        <p className="md:hidden text-lg md:text-2xl px-10">Vision Coding Academy's story began with a simple
                            yet
                            powerful
                            vision: to transform the way <span className="text-yellow-200">young minds</span> interact with
                            <span className="pl-1 text-yellow-200">technology</span>.</p>
                        <p className="md:hidden text-lg md:text-2xl px-10 py-5">Over the
                            years, our team of IT industry experts has expanded, each bringing their <span
                                className="text-yellow-200">unique expertise</span> to
                            enrich our curriculum.</p>
                        <p className="md:hidden text-lg md:text-2xl px-10">Together, we've created a dynamic learning
                            environment where
                            students are encouraged to <span
                                className="text-yellow-200">think critically</span>, solve problems creatively, and prepare for a
                            future where they can make a real difference in the world of technology</p>
                    </div>
                </section>
                <section className="md:max-w-[1000px] mx-auto pb-10 md:py-20">
                    <h2 className="timeline-content js--fadeInLeft text-center pl-2 text-4xl md:text-6xl pb-10 text-yellow-200">Meet Our Director</h2>
                    <div className="timeline-content js--fadeInRight md:float-right ml-10">
                        <img src={jayImg} className="w-[250px] mx-auto rounded-full" />
                        <h1 className="md:pl-2 text-3xl text-center">Jay</h1>
                        <div className="md:pl-2 text-lg md:text-xl py-5">Director and DevOps Engineer</div>
                    </div>
                    <p className="timeline-content js--fadeInLeft px-2 text-lg md:text-2xl text-center md:text-left">
                        At Vision Coding Academy, I, Jay, blend
                        my <span className="text-yellow-200">tech know-how</span> with <span
                            className="text-yellow-200">educational
                            insights</span> to create a <span className="text-yellow-200">dynamic learning environment</span>. My journey in tech and
                        teaching isn't just about imparting
                        knowledge;
                        it's about <span className="text-yellow-200">igniting a passion for innovation and
                            problem-solving</span> in our students.
                    </p>
                </section>
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-4xl md:text-6xl text-yellow-200">Meet The Team</h3>
                </section>
                <section className="py-10 md:grid md:grid-cols-5 md:pl-20 mx-auto">
                    <div>
                        <img src={dannyImg} alt="Danny" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Danny</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Branch Manager</h2>
                    </div>
                    <div>
                        <img src={uhdImg} alt="Hwanyong" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Hwanyong</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Backend Engineer</h2>
                    </div>
                    <div>
                        <img src={lukeImg} alt="Luke" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">
                            Luke</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={paulImg} alt="Paul" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Paul</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={raulImg} alt="Drew" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Raul</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Software Engineer</h2>
                    </div>
                    <div>
                        <img src={taylorImg} alt="Taylor" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Taylor</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Madhu" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Sean</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Software Engineer</h2>
                    </div>

                    <div>
                        <img src={noIcon} alt="Kay" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">
                            Kay</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Project Manager</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="JK" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">JK</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Mentor @ Microsoft</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Andy" className="timeline-content js--fadeInRight w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Andy</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Mentor @ AWS amazon</h2>
                    </div>
                </section>
                <section className="py-10 max-w-[1000px] mx-auto">
                    <div className="py-5">
                        <h2 className="text-4xl md:text-6xl text-center text-yellow-200 py-5">Our Students</h2>
                        <p className="text-center text-lg md:text-2xl">Testimonial reviews & comments</p>
                    </div>
                    <div className="md:flex mx-auto py-10">
                        <img src={testimonial1} alt="Jay" className="image rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3 cursor-pointer" />
                        <img src={testimonial2} alt="Jay" className="image rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3 cursor-pointer" />
                        <img src={testimonial3} alt="Jay" className="image rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3 cursor-pointer" />
                    </div>
                </section>
                <section className="md:py-10">
                    <h2 className="text-4xl md:text-6xl text-center py-10 text-yellow-200">Our Future Goals</h2>
                    <div className="max-w-[1000px] mx-auto px-10 md:px-0">
                        <div className="py-10">
                            <h3 className="pl-2 text-2xl md:text-4xl text-yellow-200">Expansion of our location</h3>
                            <p className="pl-2 text-lg md:text-2xl">We are expecting new locations in Surrey, UBC, Langley
                                and
                                West
                                Vancouver in
                                2024 and more in
                                forthcoming years. </p>
                        </div>
                        <div className="py-10">
                            <h2 className="pl-2 md:pl-48 text-2xl md:text-4xl text-yellow-200">Expand Educational Reach
                            </h2>
                            <p className="pl-2 md:pl-48 text-lg md:text-2xl">Broaden our curriculum to include emerging
                                technologies
                                like
                                AI, robotics, and
                                data science,
                                catering
                                to a wider range of interests and career paths.</p>
                        </div>
                        <div className="py-10">
                            <h2 className="pl-2 text-2xl md:text-4xl text-yellow-200">Enhance Online Learning Platforms
                            </h2>
                            <p className="pl-2 text-lg md:text-2xl">Develop a robust online learning platform to make our
                                courses
                                accessible to
                                students beyond
                                Vancouver, reaching across Canada and potentially globally.</p>
                        </div>
                    </div>
                </section>
                <section className="py-10 border-b">
                    <h2 className="glow text-4xl md:text-6xl text-center py-10 text-yellow-200">Code with us</h2>
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
        </main>
    )
}