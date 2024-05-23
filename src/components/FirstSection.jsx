import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";
import {BackgroundBoxesDemo} from "../components/AceternityUI/3D-cardEffect/3d-box"
import { LampDemo } from "./AceternityUI/3D-cardEffect/lamp";
// import { BackgroundBeamsDemo } from "./AceternityUI/3D-cardEffect/3d-everault-card";



export default function FirstSection() {
  return (
  <>
  <BackgroundBoxesDemo></BackgroundBoxesDemo>
    <div className="overflow-hidden ">
      <div className="p-23  bg-red-400"></div>
      <div className="w-auto h-auto  mb-28">
        
        <LampDemo></LampDemo>
        <div className="grid pt-20 gap-4 grid-cols-2 lg:grid-cols-6 px-6 lg:px-12 grid-rows-6 lg:grid-rows-2 overflow-hidden">
          <div data-aos="fade-right" className="lg:p-14 p-4 flex justify-center items-center  bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <FaReact className="text-7xl text-red-600 " />
          </div>
          <div data-aos="fade-down" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <FaHtml5 className="text-7xl text-orange-500" />
          </div>
          <div data-aos="fade-down" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <FaBootstrap className="text-7xl text-blue-600" />
          </div>
          <div data-aos="fade-down" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <RiTailwindCssFill className="text-7xl text-cyan-500" />
          </div>
          <div data-aos="fade-down" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <FaPhp className="text-7xl text-sky-700" />
          </div>
          <div  data-aos="fade-left" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <FaLaravel className="text-7xl text-red-600" />
          </div>
          <div data-aos="fade-right" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <DiCodeigniter className="text-7xl text-red-700" />
          </div>
          <div data-aos="fade-up" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <SiVite className="text-7xl text-purple-500" />
          </div>
          <div data-aos="fade-up" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <FaVuejs className="text-7xl text-emerald-600" />
          </div>
          <div data-aos="fade-up" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <SiMysql className="text-7xl text-sky-700" />
          </div>
          <div data-aos="fade-up" className="lg:p-14 flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <TbBrandJavascript className="text-7xl text-yellow-400" />
          </div>
          <div data-aos="fade-left" className="lg:p-14  flex justify-center items-center bg-gradient-to-r from-indigo-200 to-gray-300 rounded-lg transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-105">
            <SiJquery className="text-7xl text-blue-500" />
          </div>
        </div>
        <div className="p-12 grid grid-cols-2 gap-6 hover:rounded-full">
          <div className="shadow-sm"></div>
        </div>
        <div className="overflow-hidden">
          <div className="flex justify-center pb-10">
            <div className="text-center ">
              <span className="lg:text-4xl text-3xl text-blue-600 sp1Text">
                PROFESSIONAL EXPERIENCE
              </span>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2">
            <div
              data-aos="fade-down-right"
              data-aos-delay="100"
              className="max-w-md mx-12   bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl mb-4"
            >
              <div className="md:flex ">
                <div className="md:shrink-0 hidden lg:block">
                  <img
                    src="/img/11.png"
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Web Designer
                  </div>
                  <a
                    href="https://www.techbutomy.com/"
                    className=" mt-1 text-lg leading-tight  text-black hover:underline font-semibold flex "
                  >
                    {" "}
                    <span className="pe-2 lg:pe-4">
                      <TbWorldWww />
                    </span>
                    TECHBUTOMY.
                  </a>
                  <p className="mt-2 text-slate-500 flex">
                    <span className="lg:pe-4 pe-2">
                      <FcCheckmark />
                    </span>
                    September 2024 | Trivandrum, India
                  </p>
                </div>
              </div>
            </div>
            <div 
              data-aos="fade-down-left"
              data-aos-delay="100"
              className="max-w-md mx-12   bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl mb-4"
            >
              <div className="md:flex ">
                <div className="md:shrink-0 hidden lg:block">
                  <img
                    src="/img/2.png"
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Web Developer
                  </div>
                  <a
                    href="https://www.eminentsoft.com/"
                    className=" mt-1 text-lg leading-tight  text-black hover:underline font-semibold flex "
                  >
                    {" "}
                    <span className="pe-2 lg:pe-4">
                      <TbWorldWww />
                    </span>
                    EMINENTSOFT TECHNOLOGOIES
                  </a>
                  <p className="mt-2 text-slate-500 flex">
                    <span className="lg:pe-4 pe-2">
                      <FcCheckmark />
                    </span>
                    September 2023 – February 2024 | Ernakulam (Infopark), India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 ">
            <div
              data-aos="fade-up-right"
              data-aos-delay="100"
              className="max-w-md mx-12   bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl mb-4"
            >
              <div className="md:flex ">
                <div className="md:shrink-0 hidden lg:block">
                  <img
                    src="/img/3.png"
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Web Developer (internship)
                  </div>
                  <a
                    href="https://www.trylogic.in/"
                    className=" mt-1 text-lg leading-tight  text-black hover:underline font-semibold flex "
                  >
                    {" "}
                    <span className="pe-2 lg:pe-4">
                      <TbWorldWww />
                    </span>
                    TRYLOGIC SOFT SOLUTION
                  </a>
                  <p className="mt-2 text-slate-500 flex">
                    <span className="lg:pe-4 pe-2">
                      <FcCheckmark />
                    </span>
                    February 2023 – August 2023 | Trivandrum, India
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-delay="100"
              className="max-w-md mx-12   bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl mb-4"
            >
              <div className="md:flex ">
                <div className="md:shrink-0 hidden lg:block">
                  <img
                    src="/img/4.png"
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Computer Operator & Programming Assistant
                  </div>
                  <a
                    href="https://kwa.kerala.gov.in/en/"
                    className=" mt-1 text-lg leading-tight  text-black hover:underline font-semibold flex "
                  >
                    {" "}
                    <span className="pe-2 lg:pe-4">
                      <TbWorldWww />
                    </span>
                    KWA
                  </a>
                  <p className="mt-2 text-slate-500 flex">
                    <span className="lg:pe-4 pe-2">
                      <FcCheckmark />
                    </span>
                    2021 – 2022 | Taliparamba, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid  grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 grid-cols-1 gap-8 p-12">
                    <div className="">
                        <img src="/img/n1.png" alt="" loading='lazy' />
                    </div>
                    <div className="">
                        <img src='/img/n2.png' alt="" loading='lazy' />
                    </div>
                    <div className="">
                        <img src="/img/n3.png" alt="" loading="lazy" />
                    </div>
                    <div className="">
                        <img src="/img/n4.jpeg" alt="" loading="lazy" />
                    </div>
                </div> */}

        <div className="lg:p-12 p-5 overflow-hidden hidden lg:block">
          <div className="w-auto h-screen  flex items-center overflow-hidden">
            <div 
              className="absolute bg-transparent mx-auto inset-x-0  justify-center bg-no-repeat  h-[34rem]  w-[0rem] lg:w-[30rem] bg-center "
              style={{
                backgroundImage: `url('/img/edu/edu.png')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                zIndex: "10",
              }}
            >
              <div className="relative bg-transparent w-full h-full ">
                <div
                  data-aos="fade-right"
                  className="flex items-center absolute bg-transparent top-[0px] lg:top-[90px] -left-48 lg:-left-[22rem] justify-center bg-no-repeat h-10 lg:h-[4rem] w-[25rem]  bg-center"
                  style={{
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    zIndex: "10",
                  }}
                >
                  <div className="grid">
                    <div className=" uppercase tracking-wide text-lg text-center text-gray-200 font-semibold">
                      Diploma in Secretarial Practice
                    </div>
                    <div className="uppercase tracking-wide text-sm text-center text-gray-200 font-semibold">
                      State Board of Technical Education 2019
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-right"
                  className="flex items-center absolute bg-transparent top-[390px] -left-48 lg:-left-[22rem] justify-center bg-no-repeat h-10 lg:h-[4rem] w-[25rem]  bg-center"
                  style={{
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    zIndex: "10",
                  }}
                >
                  <div className="grid">
                    <div className=" uppercase tracking-wide text-lg text-center text-gray-200 font-semibold">
                      Higher Secondary Education
                    </div>
                    <div className="uppercase tracking-wide text-sm text-center text-gray-200 font-semibold">
                      higher secondary education kerala - 2017
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-left"
                  className="flex items-center absolute bg-transparent top-[230px] lg:top-[390px] -right-[12.6rem]  lg:-left-50 lg:-right-[22rem] justify-center bg-no-repeat h-10 lg:h-[4rem] w-[25rem]"
                  style={{
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    zIndex: "10",
                  }}
                >
                  <div className="grid">
                    <div className=" uppercase tracking-wide text-lg text-center text-gray-200 font-semibold">
                      Computer Operator & Programming Assistant
                    </div>
                    <div className="uppercase tracking-wide text-sm text-center text-gray-200 font-semibold">
                      Gov. ITI Kasargod 2021 – 2021
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-left"
                  className="flex items-center absolute bg-transparent top-[90px] -right-[13rem] -left-50 lg:-right-[22rem] justify-center bg-no-repeat h-10 lg:h-[4rem] w-[25rem]"
                  style={{
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    zIndex: "10",
                  }}
                >
                  <div className="grid">
                    <div className=" uppercase tracking-wide text-lg text-center text-gray-200 font-semibold">
                      Web Developer (internship)
                    </div>
                    <div className="uppercase tracking-wide text-sm text-center text-gray-200 font-semibold">
                      Ministry of Rural Development (MoRD) Government of India |
                      2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:p-12 p-5 overflow-hidden">
          <div
            className="rounded-xl"
            style={{ backgroundImage: "url(/img/foot.jpg)" }}
          >
            <div className="flex lg:text-5xl  text-3xl sp1Text lg:p-12 pt-12 text-center justify-center">
              MY PROJECT
            </div>
            <div className=" min-h-auto mt-12 mb rounded-lg flex text-center justify-center items-center">
              <div className="grid gap-4 mb-24 grid-cols-1 lg:grid-cols-4 px-6 lg:px-12 grid-rows-2 lg:grid-rows-2 ">
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Asianroof
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/as3.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/as2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/as1.png" />
                        </div>
                      </div>
                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://asianroof.in/"
                              className="hover:underline"
                            >
                              asianroof.in
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Drbinsusclinic
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bs1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bs2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bs3.png" />
                        </div>
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://drbinsusclinic.com/"
                              className="hover:underline"
                            >
                              drbinsusclinic.com
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Inthings
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/in1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/in2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/in3.png" />
                        </div>
                      </div>
                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://www.inthings.tech/"
                              className="hover:underline"
                            >
                              inthings.tech
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Cochincabway
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/cc1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/cc2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/cc3.png" />
                        </div>
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://www.cochincabway.com/"
                              className="hover:underline"
                            >
                              cochincabway.com
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Gokulambueno
                  </button>
                  <dialog id="my_modal_5" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/gg1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/gg2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/gg3.png" />
                        </div>
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://www.gokulambueno.com/"
                              className="hover:underline"
                            >
                              gokulambueno.com
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_6").showModal()
                    }
                  >
                    Indianbuildingmaterials
                  </button>
                  <dialog id="my_modal_6" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/ib1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/ib2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/ib3.png" />
                        </div>
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://indianbuildingmaterials.com/"
                              className="hover:underline"
                            >
                              indianbuildingmaterials.com
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_7").showModal()
                    }
                  >
                    Bethelphysiotherapy
                  </button>
                  <dialog id="my_modal_7" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bp1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bp2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bp3.png" />
                        </div>
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://bethelphysiotherapy.com/"
                              className="hover:underline"
                            >
                              bethelphysiotherapy.com
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_8").showModal()
                    }
                  >
                    Vikaasgroup
                  </button>
                  <dialog id="my_modal_8" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        {/* <div className="carousel-item h-full">
                                                <img src="/img/projects/as3.png" />
                                            </div>
                                            <div className="carousel-item h-full">
                                                <img src="/img/projects/as2.png" />
                                            </div>
                                            <div className="carousel-item h-full">
                                                <img src="/img/projects/as1.png" />
                                            </div> */}
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://vikaasgroup.com/"
                              className="hover:underline"
                            >
                              vikaasgroup.com
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="lg:p-0 p-4 flex justify-center items-center  ">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-wide bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_9").showModal()
                    }
                  >
                    Bluediamondtrading
                  </button>
                  <dialog id="my_modal_9" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bd1.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bd2.png" />
                        </div>
                        <div className="carousel-item h-full">
                          <img src="/img/projects/bd3.png" />
                        </div>
                      </div>

                      <div className="mockup-code mt-12">
                        <pre
                          data-prefix="1"
                          className="bg-blue-600 text-warning-content "
                        >
                          <code>
                            Website:{" "}
                            <a
                              href="https://bluediamondtrading.in/"
                              className="hover:underline"
                            >
                              bluediamondtrading.in
                            </a>{" "}
                          </code>
                        </pre>
                        <pre
                          data-prefix="2"
                          className="bg-red-500 text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                        <pre
                          data-prefix="3"
                          className="bg-warning text-warning-content"
                        >
                          <code>Soon!</code>
                        </pre>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
