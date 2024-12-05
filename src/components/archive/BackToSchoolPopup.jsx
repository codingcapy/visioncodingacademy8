/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Back to School popup component (Archived)
status: ARCHIVED - No longer in use
*/

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function BackToSchoolPopup() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="relative bg-surface rounded-lg p-8 max-w-lg w-full">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-white/50 hover:text-white"
                >
                    <FaTimes size={24} />
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        This component has been archived
                    </h2>
                    <p className="text-white/70">
                        The Back to School promotion is no longer active.
                        Please check our homepage for current promotions and announcements.
                    </p>
                </div>
            </div>
        </div>
    );
}
