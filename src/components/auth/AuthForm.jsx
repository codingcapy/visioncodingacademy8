/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Enhanced authentication form component with coding theme
*/

import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaCode, FaGithub, FaGoogle } from 'react-icons/fa';

const InputField = ({ icon: Icon, type, placeholder, value, onChange }) => (
    <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
            <Icon size={20} />
        </div>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-colors duration-300"
        />
    </div>
);

const CodeBlock = ({ children }) => (
    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
        <div className="flex items-center gap-2 text-white/30 text-xs mb-2">
            <FaCode />
            <span>auth.js</span>
        </div>
        <pre className="text-white/70">
            {children}
        </pre>
    </div>
);

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const updateForm = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
                {/* Form Side */}
                <div className="card border border-white/10 p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-2">
                            {isLogin ? 'Welcome Back!' : 'Join the Code Club'}
                        </h2>
                        <p className="text-white/70">
                            {isLogin 
                                ? 'Log in to access your dashboard'
                                : 'Create an account to start coding'
                            }
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputField
                            icon={FaEnvelope}
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => updateForm('email', e.target.value)}
                        />

                        {!isLogin && (
                            <InputField
                                icon={FaUser}
                                type="text"
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => updateForm('username', e.target.value)}
                            />
                        )}

                        <InputField
                            icon={FaLock}
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => updateForm('password', e.target.value)}
                        />

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition-colors duration-300"
                        >
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-surface text-white/50">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-white/70 hover:bg-white/5 transition-colors duration-300"
                            >
                                <FaGithub size={20} />
                                <span>GitHub</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-white/70 hover:bg-white/5 transition-colors duration-300"
                            >
                                <FaGoogle size={20} />
                                <span>Google</span>
                            </button>
                        </div>

                        <div className="text-center text-white/50">
                            <button
                                type="button"
                                onClick={toggleMode}
                                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                            >
                                {isLogin 
                                    ? "Don't have an account? Sign up"
                                    : 'Already have an account? Log in'
                                }
                            </button>
                        </div>
                    </form>
                </div>

                {/* Code Preview Side */}
                <div className="hidden md:block">
                    <CodeBlock>
{`class User {
  constructor(username) {
    this.username = username;
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
    console.log(
      \`Welcome, \${this.username}!\`
    );
  }

  startCoding() {
    if (this.isLoggedIn) {
      console.log(
        "Let's write some code! 🚀"
      );
    }
  }
}`}
                    </CodeBlock>

                    <div className="mt-8 space-y-4 text-white/70">
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">•</span>
                            Access your personalized dashboard
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">•</span>
                            Track your coding progress
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">•</span>
                            Join our coding community
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
