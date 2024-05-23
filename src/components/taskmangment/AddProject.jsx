import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import GraugeBar from "./GragueBar";

export default function AddProject() {
   return (
      <div className="bg-[#FDFDFD] rounded-3xl lg:px-10  lg:p-8">
         <div className="grid grid-cols-4 ">
            <div className="col-span-3 me-4">
               <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                     <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        className="mb-4 top-[-1rem]"
                        style={{ top: "-1.2rem" }}
                     >
                        Select Project
                     </InputLabel>
                     <NativeSelect
                        defaultValue={30}
                        inputProps={{
                           name: "age",
                           id: "uncontrolled-native",
                        }}
                     >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                     </NativeSelect>
                  </FormControl>
               </Box>
            </div>
            <div className="col-span-1 text-center bg-[#FDFDFD] rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.10)] px-2 pt-1 pb-2 items-center">
               <button>
                  <span className="block text-3xl text-[#6161FF]">+</span>
                  <span className=" text-[#6161FF]">Add new</span>
               </button>
            </div>
            <div className="col-span-4 ">
               <div className="h-[16.5rem] ">
                  <GraugeBar
                     color="#6161FF"
                     textColor="#6161FF"
                     fontSize={80}
                     value={75}
                  >
                     <div sx={{ color: "black", fontSize: "2rem" }}>
                        some text
                     </div>
                  </GraugeBar>
               </div>

               <div>
                  <h2 className="text-black font-poppins text-lg font-semibold leading-[184.523%] tracking-[0.03rem] mb-4">Today Tasks</h2>
                  <div className="grid grid-cols-2">
                     <div className="col-span-1 bg-[#FFE5E8] p-[1.1rem] rounded-[0.8365rem] me-2 mb-2">
                        <p className="text-[#767676] font-[Poppins] font-[400] uppercase text-[1rem]">total</p>
                        <p className="text-[2.28038rem] text-[#1E1E1E] font-[Poppins] font-[700] border-l-8 ps-2 border-[#FFA6B0] py-0">
                           15
                        </p>
                     </div>
                     <div className="col-span-1 bg-green-300 bg-opacity-19 p-[1.1rem] rounded-[0.8365rem] me-2 mb-2">
                        <p className="text-[#767676] font-[Poppins] font-[400] uppercase text-[1rem]">total</p>
                        <p className="text-[2.28038rem] text-[#1E1E1E] font-[Poppins] font-[700] border-l-8 ps-2 border-[#38B000] py-0">
                           15
                        </p>
                     </div>
                     <div className="col-span-1 bg-[#E5E5FF] p-[1.1rem] rounded-[0.8365rem] me-2 mb-2">
                        <p className="text-[#767676] font-[Poppins] font-[400] uppercase text-[1rem]">total</p>
                        <p className="text-[2.28038rem] text-[#1E1E1E] font-[Poppins] font-[700] border-l-8 ps-2 border-[#4361EE] py-0">
                           15
                        </p>
                     </div>
                     <div className="col-span-1 bg-[#FCE5DA] p-[1.1rem] rounded-[0.8365rem] me-2 mb-2">
                        <p className="text-[#767676] font-[Poppins] font-[400] uppercase text-[1rem]">total</p>
                        <p className="text-[2.28038rem] text-[#1E1E1E] font-[Poppins] font-[700] border-l-8 ps-2 border-[#FB5607] py-0">
                           15
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
