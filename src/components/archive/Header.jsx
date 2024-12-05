/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Original header component (Archived)
status: ARCHIVED - Replaced by new Navbar component
*/

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);

    return (
        <header className="bg-black text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <NavLink to="/" className="flex items-center">
                        <img src="/logo_alpha.png" alt="Vision Coding Academy" className="h-12" />
                    </NavLink>

                    <nav className="hidden xl:flex space-x-8">
                        <NavLink to="/courses">Courses</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>

                    <button
                        className="xl:hidden text-2xl"
                        onClick={() => setNavVisible(!navVisible)}
                    >
                        {navVisible ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {navVisible && (
                <div className="xl:hidden bg-black">
                    <div className="container mx-auto py-4">
                        <nav className="flex flex-col space-y-4">
                            <NavLink to="/courses" onClick={() => setNavVisible(false)}>Courses</NavLink>
                            <NavLink to="/gallery" onClick={() => setNavVisible(false)}>Gallery</NavLink>
                            <NavLink to="/about" onClick={() => setNavVisible(false)}>About</NavLink>
                            <NavLink to="/contact" onClick={() => setNavVisible(false)}>Contact</NavLink>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
