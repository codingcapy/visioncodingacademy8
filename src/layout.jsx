
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
import BackToSchoolPopup from "./components/BackToSchoolPopup";

export default function Layout() {

    const [showPopup, setShowPopup] = useState(true)

    return (
        <div className="flex flex-col min-h-screen bg-black text-white" onClick={() => setShowPopup(false)}>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
            {showPopup && <BackToSchoolPopup />}
        </div>

    )
}