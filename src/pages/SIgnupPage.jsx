
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Signup page for Vision Coding Academy
 */

import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import DOMAIN from "../services/endpoint";
import axios from "axios";

export default function SignupPage() {

    const navigate = useNavigate();
    const [notification, setNotification] = useState("")

    useEffect(() => {
        document.title = 'Signup | Vision Coding';
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const email = e.target.email.value;
            const username = e.target.username.value;
            const password = e.target.password.value;
            const confirm = e.target.confirm.value;
            if (password != confirm){
                return setNotification("passwords don't match!")
            }
            const new_user = {email, username, password}
            const res = await axios.post(`${DOMAIN}/api/users`, new_user)
            if (res?.data?.success) {
                setNotification("success! Redirecting...")
                setTimeout(() => {
                    navigate("/login")
                }, 1000)
            }
            else {
                setTimeout(() => {
                    setNotification(res?.data?.message)
                }, 1000)
            }
        }
        catch (err) {
            setNotification("There was an error signing up :( We will look into this, please try again in the near future!")
        }
    }

    return (
        <main className="flex-1 mx-auto">
            <div className="bg-black text-white flex flex-col mx-auto">
                <section className="max-w-[1000px] mx-auto py-5">
                    <h3 className="pl-2 text-5xl md:text-6xl py-10 text-center">Signup</h3>
                    <p className="text-center md:text-lg">Sign up to take <span className="text-yellow-200 pr-1">full advantage</span>
                        of our <span className="text-yellow-200">features</span></p>
                    <p className="text-center md:text-lg">as a member of <span className="text-yellow-200">Vision Coding
                        Academy</span></p>
                </section>
                <section className="py-5 mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder="Email" required
                                className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' placeholder='Username' required rows="10"
                                cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' placeholder='Password' required rows="10"
                                cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="confirm">Confirm Password</label>
                            <input type="password" name='confirm' id='confirm' placeholder='Confirm Password' required
                                rows="10" cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px] text-black" />
                        </div>
                        <button
                            className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Sign
                            Up</button>
                        <p className="text-lg text-center">or <NavLink to="/login"
                            className="text-yellow-200 font-bold">Login</NavLink>
                        </p>
                    </form>
                </section>
                <p className="text-center">{notification}</p>
            </div>
        </main>
    )
}