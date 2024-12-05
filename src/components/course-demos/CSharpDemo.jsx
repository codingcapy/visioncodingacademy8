/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive C# demo component
*/

import { useState } from 'react';
import { FaPlay, FaRedo, FaGamepad } from 'react-icons/fa';

export default function CSharpDemo() {
    const [step, setStep] = useState(0);
    const [gameState, setGameState] = useState({
        position: { x: 50, y: 50 },
        score: 0,
        isJumping: false
    });
    const [output, setOutput] = useState([]);

    const resetDemo = () => {
        setStep(0);
        setGameState({
            position: { x: 50, y: 50 },
            score: 0,
            isJumping: false
        });
        setOutput([]);
    };

    const demoSteps = [
        {
            title: "Basic Class Definition",
            code: `public class Player
{
    public Vector2 Position { get; set; }
    public int Score { get; private set; }
    public bool IsJumping { get; private set; }

    public void Move(float x, float y)
    {
        Position = new Vector2(x, y);
    }

    public void Jump()
    {
        if (!IsJumping)
        {
            IsJumping = true;
            // Jump logic here
        }
    }
}`,
            description: "Object-Oriented Programming in C#"
        },
        {
            title: "Unity Game Component",
            code: `public class PlayerController : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveSpeed = 5f;
    public float jumpForce = 10f;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(
            moveX * moveSpeed, 
            rb.velocity.y
        );

        if (Input.GetButtonDown("Jump"))
        {
            rb.AddForce(Vector2.up * jumpForce);
        }
    }
}`,
            description: "Unity Game Development with C#"
        },
        {
            title: "LINQ and Collections",
            code: `var players = new List<Player>();
players.Add(new Player { Name = "P1", Score = 100 });
players.Add(new Player { Name = "P2", Score = 200 });

var highScores = players
    .Where(p => p.Score > 150)
    .OrderByDescending(p => p.Score)
    .Select(p => new {
        p.Name,
        p.Score
    });

foreach (var score in highScores)
{
    Console.WriteLine($"{score.Name}: {score.Score}");
}`,
            description: "Modern C# Features and LINQ"
        }
    ];

    const nextStep = () => {
        if (step < demoSteps.length - 1) {
            setStep(step + 1);
            // Simulate game state changes
            setGameState(prev => ({
                ...prev,
                score: prev.score + 10,
                position: {
                    x: prev.position.x + 10,
                    y: prev.position.y
                }
            }));
            setOutput([...output, `Executed ${demoSteps[step + 1].title}`]);
        }
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Try C# Programming</h3>
                <p className="text-sm text-white/70">Explore C# and Unity game development concepts</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Game Preview */}
                <div className="bg-black/50 rounded-lg p-4 aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <FaGamepad size={48} className="text-yellow-400 mx-auto mb-4" />
                            <div className="text-white/70">Game Preview Area</div>
                            <div className="text-sm text-white/50 mt-2">
                                Position: ({gameState.position.x}, {gameState.position.y})
                                <br />
                                Score: {gameState.score}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Window */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-white/70 mb-2">
                        <span>{demoSteps[step].title}</span>
                        <span className="text-yellow-400">{step + 1}/{demoSteps.length}</span>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-white/70 whitespace-pre-wrap">
                            {demoSteps[step].code}
                        </pre>
                    </div>
                    <p className="text-sm text-white/50 mt-2">
                        {demoSteps[step].description}
                    </p>
                </div>

                {/* Output Console */}
                <div className="space-y-2">
                    <div className="text-sm text-white/70 mb-2">Console Output:</div>
                    <div className="bg-black/30 p-3 rounded-lg font-mono text-sm max-h-32 overflow-y-auto">
                        {output.map((line, index) => (
                            <div key={index} className="text-white/90">{line}</div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex gap-4">
                    <button
                        onClick={nextStep}
                        disabled={step === demoSteps.length - 1}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            step === demoSteps.length - 1
                                ? 'bg-white/5 text-white/30'
                                : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                        } transition-colors duration-300`}
                    >
                        <FaPlay />
                        Next Example
                    </button>
                    <button
                        onClick={resetDemo}
                        className="flex items-center gap-2 px-4 py-2 rounded bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-colors duration-300"
                    >
                        <FaRedo />
                        Reset
                    </button>
                </div>

                {/* Explanation */}
                <div className="text-xs text-white/50 border-t border-white/10 pt-4">
                    <p>This demo showcases key C# features:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Object-Oriented Programming with C#</li>
                        <li>Unity Game Development Basics</li>
                        <li>Modern C# Features (LINQ, Collections)</li>
                        <li>Game Component Architecture</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
