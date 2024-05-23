import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import I from "../../assets/service/i.svg";
import Slider from "@mui/material/Slider";
import star1 from "../../assets/dashboard/Star 11.svg";
import star2 from "../../assets/dashboard/Group 42.svg";
import star from "../../assets/service/star.svg";
import profile from "../../assets/service/profilepic.jpeg";
import down from "../../assets/service/down.svg";

export default function Reviews() {
   return (
      <div>
         <h4 className="text-[#000] text-[1.54394rem]  font-[500] font-[Poppins] leading-[140%] flex justify-between mt-10">
            Review summary
            <LazyLoadImage src={I} className="w-6" />
         </h4>
         <div className="grid grid-cols-3 mt-8">
            <div className="col-span-1 rounded-[1.625rem] bg-[#f1f3f4] me-9 items-center justify-center">
               <p className="xl:text-[5.30419rem] lg:text-[4.30419rem] text-[3.5rem] text-center font-[600] leading-[140%] xl:py-8 xl:px-10">
                  4.5
               </p>
               <div className="text-center">
                  {" "}
                  <LazyLoadImage src={star1} className="w-4 inline-block" />
                  <LazyLoadImage src={star1} className="w-4 inline-block" />
                  <LazyLoadImage src={star1} className="w-4 inline-block" />
                  <LazyLoadImage src={star1} className="w-4 inline-block" />
                  <LazyLoadImage src={star} className="w-4 inline-block" />
               </div>
            </div>
            <div className="col-span-2">
               <div className="mt-4">
                  <p className="inline-block font-[500] text-[1.54394rem] text-[#9F9F9F] leading-[140%] me-4">
                     5
                  </p>{" "}
                  <div className="inline-block relative rounded-[5rem] overflow-hidden bg-[#EEEEEE] h-[1rem] w-[90%]">
                     {" "}
                     <div className="absolute top-0 left-0 h-[1rem] w-5/6 bg-[#FBBC04]"></div>
                  </div>
               </div>
               <div className="mt-4">
                  <p className="inline-block font-[500] text-[1.54394rem] text-[#9F9F9F] leading-[140%] me-4">
                     4
                  </p>{" "}
                  <div className="inline-block relative rounded-[5rem] overflow-hidden bg-[#EEEEEE] h-[1rem] w-[90%]">
                     {" "}
                     <div className="absolute top-0 left-0 h-[1rem] w-4/6 bg-[#FBBC04]"></div>
                  </div>
               </div>
               <div className="mt-4">
                  <p className="inline-block font-[500] text-[1.54394rem] text-[#9F9F9F] leading-[140%] me-4">
                     3
                  </p>{" "}
                  <div className="inline-block relative rounded-[5rem] overflow-hidden bg-[#EEEEEE] h-[1rem] w-[90%]">
                     {" "}
                     <div className="absolute top-0 left-0 h-[1rem] w-3/6 bg-[#FBBC04]"></div>
                  </div>
               </div>
               <div className="mt-4">
                  <p className="inline-block font-[500] text-[1.54394rem] text-[#9F9F9F] leading-[140%] me-4">
                     2
                  </p>{" "}
                  <div className="inline-block relative rounded-[5rem] overflow-hidden bg-[#EEEEEE] h-[1rem] w-[90%]">
                     {" "}
                     <div className="absolute top-0 left-0 h-[1rem] w-2/6 bg-[#FBBC04]"></div>
                  </div>
               </div>
               <div className="mt-4">
                  <p className="inline-block font-[500] text-[1.54394rem] text-[#9F9F9F] leading-[140%] me-4">
                     1
                  </p>{" "}
                  <div className="inline-block relative rounded-[5rem] overflow-hidden bg-[#EEEEEE] h-[1rem] w-[90%]">
                     {" "}
                     <div className="absolute top-0 left-0 h-[1rem] w-1/6 bg-[#FBBC04]"></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-[#F9F9F9] px-8 py-8 rounded-[1.6875rem] grid grid-cols-8 w-full    mt-8 items-center">
            <div className="col-span-1">
               <LazyLoadImage src={profile} className="inline-block p-2 " />
            </div>
            <div className="col-span-7 ms-4">
               <div className=" flex">
                  <p className="inline-block text-[1.06456rem] font-[600] text-[#1E1E1E] leading-[140%] me-4">
                     kirolos Adel
                  </p>
                  <div>
                     {" "}
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star} className="w-3 inline-block" />
                  </div>
               </div>
               <p className="text-[#a2a2a2] text-[0.89181rem]  font-[400] font-[Poppins] leading-[140%] my-3">
                  4h ago
               </p>
               <p className="text-[#a2a2a2] text-[0.89181rem]  font-[400] font-[Poppins] leading-[140%]">
                  Lorem ipsum dolor sit amet consectetur.
               </p>
            </div>
         </div>
         <div className="bg-[#F9F9F9] px-8 py-8 rounded-[1.6875rem] grid grid-cols-8 w-full    mt-8 items-center">
            <div className="col-span-1">
               <LazyLoadImage src={profile} className="inline-block p-2 " />
            </div>
            <div className="col-span-7 ms-4">
               <div className=" flex">
                  <p className="inline-block text-[1.06456rem] font-[600] text-[#1E1E1E] leading-[140%] me-4">
                     kirolos Adel
                  </p>
                  <div>
                     {" "}
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star1} className="w-3 inline-block" />
                     <LazyLoadImage src={star} className="w-3 inline-block" />
                  </div>
               </div>
               <p className="text-[#a2a2a2] text-[0.89181rem]  font-[400] font-[Poppins] leading-[140%] my-3">
                  4h ago
               </p>
               <p className="text-[#a2a2a2] text-[0.89181rem]  font-[400] font-[Poppins] leading-[140%]">
                  Lorem ipsum dolor sit amet consectetur.
               </p>
            </div>
         </div>
         <p className="text-[#6161FF] text-[0.97931rem]  font-[400] font-[Poppins] leading-[140%] underline text-center mt-6">
            Load More Reviews
            <LazyLoadImage src={down} className="w-6 inline" />
         </p>
      </div>
   );
}
