/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Main layout component with scroll to top behavior
*/

import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingSocials from './components/layout/FloatingSocials';
import ScrollToTop from './components/ScrollToTop';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-surface">
            <ScrollToTop />
            <Navbar />
            <FloatingSocials />
            <Outlet />
            <Footer />
        </div>
    );
}
