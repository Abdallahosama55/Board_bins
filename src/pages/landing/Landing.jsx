
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/landing/boardlogo.png";
import pins from "../../assets/landing/pins.svg";
import { Link } from "react-router-dom";
import search from "../../assets/landing/search.svg";
import welcome from "../../assets/landing/welcome.png";
import w1 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-1.svg";
import w2 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-2.svg";
import w3 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-3.svg";
import w4 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-4.svg";
import w5 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-5.svg";
import w6 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-6.svg";
import w7 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5-7.svg";
import w8 from "../../assets/landing/div.CuHomeTabs_svgContainer__TQmy5.svg";
import start from "../../assets/landing/start.svg";
import img1 from "../../assets/landing/img1.png";
import img2 from "../../assets/landing/img2.png";
import check from "../../assets/landing/check.svg";
import check_box from "../../assets/landing/check-square.svg";
import chech_black from "../../assets/landing/check-black.svg";
import crm1 from "../../assets/landing/crm1.svg";
import crm2 from "../../assets/landing/crm2.svg";
import start2 from "../../assets/landing/start2.svg";
import start3 from "../../assets/landing/start3.svg";
import crm_img1 from "../../assets/landing/crm-img.png";
import assist from "../../assets/landing/assisst.svg";

import bg1 from "../../assets/landing/bg-1.png";
import bg2 from "../../assets/landing/bg-2.png";
import bg3 from "../../assets/landing/bg-3.png";
import call from "../../assets/landing/call.svg";
import bank from "../../assets/landing/Bank.svg";
import face from "../../assets/landing/Group.svg";
import insta from "../../assets/landing/insta.png";
import twit from "../../assets/landing/twit.svg";
import Steps from "./Steps";

import "./Landing.css";

import Footers from "./components/Footers";
import {Navbars} from "./components/Navbars";
export default function Landing() {
   return (
      <section className="Home bg-[#F5F6FA]">
         <div className="cont">
            {/* nav */}
       <Navbars/>
            {/* welcome */}
            <section className="welcome mt-20">
               <div className="relative">
                  <h1 className="lg:text-[4.5rem] md:text-[3.5rem] sm:text-[3rem] text-[2.5rem] text-[#333] font-[600] text-center font-[Poppins] leading-[5.3125rem] xl:w-3/6 w-11/12 m-auto">
                     Discover, Connect, and Manage in One Platform
                  </h1>
                  <p className="lg:text-[1.375rem] sm:text-[1.2rem] text-[1rem] text-[#000]  text-center mt-7 font-[300] font-[Poppins] leading-[2rem] xl:w-5/12 w-8/12 m-auto">
                     Find the perfect service providers, manage tasks, get
                     instant help with our friendly AI assistant in one platform
                  </p>
                  <div className="lg:w-3/6 md:w-4/6 w-4/5 m-auto relative search-con mt-16">
                     <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="text-[#7F7F7F] w-full text-[1.3rem] p-4  font-[400] font-[Poppins] leading-[184.523%] rounded-2xl"
                     />
                     <div className="overlay absolute top">
                        <LazyLoadImage src={search} />
                     </div>
                  </div>
                  <div className="welcome-over xl:absolute xl:block hidden right-16 top-4 xl:bottom-[-2rem] lg:bottom-0 xl:p-0 lg:p-4 md:p-8">
                     <LazyLoadImage src={welcome} className="h-[80%] " />
                  </div>
               </div>
               <div className="mt-16 grid grid-cols-12 w-5/6 m-auto  ">
                  <div className="xl:col-span-3 col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w8} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3 col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w2} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3  col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w4} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3 col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w6} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3 col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w1} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3  col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w3} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3  col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1     bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w5} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
                  <div className="xl:col-span-3 col-span-6 grid grid-cols-4 we-item xl:py-4 lg:py-3 py-1    bg-white rounded-lg mt-6 ms-3 me-3">
                     <div className="img col-span-1 xl:p-4 lg:p-3 p-2 rounded-lg ">
                        <LazyLoadImage src={w7} className=" rounded-lg " />
                     </div>
                     <div className="col-span-3">
                        <h4 className=" text-[#26222B] lg:text-[1rem] text-[0.8rem]  font-[700] font-[Poppins] leading-[1.18638rem] mb-3">
                           Access to Verified Service Providers
                        </h4>
                        <p className=" text-[#1E1E1E] lg:text-[0.78463rem] text-[0.6rem]    font-[400] font-[Poppins] leading-[0.96769rem]">
                           Find a comprehensive list of verified service
                           providers in one centralized platform, saving you
                           time and effort in searching for reliable partners.
                        </p>
                     </div>
                  </div>
               </div>
               <button className="m-auto  block bg-[#6161FF] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-12">
                  Get Started 🠚
               </button>
               <p className="mt-4 text-[#676879] text-[0.8125rem] text-center  font-[300] font-[Poppins] leading-[1.125rem]">
                  No credit card needed   ✦   Unlimited time on Free plan
               </p>
               <div className="we-end bg-[#E6ECF9] text-center py-12 mt-16 ">
                  <h2 className=" text-[#333] xl:text-[3.625rem] lg:text-[3.1rem] md:text-[2.6rem] text-[2rem]  font-[600] font-[Poppins] leading-[5.3125rem] w-5/6 m-auto">
                     Step into a world of seamless work experiences, powered by
                     a <span className="text-[#6161FF]">suite of products</span>{" "}
                     designed to flex and scale to your way of working.
                  </h2>
               </div>
            </section>
            {/* started */}
            <section className="w-5/6 m-auto mt-8">
               <div>
                  <div className="grid grid-cols-12 bg-white rounded-xl xl:p-6 p-4 xl:ps-8 pt-12 xl:pe-4 ">
                     <div className="md:col-span-6 col-span-12">
                        <div className="grid grid-cols-12 items-center ">
                           <div className="col-span-2 2xl:p-8 md:p-6 p-2 self-start ">
                              <LazyLoadImage
                                 src={start}
                                 className=" rounded-2xl"
                              />
                           </div>
                           <div className="col-span-10">
                              <h5 className="text-[#6161FF] text-[1.46713rem]    font-[600] font-[Poppins] leading-[1.79756rem]  mb-1">
                                 Board Pins. work management
                              </h5>
                              <p className="text-[#676879] text-[0.96038rem]   font-[300] font-[Poppins] leading-[1.17663rem] ">
                                 #1 WORK MANAGEMENT SOFTWARE ON G2
                              </p>
                           </div>
                        </div>
                        <div className="ps-8">
                           <p className="text-[#333] xl:text-[2.375rem] lg:text-[2rem] text-[1.7rem]   font-[500] font-[Poppins] leading-[2.90988rem] border-b-2 border-[#D9D9D9] pb-6">
                              Manage everything from strategy to tasks to exceed
                              your goals
                           </p>
                        </div>
                        <div className="mt-4 ps-8 ">
                           <p className="text-[1.3505rem] leading-[1.65463rem]">
                              Top features
                           </p>
                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem]">
                              <LazyLoadImage
                                 src={check}
                                 className="w-5 inline-block me-2"
                              />
                              Project management
                           </p>
                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem]">
                              <LazyLoadImage
                                 src={check}
                                 className="w-5 inline-block me-2"
                              />
                              Resource management
                           </p>
                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem]">
                              <LazyLoadImage
                                 src={check}
                                 className="w-5 inline-block me-2"
                              />
                              Requests & approvals
                           </p>
                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem]">
                              <LazyLoadImage
                                 src={check}
                                 className="w-5 inline-block me-2"
                              />
                              Custom workflows
                           </p>
                           <button className="me-auto relative ps-8  block bg-[#6161FF] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8">
                              <LazyLoadImage
                                 src={check_box}
                                 className="started-check"
                              />{" "}
                              Get Started 🠚
                           </button>
                        </div>
                     </div>
                     <div className="md:col-span-6 md:block hidden">
                        <div className="img pt-20 relative">
                           <LazyLoadImage
                              src={img1}
                              className="w-5/6 ms-auto ps-10"
                           />
                           <LazyLoadImage
                              src={img2}
                              className="absolute w-3/6 bottom-0 left-[-1rem] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.10)]"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 lg:mt-12">
                     <div className="lg:col-span-6 col-span-12 lg:me-6 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.10)] bg-white xl:p-6 p-4 lg:mt-0 mt-8  rounded-xl pb-0">
                        <div className="grid grid-cols-12 items-center ">
                           <div className="col-span-2 2xl:p-8 md:p-6 p-2 self-start">
                              <LazyLoadImage
                                 src={crm1}
                                 className=" rounded-2xl"
                              />
                           </div>
                           <div className="col-span-10">
                              <h5 className="text-[#486868] xl:text-[1.46713rem] text-[1.2rem]  font-[600] font-[Poppins] leading-[1.79756rem] mb-1">
                                 Board Pins. sales CRM
                              </h5>
                              <p className="text-[#676879] xl:text-[0.96038rem] text-[0.7rem]  font-[300] font-[Poppins] leading-[1.17663rem]">
                                 G2 LEADER FOR CRM SOFTWARE
                              </p>
                           </div>
                        </div>
                        <p className="text-[#333] ps-8 xl:text-[2.375rem] lg:text-[2rem] text-[1.7rem]  font-[500] font-[Poppins] leading-[2.90988rem] border-b-2 border-[#D9D9D9] pb-6 xl:ms-8">
                           Automate your sales cycles to close more deals
                        </p>
                        <div className="">
                           <p className="mt-3 ps-8 text-[1.18025rem] text-[#333] leading-[1.446rem] lg:inline-block block me-4">
                              <LazyLoadImage
                                 src={chech_black}
                                 className="w-5 inline-block me-2"
                              />
                              Sales pipeline
                           </p>
                           <p className="mt-3 ps-8  text-[1.18025rem] text-[#333] leading-[1.446rem] lg:inline-block block me-4">
                              <LazyLoadImage
                                 src={chech_black}
                                 className="w-5 inline-block me-2"
                              />
                              Sales pipeline
                           </p>

                           <p className="mt-3 ps-8  text-[1.18025rem] text-[#333] leading-[1.446rem] lg:inline-block block me-4">
                              <LazyLoadImage
                                 src={chech_black}
                                 className="w-5 inline-block me-2"
                              />
                              Mass email & tracking
                           </p>
                           <button className="me-auto relative ps-8 ms-8  block bg-[#269C9C] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8">
                              <LazyLoadImage
                                 src={start2}
                                 className="started-check"
                              />{" "}
                              Get Started 🠚
                           </button>
                           <div className="relative   ">
                              <div className="item xl:w-2/6 lg:w-3/6 w-4/6 m-auto 2xl:mt-32 xl:mt-16 mt-12 bg-white p-8 relative z-50 text-center rounded-3xl px-0 max-w-80">
                                 <LazyLoadImage
                                    src={assist}
                                    className=" w-32 m-auto block xl:px-10 px-6 "
                                 />
                                 <p className="text-[#292D32] text-[1.01419rem]  font-[400] font-[Poppins] leading-[184.523%] inline-block">
                                    AI assistant{" "}
                                 </p>
                              </div>
                              {/* <div className="img absolute top-[-5rem] right-[-5rem]  ">
                                 <LazyLoadImage
                                    src={assist1}
                                    className="ms-auto w-4/5 z-20"
                                 />{" "}
                              </div>
                              <div className="img absolute  ">
                                 <LazyLoadImage
                                    src={assist2}
                                    className="w-7/12 z-10 "
                                 />{" "}
                              </div> */}
                              <div className="img1bg hidden 2xl:block "></div>
                              <div className="img2bg hidden 2xl:block "></div>
                           </div>
                        </div>
                     </div>
                     <div className="lg:col-span-6 col-span-12 lg:ms-6 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.10)] bg-white xl:p-6 p-4 lg:mt-0 mt-8    rounded-xl pb-0">
                        <div className="grid grid-cols-12 items-center ">
                           <div className="col-span-2 2xl:p-8 md:p-6 p-2 self-start ">
                              <LazyLoadImage
                                 src={crm2}
                                 className=" rounded-2xl"
                              />
                           </div>
                           <div className="col-span-10">
                              <h5 className="text-[#486868] xl:text-[1.46713rem] text-[1.2rem]  font-[600] font-[Poppins] leading-[1.79756rem] mb-1">
                                 Board Pins. sales CRM
                              </h5>
                              <p className="text-[#676879] xl:text-[0.96038rem] text-[0.7rem]  font-[300] font-[Poppins] leading-[1.17663rem]">
                                 G2 LEADER FOR CRM SOFTWARE
                              </p>
                           </div>
                        </div>
                        <p className="text-[#333] ps-8 xl:text-[2.375rem] lg:text-[2rem] text-[1.7rem]  font-[500] font-[Poppins] leading-[2.90988rem] border-b-2 border-[#D9D9D9] pb-6 xl:ms-8">
                           Automate your sales cycles to close more deals
                        </p>
                        <div className="ps-8">
                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem] lg:inline-block block me-4">
                              <LazyLoadImage
                                 src={chech_black}
                                 className="w-5 inline-block me-2"
                              />
                              Sales pipeline
                           </p>
                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem] lg:inline-block block me-4">
                              <LazyLoadImage
                                 src={chech_black}
                                 className="w-5 inline-block me-2"
                              />
                              Sales pipeline
                           </p>

                           <p className="mt-3 text-[1.18025rem] text-[#333] leading-[1.446rem] lg:inline-block block me-4">
                              <LazyLoadImage
                                 src={chech_black}
                                 className="w-5 inline-block me-2"
                              />
                              Mass email & tracking
                           </p>
                           <button className="me-auto relative ps-8  block bg-[#269C9C] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8">
                              <LazyLoadImage
                                 src={start3}
                                 className="started-check"
                              />{" "}
                              Get Started 🠚
                           </button>
                           <div className="imgM mt-8">
                              <LazyLoadImage
                                 src={crm_img1}
                                 className="xl:px-4 pt-8 xl:pe-8"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* manage */}
            <section className="work  bg-[#181B34]">
               <div className="w-11/12 m-auto px-8 pt-44 pb-64">
                  <div className="text-white lg:flex lg:text-start text-center">
                     <div className="lg:flex-1">
                        <p className="text-[2.625rem]  font-[700] font-[Poppins] leading-[3.45419rem]">
                           The Work OS that lets you shape workflows, your way
                        </p>
                     </div>
                     <div className="lg:flex-1 ">
                        <p className="text-[1.625rem]  font-[300] font-[Poppins] leading-[2.8785rem] lg:mt-0 mt-6">
                           Boost your team’s alignment, efficiency, and
                           productivity by customizing any workflow to fit your
                           needs.
                        </p>
                        <button className="lg:me-auto m-auto relative ps-6  block bg-transparent rounded-[1.71875rem] text-[0.9375rem] text-[#fff] leading-[2.5rem] py-0 px-5 mt-8 border-2 border-white">
                           Get Started 🠚
                        </button>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 items-stretch mt-24">
                     <div className="lg:col-span-4 col-span-12  lg:flex-col">
                        <div className="bg-1 lg:flex-1 shadow-(0px_10.043px_30.128px_0px_rgba(0,0,0,0.10))">
                           <LazyLoadImage src={bg1} className="h-full" />
                        </div>
                        <div className="bg-2 lg:flex-2 mt-10 shadow-(0px_10.043px_30.128px_0px_rgba(0,0,0,0.10))">
                           <LazyLoadImage src={bg3} className="h-full" />
                        </div>
                     </div>
                     <div className="bg-3 lg:col-span-8 col-span-12  lg:ms-10 lg:mt-0 mt-10 pe-4 shadow-(0px_10.043px_30.128px_0px_rgba(0,0,0,0.10)) rounded-2xl overflow-hidden ">
                        <LazyLoadImage src={bg2} className="" />
                     </div>
                  </div>
               </div>
            </section>
            {/* how */}
            <section className="how w-11/12 m-auto px-8 mt-24" id="how">
               <h2 className="text-[#333] text-[3.05556rem]  font-[700] font-[Poppins] leading-[4.16669rem] text-center">
                  How it works
               </h2>
               <p className="text-[#333] text-[1.25rem]  font-[300] font-[Poppins] leading-[2.22225rem] text-center mt-2">
                  Easily build your ideal workflow with Boarpins.com building
                  blocks.
               </p>
               <div className="px-12">
                  <Steps />
               </div>
            </section>
            {/* last */}
            <section className="last">
               <div className="bg-[#E6ECF9] py-[6rem]">
                  <div className="grid grid-cols-3 w-5/5  xl:px-32 lg:px-20 px-8 m-auto ">
                     <div className="xl:col-span-1 mt-8 xl:mt-0 col-span-3 rounded-[1.125rem] bg-white px-10 py-6 me-4 shadow-[0px_8px_24px_0px_rgba(29,140,242,0.16] pe-20">
                        <LazyLoadImage
                           src={w8}
                           className="w-14 me-auto  ps-0 rounded-2xl"
                        />
                        <p className="text-[#6161FF] text-[2.02688rem]  font-[700] font-[Poppins] leading-[2.76rem] my-5">
                           Effortless Discovery
                        </p>
                        <p className="font-[Segoe UI] text-[1.125rem] leading-[1.8335rem]  font-[400]">
                           Our advanced search engine allows you to swiftly
                           discover verified service providers, making your
                           search process seamless and efficient.
                        </p>
                        <p className="mt-4 text-[#6161FF] text-[0.875rem] decoration-solid underline pb-2 leading-[1.5rem]">
                           Learn more 🠚
                        </p>
                     </div>
                     <div className="xl:col-span-1  col-span-3 mt-8 xl:mt-0 rounded-[1.125rem] bg-white px-10 py-6 me-4 shadow-[0px_8px_24px_0px_rgba(29,140,242,0.16] pe-20">
                        <LazyLoadImage
                           src={w2}
                           className="w-14 me-auto  ps-0 rounded-2xl"
                        />
                        <p className="text-[#6161FF] text-[2.02688rem]  font-[700] font-[Poppins] leading-[2.76rem] my-5">
                           Tailored Categories
                        </p>
                        <p className="font-[Segoe UI] text-[1.125rem] leading-[1.8335rem] font-[400]">
                           Explore a range of meticulously curated service
                           categories tailored to meet the specific needs of
                           e-commerce businesse
                        </p>
                        <p className="mt-4 text-[#6161FF] text-[0.875rem] decoration-solid underline pb-2 leading-[1.5rem]">
                           Learn more 🠚
                        </p>
                     </div>
                     <div className="xl:col-span-1 col-span-3 mt-8 xl:mt-0 rounded-[1.125rem] bg-white px-10 py-6 me-4 shadow-[0px_8px_24px_0px_rgba(29,140,242,0.16] pe-20">
                        <LazyLoadImage
                           src={w6}
                           className="w-14 me-auto  ps-0 rounded-2xl"
                        />
                        <p className="text-[#6161FF] text-[2.02688rem]  font-[700] font-[Poppins] leading-[2.76rem] my-5">
                           Your Service Shortlist
                        </p>
                        <p className="font-[Segoe UI] text-[1.125rem] leading-[1.8335rem] font-[400]">
                           Create personalized boards to save and organize your
                           preferred service providers, streamlining your vendor
                           selection process
                        </p>
                        <p className="mt-4 text-[#6161FF] text-[0.875rem] decoration-solid underline pb-2 leading-[1.5rem]">
                           Learn more 🠚
                        </p>
                     </div>
                  </div>
               </div>
         
               </section>
               <div className="bg-[#181B34]">
               <div className=" w-4/5  xl:px-32 lg:px-16 px-8 m-auto text-center pt-12 pb-10">
               <p className="text-[1.75rem] text-[#fff] font-[300] leading-[2.5rem]">
                  Experience the simplicity and convenience of finding
                  verified service providers for your e-commerce business
                  with <span className="font-[700]"> Board Pins. </span>
               </p>
               <p className="text-[#fff] text-[1.125rem] font-[300] leading-8 mt-2">
                  No credit card needed   ✦   Unlimited time on Free plan
               </p>
               <button className="m-auto relative   block bg-[#6161FF] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8">
                  Get Started 🠚
               </button>
            </div>
               </div>
            
      <Footers/>
         </div>
      </section>
   );
}
// text-[#] text-[]  font-[] font-[Poppins] leading-[]
