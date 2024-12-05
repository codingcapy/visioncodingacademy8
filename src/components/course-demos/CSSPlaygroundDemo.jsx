/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive CSS playground demo component
*/

import { useState } from 'react';
import { FaUndo } from 'react-icons/fa';

export default function CSSPlaygroundDemo() {
    const [styles, setStyles] = useState({
        backgroundColor: '#3498db',
        borderRadius: '0px',
        padding: '20px',
        transform: 'rotate(0deg)',
        boxShadow: '0 0 0 rgba(0,0,0,0)'
    });

    const presets = {
        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'],
        borderRadius: ['0px', '10px', '25px', '50%'],
        padding: ['20px', '30px', '40px', '50px'],
        transform: ['rotate(0deg)', 'rotate(45deg)', 'rotate(90deg)', 'rotate(180deg)'],
        boxShadow: [
            '0 0 0 rgba(0,0,0,0)',
            '5px 5px 15px rgba(0,0,0,0.3)',
            '10px 10px 20px rgba(0,0,0,0.4)',
            '0 0 30px rgba(255,255,255,0.2)'
        ]
    };

    const propertyLabels = {
        backgroundColor: 'Background Color',
        borderRadius: 'Border Radius',
        padding: 'Padding',
        transform: 'Rotation',
        boxShadow: 'Shadow'
    };

    const resetStyles = () => {
        setStyles({
            backgroundColor: '#3498db',
            borderRadius: '0px',
            padding: '20px',
            transform: 'rotate(0deg)',
            boxShadow: '0 0 0 rgba(0,0,0,0)'
        });
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Try CSS Playground</h3>
                <p className="text-sm text-white/70">Experiment with CSS properties in real-time</p>
            </div>

            <div className="p-6">
                {/* Preview Area */}
                <div className="flex justify-center mb-8">
                    <div
                        style={styles}
                        className="w-32 h-32 flex items-center justify-center text-white transition-all duration-300"
                    >
                        <span>Preview</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-6">
                    {Object.keys(presets).map((property) => (
                        <div key={property} className="space-y-2">
                            <label className="text-sm text-white/70">
                                {propertyLabels[property]}:
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {presets[property].map((value, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setStyles({ ...styles, [property]: value })}
                                        className={`px-3 py-2 text-sm rounded transition-colors duration-300 ${
                                            styles[property] === value
                                                ? 'bg-yellow-400 text-black'
                                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={resetStyles}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-colors duration-300"
                    >
                        <FaUndo />
                        Reset Styles
                    </button>
                </div>

                {/* Code Preview */}
                <div className="mt-6 text-xs text-white/50 border-t border-white/10 pt-4">
                    <p>Generated CSS:</p>
                    <pre className="bg-black/30 p-2 rounded mt-2 overflow-x-auto">
{`.preview-box {
    background-color: ${styles.backgroundColor};
    border-radius: ${styles.borderRadius};
    padding: ${styles.padding};
    transform: ${styles.transform};
    box-shadow: ${styles.boxShadow};
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
