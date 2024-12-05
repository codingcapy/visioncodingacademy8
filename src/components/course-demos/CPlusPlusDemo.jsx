/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive C++ demo component
*/

import { useState } from 'react';
import { FaPlay, FaRedo, FaMemory } from 'react-icons/fa';

export default function CPlusPlusDemo() {
    const [step, setStep] = useState(0);
    const [memoryView, setMemoryView] = useState([]);
    const [output, setOutput] = useState([]);

    const resetDemo = () => {
        setStep(0);
        setMemoryView([]);
        setOutput([]);
    };

    const demoSteps = [
        {
            code: `int main() {
    int number = 42;
    cout << "Value: " << number << endl;
    return 0;
}`,
            memory: [
                { address: '0x1000', name: 'number', value: '42', type: 'int', size: '4 bytes' }
            ],
            output: ['Value: 42']
        },
        {
            code: `int main() {
    int* ptr = new int(100);
    cout << "Value: " << *ptr << endl;
    delete ptr;
    return 0;
}`,
            memory: [
                { address: '0x1000', name: 'ptr', value: '0x2000', type: 'int*', size: '8 bytes' },
                { address: '0x2000', name: 'heap', value: '100', type: 'int', size: '4 bytes' }
            ],
            output: ['Value: 100']
        },
        {
            code: `int main() {
    vector<int> numbers = {1, 2, 3};
    for(int num : numbers) {
        cout << num << " ";
    }
    return 0;
}`,
            memory: [
                { address: '0x1000', name: 'numbers', value: '[1,2,3]', type: 'vector<int>', size: '24 bytes' },
                { address: '0x1018', name: 'capacity', value: '3', type: 'size_t', size: '8 bytes' }
            ],
            output: ['1 2 3']
        }
    ];

    const nextStep = () => {
        if (step < demoSteps.length - 1) {
            setStep(step + 1);
            setMemoryView(demoSteps[step + 1].memory);
            setOutput(demoSteps[step + 1].output);
        }
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Try C++ Memory Management</h3>
                <p className="text-sm text-white/70">See how C++ manages memory and variables</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Code Window */}
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400 mb-2">// C++ Program</div>
                    <pre className="text-white/70 whitespace-pre-wrap">
                        {demoSteps[step].code}
                    </pre>
                </div>

                {/* Memory Visualization */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                        <FaMemory className="text-yellow-400" />
                        <span>Memory Layout</span>
                    </div>
                    <div className="grid gap-2">
                        {memoryView.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white/5 p-3 rounded-lg grid grid-cols-4 gap-4 text-sm"
                            >
                                <div className="text-yellow-400">{item.address}</div>
                                <div className="text-white/70">{item.name}</div>
                                <div className="text-white">{item.value}</div>
                                <div className="text-white/50 text-right">{item.size}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Output Console */}
                <div className="space-y-2">
                    <div className="text-sm text-white/70 mb-2">Program Output:</div>
                    <div className="bg-black/30 p-3 rounded-lg font-mono text-sm">
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
                    <p>This demo shows how C++ manages memory differently from higher-level languages:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Stack memory for local variables</li>
                        <li>Heap memory for dynamic allocation</li>
                        <li>Direct memory management with pointers</li>
                        <li>Automatic memory layout for data structures</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
