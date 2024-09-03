import { useEffect } from "react";
import $ from "jquery"
import { NavLink } from "react-router-dom";


export default function SummerArchivePage() {
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

            <main className="flex-1 overflow-x-hidden">
                <section className="summercamp-archive overflow-x-hidden">
                    <h1 className="md:hidden timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Vision Coding Summer
                        Camp 2024
                    </h1>
                    <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl pb-3">Vision
                        Coding
                    </h1>
                    <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Summer Camp
                        2024
                    </h1>
                    <p className="hidden md:block timeline-content js--fadeInRight text-2xl pt-5 md:pt-10">Our 2024 Summer Camp event is over, but we will be back next year with exciting projects you can look forward to!</p>
                    <div className="flex flex-col mx-auto mt-10">
                        <NavLink to="/courses"
                            className="navlink mx-auto px-3 py-3 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">View Our
                            Courses</NavLink>
                    </div>
                </section>
            </main>
        </>
    )
}