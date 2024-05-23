import React from "react";
import GragueBar from "./GragueBar";

export default function AllProjects() {
   return (
      <div className="bg-[#FDFDFD] rounded-3xl lg:px-10  lg:p-8 lg:pb-20 mt-6">
         <h2 className="text-black font-poppins text-lg font-semibold leading-[184.523%] tracking-[0.03rem] mb-4">
            Today Tasks
         </h2>
         <div className="grid grid-cols-3 text-center">
            <div className="col-span-1 h-[8rem]">
               <GragueBar
                  color="#6161FF"
                //   textColor="#6161FF"
                  fontSize={20}
                  value={45}
               >
                  <div sx={{ color: "black", fontSize: "2rem" }}>some text</div>
               </GragueBar>
               <p className="text-gray-900 font-poppins text-xs font-bold leading-[184.523%] tracking-normal uppercase">WAITING</p>
               <p className="text-gray-600 font-noto-sans text-xs font-medium leading-normal tracking-[0.015rem]">7 Task to 14</p>
            </div>
            <div className="col-span-1 h-[8rem]">
               <GragueBar
                  color="#FB5607"
                //   textColor="#6161FF"
                  fontSize={20}
                  value={75}
               >
                  <div sx={{ color: "black", fontSize: "2rem" }}>some text</div>
               </GragueBar>
               <p className="text-gray-900 font-poppins text-xs font-bold leading-[184.523%] tracking-normal uppercase">In Progress</p>
               <p className="text-gray-600 font-noto-sans text-xs font-medium leading-normal tracking-[0.015rem]">7 Task to 14</p>
            </div>
            <div className="col-span-1 h-[8rem]">
               <GragueBar
                  color="#38B000"
                //   textColor="#6161FF"
                  fontSize={20}
                  value={90}
               >
                  <div sx={{ color: "black", fontSize: "2rem" }}>some text</div>
               </GragueBar>
               <p className="text-gray-900 font-poppins text-xs font-bold leading-[184.523%] tracking-normal uppercase">Completed</p>
               <p className="text-gray-600 font-noto-sans text-xs font-medium leading-normal tracking-[0.015rem]">7 Task to 14</p>
            </div>
         </div>
      </div>
   );
}
