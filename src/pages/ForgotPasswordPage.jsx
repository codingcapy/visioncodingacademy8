
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: forgot password page for Vision Coding Academy
 */

import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { useState } from "react";
import axios from "axios";
import DOMAIN from "../services/endpoint";

export default function ForgotPasswordPage(){

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    async function handleRecovery(e) {
        e.preventDefault();
        let email = e.target.email?.value;
        try{
            const res = await axios.post(`${DOMAIN}/api/users/forgotpassword/${email}`, { email });
            if (res.data.success) {
                setMessage("A password recovery email was sent to your email address")
                setEmailSent(true)
            }
            else {
                setMessage("No account was found under that email address.")
            }
        }
        catch (err){
            setMessage("An error occured sending email. We will look into this, please try again in the near future!")
        }
    }

    return(
        <div>
            <div className="flex flex-col min-h-screen">
                <main className="flex-1 mx-auto py-10 px-5">
                    {!emailSent && <form onSubmit={handleRecovery} className="flex flex-col">
                        <h2 className="py-10 text-4xl md:text-6xl text-yellow-200 font-medium text-center">Forgot Password</h2>
                        <p className="text-center py-5">Enter your email address and we will send a temporary password.</p>
                        <div className="flex flex-col">
                            <label htmlFor="username">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" required className="px-2 border rounded-lg border-slate-700 py-1 text-black" />
                        </div>
                        <button className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Send</button>
                    </form>}
                    <p className="text-center py-2">{message}</p>
                    {emailSent && <div className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500 text-center">
                        <NavLink to="/login">Login</NavLink>
                    </div>}
                    <div>Returning User? <NavLink to="/login" className="text-center text-yellow-200">Login</NavLink></div>
                    <div>New User? <NavLink to="/signup" className="text-center text-yellow-200">Sign Up</NavLink></div>
                    {authLoading ? <h2>Loading...</h2> : null}
                </main>
            </div>
        </div>
    )
}