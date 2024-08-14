

import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import vr from "/icon53vr.png"
import python from "/icon7python.png"
import webdev from "/icon39web.png"
import hacker from "/icon59hacker.png"
import roblox from "/icon12roblox.png"
import java from "/icon68java.png"
import c from "/icon71c.png"
import cs from "/icon69cs.png"
import portfolio from "/icon26portfolio.png"
import cpp from "/icon70cpp.svg"

export default function SchedulePage() {

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
        <>

            <section className="hero-banner2 bg-white">
                <h1 className="timeline-content js--fadeInRight">
                    <div className="flex flex-col mx-auto">
                        <h1 className="md:pl-2 text-4xl md:text-6xl py-10 pb-5 text-center">Vision Coding Courses Schedule</h1>
                        <p className="timeline-content js--fadeInLeft text-center md:text-lg">Find the schedule for the course
                            that is perfect for you.</p>
                    </div>
                </h1>
            </section>
            <main className="flex-1 mx-auto px-2">
                <div className="bg-black text-white flex flex-col">
                    <section className="flex flex-col mx-auto py-10">
                        <h2 className="timeline-content js--fadeInRight text-2xl md:text-5xl pb-5 text-center font-bold">
                            Summer Camp Event<span className="text-green-500 px-2 pb-5 text-2xl font-bold">NEW!</span></h2>
                        <div className="static timeline-content js--fadeInRight py-10">
                            <a href="../courses/comingsoon.html">
                                <div
                                    className="lg:w-[1000px] xl:w-[1200px] px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <div className="text-4xl font-bold py-2 text-yellow-200">EXPLORE ADVANCED IT TECHNOLOGIES
                                    </div>
                                    <img src={vr} alt="course1" className="w-[100px] float-right" />
                                    <div className="md:text-4xl font-bold pt-2">July 22 - August 2</div>
                                    <div className="md:text-4xl font-bold pb-2">August 5 - August 16</div>
                                    <div className="text-xl py-2">Discover and interact with fun and entertaining
                                        advanced
                                        technologies including VR and robotics!</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[500px] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                    </section>
                    <h2
                        className="timeline-content js--fadeInRight text-2xl md:text-5xl pb-5 bg-gradient-to-r from-yellow-400 to-yellow-100 inline-block text-transparent bg-clip-text text-center font-bold">
                        Group Classes - June 2024</h2>
                    <section className="md:grid md:grid-cols-3 pt-10 md:max-w-[1200px]">
                        <div className="timeline-content js--fadeInRight md:px-5 py-10">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={python} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">PYTHON</div>
                                    <div className="text-2xl font-bold py-2">June 1 - June 29</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">Coquitlam</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Saturdays 2:30PM to 4:00PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={webdev} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">WEB DEVELOPMENT</div>
                                    <div className="text-2xl font-bold py-2">June 1 - June 29</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">West Vancouver</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Saturdays 4:00PM to 5:30PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={hacker} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">COMPETITIVE CODING</div>
                                    <div className="text-2xl font-bold py-2">June 2 - June 30</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">All Locations</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Sundays 2:30PM to 4:00PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={roblox} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">ROBLOX</div>
                                    <div className="text-2xl font-bold py-2">June 2 - June 30</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">All Locations</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Sundays 4:00PM to 5:30PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={java} className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">JAVA</div>
                                    <div className="text-2xl font-bold py-2">June 3 - July 1</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">Online</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Mondays 2:30PM to 4:00PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={c} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">C</div>
                                    <div className="text-2xl font-bold py-2">June 4 - July 2</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">Online</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Tuesdays 2:30PM to 4:00PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={cs} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">C#</div>
                                    <div className="text-2xl font-bold py-2">June 5 - June 26</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">Online</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Wednesdays 4:00PM to 5:30PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={portfolio} alt="course1" className="w-[100px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">INTERVIEW PREP</div>
                                    <div className="text-2xl font-bold py-2">June 7 - June 28</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">Online</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Thursdays 4:00PM to 5:30PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                        <div className="timeline-content js--fadeInRight md:px-5 py-10 rounded-4xl">
                            <a href="../courses/entry1.html">
                                <div className="px-5 md:pr-20 py-5 pb-20 bg-neutral-700 hover:bg-neutral-600 ease duration-300">
                                    <img src={cpp} alt="course1" className="w-[90px] mx-auto" />
                                    <div className="text-2xl font-bold py-2 text-yellow-200">C++</div>
                                    <div className="text-2xl font-bold py-2">June 8 - June 29</div>
                                    <div className="flex">
                                        <LuMapPin size={25} />
                                        <div className="text-xl font-bold py-2 pl-2">Online</div>
                                    </div>
                                    <div className="text-xl font-bold py-2">Weekly on Fridays 4:00PM to 5:30PM</div>
                                </div>
                                <div className="relative bottom-10 left-16 md:left-[23%] w-[200px] py-10 bg-neutral-500">
                                    <h3 className="text-2xl text-center font-bold ease duration-300 ">
                                        MORE INFO</h3>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section className="py-10 border-b">
                        <h2 className="glow text-2xl md:text-6xl text-center py-10">Code with us</h2>
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
                </div>
            </main>
        </>
    )
}