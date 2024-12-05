/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive Arduino circuit demo component
*/

import { useState, useEffect } from 'react';
import { FaLightbulb, FaPowerOff, FaRedo } from 'react-icons/fa';

export default function ArduinoDemo() {
    const [ledState, setLedState] = useState(false);
    const [code, setCode] = useState('');
    const [isBlinking, setIsBlinking] = useState(false);
    const [blinkInterval, setBlinkInterval] = useState(null);

    useEffect(() => {
        return () => {
            if (blinkInterval) clearInterval(blinkInterval);
        };
    }, [blinkInterval]);

    const toggleLED = () => {
        setLedState(!ledState);
        setIsBlinking(false);
        if (blinkInterval) clearInterval(blinkInterval);
        updateCode(!ledState ? 'HIGH' : 'LOW');
    };

    const startBlinking = () => {
        setIsBlinking(true);
        const interval = setInterval(() => {
            setLedState(prev => !prev);
        }, 500);
        setBlinkInterval(interval);
        updateCode('blink');
    };

    const stopBlinking = () => {
        setIsBlinking(false);
        if (blinkInterval) clearInterval(blinkInterval);
        setLedState(false);
        updateCode('LOW');
    };

    const updateCode = (mode) => {
        if (mode === 'blink') {
            setCode(`
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(500);
    digitalWrite(LED_BUILTIN, LOW);
    delay(500);
}`);
        } else {
            setCode(`
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, ${mode});
}`);
        }
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Try Arduino LED Control</h3>
                <p className="text-sm text-white/70">Control a virtual LED using Arduino code</p>
            </div>

            <div className="p-6">
                {/* Circuit Visualization */}
                <div className="flex justify-center items-center mb-8 h-48 bg-black/30 rounded-lg relative">
                    {/* Arduino Board */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-32 h-20 bg-teal-900/30 rounded-lg border border-teal-500/30 relative">
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-500/50"></div>
                            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-teal-500/50"></div>
                        </div>
                    </div>
                    
                    {/* LED */}
                    <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
                        <div className={`w-8 h-8 rounded-full ${ledState ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' : 'bg-yellow-400/20'} transition-all duration-300`}>
                            <FaLightbulb className={`w-full h-full p-1 ${ledState ? 'text-yellow-600' : 'text-yellow-400/20'}`} />
                        </div>
                        {/* Wire */}
                        <div className="w-px h-12 bg-white/20 mx-auto"></div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={toggleLED}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            ledState && !isBlinking ? 'bg-yellow-400 text-black' : 'bg-yellow-400/10 text-yellow-400'
                        } hover:bg-yellow-400/20 transition-colors duration-300`}
                    >
                        <FaPowerOff />
                        {ledState && !isBlinking ? 'Turn Off' : 'Turn On'}
                    </button>
                    <button
                        onClick={isBlinking ? stopBlinking : startBlinking}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            isBlinking ? 'bg-yellow-400 text-black' : 'bg-yellow-400/10 text-yellow-400'
                        } hover:bg-yellow-400/20 transition-colors duration-300`}
                    >
                        <FaRedo />
                        {isBlinking ? 'Stop Blinking' : 'Start Blinking'}
                    </button>
                </div>

                {/* Code Preview */}
                <div className="text-xs text-white/50 border-t border-white/10 pt-4">
                    <p>Arduino Code:</p>
                    <pre className="bg-black/30 p-2 rounded mt-2 overflow-x-auto text-white/70">
                        {code || `
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, LOW);
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
