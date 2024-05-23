import { Dialog, DialogContent } from "@mui/material";
import React,{useState} from "react";
import img2 from "../../assets/service/img2.png";
import img1 from "../../assets/service/img2.png";
import img3 from "../../assets/service/img2.png";
import img4 from "../../assets/service/img2.png";
import star1 from "../../assets/dashboard/Star 11.svg";
import star2 from "../../assets/dashboard/Group 42.svg";
import imgH from "../../assets/dashboard/Image-2.svg";
import pin from "../../assets/service/pin.svg";
import arrow from "../../assets/service/arrow.svg";
import contact from "../../assets/service/contact.svg";
import pin2 from "../../assets/dashboard/pin-1.svg";
import time from "../../assets/dashboard/time.svg";
import I from "../../assets/service/i.svg";
import image1 from "../../assets/service/image1.svg";
import ServTabs from "./ServTabs";
import "./ServiceProvider.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Contact from "./Contact";
export default function ImgModal({ onClose, selectedValue, open }) {
   const [openf, setOpenf] = useState(false);
   const [selectedValuef, setSelectedValuef] = useState("");

   const handleClickOpenf = () => {
      setOpenf(true);
   };

   const handleClosef = (value) => {
      setOpenf(false);
      setSelectedValuef(value);
   };
   const imgs = [
      {
         url: "./src/assets/service/img2.png",
         id: 1,
      },
      {
         url: "./src/assets/service/img3.png",
         id: 2,
      },
      {
         url: "./src/assets/service/img4.png",
         id: 3,
      },
      {
         url: "./src/assets/service/img4.png",
         id: 4,
      },
   ];
   const img = "./src/assets/service/img1.png";

   const handleClose = () => {
      onClose(selectedValue);
   };

   const handleListItemClick = (value) => {
      onClose(value);
   };
   return (
      // <dialog></dialog>
      <Dialog open={open} onClose={handleClose} fullScreen scroll="paper" className="px-0 sm:px-4 py-10">
         <DialogContent>
            {" "}
            <div className="imgs   xl:w-4/6 lg:w-5/6 m-auto">
               <div className="grid grid-cols-12">
                  <div
                     style={{ backgroundImage: `url('${img1}')` }}
                     className={`col-span-9  w-full me-16  m-8 h-[40rem] ms-0 bg-no-repeat `}
                  ></div>
                  <div className="col-span-2 col-start-11 grid grid-row-4 max-h-[50rem]">
                     {imgs.map((item) => {
                        return (
                           <div
                              key={item.id}
                              style={{ backgroundImage: `url('${img2}')` }}
                              className={`col-span-1  w-full m-6 bg-center bg-no-repeat	bg-cover	 me-0`}
                           ></div>
                        );
                     })}
                  </div>
               </div>
               <div className="sHead">
                  <div className="grid grid-cols-12 mt-3 items-center  font-[Poppins] rounded-xl ">
                     <div className="col-span-1 p-0">
                        <LazyLoadImage src={imgH} />
                     </div>
                     <div className="col-span-8 ms-3">
                        <h5 className="text-[2.50631rem] font-[600] leading-[140%] font-[Poppins] ">
                           Packaging Service Provider Name
                        </h5>
                        {/* <p className="text-[0.70225rem] leading-[140%]  font-[Poppins] ">
                           {item.text}
                        </p> */}
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
                           <div className="inline-block text-right ">
                              <p className="font-[Poppins] inline-block text-[0.72906rem] text-[#7D7D7D]">
                                 Packaging services
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-3  rounded-xl  m-auto text-center self-start   flex items-start ">
                        <div className="img inline-block bg-[#E7E7E9] p-2 me-4 rounded-full ">
                           <LazyLoadImage src={arrow} className="w-6" />
                        </div>
                        <div className="img inline-block bg-[#E7E7E9] p-2 me-4 rounded-full ">
                           <LazyLoadImage src={pin} className="w-6" />
                        </div>
                        <button className=" inline-block bg-[#6161FF]  p-2 rounded-[0.62175rem] text-white" onClick={handleClickOpenf}>
                           <LazyLoadImage
                              src={contact}
                              className="inline-block w-6"
                           />{" "}
                           Contact Us
                           <Contact
                            selectedValuef={selectedValuef}
                            openf={openf}
                            onClosef={handleClosef}
                           
                           />
                        </button>
                     </div>
                  </div>
               </div>
               <div className="border-b-2 border-[#BABABA] pb-20 relative">
                  <ServTabs />
                  <div className="absolute w-24  m-auto rounded-full overflow-hidden bottom-[-2.5rem] left-0 right-0 bg-white">
                     <LazyLoadImage src={imgH} className="px-2" />{" "}
                  </div>
               </div>
               <div className="mt-20">
                  <h4 className="text-[#000] text-[1.54394rem]  font-[500] font-[Poppins] leading-[140%] flex justify-between mt-10">
                     You might also like
                     <LazyLoadImage src={I} className="w-6" />
                  </h4>
                  <div className="grid grid-cols-12 mt-6">
                     <div className="card xl:col-span-3 md:col-span-4 col-span-6 bg-[#FFFFFF] shadow-[0px_7.537px_22.61px_0px_rgba(0,0,0,0.10)] p-4 rounded-xl me-6 mt-6 ">
                        <div className="img py-8 bg-[#E7E7FF] rounded-xl ">
                           <LazyLoadImage
                              src={image1}
                              className="xl:w-1/5 m-auto md:w-8 w-7"
                           />
                        </div>
                        <div>
                           <div className="">
                              <h5 className="text-[0.7665rem] font-[700] leading-[140%] font-[Poppins] mt-3 ">
                                 Service Provider Name
                              </h5>
                              <p className="text-[0.70225rem] leading-[140%]  font-[Poppins] mt-1 ">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Quasi, velit.
                              </p>
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
                              <div className="flex justify-between items-center">
                                 <div className="flex-1">
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 me-1 border-2 border-[#6161FF] rounded-full text-[#6161FF] ">
                                       bussniss
                                    </p>
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 border-2 border-[#6AA2F3] rounded-full text-[#6AA2F3]">
                                       bar2
                                    </p>
                                 </div>
                                 <div className="flex-1   shadow-[0px_8px_24px_0px_rgba(0, 0, 0, 0.10)] rounded-xl  text-end  bg-white  ">
                                    <div className=" rounded-xl text-end">
                                       <div className="img inline-block bg-[#E7E7E9] p-2  rounded-full ">
                                          <LazyLoadImage
                                             src={pin}
                                             className="w-6"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card xl:col-span-3 md:col-span-4 col-span-6  bg-[#FFFFFF] shadow-[0px_7.537px_22.61px_0px_rgba(0,0,0,0.10)] p-4 rounded-xl me-6 mt-6 ">
                        <div className="img py-8 bg-[#E7E7FF] rounded-xl ">
                           <LazyLoadImage
                              src={image1}
                              className="xl:w-1/5 m-auto md:w-8 w-7"
                           />
                        </div>
                        <div>
                           <div className="">
                              <h5 className="text-[0.7665rem] font-[700] leading-[140%] font-[Poppins] mt-3 ">
                                 Service Provider Name
                              </h5>
                              <p className="text-[0.70225rem] leading-[140%]  font-[Poppins] mt-1 ">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Quasi, velit.
                              </p>
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
                              <div className="flex justify-between items-center">
                                 <div className="flex-1">
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 me-1 border-2 border-[#6161FF] rounded-full text-[#6161FF] ">
                                       bussniss
                                    </p>
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 border-2 border-[#6AA2F3] rounded-full text-[#6AA2F3]">
                                       bar2
                                    </p>
                                 </div>
                                 <div className="flex-1   shadow-[0px_8px_24px_0px_rgba(0, 0, 0, 0.10)] rounded-xl  text-end  bg-white  ">
                                    <div className=" rounded-xl text-end">
                                       <div className="img inline-block bg-[#E7E7E9] p-2  rounded-full ">
                                          <LazyLoadImage
                                             src={pin}
                                             className="w-6"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card xl:col-span-3 md:col-span-4 col-span-6  bg-[#FFFFFF] shadow-[0px_7.537px_22.61px_0px_rgba(0,0,0,0.10)] p-4 rounded-xl me-6 mt-6 ">
                        <div className="img py-8 bg-[#E7E7FF] rounded-xl ">
                           <LazyLoadImage
                              src={image1}
                              className="xl:w-1/5 m-auto md:w-8 w-7"
                           />
                        </div>
                        <div>
                           <div className="">
                              <h5 className="text-[0.7665rem] font-[700] leading-[140%] font-[Poppins] mt-3 ">
                                 Service Provider Name
                              </h5>
                              <p className="text-[0.70225rem] leading-[140%]  font-[Poppins] mt-1 ">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Quasi, velit.
                              </p>
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
                              <div className="flex justify-between items-center">
                                 <div className="flex-1">
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 me-1 border-2 border-[#6161FF] rounded-full text-[#6161FF] ">
                                       bussniss
                                    </p>
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 border-2 border-[#6AA2F3] rounded-full text-[#6AA2F3]">
                                       bar2
                                    </p>
                                 </div>
                                 <div className="flex-1   shadow-[0px_8px_24px_0px_rgba(0, 0, 0, 0.10)] rounded-xl  text-end  bg-white  ">
                                    <div className=" rounded-xl text-end">
                                       <div className="img inline-block bg-[#E7E7E9] p-2  rounded-full ">
                                          <LazyLoadImage
                                             src={pin}
                                             className="w-6"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card xl:col-span-3 md:col-span-4 col-span-6  bg-[#FFFFFF] shadow-[0px_7.537px_22.61px_0px_rgba(0,0,0,0.10)] p-4 rounded-xl me-6 mt-6 ">
                        <div className="img py-8 bg-[#E7E7FF] rounded-xl ">
                           <LazyLoadImage
                              src={image1}
                              className="xl:w-1/5 m-auto md:w-8 w-7"
                           />
                        </div>
                        <div>
                           <div className="">
                              <h5 className="text-[0.7665rem] font-[700] leading-[140%] font-[Poppins] mt-3 ">
                                 Service Provider Name
                              </h5>
                              <p className="text-[0.70225rem] leading-[140%]  font-[Poppins] mt-1 ">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Quasi, velit.
                              </p>
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
                              <div className="flex justify-between items-center">
                                 <div className="flex-1">
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 me-1 border-2 border-[#6161FF] rounded-full text-[#6161FF] ">
                                       bussniss
                                    </p>
                                    <p className="inline-block leading-[140%] text-[0.70225rem] px-2 border-2 border-[#6AA2F3] rounded-full text-[#6AA2F3]">
                                       bar2
                                    </p>
                                 </div>
                                 <div className="flex-1   shadow-[0px_8px_24px_0px_rgba(0, 0, 0, 0.10)] rounded-xl  text-end  bg-white  ">
                                    <div className=" rounded-xl text-end">
                                       <div className="img inline-block bg-[#E7E7E9] p-2  rounded-full ">
                                          <LazyLoadImage
                                             src={pin}
                                             className="w-6"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
}
