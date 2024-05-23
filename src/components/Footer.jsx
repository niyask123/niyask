import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FiGitlab } from "react-icons/fi";



export default function Footer() {
    return (
        <div className=''>
            <div className='w-full h-auto '>
                <div className="">
                    <footer className="footer footer-center p-10 bg-primary text-primary-content">
                        <aside>
                            <img src="/img/n1.png" className='w-20 rounded-full' alt="" />
                            <p className="font-bold">
                                NIYAS K
                            </p>
                            <p>Copyright © 2024 - All right reserved by NIYAS</p>
                        </aside>
                        <nav>
                            <div className="grid grid-flow-col gap-4">
                                <a><FaInstagram className='text-2xl cursor-pointer' /></a>
                                <a><FaWhatsapp className='text-2xl cursor-pointer' /></a>
                                <a><SiIndeed className='text-2xl cursor-pointer' /></a>
                                <a><CiLinkedin className='text-2xl cursor-pointer' /></a>
                            </div>
                        </nav>
                    </footer>
                </div>
            </div>
            <div className="fixed bottom-7 right-1 lg:right-1 bg-transparent z-50">
                <div className="grid grid-flow-row gap-2">
                <a href='https://github.com/niyask123'><LuGithub className='text-2xl p-1 bg-slate-50 rounded-md text-gray-900 cursor-pointer' /></a>
                <a href='https://gitlab.com/niyask'><FiGitlab className='text-2xl p-1 bg-slate-50 rounded-md text-yellow-500 cursor-pointer' /></a>
                    <a href='https://www.instagram.com/niyas_k__?igsh=c2NiNDI4MzIyaHNv'><FaInstagram className='text-2xl p-1 bg-slate-50 rounded-md text-red-600 cursor-pointer' /></a>
                    <a href='https://wa.me/8075801527'><FaWhatsapp className='text-2xl p-1 bg-slate-50 rounded-md text-green-500 cursor-pointer' /></a>
                    <a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage'><SiIndeed className='text-2xl p-1 bg-slate-50 rounded-md text-indigo-500 cursor-pointer' /></a>
                    <a href='www.linkedin.com/in/niyas-k-032764286'><CiLinkedin className='text-2xl p-1 bg-slate-50 rounded-md text-blue-800  cursor-pointer' /></a>
                </div>
            </div>
        </div>


    )
}
