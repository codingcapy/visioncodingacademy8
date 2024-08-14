
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Gallery page for Vision Coding Academy
 */

import { useEffect } from 'react';
import $ from 'jquery';
import gallery1 from "/gallery1.png"
import gallery2 from "/gallery2.png"
import gallery3 from "/gallery3.png"
import gallery4 from "/gallery4.png"
import gallery5 from "/gallery5.png"
import gallery6 from "/gallery6.png"
import gallery7 from "/gallery7.png"
import gallery8 from "/gallery8.jpeg"
import gallery9 from "/gallery9.jpeg"
import gallery10 from "/gallery10.jpeg"
import gallery11 from "/gallery11.jpeg"
import gallery12 from "/gallery12.jpeg"
import gallery13 from "/gallery13.jpeg"
import gallery14 from "/gallery14.jpeg"
import gallery15 from "/gallery15.jpeg"
import gallery16 from "/gallery16.jpeg"
import gallery17 from "/gallery17.jpeg"
import gallery18 from "/gallery18.jpeg"
import gallery19 from "/gallery19.jpeg"
import gallery20 from "/gallery20.jpeg"
import gallery24 from "/gallery24.jpg"
import gallery25 from "/gallery25.jpg"
import gallery26 from "/gallery26.jpg"
import gallery27 from "/gallery27.jpg"
import gallery28 from "/gallery28.jpg"
import gallery29 from "/gallery29.jpg"
import gallery30 from "/gallery30.jpg"
import gallery31 from "/gallery31.jpg"
import gallery32 from "/gallery32.jpg"
import gallery33 from "/gallery33.jpeg"

export default function GalleryPage() {

    useEffect(() => {
        document.title = 'Gallery | Vision Coding';
    }, []);

    useEffect(() => {
        const $images = $('.image');

        $images.each((index, image) => {
            $(image).on('click', () => {
                const lightbox = $('<div></div>').addClass('lightbox')[0];

                const fullSizeImage = document.createElement('img');
                fullSizeImage.src = image.src;
                fullSizeImage.classList.add('lightbox-image');
                lightbox.appendChild(fullSizeImage);

                const leftArrow = document.createElement('div');
                leftArrow.classList.add('arrow', 'left-arrow');
                leftArrow.innerHTML = '&lt;';
                lightbox.appendChild(leftArrow);

                const rightArrow = document.createElement('div');
                rightArrow.classList.add('arrow', 'right-arrow');
                rightArrow.innerHTML = '&gt;';
                lightbox.appendChild(rightArrow);

                let currentIndex = index;

                function showImage(index) {
                    fullSizeImage.classList.add('fade-out');
                    setTimeout(() => {
                        fullSizeImage.src = $images.eq(index).attr('src');
                        fullSizeImage.classList.remove('fade-out');
                        fullSizeImage.classList.add('fade-in');
                    }, 300);
                }

                $(leftArrow).on('click', (event) => {
                    event.stopPropagation();
                    currentIndex = (currentIndex - 1 + $images.length) % $images.length;
                    showImage(currentIndex);
                });

                $(rightArrow).on('click', (event) => {
                    event.stopPropagation();
                    currentIndex = (currentIndex + 1) % $images.length;
                    showImage(currentIndex);
                });

                $(lightbox).on('click', (event) => {
                    if (event.target === lightbox) {
                        lightbox.classList.add('fade-out');
                        setTimeout(() => {
                            document.body.removeChild(lightbox);
                        }, 500);
                    }
                });

                document.body.appendChild(lightbox);

                setTimeout(() => {
                    lightbox.classList.add('fade-in');
                }, 50);
            });
        });
    }, []);

    return (
        <main className="flex-1 mx-auto">
            <div className="bg-black text-white flex flex-col">
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-5xl md:text-6xl py-10 pb-5 text-center">Vision Coding Gallery</h3>
                    <p className="timeline-content js--fadeInLeft text-center md:text-lg">West Vancouver & Coquitlam Locations</p>
                </section>
                <section className="py-10 px-1 md:grid md:grid-cols-5 md:pl-20 mx-auto">
                    <div className="py-2">
                        <img src={gallery1} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery2} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery3} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery4} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery5} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery6} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery7} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery8} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery9} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery10} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery11} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery12} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery13} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery14} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery15} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery16} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery17} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery18} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery19} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery20} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery24} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery25} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery26} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery27} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery28} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery29} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery30} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery31} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery32} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                    <div className="py-2">
                        <img src={gallery33} alt="gallery" className="image w-[250px] px-2 cursor-pointer" />
                    </div>
                </section>
            </div>
        </main>
    )
}
