import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ThreeDCardDemo} from "../components/AceternityUI/3D-cardEffect/3d-cardComponent"
import {BackgroundBeamsDemo} from "../components/AceternityUI/3D-cardEffect/3d-everault-card"


export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <BackgroundBeamsDemo/>
            <div className='w-auto h-auto flex flex-col lg:gap-y-2 gap-y-14  bg-black'>
                
                <div className="flex flex-cols-3 gap-4 justify-evenly  lg:py-10 ">
                    <div data-aos="fade-up" data-aos-delay="400" className=" ">
                    <ThreeDCardDemo></ThreeDCardDemo>
                        {/* <img src="/img/WhatsApp Image 2024-05-04 at 4.50.23 PM.jpeg" className='w-64 rounded-full ' alt="" /> */}
                    </div>
                </div>
                
              
            </div>
            
            {/* <div className="hover:transition Hover:duration-[10s] hover:delay-[10s] ease-in-out p-24 hover:rounded-full  bg-red-400 mx-10" >

            </div> */}
            
           

        </div>
    )
}
