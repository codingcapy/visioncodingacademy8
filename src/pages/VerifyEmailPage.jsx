import { NavLink } from "react-router-dom";


export default function VerifyEmailPage(){

    return(
        <main className="flex-1 ">
            <section className="h-[550px] md:h-[700px] py-10 pt-20 bg-gradient-to-t from-black to-gray-900 text-white">
                <h1 className="timeline-content js--fadeInRight text-4xl md:text-8xl text-center">Confirm Email</h1>
                <p className="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">An email has been sent to your email address. Please confirm your email address!</p>
                <NavLink to='/login' className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500 flex flex-col mx-auto text-center w-[100px]">OK</NavLink>
            </section>
        </main>
    )
}