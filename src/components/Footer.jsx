
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Footer component for Vision Coding Academy
 */

import { NavLink } from "react-router-dom"
import visionCodingIcon from "/vision-coding-icon.jpg"

export default function Footer() {

    return (
        <footer className="px-5 md:py-20 max-w-[1000px] mx-auto">
            <div className="md:py-10 md:grid md:grid-cols-4">
                <div>
                    <img src={visionCodingIcon} className="nav-element mx-auto md:mx-0" />
                    <NavLink to="/">
                        <div className="nav-element py-2 text-2xl text-center md:text-left">Vision Coding Academy</div>
                    </NavLink>
                </div>
                <div className="flex flex-col py-10 md:py-0 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl pb-5">Menu</h3>
                    <NavLink to="/" className="nav-element py-2 text-lg md:text-2xl">Home</NavLink>
                    <NavLink to="/courses" className="nav-element py-2 text-lg md:text-2xl">Courses</NavLink>
                    <NavLink to="/about" className="nav-element py-2 text-lg md:text-2xl">About Us</NavLink>
                    <NavLink to="/contact" className="nav-element py-2 text-lg md:text-2xl">Contact</NavLink>
                </div>
                <div className="py-10 md:py-0 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl pb-5">Contact Us</h3>
                    <p className="py-2 text-lg md:text-2xl">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                    <p className="py-2 text-lg md:text-2xl">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                    <p className="py-2 text-lg md:text-2xl">+1 604-900-3707</p>
                    <p className="py-2 text-lg md:text-2xl">visioncodingca@gmail.com</p>
                </div>
                <div className="md:pl-32 py-10 md:py-0 flex flex-col text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl pb-5">Socials</h3>
                    <NavLink to="https://www.instagram.com/vision.coding/" className="nav-element py-2 text-lg md:text-2xl">Instagram</NavLink>
                    <NavLink to="https://www.facebook.com/profile.php?id=61556365105748" className="nav-element py-2 text-lg md:text-2xl">Facebook</NavLink>
                    <NavLink to="http://pf.kakao.com/_LaRxfxj" className="nav-element py-2 text-lg md:text-2xl">Kakaotalk</NavLink>
                    <NavLink to="http://wa.me/+16049003707" className="nav-element py-2 text-lg md:text-2xl">WhatsApp</NavLink>
                </div>
            </div>
            <div className="text-center pt-5">
                &copy; 2024 by Vision Coding Academy.
            </div>
        </footer>
    )
}