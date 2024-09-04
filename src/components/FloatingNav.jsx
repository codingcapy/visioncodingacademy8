
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: floating nav component for Vision Coding Academy
 */

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingNav() {

    return (
        <>
            <div className="hidden md:block fixed bottom-16 right-16 bg-transparent">
                <div className="py-2 bg-transparent z-10">
                    <a href="https://www.instagram.com/vision.coding/"
                        className="nav-element py-2 text-2xl bg-transparent" target="_blank">
                        <div className="bg-yellow-300 rounded-full h-[75px] w-[75px]">
                            <FaInstagram size={70} style={{ color: "black" }} className="mx-auto pt-1" />
                        </div>
                    </a>
                </div>
                <div className="py-2">
                    <a href="https://www.facebook.com/profile.php?id=61556365105748" target="_blank"
                        className="nav-element py-2 text-2xl">
                        <div className="bg-yellow-300 rounded-full h-[75px] w-[75px]">
                            <FaFacebookF size={65} style={{ color: "black" }} className="mx-auto pt-2" />
                        </div>
                    </a>
                </div>
                <div className="py-2">
                    <a href="http://pf.kakao.com/_LaRxfxj" target="_blank" className="nav-element py-2 text-2xl">
                        <div className="bg-yellow-300 rounded-full h-[75px] w-[75px]">
                            <RiKakaoTalkFill size={70} style={{ color: "black" }} className="mx-auto pt-2" />
                        </div>
                    </a>
                </div>
                <div className="py-2">
                    <a href="http://wa.me/+16049003707" target="_blank" className="nav-element py-2 text-2xl">
                        <div className="bg-yellow-300 rounded-full h-[75px] w-[75px]">
                            <FaWhatsapp size={65} style={{ color: "black" }} className="mx-auto pt-2" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="md:hidden fixed bottom-2 right-1 bg-transparent">
                <div className="py-2 bg-transparent z-10">
                    <a href="https://www.instagram.com/vision.coding/"
                        className="nav-element py-2 text-lg bg-transparent" target="_blank">
                        <div className="bg-yellow-300 rounded-full h-[40px] w-[40px]">
                            <FaInstagram size={35} style={{ color: "black" }} className="mx-auto pt-1" />
                        </div>
                    </a>
                </div>
                <div className="py-2">
                    <a href="https://www.facebook.com/profile.php?id=61556365105748" target="_blank"
                        className="nav-element py-2 text-lg">
                        <div className="bg-yellow-300 rounded-full h-[40px] w-[40px]">
                            <FaFacebookF size={35} style={{ color: "black" }} className="mx-auto pt-2" />
                        </div>
                    </a>
                </div>
                <div className="py-2">
                    <a href="http://pf.kakao.com/_LaRxfxj" target="_blank" className="nav-element py-2 text-lg">
                        <div className="bg-yellow-300 rounded-full h-[40px] w-[40px]">
                            <RiKakaoTalkFill size={35} style={{ color: "black" }} className="mx-auto pt-1" />
                        </div>
                    </a>
                </div>
                <div className="py-2">
                    <a href="http://wa.me/+16049003707" target="_blank" className="nav-element py-2 text-lg md:text-2xl">
                        <div className="bg-yellow-300 rounded-full h-[40px] w-[40px]">
                            <FaWhatsapp size={35} style={{ color: "black" }} className="mx-auto pt-1" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}