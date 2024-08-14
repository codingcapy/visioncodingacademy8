
import etransfer from "/etransfer.webp"

export default function PaymentPage(){


    return(
        <main class="flex-1 ">
            <section class="h-[550px] md:h-[700px] py-10 pt-20 bg-gradient-to-t from-black to-gray-900 text-white">
                <h1 class="timeline-content js--fadeInRight text-4xl md:text-8xl text-center">Payment Method</h1>
                <img src={etransfer} alt="" class="mx-auto w-[75px]"/>
                <p class="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">Please send interac
                    e-transfer to:</p>
                <p class="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">visioncqt@gmail.com</p>
                <p class="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">Vision Coding Academy
                </p>
                <h1 class="timeline-content js--fadeInRight text-4xl md:text-8xl text-center pt-20">Invoice Request</h1>
                <p class="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">Please send invoice
                    requests to:</p>
                <p class="timeline-content js--fadeInRight text-md md:text-2xl pt-5 text-center">
                    visionmanager001@gmail.com</p>
            </section>
        </main>
    )
}