import { useEffect } from "react";
import $ from "jquery"
import { NavLink } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function BackToSchoolPage() {

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
        <main className="flex-1">
            <section className="school overflow-x-hidden">
                <h1 className="md:hidden timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Vision Coding Back To School Event
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl pb-3">Vision
                    Coding
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Back To School Event
                </h1>
                <p className="timeline-content js--fadeInRight text-2xl md:text-4xl py-5">Limited Time Offer</p>
                <p className="text-lg md:text-2xl text-center pb-1 md:pb-2"><span className="text-yellow-300">All 1-on-1 classes</span> $300/month 4 courses 90 minutes/class</p>
                <p className="text-lg md:text-2xl text-center pb-1 md:pb-2"><span className="text-yellow-300">All group classes</span> $192/month 4 courses 90 minutes/class</p>
                <p className="text-md md:text-2xl text-center timeline-content js--fadeInRight pt-2 md:py-5">September 3, 2024 - September 30, 2024</p>
                <div className="flex flex-col mx-auto mt-5">
                    <NavLink to="/contact"
                        className="navlink mx-auto px-3 py-3 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Get Your Offer Now!</NavLink>
                </div>
            </section>
        </main>
    )
}