import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ThreeDCardDemo} from "../components/AceternityUI/3D-cardEffect/3d-cardComponent"


export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className='w-auto h-auto flex flex-col lg:gap-y-2 gap-y-14 '>
                <div className="flex flex-cols-3 gap-4 justify-evenly   pt-10">
                    <div className="">
                        <span className="spText text-4xl bg-gradient-to-r from-violet-400 to-purple-300 text-transparent bg-clip-text">I'm</span>
                        <span data-aos='fade-right' data-aos-delay="200" className="spText text-7xl lg:text-8xl bg-gradient-to-r from-violet-400 to-purple-300 text-transparent bg-clip-text">
                            NIYAS K
                        </span>
                    </div>
                </div>
                <div className="flex flex-cols-3 gap-4 justify-evenly  lg:py-10 ">
                    <div data-aos="fade-up" data-aos-delay="400" className=" ">
                    <ThreeDCardDemo></ThreeDCardDemo>
                        {/* <img src="/img/WhatsApp Image 2024-05-04 at 4.50.23 PM.jpeg" className='w-64 rounded-full ' alt="" /> */}
                    </div>
                </div>
                <div className="flex justify-evenly text-center">   
                    <div data-aos="fade-up" data-aos-delay="400" className="">
                        <span className='spText text-3xl lg:text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>FULLSTACK WEB DEVELOPER</span>
                    </div>
                </div>
              
            </div>
            
            {/* <div className="hover:transition Hover:duration-[10s] hover:delay-[10s] ease-in-out p-24 hover:rounded-full  bg-red-400 mx-10" >

            </div> */}
            
           

        </div>
    )
}
