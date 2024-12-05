/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive Python game demo component
*/

import { useState } from 'react';
import { FaPlay, FaRedo } from 'react-icons/fa';

export default function PythonGameDemo() {
    const [gameState, setGameState] = useState('start'); // start, playing, won, lost
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [score, setScore] = useState(0);

    const choices = ['Rock', 'Paper', 'Scissors'];
    
    const resetGame = () => {
        setGameState('start');
        setUserChoice(null);
        setComputerChoice(null);
        setScore(0);
    };

    const playGame = (choice) => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(choice);
        setComputerChoice(computerChoice);

        // Determine winner
        if (choice === computerChoice) {
            setGameState('tie');
        } else if (
            (choice === 'Rock' && computerChoice === 'Scissors') ||
            (choice === 'Paper' && computerChoice === 'Rock') ||
            (choice === 'Scissors' && computerChoice === 'Paper')
        ) {
            setGameState('won');
            setScore(score + 1);
        } else {
            setGameState('lost');
        }
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Try Python Game Demo</h3>
                <p className="text-sm text-white/70">A simple Rock, Paper, Scissors game written in Python</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Game Console */}
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400 mb-2"># Python Rock, Paper, Scissors Game</div>
                    {gameState === 'start' ? (
                        <div className="text-white/70">
                            print("Welcome to Rock, Paper, Scissors!")
                            <br />
                            print("Choose your move:")
                        </div>
                    ) : (
                        <>
                            <div className="text-white/70">
                                player_choice = "{userChoice}"
                                <br />
                                computer_choice = "{computerChoice}"
                                <br />
                                {gameState === 'won' && 'print("You win!")'}
                                {gameState === 'lost' && 'print("Computer wins!")'}
                                {gameState === 'tie' && 'print("It\'s a tie!")'}
                                <br />
                                print(f"Score: {score}")
                            </div>
                        </>
                    )}
                </div>

                {/* Game Controls */}
                <div className="space-y-4">
                    {gameState === 'start' ? (
                        <div className="grid grid-cols-3 gap-4">
                            {choices.map((choice) => (
                                <button
                                    key={choice}
                                    onClick={() => playGame(choice)}
                                    className="px-4 py-2 rounded bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-colors duration-300"
                                >
                                    {choice}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <button
                            onClick={resetGame}
                            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-colors duration-300"
                        >
                            <FaRedo />
                            Play Again
                        </button>
                    )}
                </div>

                {/* Code Preview */}
                <div className="text-xs text-white/50 border-t border-white/10 pt-4">
                    <p>Example Python code:</p>
                    <pre className="bg-black/30 p-2 rounded mt-2 overflow-x-auto">
{`import random

def play_game():
    choices = ['Rock', 'Paper', 'Scissors']
    computer_choice = random.choice(choices)
    player_choice = input("Choose Rock, Paper, or Scissors: ")
    
    if player_choice == computer_choice:
        return "Tie!"
    elif (player_choice == "Rock" and computer_choice == "Scissors") or \\
         (player_choice == "Paper" and computer_choice == "Rock") or \\
         (player_choice == "Scissors" and computer_choice == "Paper"):
        return "You win!"
    else:
        return "Computer wins!"`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
