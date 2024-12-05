/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Enhanced particle background with subtle tech theme
*/

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const options = {
        fullScreen: {
            enable: false,
            zIndex: 0
        },
        background: {
            color: {
                value: "transparent"
            }
        },
        fpsLimit: 60,
        particles: {
            color: {
                value: "#FFD700"
            },
            links: {
                color: "#FFD700",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "bounce"
                },
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.1,
                random: {
                    enable: true,
                    minimumValue: 0.05
                },
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.05,
                    sync: false
                }
            },
            shape: {
                type: ["circle", "triangle"]
            },
            size: {
                value: { min: 1, max: 3 },
                random: {
                    enable: true,
                    minimumValue: 1
                }
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.2
                    }
                }
            }
        },
        detectRetina: true,
        themes: [
            {
                name: "light",
                default: {
                    value: false,
                    mode: "light"
                },
                options: {
                    background: {
                        color: "transparent"
                    },
                    particles: {
                        color: {
                            value: "#FFD700"
                        }
                    }
                }
            },
            {
                name: "dark",
                default: {
                    value: true,
                    mode: "dark"
                },
                options: {
                    background: {
                        color: "transparent"
                    },
                    particles: {
                        color: {
                            value: "#FFD700"
                        }
                    }
                }
            }
        ]
    };

    return (
        <div className="absolute inset-0 pointer-events-none">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={options}
                className="absolute inset-0"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black opacity-50" />
        </div>
    );
}
