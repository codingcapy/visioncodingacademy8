
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Contact page for Vision Coding Academy
 */

import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import { useEffect, useState } from 'react';
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DOMAIN from '../services/endpoint';
import visionCodingIcon from "/yellow1.png"

export default function ContactPage() {

    const [notification, setNotification] = useState("")
    const [fNameInput, setFNameInput] = useState("")
    const [lNameInput, setLNameInput] = useState("")
    const [contactInput, setContactInput] = useState("")
    const [contentInput, setContentInput] = useState("")

    useEffect(() => {
        document.title = 'Contact | Vision Coding';
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

    async function handleSubmit(e) {
        e.preventDefault();
        const first_name = e.target.firstname.value;
        const last_name = e.target.lastname.value;
        const contact = e.target.contact.value;
        const content = e.target.content.value;
        const newQuestion = { first_name, last_name, contact, content }
        try {
            const res = await axios.post(`${DOMAIN}/api/questions`, newQuestion);
            if (res?.data.success) {
                setNotification("Message sent successfully! If you need a response, we will get back to you as soon as possible :)")
                setFNameInput("")
                setLNameInput("")
                setContactInput("")
                setContentInput("")
            }
            else {
                setNotification("There was an error sending the message :( We will look into this issue, please try again in the near future!")
            }
        }
        catch (err) {
            setNotification("There was an error sending the message :( We will look into this issue, please try again in the near future!")
        }
    }

    return (
        <>
            <section className="about overflow-x-hidden">
                <h1 className="">
                    <span className="timeline-content js--fadeInRight text-4xl md:text-8xl text-center">Code With Us</span>
                </h1>
                <p className="timeline-content js--fadeInRight text-md md:text-2xl pt-5">Coding isn't just for computers,</p>
                <p className="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">it's the language of the <span
                    className="text-yellow-200 font-bold">future</span>,
                    and your fluency begins <span className="text-yellow-200 font-bold">now!</span></p>
                <p className="timeline-content js--fadeInRight text-lg md:text-2xl pt-5">English / 한국어</p>
            </section>
            <main className="flex-1 overflow-x-hidden">
                <div className="bg-black text-white flex flex-col px-2">
                    <section className="py-10 border-b">
                        <h2 className="text-4xl md:text-6xl text-center py-5 text-yellow-200">Contact Info</h2>
                        <div className="max-w-[1000px] mx-auto md:grid md:grid-cols-2 px-2">
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
                    <section className="mx-auto">
                        <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                            <h1 className="text-center text-4xl py-10 text-yellow-200">Questions?</h1>
                            <div className="flex flex-col">
                                <label htmlFor="title">First Name</label>
                                <input type="text" name='firstname' id='firstname' placeholder="First Name" required
                                    className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" value={fNameInput} onChange={(e) => setFNameInput(e.target.value)} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="content">Last Name (optional)</label>
                                <input type="text" name='lastname' id='lastname' placeholder='Last Name' rows="10"
                                    cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" value={lNameInput} onChange={(e) => setLNameInput(e.target.value)} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="content">Contact</label>
                                <input type="text" name='contact' id='contact' placeholder='Email or Phone #' required
                                    rows="10" cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" value={contactInput} onChange={(e) => setContactInput(e.target.value)} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="content">Message</label>
                                <textarea type="text" name='content' id='content' placeholder='Message' required rows="10"
                                    cols="40" value={contentInput} className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" onChange={(e) => setContentInput(e.target.value)} />
                            </div>
                            <button className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Submit</button>
                        </form>
                    </section>
                    <p className='text-center'>{notification}</p>
                    <div className="mt-20">
                        <div
                            className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                        </div>
                        <img src={visionCodingIcon} alt=""
                            className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
                    </div>
                    <section className="md:flex mx-auto py-10 w-[100%]">
                        <div className="mx-2 w-[100%]">
                            <h1 className="text-2xl py-2">Coquitlam Location</h1>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                                width="300" height="450" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="map mx-auto"></iframe>

                        </div>
                        <div className="mx-2 py-10 md:py-0 w-[100%]">
                            <h1 className="text-2xl py-2">West Vancouver Location</h1>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83196.59938726886!2d-123.33264520273437!3d49.33523070000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f5e357e6601%3A0xfe3a1182e56f9edb!2sVision%20Coding%20Academy!5e0!3m2!1sen!2sca!4v1715361821515!5m2!1sen!2sca"
                                width="300" height="450" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="map mx-auto"></iframe>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}