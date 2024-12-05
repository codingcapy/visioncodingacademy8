/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Privacy policy page with BC-specific content
*/

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'Privacy Policy | Vision Coding';
    }, []);

    return (
        <main className="flex-1 py-20 bg-surface">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                    
                    <div className="prose prose-invert max-w-none">
                        <p className="text-white/70 mb-6">
                            Last updated: May 8, 2024
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="text-white/70">
                                Vision Coding Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with British Columbia's Personal Information Protection Act (PIPA) and other applicable privacy laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                            <p className="text-white/70 mb-4">We collect information that you provide directly to us, including:</p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                                <li>Name and contact information</li>
                                <li>Student information and academic records</li>
                                <li>Payment information</li>
                                <li>Communication preferences</li>
                                <li>Feedback and survey responses</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Information</h2>
                            <p className="text-white/70 mb-4">We use the collected information to:</p>
                            <ul className="list-disc list-inside text-white/70 space-y-2">
                                <li>Provide and improve our educational services</li>
                                <li>Communicate with students and parents</li>
                                <li>Process payments and maintain accounts</li>
                                <li>Send updates about our programs and services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                            <p className="text-white/70">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist in our operations, always ensuring they comply with BC privacy laws and our strict confidentiality requirements.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                            <p className="text-white/70">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, in accordance with BC privacy laws and industry standards.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                            <p className="text-white/70 mb-4">Under BC's PIPA, you have the right to:</p>
                            <ul className="list-disc list-inside text-white/70 space-y-2">
                                <li>Access your personal information</li>
                                <li>Request corrections to your information</li>
                                <li>Withdraw consent for certain uses of your information</li>
                                <li>File a complaint with the BC Privacy Commissioner</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
                            <p className="text-white/70">
                                We collect information from children under 13 only with parental consent and in compliance with BC's privacy laws and regulations protecting minors.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Privacy Policy</h2>
                            <p className="text-white/70">
                                We reserve the right to update this Privacy Policy at any time. We will notify you of any material changes by posting the updated policy on our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                            <p className="text-white/70">
                                For questions about this Privacy Policy or to exercise your privacy rights, please contact us at:<br />
                                Email: info@visioncoding.ca<br />
                                Phone: (604) 900-3707<br />
                                Locations: West Vancouver & Coquitlam
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
