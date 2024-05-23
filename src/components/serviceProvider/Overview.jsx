import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import phone from "../../assets/service/phone.svg";
import arrowS from "../../assets/service/arrowS.svg";
import web from "../../assets/service/web.svg";
import twit from "../../assets/service/twit.svg";
import email from "../../assets/service/email.svg";
import face from "../../assets/service/face.svg";
import insta from "../../assets/service/insta.png";
import location from "../../assets/service/location.svg";
import I from "../../assets/service/i.svg";
import down from "../../assets/service/down.svg";
import phone2 from "../../assets/service/phone2.svg";
import arrowright from "../../assets/service/arrowright.svg";
import web2 from "../../assets/service/web2.svg";
import location2 from "../../assets/service/location2.svg";
import contact2 from "../../assets/service/contact2.svg";
import store from "../../assets/service/store.svg";
import profile from "../../assets/service/profilepic.jpeg";
import star1 from "../../assets/dashboard/Star 11.svg";
import star2 from "../../assets/dashboard/Group 42.svg";
import star from "../../assets/service/star.svg";
import vector from "../../assets/service/Vector.svg";
export default function Overview() {
   return (
      <div>
         <div className="bg-[#F9F9F9] rounded-[1.6875rem]  text-[#6161FF] text-[1.125rem] font-[400] leading-[140%] xl:py-8 grid grid-cols-10 xl:px-40">
            <div className="col-span-7 grid grid-cols-5 text-center pt-4 me-10">
               <div className="col-span-1">
                  <LazyLoadImage src={phone} className="px-9 py-0" />
                  <p className="mt-6">Call</p>
               </div>
               <div className="col-span-1">
                  <LazyLoadImage src={email} className="px-9 py-0" />
                  <p className="mt-6">Email</p>
               </div>
               <div className="col-span-1">
                  <LazyLoadImage src={location} className="px-9 py-0" />
                  <p className="mt-6">location</p>
               </div>
               <div className="col-span-1">
                  <LazyLoadImage src={web} className="px-9 py-0" />
                  <p className="mt-6">Website</p>
               </div>
               <div className="col-span-1">
                  <LazyLoadImage src={arrowS} className="px-9 py-0" />
                  <p className="mt-6">Share</p>
               </div>
            </div>
            <div className="col-span-3 grid grid-cols-3 items-start">
               <div className="col-span-1 p-2">
                  <LazyLoadImage
                     src={face}
                     className="px-3 py-3 bg-[#ECECEC] rounded-full"
                  />
               </div>
               <div className="col-span-1 p-2">
                  <LazyLoadImage
                     src={insta}
                     className="px-3 py-3 bg-[#ECECEC] rounded-full"
                  />
               </div>
               <div className="col-span-1 p-2">
                  <LazyLoadImage
                     src={twit}
                     className="px-3 py-3 bg-[#ECECEC] rounded-full"
                  />
               </div>
               <div className="col-span-3">
                  <p className="text-center">Social media profiles</p>
               </div>
            </div>
         </div>
         <div className="mt-8">
            <h4 className="text-[#000] text-[1.54394rem]  font-[500] font-[Poppins] leading-[140%] flex justify-between">
               about Service Provider Name
               <LazyLoadImage src={I} className="w-6" />
            </h4>
            <p className="text-[#6B6A6A] text-[1.49225rem]  font-[400] font-[Poppins] leading-[140%] my-6">
               Lorem ipsum dolor sit amet consectetur. Sit nunc orci nisi mauris
               sed quisque. Lacus dignissim nisi sed tristique egestas. Ut nec
               mattis ultricies id sed nulla suscipit adipiscing.{" "}
            </p>
            <p className="text-[#6161FF] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] underline">
               read more
               <LazyLoadImage src={down} className="w-6 inline" />
            </p>
         </div>
         <div className="mt-10">
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 ">
               <div>
                  <LazyLoadImage
                     src={location2}
                     className="w-6 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block">
                     El-Aziz Othman, Al Gabalayah, Zamalek, Giza Govemorate,
                     Egypt
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div>
                  <LazyLoadImage
                     src={phone2}
                     className="w-6 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block">
                     +20 128 902 2985
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div>
                  <LazyLoadImage
                     src={store}
                     className="w-6 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block">
                     Custom Packaging Design,Packaging Production,Packaging
                     Production,Custom Packaging Design,Packaging Production
                     .... more
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div>
                  <LazyLoadImage src={web2} className="w-6 inline-block me-6" />
                  <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block">
                     https://Packagingservices.com/
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 items-center ">
               <div className="flex items-center">
                  <LazyLoadImage
                     src={location2}
                     className="w-6 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block">
                     Contact us now <br />
                     <span className="text-[#F1A055]">
                        usually responds in a day
                     </span>
                  </p>
               </div>

               <LazyLoadImage
                  src={arrowright}
                  className="w-6 inline-block self-start"
               />
            </div>
         </div>
         <p className="text-[#6161FF] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] underline text-center mt-6">
            read more
            <LazyLoadImage src={down} className="w-6 inline" />
         </p>
         <h4 className="text-[#000] text-[1.54394rem]  font-[500] font-[Poppins] leading-[140%] flex justify-between mt-10">
            about Service Provider Name
            <LazyLoadImage src={I} className="w-6" />
         </h4>
         <div className="mt-8 grid grid-cols-6">
            <div className="xl:col-span-2 col-span-6 bg-[#F9F9F9] px-8 py-8 rounded-[1.6875rem] grid grid-cols-3 me-4 xl:mt-0 mt-6">
               <div className="col-span-1">
                  <LazyLoadImage src={profile} className="inline-block " />
               </div>
               <div className="col-span-2 ms-4">
                  <div className=" flex justify-between">
                     <p className="inline-block text-[1.06456rem] font-[600] text-[#1E1E1E] leading-[140%]">
                        kirolos Adel
                     </p>
                     <div>
                        {" "}
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star}
                           className="w-3 inline-block"
                        />
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
            <div className="xl:col-span-2 col-span-6 bg-[#F9F9F9] px-8 py-8 rounded-[1.6875rem] grid grid-cols-3  me-4 xl:mt-0 mt-6">
               <div className="col-span-1">
                  <LazyLoadImage src={profile} className="inline-block " />
               </div>
               <div className="col-span-2 ms-4">
                  <div className=" flex justify-between">
                     <p className="inline-block text-[1.06456rem] font-[600] text-[#1E1E1E] leading-[140%]">
                        kirolos Adel
                     </p>
                     <div>
                        {" "}
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star}
                           className="w-3 inline-block"
                        />
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
            <div className="xl:col-span-2 col-span-6 bg-[#F9F9F9] px-8 py-8 rounded-[1.6875rem] grid grid-cols-3 me-4 xl:mt-0 mt-6">
               <div className="col-span-1">
                  <LazyLoadImage src={profile} className="inline-block " />
               </div>
               <div className="col-span-2 ms-4">
                  <div className=" flex justify-between">
                     <p className="inline-block text-[1.06456rem] font-[600] text-[#1E1E1E] leading-[140%]">
                        kirolos Adel
                     </p>
                     <div>
                        {" "}
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star1}
                           className="w-3 inline-block"
                        />
                        <LazyLoadImage
                           src={star}
                           className="w-3 inline-block"
                        />
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
         </div>
         <p className="text-[#6161FF] text-[0.97931rem]  font-[400] font-[Poppins] leading-[140%]  text-center mt-6 ">
            See all review
            <LazyLoadImage src={vector} className="w-2 inline-block ms-2" />
         </p>
      </div>
   );
}
// text-[#] text-[]  font-[] font-[Poppins] leading-[]
