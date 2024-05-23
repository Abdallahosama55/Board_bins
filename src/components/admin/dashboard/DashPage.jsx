import React from "react";
import AdminSide from "../sidebar/AdminSide";
import SearchAdmin from "../search/SearchAdmin";
import profpic from "../../../assets/dashboard/Ellipse 43.svg";
import user from "../../../assets/admin/user.svg";
import grid from "../../../assets/admin/grid.svg";

import user2 from "../../../assets/admin/1.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
export default function DashPage() {
   return (
      <section className="Myboard bg-[#F5F6FA] xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               {/* side bar */}
               <AdminSide />
               {/* Main */}
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <SearchAdmin />
                  <div className="mt-10">
                     <div className="grid grid-cols-12 items-center">
                        <div className="img grid content-center  me-2 ms-1  rounded-full col-span-1 xl:p-5 lg:p-4 p-2">
                           <LazyLoadImage
                              src={profpic}
                              alt="img"
                              className="inline-block border-black border-2 xl:p-1  p-1  rounded-full  "
                           />
                        </div>
                        <div className="col-span-5">
                           <p className="font-[600] text-[#1e1e1e] text-[1.8125rem] leading-[184.523%]">
                              Hey, Kirolos 👋
                           </p>
                           <p className="font-[400] text-[#1e1e1e] text-[0.89919rem] leading-[184.523%]">
                              Happy to see you again on yourdashboard.
                           </p>
                        </div>
                        <div className="col-span-6 flex justify-around">
                           <button className="block flex-1  text-[#6161FF] text-[1.09494rem] bg-white p-2 py-3 ms-12 me-0 rounded-2xl border-2 border-[#6161FF] ">
                              Download Repaort
                           </button>
                           <button className="block flex-1  text-white text-[1.09494rem] bg-[#6161FF] p-2 py-3 ms-12 me-0 rounded-2xl ">
                              Manage Sevices Provider
                           </button>
                        </div>
                     </div>
                     <div className="grid grid-cols-12 ">
                        <div className="col-span-6 bg-white shadow-[0px_0px_9.344px_0px_rgba(195,195,195,0.25)] p-3 rounded-lg me-5 mt-5">
                           <p className="text-[1.08125rem] text-[#1e1e1e] font-[600] leading-[184.523%]">
                              Your Quick Stats
                           </p>
                           <div className="grid grid-cols-2 mt-3 items-center">
                              <div className="col-span-1 bg-[#FAFAFA] grid grid-cols-12 me-3 rounded-[0.701rem] opacity-[0.81] py-3 px-2">
                                 <div className="col-span-3 bg-[rgba(97,97,255,0.10)] p-5 rounded-full">
                                    <LazyLoadImage src={user2} />
                                 </div>
                                 <div className="col-span-9 ms-4">
                                    <p className="text-[2.00356rem] text-[#1e1e1e] font-[700]">
                                       200
                                    </p>
                                    <p className="text-[#292D32] text-[1rem] leading-[184.523%]">
                                       Sevices Provider
                                    </p>
                                 </div>
                              </div>
                              <div className="col-span-1 bg-[#FAFAFA] grid grid-cols-12 rounded-[0.701rem] opacity-[0.81] py-3 px-2">
                                 <div className="col-span-3 bg-[rgba(20,184,166,0.10)] p-5 rounded-full">
                                    <LazyLoadImage src={grid} />
                                 </div>
                                 <div className="col-span-9 ms-4">
                                    <p className="text-[2.00356rem] text-[#1e1e1e] font-[700] ">
                                       30
                                    </p>
                                    <p className="text-[#292D32] text-[1rem] leading-[184.523%]">
                                       Categories
                                    </p>
                                 </div>
                              </div>
                              <div className="col-span-2 bg-[#FAFAFA] mt-3  rounded-[0.701rem] opacity-[0.81]  py-3 px-2">
                                 <div className="w-[50%]  grid grid-cols-12 me-auto">
                                    <div className="col-span-3  p-5 rounded-full bg-[rgba(106,162,243,0.10)]">
                                       <LazyLoadImage src={user} />
                                    </div>
                                    <div className="col-span-9 ms-4">
                                       <p className="text-[2.00356rem] text-[#1e1e1e] font-[700]">
                                          300
                                       </p>
                                       <p className="text-[#292D32] text-[1rem] leading-[184.523%]">
                                          Total Signup Users
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-span-6 bg-white shadow-[0px_0px_9.344px_0px_rgba(195,195,195,0.25)] p-3 rounded-lg mt-5">
                           <p className="text-[1.08125rem] text-[#1e1e1e] font-[600] leading-[184.523%]">
                              Users
                           </p>
                        </div>
                        <div className="col-span-4 bg-white shadow-[0px_0px_9.344px_0px_rgba(195,195,195,0.25)] p-3 rounded-lg me-5 mt-5">
                           <div className="text-[1.08125rem] text-[#1e1e1e] font-[600] leading-[184.523%] flex justify-between">
                              <p className="inline-block">Categoies</p>
                              <button className="inline-block ms-auto text-[1.195rem] text-[#868686] font-300 leading-[184.523%]">
                                 see all
                              </button>
                           </div>
                        </div>
                        <div className="col-span-4 bg-white shadow-[0px_0px_9.344px_0px_rgba(195,195,195,0.25)] p-3 rounded-lg me-5 mt-5">
                           <div className="text-[1.08125rem] text-[#1e1e1e] font-[600] leading-[184.523%] flex justify-between">
                              <p className="inline-block">
                                 Most Pinned Sevices Provider{" "}
                              </p>
                              <button className="inline-block ms-auto text-[1.195rem] text-[#868686] font-300 leading-[184.523%]">
                                 see all
                              </button>
                           </div>
                        </div>
                        <div className="col-span-4 bg-white shadow-[0px_0px_9.344px_0px_rgba(195,195,195,0.25)] p-3 rounded-lg  mt-5">
                           <div className="text-[1.08125rem] text-[#1e1e1e] font-[600] leading-[184.523%] flex justify-between">
                              <p className="inline-block">Profit Evolution</p>
                              <button className="inline-block ms-auto text-[1.195rem] text-[#868686] font-300 leading-[184.523%]">
                                 see all
                              </button>
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
