/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Terms of service page with BC-specific content
*/

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
    useEffect(() => {
        document.title = 'Terms of Service | Vision Coding';
    }, []);

    return (
        <main className="flex-1 py-20 bg-surface">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                    
                    <div className="prose prose-invert max-w-none">
                        <p className="text-white/70 mb-6">
                            Last updated: May 8, 2024
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p className="text-white/70">
                                These Terms of Service constitute a legally binding agreement between you and Vision Coding Academy ("we", "our", or "us") regarding your use of our educational services. By enrolling in our courses or using our services, you agree to these terms, which are governed by the laws of British Columbia, Canada.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                            <p className="text-white/70 mb-4">
                                Vision Coding Academy provides coding education services, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2">
                                <li>Programming courses and tutorials</li>
                                <li>Educational materials and resources</li>
                                <li>One-on-one instruction</li>
                                <li>Group classes and workshops</li>
                                <li>Project-based learning activities</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Payment and Refunds</h2>
                            <p className="text-white/70 mb-4">
                                Payment terms and conditions are as follows:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2">
                                <li>All fees must be paid in advance of services</li>
                                <li>Refund requests must be made within 7 days of course commencement</li>
                                <li>Refunds are subject to a 15% administrative fee</li>
                                <li>No refunds for partially completed courses</li>
                                <li>All prices are in Canadian Dollars (CAD)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                            <p className="text-white/70">
                                All course materials, including but not limited to videos, texts, code examples, and exercises, are the intellectual property of Vision Coding Academy and are protected by Canadian copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">5. Student Conduct</h2>
                            <p className="text-white/70 mb-4">
                                Students are expected to:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2">
                                <li>Attend scheduled classes punctually</li>
                                <li>Complete assigned work independently</li>
                                <li>Respect instructors and fellow students</li>
                                <li>Not share account credentials or course materials</li>
                                <li>Follow our code of conduct</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                            <p className="text-white/70">
                                To the maximum extent permitted by BC law, Vision Coding Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">7. Cancellation Policy</h2>
                            <p className="text-white/70">
                                We reserve the right to cancel or reschedule classes with reasonable notice. In the event of cancellation, students will receive a full refund or credit for future classes, at their discretion.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">8. Dispute Resolution</h2>
                            <p className="text-white/70">
                                Any disputes arising from these terms shall be resolved through mediation in accordance with BC law. If mediation is unsuccessful, the dispute shall be resolved through binding arbitration in British Columbia.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                            <p className="text-white/70">
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                            <p className="text-white/70">
                                For questions about these Terms of Service, please contact us at:<br />
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
