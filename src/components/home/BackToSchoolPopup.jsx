/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Back to school popup component for homepage
*/

import { NavLink } from "react-router-dom"
import image from "/zIMG_4478.jpg"
import { IoCloseSharp } from "react-icons/io5";

const PriceCard = ({ type, price, details }) => (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-colors duration-300">
        <h4 className="text-yellow-400 font-medium text-lg mb-2">
            {type}
        </h4>
        <div className="text-3xl font-bold text-white mb-2">
            ${price}
            <span className="text-lg text-white/70">/month</span>
        </div>
        <p className="text-white/70">
            {details}
        </p>
    </div>
);

export default function BackToSchoolPopup({ setShowPopup }) {
    const handlePopupClick = (event) => {
        event.stopPropagation();
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setShowPopup(false);
    };

    return (
        <section 
            id='pop-up' 
            onClick={() => setShowPopup(false)}
            className="animate-fade-in"
        >
            <div 
                className="relative max-w-2xl mx-auto bg-surface rounded-2xl p-8 border border-white/10"
                onClick={handlePopupClick}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                    <IoCloseSharp 
                        size={24}
                        className="text-white/70 hover:text-white" 
                    />
                </button>

                {/* Content */}
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                            LIMITED TIME OFFER!
                        </h2>
                        <h3 className="text-2xl md:text-3xl text-yellow-200">
                            Back to School Event!
                        </h3>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <PriceCard 
                            type="All 1-on-1 classes"
                            price="300"
                            details="4 courses 90 minutes/class"
                        />
                        <PriceCard 
                            type="All group classes"
                            price="192"
                            details="4 courses 90 minutes/class"
                        />
                    </div>

                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden">
                        <img 
                            src={image} 
                            alt="Back to School Event"
                            className="w-full object-cover rounded-xl" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Offer End Date */}
                    <p className="text-center text-white/70">
                        Offer ends September 30, 2024
                    </p>

                    {/* CTA Button */}
                    <div className="text-center">
                        <NavLink 
                            to="/back-to-school" 
                            onClick={() => setShowPopup(false)}
                            className="btn btn-primary inline-block"
                        >
                            Learn More
                        </NavLink>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
            </div>
        </section>
    );
}
