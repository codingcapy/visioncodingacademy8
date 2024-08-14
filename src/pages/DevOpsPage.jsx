


/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Coming Soon page for Vision Coding Academy
 */

import { useEffect } from 'react';
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import comingSoon from "/icon67coming-soon.png"

export default function DevOpsPage() {

    useEffect(() => {
        document.title = 'Coming Soon | Vision Coding';
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
        <main className="flex-1 mx-auto">
            <div className="h-[500px]">
                <video id="background-video" autoPlay loop muted poster="https://static.spartacodingclub.kr/hanghae99/hhplus_fe_hero_mobile.mp4?ver=2"
                    className="h-[500px]">
                    <source src="https://static.spartacodingclub.kr/hanghae99/hhplus_fe_hero_mobile.mp4?ver=2"
                        type="video/mp4"/>
                </video>
                <h3
                    className="text-4xl md:text-6xl py-10 pb-2 text-center absolute top-[20%] md:top-[30%] left-[1%] md:left-[37%] z-10">
                    DEVELOPMENT AND OPERATIONS</h3>
                <p className="text-lg text-center absolute top-[50%] md:top-[45%] md:left-[43%]">Contact us to discuss more about this program</p>
            </div>
        </main>
    )
}