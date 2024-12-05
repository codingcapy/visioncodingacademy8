/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Archived Special Events page
status: ARCHIVED - No longer in use
*/

import { useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SpecialEventsPage() {
    useEffect(() => {
        document.title = 'Special Events | Vision Coding';
    }, []);

    useScrollReveal();

    return (
        <main className="flex-1">
            <div className="container py-12">
                <h1 className="text-3xl font-bold text-white mb-4">
                    This page has been archived
                </h1>
                <p className="text-white/70">
                    The Special Events page is no longer in use. Please check our homepage or contact us for current events and announcements.
                </p>
            </div>
        </main>
    );
}
