import React from "react";
import SideBar from "../dashboard/sidebar/SideBar";
import Search from "../dashboard/main/Search";
import { LazyLoadImage } from "react-lazy-load-image-component";
import setting from "../../assets/dashboard/SettingS.svg";
import TaskTabs from "./TaskTabs";
import DatePicker from "./DatePicker";
import AddProject from "./AddProject";
import AllProjects from "./AllProjects";
export default function Tasks() {
   return (
      <section className="Myboard bg-[#F5F6FA] xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               {/* side bar */}
               <SideBar />
               {/* Main */}
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <Search />
                  {/* start from here */}
                  <div className="TaskMangment">
                     <div className="grid grid-cols-10 mt-8">
                        <div className="lg:col-span-7 bg-[#FDFDFD] rounded-3xl lg:p-8 me-6">
                           {/*  */}
                           <div className="flex items-center">
                              <div className="inline-block p-2 bg-[#E5E5FF] rounded-lg me-4 ">
                                 <LazyLoadImage src={setting} />
                              </div>
                              <div className="inline-block">
                                 <p className="text-[#292D32] text-[1.8125rem] font-[Inter] font-[700] leading-[184.523%]">
                                    Tasks
                                 </p>
                              </div>
                           </div>
                           {/*  */}
                       
                           <div>
                              <DatePicker />
                           </div>
                           <div>
                              <TaskTabs />
                           </div>
                        </div>
                        <div className="lg:col-span-3  ">
                           <div>
                           <AddProject />
                           <AllProjects/>
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

// bg-[#FDFDFD] mt-5 rounded-[2.375rem] lg:py-12 lg:px-[4.12] py-6 px-6
