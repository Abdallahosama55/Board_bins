import React, { useState } from "react";
import SideBar from "../sidebar/SideBar";
import filter from "../../../assets/dashboard/download 8.svg";
import star1 from "../../../assets/dashboard/Star 11.svg";
import star2 from "../../../assets/dashboard/Group 42.svg";
import Search from "./Search";
import "./BoardItems.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function BoardItems() {
   //    for now
   const [items, setItems] = useState(["item1", "item2", "item3", "item4"]);
   return (
      <section className="Myboard bg-[#F5F6FA] xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               {/* side bar */}
               <SideBar />
               {/* Main */}
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <Search />
                  {/* start here */}
                  <div className="search-result bg-[#FDFDFD] leading-[184.523%] font-[Poppins] rounded-2xl p-3 text-center mt-5 px-12">
                     <h2 className="text-[1.3055rem]">
                        Result for{" "}
                        <span className="font-[700] ">“Board Pins”</span>
                     </h2>
                     <div className="mt-3">
                        <span className="text-[#8F8F8F]">@Related: </span>
                        {items.map((item) => {
                           return (
                              <p className="inline-block ms-3 text-[#555050] font-[300]">
                                 {item}
                              </p>
                           );
                        })}
                     </div>
                     <div className="grid grid-cols-12 mt-4">
                        <div className="col-span-2 text-left ">
                           <select
                              name="sort"
                              id=""
                              className="select-sort text-[0.6715rem]  bg-[white] py-3 ps-[0.9rem]  pr-20 rounded-[0.375rem] shadow-search "
                           >
                              <option value="none" selected>
                                 Popular
                              </option>
                           </select>
                        </div>
                        <div className="col-span-8 ">
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              All
                           </div>
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              Factories
                           </div>
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              Agencies Legal
                           </div>
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              Category1
                           </div>
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              Category2
                           </div>
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              Category3
                           </div>
                           <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
                              Category4
                           </div>
                        </div>
                        <div className="col-span-2 text-right">
                           <div className="bg-white inline-block shadow-search py-1 px-6 rounded-full">
                              <span className="inline-block">
                                 <LazyLoadImage
                                    src={filter}
                                    className="inline-block w-4"
                                 />
                              </span>
                              <p className="inline-block text-[0.6715rem] ms-2 ">
                                 Filters
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="grid grid-cols-12">
                        <div className="col-span-3 p-4">
                           <div>
                              <div className="img">
                                 <LazyLoadImage src={filter} />
                              </div>
                              <h3></h3>
                              <p></p>
                              <div>
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
                                    src={star2}
                                    className="w-3 inline-block"
                                 />
                                 <p className="inline-block ms-1 text-[0.56031rem] text-[#7D7D7D]">
                                    4.7{" "}
                                    <span className="inline-block ms-1">
                                       (150 Review)
                                    </span>
                                 </p>
                              </div>
                              <div>
                                 <p className="inline-block leading-[140%] text-[0.70225rem] px-2 me-1 border-2 border-[#6161FF] rounded-full text-[#6161FF] ">
                                    {items.bussniss}
                                 </p>
                                 <p className="inline-block leading-[140%] text-[0.70225rem] px-2 border-2 border-[#6AA2F3] rounded-full text-[#6AA2F3]">
                                    {items.bar2}
                                 </p>
                                 <div className="inline-block text-right ms-4"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
