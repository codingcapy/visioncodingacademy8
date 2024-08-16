
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Login page for Vision Coding Academy
 */

import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore";

export default function LoginPage() {

    const navigate = useNavigate();
    const [notification, setNotification] = useState("")
    const { loginService, authLoading, user } = useAuthStore((state) => state);

    useEffect(() => {
        document.title = 'Login | Vision Coding';
    }, []);

    useEffect(() => {
        if (!!user) {
            navigate(`/`);
        }
    }, [user])

    async function handleLogin(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!email || !password) return;
        loginService(email, password);
        if (!user) {
            setTimeout(() => {
                setNotification("Invalid login credentials");
            }, 700)
        }
    }

    return (
        <main className="flex-1 mx-auto">
            <div className="bg-black text-white flex flex-col mx-auto">
                <section className="max-w-[1000px] mx-auto py-5">
                    <h3 className="pl-2 text-5xl md:text-6xl py-5 text-center">Login</h3>
                    <p className="text-center md:text-lg">Login to take <span className="pr-1 text-yellow-200">full advantage</span>
                        of our <span className=" text-yellow-200">features</span></p>
                    <p className="text-center md:text-lg">as a member of <span className="text-yellow-200">Vision Coding
                        Academy</span></p>
                </section>
                <section className="py-10 mx-auto">
                    <form onSubmit={handleLogin} className="flex flex-col mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="title">Email</label>
                            <input type="email" name='email' id='email' placeholder="Email" required
                                className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="content">Password</label>
                            <input type="password" name='password' id='password' placeholder='Password' required rows="10"
                                cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" />
                        </div>
                        <button
                            className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Login</button>
                        <p className="text-lg text-center">New User? <NavLink to="/signup"
                            className="text-yellow-200 font-bold">Sign Up</NavLink></p>
                        <p className="text-lg text-center">Forgot Password? <NavLink to="/forgotpassword"
                            className="text-yellow-200 font-bold">Recovery</NavLink></p>
                    </form>
                </section>
                {authLoading ? <h2 className="text-center">Loading...</h2> : null}
                <p className="text-center">{notification}</p>
            </div>
        </main>
    )
}