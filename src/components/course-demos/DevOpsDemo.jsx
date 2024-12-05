/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Interactive DevOps pipeline demo component
*/

import { useState, useEffect } from 'react';
import { FaPlay, FaRedo, FaCode, FaVial, FaBox, FaRocket, FaCheck, FaTimes } from 'react-icons/fa';

export default function DevOpsDemo() {
    const [running, setRunning] = useState(false);
    const [currentStage, setCurrentStage] = useState(-1);
    const [stageStatuses, setStageStatuses] = useState({});
    const [logs, setLogs] = useState([]);

    const stages = [
        { id: 'build', name: 'Build', icon: FaCode, time: 2000 },
        { id: 'test', name: 'Test', icon: FaVial, time: 3000 },
        { id: 'package', name: 'Package', icon: FaBox, time: 2000 },
        { id: 'deploy', name: 'Deploy', icon: FaRocket, time: 3000 }
    ];

    const resetPipeline = () => {
        setRunning(false);
        setCurrentStage(-1);
        setStageStatuses({});
        setLogs([]);
    };

    const addLog = (message, type = 'info') => {
        setLogs(prev => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const runPipeline = async () => {
        setRunning(true);
        addLog('Starting CI/CD pipeline...');

        for (let i = 0; i < stages.length; i++) {
            const stage = stages[i];
            setCurrentStage(i);
            addLog(`Starting ${stage.name} stage...`);

            await sleep(stage.time);

            // Simulate random success/failure
            const success = Math.random() > 0.2;
            setStageStatuses(prev => ({
                ...prev,
                [stage.id]: success
            }));

            if (success) {
                addLog(`${stage.name} stage completed successfully`, 'success');
            } else {
                addLog(`${stage.name} stage failed`, 'error');
                break;
            }
        }

        setRunning(false);
    };

    return (
        <div className="card border border-white/10 overflow-hidden">
            <div className="bg-yellow-400/10 p-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">CI/CD Pipeline Demo</h3>
                <p className="text-sm text-white/70">Experience a DevOps deployment pipeline</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Pipeline Visualization */}
                <div className="relative">
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/10 -translate-y-1/2" />
                    <div className="grid grid-cols-4 gap-4 relative">
                        {stages.map((stage, index) => {
                            const Icon = stage.icon;
                            const isActive = currentStage === index;
                            const status = stageStatuses[stage.id];
                            
                            return (
                                <div key={stage.id} className="text-center">
                                    <div className={`
                                        w-12 h-12 mx-auto rounded-full flex items-center justify-center
                                        transition-all duration-300
                                        ${isActive ? 'bg-yellow-400 text-black scale-110' : 'bg-white/10 text-white/70'}
                                        ${status === true ? 'bg-green-500 text-white' : ''}
                                        ${status === false ? 'bg-red-500 text-white' : ''}
                                    `}>
                                        {status === true ? <FaCheck /> : 
                                         status === false ? <FaTimes /> :
                                         <Icon />}
                                    </div>
                                    <div className="mt-2 text-sm text-white/70">{stage.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Console Output */}
                <div className="space-y-2">
                    <div className="text-sm text-white/70">Pipeline Logs:</div>
                    <div className="bg-black/30 p-3 rounded-lg font-mono text-sm h-48 overflow-y-auto">
                        {logs.map((log, index) => (
                            <div 
                                key={index} 
                                className={`
                                    ${log.type === 'error' ? 'text-red-400' : ''}
                                    ${log.type === 'success' ? 'text-green-400' : ''}
                                    ${log.type === 'info' ? 'text-white/70' : ''}
                                `}
                            >
                                [{log.timestamp}] {log.message}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex gap-4">
                    <button
                        onClick={runPipeline}
                        disabled={running}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            running
                                ? 'bg-white/5 text-white/30'
                                : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                        } transition-colors duration-300`}
                    >
                        <FaPlay />
                        Run Pipeline
                    </button>
                    <button
                        onClick={resetPipeline}
                        disabled={running}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${
                            running
                                ? 'bg-white/5 text-white/30'
                                : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                        } transition-colors duration-300`}
                    >
                        <FaRedo />
                        Reset
                    </button>
                </div>

                {/* Explanation */}
                <div className="text-xs text-white/50 border-t border-white/10 pt-4">
                    <p>This demo simulates a typical CI/CD pipeline:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Build: Compiles and builds the application</li>
                        <li>Test: Runs automated tests</li>
                        <li>Package: Creates deployment artifacts</li>
                        <li>Deploy: Deploys to production environment</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
