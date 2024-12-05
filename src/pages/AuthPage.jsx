/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Authentication page with coding theme
*/

import { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { FaCode } from 'react-icons/fa';

const CodeLine = ({ delay = 0 }) => (
    <div 
        className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-pulse"
        style={{ animationDelay: `${delay}ms` }}
    />
);

const FloatingIcon = ({ delay = 0, duration = 20, position = 'left-1/4' }) => (
    <div 
        className={`absolute ${position} animate-float opacity-20`}
        style={{ 
            animationDelay: `${delay}ms`,
            animationDuration: `${duration}s`
        }}
    >
        <FaCode size={24} className="text-yellow-400" />
    </div>
);

export default function AuthPage() {
    useEffect(() => {
        document.title = 'Login/Signup | Vision Coding';
    }, []);

    return (
        <main className="flex-1 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-surface">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[url('/binary.png')] bg-repeat animate-scroll"></div>
                </div>
            </div>

            {/* Animated Code Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="h-full flex flex-col justify-around opacity-30">
                    <CodeLine delay={0} />
                    <CodeLine delay={200} />
                    <CodeLine delay={400} />
                    <CodeLine delay={600} />
                    <CodeLine delay={800} />
                </div>
            </div>

            {/* Floating Code Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FloatingIcon delay={0} duration={15} position="left-1/4 top-1/4" />
                <FloatingIcon delay={2000} duration={18} position="right-1/4 top-1/3" />
                <FloatingIcon delay={4000} duration={20} position="left-1/3 bottom-1/4" />
                <FloatingIcon delay={6000} duration={16} position="right-1/3 bottom-1/3" />
            </div>

            {/* Auth Form */}
            <div className="min-h-screen relative flex items-center justify-center p-6">
                <div className="w-full max-w-4xl">
                    <AuthForm />
                </div>
            </div>

            {/* Code Comments */}
            <div className="absolute bottom-8 left-8 font-mono text-xs text-white/30 hidden lg:block">
                <div>// Welcome to Vision Coding</div>
                <div>// Where coding dreams come true</div>
                <div>// Start your journey today</div>
            </div>

            {/* Binary Numbers */}
            <div className="absolute top-8 right-8 font-mono text-xs text-white/30 hidden lg:block">
                <div>01010110 01101001 01110011 01101001 01101111 01101110</div>
                <div>01000011 01101111 01100100 01101001 01101110 01100111</div>
            </div>
        </main>
    );
}
