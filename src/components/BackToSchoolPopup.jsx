
import popup from "/gallery1-2.jpg"
import image from "/zIMG_4478.jpg"

export default function BackToSchoolPopup(){

    return(
        <section id='pop-up'>
                <div id='pop-up-div' className="border-2 border-yellow-300">
                    <h2 className="text-3xl md:text-6xl text-yellow-200 text-center pt-1 md:pt-5 md:px-5">LIMITED TIME OFFER!</h2>
                    <h2 className="text-2xl md:text-4xl text-yellow-200 text-center py-1 md:py-2">Back to School Event!</h2>
                    <p className="text-sm md:text-2xl text-center pb-1 md:pb-2"><span className="text-yellow-300">All 1-on-1 classes</span> $300/month 4 courses 90 minutes/class</p>
                    <p className="text-sm md:text-2xl text-center pb-1 md:pb-2"><span className="text-yellow-300">All group classes</span> $192/month 4 courses 90 minutes/class</p>
                    <img src={image} alt="" className="py-1 md:py-2 w-[400px] mx-auto" />
                    <button id="ok-button"
                        className="flex flex-col mx-auto my-1 md:my-3 px-10 md:px-16 py1 md:py-3 border-4 rounded border-yellow-300 text-yellow-300 font-bold text-xl md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">OK</button>
                </div>
            </section>
    )
}