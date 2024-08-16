
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: summer camp page for Vision Coding Academy
 */

import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import codingClass from "/coding-class1.jpg"
import arduino from "/arduino.jpg"
import icon75 from "/icon75arduino.svg"
import { NavLink } from 'react-router-dom';

export default function SummerCampPage() {

    useEffect(() => {
        document.title = 'Summer Camp | Vision Coding';
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
        <>
            <section className="summercamp  overflow-x-hidden">
                <h1 className="md:hidden timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Vision Coding Summer
                    Camp 2024
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl pb-3">Vision
                    Coding
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Summer Camp
                    2024
                </h1>
                <p className="hidden md:block timeline-content js--fadeInRight text-2xl pt-5 md:pt-10">Explore exciting <span
                    className="text-yellow-200 font-bold">IT Technology</span> and
                    participate in <span className="text-yellow-200 font-bold">fun and entertaining activities</span> this
                    summer!
                </p>
            </section>
            <section className="summercamp2 overflow-x-hidden">
                <h1 className="md:hidden timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Robotics
                    (Arduino) and STEM
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl pb-3">Robotics
                    (Arduino) and STEM</h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl">for G1-3
                    Students</h1>
                <p className="hidden md:block timeline-content js--fadeInRight text-2xl pt-5 md:pt-10">12-Week Program</p>
                <NavLink to="/courses/arduino"
                    className="z-10 my-10 px-10 py-5 bg-red-500 rounded-xl text-white flex flex-col mx-auto hover:cursor-pointer hover:bg-red-400 transition all-ease duration-300">
                    Apply Now
                </NavLink>
            </section>
            <main className="flex-1 mx-auto px-2 py-20 md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] overflow-x-hidden">
                <h2
                    className="timeline-content js--fadeInRight text-4xl md:text-6xl max-w-[1000px] mx-auto text-center text-yellow-200">
                    Program Overview</h2>
                <div className="static py-5 md:py-20">
                    <img src={codingClass} alt="Coding Class"
                        className="timeline-content js--fadeInRight md:max-w-[500px] rounded-xl border-white border-4 float-left md:mr-5" />
                    <div className="relative top-0 left-0">
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">The 12-Week Robotics (Arduino)
                            and STEM Curriculum for G1-3 Students is a comprehensive program designed to introduce young
                            learners to the world of programming, robotics, and STEM through hands-on projects and
                            activities. Using Arduino boards and various components, students will explore fundamental
                            concepts in programming, circuitry, robotics, and STEM, developing essential skills in
                            problem-solving, critical thinking, and creativity</p>
                    </div>
                </div>
                <h2
                    className="timeline-content js--fadeInRight text-4xl md:text-6xl md:pt-20 max-w-[1000px] mx-auto text-center text-yellow-200">
                    Program Objectives</h2>
                <div className="static py-5 md:py-20">
                    <img src={arduino} alt="Coding Class"
                        className="timeline-content js--fadeInLeft md:max-w-[500px] rounded-xl border-white border-4 float-right md:mr-5" />
                    <div className="relative top-0 left-0">
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">Introduce students to the
                            basics of robotics using Arduino</p>
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">Integrate STEM concepts
                            through experiments and projects that connect science, technology, engineering, and mathematics.
                        </p>
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">Foster problem-solving skills
                            through hands-on projects and activities.</p>
                        <p className="timeline-content js--fadeInRight text-lg md:text-2xl">Encourage creativity and engagement
                            through project-based learning</p>
                        <p className="timeline-content js--fadeInRight text-lg md:text-2xl">Develop essential skills in project
                            planning, execution, and presentation</p>
                    </div>
                </div>
                <NavLink to="/courses/arduino"
                    className="z-10 my-10 px-10 py-5 bg-red-500 w-[215px] text-center rounded-xl text-2xl text-white flex flex-col mx-auto hover:cursor-pointer hover:bg-red-400 transition all-ease duration-300">
                    Apply Now
                </NavLink>
                <h2
                    className="timeline-content js--fadeInRight text-4xl md:text-6xl md:py-20 max-w-[1000px] mx-auto text-center text-yellow-200">
                    Curriculum</h2>
                <div
                    className="bg-white text-black px-10 py-10 mt-5 md:mt-0 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 1: Course Overview and Introduction to Arduino
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Introduction to Arduino </h4>
                    <p className="text-sm md:text-lg">Introduction to Arduino and basic components.</p>
                    <p className="text-sm md:text-lg">Explanation of what an LED is. </p>
                    <p className="text-sm md:text-lg">Basic safety rules. </p>
                    <p className="text-sm md:text-lg">Setting up the Arduino board.</p>
                    <p className="text-sm md:text-lg">Writing the first program to blink an LED.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Virtual Reality (VR)
                    </h4>
                    <p className="text-sm md:text-lg">Explore the world of VR </p>
                    <p className="text-sm md:text-lg">Get hands-on experience with VR and robotics </p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 2: Understanding Basic Circuits and Block Coding
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Understanding Basic Circuits</h4>
                    <p className="text-sm md:text-lg">Basic concepts of circuits</p>
                    <p className="text-sm md:text-lg">Connecting an LED to Arduino</p>
                    <p className="text-sm md:text-lg">Writing a simple program to turn the LED on and off.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Block Coding (Scratch) </h4>
                    <p className="text-sm md:text-lg">Class Activity: Introduce Scratch and basic block coding concepts.</p>
                    <p className="text-sm md:text-lg">Home Project: Follow the attached guide and create a simple animation
                        using Scratch. Supervised by parents. (45 Minutes)</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 3: Controlling LED with Code</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Controlling LED with Code</h4>
                    <p className="text-sm md:text-lg">Using digital pins on Arduino</p>
                    <p className="text-sm md:text-lg">Writing code to control the LED</p>
                    <p className="text-sm md:text-lg">Introduction to basic coding concepts.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Plant Growth Basics </h4>
                    <p className="text-sm md:text-lg">Class Activity: Discuss the basic needs of plants for growth (light,
                        water, soil, etc.) Share your illustrated guide with the class.</p>
                    <p className="text-sm md:text-lg">Experiment: Plant seeds with the terrarium kit.</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 4: Using a Button to Control LED and Buoyancy
                        Basics</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Using a Button to Control LED</h4>
                    <p className="text-sm md:text-lg"> Introduction to buttons and switches</p>
                    <p className="text-sm md:text-lg">Connecting a button to Arduino</p>
                    <p className="text-sm md:text-lg">Writing code to turn the LED on and off with a button press.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Buoyancy Basics</h4>
                    <p className="text-sm md:text-lg">Activity: Experiment with objects that float and sink, discussing density
                        and buoyancy.</p>
                    <p className="text-sm md:text-lg">Home Research: </p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 5: Understanding the While Loop and Building a
                        Water Rocket</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Understanding the While Loop </h4>
                    <p className="text-sm md:text-lg">Introduction to loops in programming.</p>
                    <p className="text-sm md:text-lg">Writing a simple while loop.</p>
                    <p className="text-sm md:text-lg">Using the while loop to blink an LED continuously.</p>
                    <p className="text-sm md:text-lg">Setting up the Arduino board.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Building a Water Rocket [ 2 Weeks ]</h4>
                    <p className="text-sm md:text-lg">Activity: Discuss the principles of pressure and propulsion. Build a
                        simple water rocket,</p>
                    <p className="text-sm md:text-lg">Home Project:</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 6: LED Sequence with While Loop and Water
                        Science</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: LED Sequence with While Loop</h4>
                    <p className="text-sm md:text-lg">Creating a sequence of LED blinks. </p>
                    <p className="text-sm md:text-lg">Writing a program using the while loop to create a light sequence. </p>
                    <p className="text-sm md:text-lg">Understanding the delay function.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Building a Water Rocket [ 2 Weeks ]</h4>
                    <p className="text-sm md:text-lg">Activity: Finish building the water rocket and launch it! Boom!</p>
                    <p className="text-sm md:text-lg">Home Project: Design different fins or nose cones to see how they affect the flight of the rocket</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 7: Advanced LED Control and Engineering Basics
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Advanced LED Control</h4>
                    <p className="text-sm md:text-lg">Combining buttons and while loops.</p>
                    <p className="text-sm md:text-lg">Writing a program to control LED sequences with button presses.</p>
                    <p className="text-sm md:text-lg">Introduction to more complex code structures.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Engineering Basics - Bridge [ Team Project ]
                    </h4>
                    <p className="text-sm md:text-lg">Activity: Introduction to simple weight structures - demonstration on different weight structures.</p>
                    <p className="text-sm md:text-lg">Home Project: Team of 2 or 3 students brainstorm and build the strongest bridge using only spaghetti noodles and tape</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 8: Introduction to Seven-Segment Display and
                        Math Magic</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Introduction to Seven-Segment Display</h4>
                    <p className="text-sm md:text-lg">Explanation of a seven-segment display.</p>
                    <p className="text-sm md:text-lg">Connecting a seven-segment display to Arduino. </p>
                    <p className="text-sm md:text-lg">Writing code to display numbers on the seven-segment display.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Engineering Basics - Bridge [ Team Project ]
                    </h4>
                    <p className="text-sm md:text-lg">Activity: Competition day! Whose team built the strongest bridge?</p>
                    <p className="text-sm md:text-lg">Home Project: </p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 9: Controlling Seven-Segment Display and Water
                        Filtration</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Controlling Seven-Segment Display</h4>
                    <p className="text-sm md:text-lg">Writing more advanced code for the seven-segment display.</p>
                    <p className="text-sm md:text-lg">Displaying multiple numbers.</p>
                    <p className="text-sm md:text-lg">Introduction to functions in Arduino code.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Water Filtration [Team Project] </h4>
                    <p className="text-sm md:text-lg">Activity: Learn about water filtration - how does it work? Why do we need
                        to filter water? What’s inside the water?</p>
                    <p className="text-sm md:text-lg">In Class Project: In groups of 2 or 3 students, build and test water
                        filters. Observe, compare and experiment with different materials.</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 10: Planning the Project and Exploring Gravity
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Planning the Project</h4>
                    <p className="text-sm md:text-lg">Introduction to the project: Explain the goal and the components needed.
                    </p>
                    <p className="text-sm md:text-lg">Understanding the seven-segment display: Detailed explanation of how the
                        seven-segment display works and how to control it with Arduino.</p>
                    <p className="text-sm md:text-lg">Sketching the circuit: Draw a simple schematic of how the components will
                        be connected.</p>
                    <p className="text-sm md:text-lg">Breakdown of the steps: Divide the project into manageable parts (e.g.,
                        connecting the display, writing the code to control the display, adding button functionality).</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Exploring Gravity</h4>
                    <p className="text-sm md:text-lg">Activity: : Build and test a parachute for a small toy using household
                        materials</p>
                    <p className="text-sm md:text-lg">Home Project: Think back on all of the experiments we did so far, what was
                        the project that intrigued you the most? What are some changes you can make to the experiment to get
                        a different result?</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 11: Building the Project and Preparing for the
                        Science Fair</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Building the Project</h4>
                    <p className="text-sm md:text-lg">Connecting the Seven-Segment Display: Connect the display to the Arduino,
                        ensuring each segment is connected to the appropriate pin. Use resistors to limit the current to the
                        display.</p>
                    <p className="text-sm md:text-lg">Programming the Display: Write a basic Arduino program to display a single
                        digit on the seven-segment display. Expand the code to display a countdown from a preset value
                        (e.g., 10 to 0).</p>
                    <p className="text-sm md:text-lg">Adding Button Functionality: Connect the start, pause, and reset buttons
                        to the Arduino. Write code to handle button presses, starting, pausing, and resetting the countdown.
                    </p>
                    <p className="text-sm md:text-lg">Testing and Debugging: Test the circuit and the code to ensure the
                        countdown timer works correctly. Debug any issues that arise and refine the code as needed</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Mini Science Fair Preparation</h4>
                    <p className="text-sm md:text-lg">Activity: Select a topic we learned and develop an experiment. Review
                        topics covered in class (e.g., plant growth, buoyancy, water filtration). Help students select a
                        topic that interests them. Guide students through the scientific method</p>
                    <p className="text-sm md:text-lg">Home Project: Continue working on their experiments at home. Gather
                        materials needed for their experiments. Perform experiments and record the experiment. Create a
                        simple display board summarizing their project (introduction, materials, procedure, results,
                        conclusion)</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 12: Finalizing and Presenting the Project and
                        Science Fair Presentation</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Finalizing and Presenting the Project</h4>
                    <p className="text-sm md:text-lg">Final Testing: Ensure the project works as intended with all components.
                    </p>
                    <p className="text-sm md:text-lg">Decorating the Project: Allow students to decorate their project boards or
                        cases for a personalized touch.</p>
                    <p className="text-sm md:text-lg">Presentation Preparation: Teach students how to present their projects,
                        explaining how it works and what they learned.</p>
                    <p className="text-sm md:text-lg">Project Presentation: Each student presents their project to the class,
                        demonstrating the countdown timer and explaining their process.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Science Fair Presentation</h4>
                    <p className="text-sm md:text-lg">Activity: Each student presents their project to the class</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <NavLink to="/courses/arduino"
                    className="z-10 my-20 px-10 py-5 bg-red-500 text-center w-[215px] rounded-xl text-2xl text-white flex flex-col mx-auto hover:cursor-pointer hover:bg-red-400 transition all-ease duration-300">
                    Apply Now
                </NavLink>
            </main>
        </>
    )
}