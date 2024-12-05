/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Floating social buttons component
*/

import { motion } from 'framer-motion';

const SocialButton = ({ href, icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="relative w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
            <img src={icon} alt={label} className="w-5 h-5" />
        </div>
    </motion.a>
);

export default function FloatingSocials() {
    return (
        <motion.div
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <SocialButton
                href="https://www.instagram.com/vision.coding/"
                icon="/icon62instagram-white-icon.svg"
                label="Instagram"
            />
            <SocialButton
                href="https://kakao.com"
                icon="/icon63-kakao-talk-50.png"
                label="KakaoTalk"
            />
            <SocialButton
                href="tel:+16049003707"
                icon="/icon64phone-call_3616230.png"
                label="Phone"
            />
            <SocialButton
                href="mailto:info@visioncoding.ca"
                icon="/icon65envelope_313932.png"
                label="Email"
            />
        </motion.div>
    );
}
