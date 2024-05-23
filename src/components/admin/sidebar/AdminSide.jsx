import React from "react";
// import "./sidebar.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import search from "../../../assets/dashboard/search.svg";
import chat11 from "../../../assets/dashboard/chat11.svg";
import pin from "../../../assets/dashboard/pin-1 1.svg";
import tasks from "../../../assets/dashboard/tasksside.svg";
import down from "../../../assets/dashboard/download 7.svg";
import setting from "../../../assets/dashboard/Settingside.svg";
import board from "../../../assets/dashboard/grid4.svg";
export default function AdminSide() {
   return (
      <div className="col-start-1 col-span-2 hidden xl:block font-[] ">
         <h1 className="text-[1.76538rem] leading-[2.94231rem] font-[600]">
            Board Pins <span className="text-[#6161FF] ">.</span>
         </h1>
         <div>
            
            <div className="mt-12">
               <Link to="/admin/dashpage" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={board} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                     DashBoard Page
                     </p>
                  </div>
               </Link>
               <Link to="/admin/categories" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={chat11} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                     Categories
                     </p>
                  </div>
               </Link>
               <Link to="/admin/service" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={pin} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                     Sevices Provider
                     </p>
                  </div>
               </Link>
               <Link to="/admin/users" className="">
                  {" "}
                  <div className="flex mt-3 p-4 items-center">
                     <div>
                        <LazyLoadImage src={tasks} className="w-6" />
                     </div>
                     <p className="ms-5 text-[1rem] leading-[184.523%] font-400 ">
                     Users
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
