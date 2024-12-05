/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Custom hook for ScrollReveal animations
*/

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '20px',
            duration: 800,
            delay: 200,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            reset: false,
            useDelay: 'onload',
            viewFactor: 0.1
        });

        // Common animations
        sr.reveal('.animate-fade-in', {
            interval: 100
        });

        // Hero section animations
        sr.reveal('.hero-content > *', {
            interval: 200
        });

        // Section titles
        sr.reveal('.section-title', {
            distance: '40px',
            origin: 'top'
        });

        // Cards and grid items
        sr.reveal('.card', {
            interval: 200
        });

        // Contact items
        sr.reveal('.contact-item', {
            interval: 100
        });

        // Cleanup
        return () => sr.destroy();
    }, []);
};
