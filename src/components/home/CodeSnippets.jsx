/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Floating code snippets with better layout
*/

import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const snippets = [
    {
        language: 'python',
        code: `def start_journey():
    passion = True
    while passion:
        learn_new_skills()
        solve_challenges()
        grow_stronger()`,
        color: 'from-blue-400/20 to-blue-600/20',
        position: { left: '5%', top: '15%' }
    },
    {
        language: 'javascript',
        code: `function createFuture() {
    const skills = [];
    const potential = Infinity;
    
    while (true) {
        skills.push(newSkill);
        unleashCreativity();
    }
}`,
        color: 'from-yellow-400/20 to-yellow-600/20',
        position: { right: '5%', top: '25%' }
    },
    {
        language: 'cpp',
        code: `class Engineer {
    void evolve() {
        while (true) {
            learnNewTech();
            buildProjects();
            achieveGoals();
        }
    }
};`,
        color: 'from-green-400/20 to-green-600/20',
        position: { left: '8%', bottom: '20%' }
    },
    {
        language: 'java',
        code: `public class Future {
    private List<String> dreams;
    
    public void achieve() {
        while (true) {
            practice();
            innovate();
            succeed();
        }
    }
}`,
        color: 'from-purple-400/20 to-purple-600/20',
        position: { right: '8%', bottom: '30%' }
    }
];

const CodeBlock = ({ code, language, color, position, delay = 0 }) => (
    <motion.div
        className="absolute max-w-md pointer-events-none"
        style={position}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
            y: position.top ? [0, -30] : [0, 30]
        }}
        transition={{
            duration: 15,
            delay,
            repeat: Infinity,
            repeatDelay: 5
        }}
    >
        <div className="relative">
            {/* Glow Effect */}
            <div className={`
                absolute -inset-2 rounded-lg opacity-30
                bg-gradient-to-r ${color} blur-md
            `} />

            {/* Code Container */}
            <div className="relative bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-white/50">{language}</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                </div>
                <SyntaxHighlighter
                    language={language}
                    style={atomDark}
                    customStyle={{
                        background: 'transparent',
                        padding: 0,
                        margin: 0,
                        fontSize: '0.8rem'
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    </motion.div>
);

export default function CodeSnippets() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {snippets.map((snippet, index) => (
                <CodeBlock
                    key={index}
                    {...snippet}
                    delay={index * 2}
                />
            ))}
        </div>
    );
}
