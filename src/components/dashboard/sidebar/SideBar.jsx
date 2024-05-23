import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import search from "../../../assets/dashboard/search.svg";
import chat11 from "../../../assets/dashboard/chat11.svg";
import pin from "../../../assets/dashboard/pin-1 1.svg";
import tasks from "../../../assets/dashboard/tasksside.svg";
import down from "../../../assets/dashboard/download 7.svg";
import setting from "../../../assets/dashboard/Settingside.svg";
import board from "../../../assets/dashboard/grid4.svg";
export default function SideBar() {
   return (
      <div className="col-start-1 col-span-2 hidden xl:block font-[] ">
     
         <div>
            <div className="relative mt-10 ">
               <input
                  type="text"
                  className="input-sidebar w-[97%] p-4 ps-12 bg-[#F2F2F2] rounded-2xl text-[1rem] placeholder:text-[1rem]"
                  placeholder="Search..."
               />
               <div className="overlay absolute top-3 left-3 ">
                  <LazyLoadImage src={search} className="w-10/12" />
               </div>
            </div>
            <div>
               <Link to="/dashboard/myboard" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={board} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                        My Board
                     </p>
                  </div>
               </Link>
               <Link to="/dashboard/chat" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={chat11} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                        Chat
                     </p>
                  </div>
               </Link>
               <Link to="/dashboard/pinned" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={pin} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                        Pinned Service Providers
                     </p>
                  </div>
               </Link>
               <Link to="/dashboard/tasks" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={tasks} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                        Tasks
                     </p>
                  </div>
               </Link>
               <Link to="/dashboard/recent" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={down} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                        Recent Activity
                     </p>
                  </div>
               </Link>
               <h4>ACCOUNT</h4>
               <Link to="/dashboard/setting" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={setting} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                        Settings
                     </p>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
}
{
   /* 

<Link to="" className=''> </Link>
<Link to="/signup" className='blue'>Sign Up</Link> */
}
