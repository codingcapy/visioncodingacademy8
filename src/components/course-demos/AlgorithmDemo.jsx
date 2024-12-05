/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive algorithm visualization demo component
*/

import { useState, useEffect } from 'react';
import { FaPlay, FaRedo, FaRandom } from 'react-icons/fa';

export default function AlgorithmDemo() {
    const [algorithm, setAlgorithm] = useState('bubble');
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        generateRandomArray();
    }, []);

    const generateRandomArray = () => {
        const newArray = Array.from({ length: 10 }, () => 
            Math.floor(Math.random() * 50) + 1
        );
        setArray(newArray);
        setCurrentIndex(-1);
        setSorting(false);
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const bubbleSort = async () => {
        const arr = [...array];
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (!sorting) return; // Stop if sorting is cancelled
                setCurrentIndex(j);
                
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setArray([...arr]);
                }
                await sleep(300);
            }
        }
        setCurrentIndex(-1);
    };

    const quickSort = async () => {
        const arr = [...array];

        const partition = async (low, high) => {
            const pivot = arr[high];
            let i = low - 1;

            for (let j = low; j < high; j++) {
                if (!sorting) return; // Stop if sorting is cancelled
                setCurrentIndex(j);
                await sleep(300);

                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    setArray([...arr]);
                }
            }

            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            setArray([...arr]);
            return i + 1;
        };

        const sort = async (low, high) => {
            if (low < high) {
                const pi = await partition(low, high);
                if (!sorting) return; // Stop if sorting is cancelled
                await sort(low, pi - 1);
                await sort(pi + 1, high);
            }
        };

        await sort(0, arr.length - 1);
        setCurrentIndex(-1);
    };

    const startSorting = async () => {
        setSorting(true);
        if (algorithm === 'bubble') {
            await bubbleSort();
        } else {
            await quickSort();
        }
        setSorting(false);
    };

    const resetSort = () => {
        setSorting(false);
        setCurrentIndex(-1);
        generateRandomArray();
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Algorithm Visualization</h3>
                <p className="text-sm text-white/70">Watch sorting algorithms in action</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Visualization Area */}
                <div className="h-48 bg-black/30 rounded-lg p-4 flex items-end justify-center gap-2">
                    {array.map((value, index) => (
                        <div
                            key={index}
                            className={`w-8 rounded-t-lg transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-yellow-400'
                                    : 'bg-yellow-400/30'
                            }`}
                            style={{ height: `${value * 2}%` }}
                        />
                    ))}
                </div>

                {/* Controls */}
                <div className="flex flex-wrap gap-4">
                    <select
                        value={algorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        className="px-4 py-2 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/30"
                        disabled={sorting}
                    >
                        <option value="bubble">Bubble Sort</option>
                        <option value="quick">Quick Sort</option>
                    </select>

                    <button
                        onClick={startSorting}
                        disabled={sorting}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            sorting
                                ? 'bg-white/5 text-white/30'
                                : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                        } transition-colors duration-300`}
                    >
                        <FaPlay />
                        Start Sorting
                    </button>

                    <button
                        onClick={generateRandomArray}
                        disabled={sorting}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            sorting
                                ? 'bg-white/5 text-white/30'
                                : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                        } transition-colors duration-300`}
                    >
                        <FaRandom />
                        New Array
                    </button>

                    <button
                        onClick={resetSort}
                        disabled={!sorting}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            !sorting
                                ? 'bg-white/5 text-white/30'
                                : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                        } transition-colors duration-300`}
                    >
                        <FaRedo />
                        Reset
                    </button>
                </div>

                {/* Algorithm Info */}
                <div className="text-xs text-white/50 border-t border-white/10 pt-4">
                    <p className="font-medium text-sm text-white/70 mb-2">
                        {algorithm === 'bubble' ? 'Bubble Sort' : 'Quick Sort'} Algorithm:
                    </p>
                    <p className="mb-2">
                        {algorithm === 'bubble' 
                            ? 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.'
                            : 'Uses divide-and-conquer strategy. Picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.'
                        }
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Time Complexity: {algorithm === 'bubble' ? 'O(n²)' : 'O(n log n)'}</li>
                        <li>Space Complexity: {algorithm === 'bubble' ? 'O(1)' : 'O(log n)'}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
