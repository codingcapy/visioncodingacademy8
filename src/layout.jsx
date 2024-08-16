
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Layout for Vision Coding Academy
 */

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollToTop } from "../ScrollToTop";
import FloatingNav from "./components/FloatingNav";
import { useState } from "react";
import popup from "/gallery1-2.jpg"

export default function Layout() {

    const [showPopup, setShowPopup] = useState(true)

    return (
        <div className="flex flex-col min-h-screen bg-black text-white" onClick={() => setShowPopup(false)}>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
            {showPopup && <section id='pop-up'>
                <div id='pop-up-div' className="border-2 border-yellow-300">
                    <h2 className="text-4xl md:text-7xl text-yellow-200 text-center pt-1 md:pt-5 md:px-5">GRAND OPENING!</h2>
                    <h2 className="text-2xl md:text-4xl text-yellow-200 text-center py-1 md:py-2">Vision Coding West Vancouver!</h2>
                    <p className="text-xl md:text-2xl text-center pb-1 md:pb-2"><span className="text-yellow-300">Free Trial</span>
                        Classes Available</p>
                    <img src={popup} alt="" className="py-1 md:py-2 w-[400px] mx-auto" />
                    <p className="md:text-lg text-center py-1 md:py-2">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                    <button id="ok-button"
                        className="flex flex-col mx-auto my-1 md:my-3 px-10 md:px-16 py1 md:py-3 border-4 rounded border-yellow-300 text-yellow-300 font-bold text-xl md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">OK</button>
                </div>
            </section>}
        </div>

    )
}