import React from "react";
import Search from "../main/Search";
import SideBar from "../sidebar/SideBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ChatMain from "../../../assets/dashboard/ChatMain.svg";
export default function Chat() {
   return (
      <section className="Myboard bg-[#F5F6FA] xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               {/* side bar */}
               <SideBar />
               {/* Main */}
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <Search />
                  {/* <div className="service bg-[#FDFDFD] mt-5 rounded-[2.375rem] lg:py-12 lg:px-[4.12] py-6 px-6">
                  </div> */}
                  <div className="px-[1.5rem] py-[2.25rem] bg-[#FDFDFD] rounded-[2.375rem]">
                     <div className="flex items-center">
                        <div className="inline-block p-2 bg-[#E5E5FF] rounded-lg me-4 ">
                           <LazyLoadImage src={ChatMain} className="" />
                        </div>
                        <div className="inline-block">
                           <h1 className="text-[#292D32] text-[1.8125rem] font-[Inter] font-[700] leading-[184.523%]">
                              Chat
                           </h1>
                        </div>
                     </div>
                     <div className="grid grid-cols-12">
                        <div className="lg:col-span-4 bg-[#FCFCFC] rounded-3xl border-[0.7rem]"></div>
                        <div className="lg:col-span-8 bg-[#FCFCFC] rounded-3xl border-[0.7rem]"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
