import React from "react";
import chat from "../../../assets/dashboard/Frame1.svg";
import notfiction from "../../../assets/dashboard/notification.svg";
import profpic from "../../../assets/dashboard/Ellipse 43.svg";
import Vector from "../../../assets/dashboard/Vector.svg";
import search from "../../../assets/dashboard/search.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function SearchAdmin() {
   return (
      <div className="search">
         <div className="grid grid-cols-10  justify-between  content-stretch ">
            <div className="search-con xl:col-span-8 sm:col-span-10 lg:col-span-7 col-span-10 md:col-span-10 relative grid content-center items-stretch lg:me-5 lg:p-0 p-3 lg:mb-0 mb-3 bg-[#FDFDFD] rounded-[1.08044rem] overflow-hidden">
               <input
                  type="text"
                  className="p-3 placeholder:text-[] search-myboard focus:border-none hover:border-none bg-transparent  w-full h-full active:border-none"
                  placeholder="What are you looking for?"
               />
               <div className="overlay absolute grid content-center">
                  <Link to='/dashboard/search'> <LazyLoadImage src={search} /></Link>
               </div>
            </div>
            {/* <div className="xl:col-span-1 lg:col-span-1 col-span-5 bg-[#6161FF] text-center md:col-span-5  py-[1rem] text-[#FCFCFC] text-[1.36369rem] font-[Poppins]  rounded-[1rem]">
               <LazyLoadImage
                  src={chat} // Replace with the actual image path
                  className="xl:w-8 lg:w-6 w-6  inline-block me-2" // Apply the blur effect
                  alt="Your Image Alt Text"
               />{" "}
               Chat
            </div> */}
            <div className="xl:col-span-1 lg:col-span-2 lg:px-8 ms-12 lg:ms-0  flex xl:px-3 px-2 md:col-span-5 col-span-5 content-center">
               <div className="img grid content-center border-e-2 border-black pe-2 me-1 my-2">
                  <LazyLoadImage
                     src={notfiction}
                     alt="img"
                     className="inline-block "
                  />
               </div>
               <div className="img grid content-center  me-2 ms-1  rounded-full">
                  <LazyLoadImage
                     src={profpic}
                     alt="img"
                     className="inline-block border-black border-2 xl:p-1  p-1  rounded-full  "
                  />
               </div>
               <div className="img grid content-center ">
                  <LazyLoadImage
                     src={Vector}
                     alt="img"
                     className="inline-block "
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
