import { useState } from "react"
import useAuthStore from "../store/AuthStore"
import visionCodingIcon from "/yellow1.png"
import axios from "axios"
import DOMAIN from "../services/endpoint"
import { useNavigate } from "react-router-dom"

export default function AccountPage() {

    const { user, logoutService } = useAuthStore((state) => state)
    const [editPasswordMode, setEditPasswordMode] = useState(false)
    const [editUsernameMode, setEditUsernameMode] = useState(false)
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    async function handleEditPassword(e) {
        e.preventDefault()
        const password = e.target.password.value;
        const userId = user.user_id
        const updatedPassword = { password };
        try {
            const res = await axios.post(`${DOMAIN}/api/users/${userId}`, updatedPassword);
            if (res?.data.success) {
                setEditPasswordMode(false);
                setNotification("Password updated successfully!")
            }
            else {
                setNotification(res?.data.message)
            }
        }
        catch (err) {
            setNotification("There was an error updating the password :( We will look into this issue, please try again in the near future!")
        }
    }

    async function handleEditUsername(e) {
        e.preventDefault()
        const username = e.target.username.value;
        const userId = user.user_id
        const updatedUsername = { username };
        const res = await axios.post(`${DOMAIN}/api/users/update/${userId}`, updatedUsername);
        if (res?.data.success) {
            setEditUsernameMode(false);
            setNotification("Username updated successfully! Logging out...")
            setTimeout(() => {
                navigate("/")
                logoutService()
            }, 1000)
        }
        else {
            setNotification(res?.data.message)
        }
    }

    return (
        <main className="flex-1 overflow-x-hidden">
            <h2 className="text-4xl md:text-6xl text-center pt-20 text-yellow-200">Your Account</h2>
            <div className="mt-20 h-[70px]">
                <div
                    className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                </div>
                <img src={visionCodingIcon} alt=""
                    className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
            </div>
            <section className="flex flex-col mx-auto">
                <div className="mx-auto pb-10">
                    <h2 className="text-2xl">Username: <span className="text-yellow-200">{user.username}</span></h2>
                    {/* {editUsernameMode ?
                        <form onSubmit={handleEditUsername} className="flex flex-col">
                            <input type="text" id="username" name="username" placeholder="New Username" required className="px-2 border rounded-lg border-slate-700 py-1 text-black" />
                            <p className="pt-2">Warning: You will be logged out once you change your username!</p>
                            <button type="submit" className="rounded-xl my-5 py-2 px-2 bg-slate-700 text-white" >Change Username</button>
                            <button className="" onClick={() => setEditUsernameMode(false)}>Cancel</button>
                        </form>
                        : <button className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500 w-[200px] mx-auto" onClick={() => setEditUsernameMode(true)}>Edit</button>} */}
                </div>
                <div className="mx-auto">
                    <h2 className="text-2xl">Password: <span className="text-yellow-200">••••••••••</span></h2>
                    {editPasswordMode
                        ? <form onSubmit={handleEditPassword} className="flex flex-col">
                            <input type="password" id="password" name="password" placeholder="New Password" required className="px-2 border rounded-lg border-slate-700 py-1 text-black" />
                            <button type="submit" className="rounded-xl my-5 py-2 px-2 bg-slate-700 text-white" >Change password</button>
                            <button className="" onClick={() => setEditPasswordMode(false)}>Cancel</button>
                        </form>
                        :
                        <button className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500 w-[200px] mx-auto" onClick={() => setEditPasswordMode(true)}>Edit</button>}
                </div>
            </section>
            <p className="text-center">{notification}</p>
            <div className="mt-20">
                <div
                    className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                </div>
                <img src={visionCodingIcon} alt=""
                    className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
            </div>
        </main>
    )
}