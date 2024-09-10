
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Header component for Vision Coding Academy
 */

import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import visionCodingIcon from "/yellow1.png";
import useAuthStore from '../store/AuthStore';

export default function Header() {

    const [navVisible, setNavVisible] = useState(false);
    const { user, logoutService } = useAuthStore((state) => state);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1280) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function slideToggle() {
        setNavVisible(!navVisible);
    };

    return (
        <header className="xl:flex justify-between bg-black text-white sticky z-50 top-0">
            <div className="flex justify-between xl:block px-2">
                <div className="flex">
                    <img src={visionCodingIcon} className="w-[60px]" alt="Vision Coding Icon" />
                    <NavLink to="/">
                        <div className="nav-element py-5 text-lg xl:text-2xl">Vision Coding Academy</div>
                    </NavLink>
                </div>
                <button id="hamburger-menu" className="text-3xl xl:hidden" onClick={slideToggle}>&#x2630;</button>
            </div>
            <nav id="main-nav" className={`${navVisible ? 'visible' : ''} xl:block`}>
                <ul className="xl:flex">
                    <li
                        className="px-5 py-2 xl:py-5 text-center rounded-md transition ease-in-out duration-300  xl:hidden">
                        <NavLink to="/" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Home</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/about" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>About</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300 text-lg xl:text-2xl">
                        <NavLink to="/back-to-school" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Special Events<span
                            className="text-green-500 px-2 pb-5 text-sm font-bold">NEW!</span></NavLink>
                    </li>
                    <li
                        className="px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/courses" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Courses</NavLink>
                    </li>
                    {/* <li
                        className="px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/schedule" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Schedule</NavLink>
                    </li> */}
                    <li
                        className="px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/gallery" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Gallery</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/contact" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Contact</NavLink>
                    </li>
                    {!user && <li
                        className="px-5 py-2 text-center xl:hidden rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/login" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Login</NavLink>
                    </li>}
                    {!user && <li
                        className="px-5 py-2 text-center xl:hidden rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/signup" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Signup</NavLink>
                    </li>}
                    {user && <li
                        className="px-5 py-2 text-center xl:hidden rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/user" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>{user.username}</NavLink>
                    </li>}
                    {user && <li onClick={logoutService}
                        className="px-5 py-2 text-center xl:hidden rounded-md transition ease-in-out duration-300  xl:text-2xl">
                        <NavLink to="/signup" onClick={() => window.innerWidth < 1280 && setNavVisible(false)}>Logout</NavLink>
                    </li>}
                </ul>
            </nav>
            {!user && <div className="flex">
                <NavLink to="/login"
                    className="nav-element hidden px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300 xl:text-2xl">
                    Login
                </NavLink>
                <NavLink to="/signup"
                    className="nav-element hidden px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300 xl:text-2xl">
                    Signup
                </NavLink>
            </div>}
            {user && <div className="flex">
                <NavLink to="/user"
                    className="nav-element hidden px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300 xl:text-2xl">
                    {user?.username}
                </NavLink>
                <NavLink to="/" onClick={logoutService}
                    className="nav-element hidden px-5 py-2 xl:py-5 text-center xl:block rounded-md transition ease-in-out duration-300 xl:text-2xl">
                    Logout
                </NavLink>
            </div>}
        </header>
    );
}
