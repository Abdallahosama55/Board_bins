import React from "react";
import pin from "../../../assets/dashboard/pin-1 1.svg";
import pin2 from "../../../assets/dashboard/pin-1.svg";
import time from "../../../assets/dashboard/time.svg";
import "./Myboard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../../assets/dashboard/Image.svg";
import img1 from "../../../assets/dashboard/Image-1.svg";
import img2 from "../../../assets/dashboard/Image-2.svg";
import star1 from "../../../assets/dashboard/Star 11.svg";
import star2 from "../../../assets/dashboard/Group 42.svg";
import arrow from "../../../assets/dashboard/arrow.svg";
import bank from "../../../assets/dashboard/Icon  Bank.svg";
import pin3 from "../../../assets/dashboard/pin-21.svg";
import time2 from "../../../assets/dashboard/time2.svg";
import frame11 from "../../../assets/dashboard/Frame11.svg";
import chat11 from "../../../assets/dashboard/chat11.svg";
import trash2 from "../../../assets/dashboard/trash2.svg";
import search11 from "../../../assets/dashboard/search11.svg";
import userchat from "../../../assets/dashboard/userchat.svg";
import aichat from "../../../assets/dashboard/aichat.png";
import essential from "../../../assets/dashboard/essential.svg";
import business from "../../../assets/dashboard/business.svg";
import dots from "../../../assets/dashboard/3dots.svg";
import Search from "./Search";
import setting from "../../../assets/dashboard/setting.svg";
import emptylist from "../../../assets/dashboard/empty-my-list.cc116cd4a341ddefc48f362f13a37bf2 1.svg";
import SideBar from "../sidebar/SideBar";
export default function MyBoard() {
   const items = [
      {
         title: "Service Provider Name",
         text: "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.  ",
         bussniss: "bussniss",
         bar2: "Tag 2",
         rating: 4.7,
         img: img,
      },
      {
         title: "Service Provider Name",
         text: "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.  ",
         bussniss: "bussniss",
         bar2: "Tag 2",
         rating: 4.7,
         img: img1,
      },
      {
         title: "Service Provider Name",
         text: "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.  ",
         bussniss: "bussniss",
         bar2: "Tag 2",
         rating: 4.7,
         img: img2,
      },
      {
         title: "Service Provider Name",
         text: "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.  ",
         bussniss: "bussniss",
         bar2: "Tag 2",
         rating: 4.7,
         img: img,
      },
   ];
   return (
      <div className="py-6 bg-[#F5F6FA]">  
        <Search />
      <section className="Myboard bg-[#F5F6FA] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               {/* side bar */}
               
               <SideBar />
               {/* Main */}
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
              
                  {/* start from here */}
                  <div className="service bg-[#FDFDFD] mt-5 rounded-[2.375rem] lg:py-12 lg:px-[4.12] py-6 px-6">
                     <div className="cont">
                        <div className="grid lg:grid-cols-10  grid-col-10">
                           {/* hey name */}
                           <div className="col-span-10">
                              <div className="flex justify-between">
                                 <h2 className="flex-2 text-[1.8125rem] font-[Poppins] text-[#1E1E1E]">
                                    Hey, Kirolos 👋
                                 </h2>
                                 <button className="flex-2 bg-[#6161FF] text-white px-3 rounded-[0.625rem]">
                                    + Create a new Section
                                 </button>
                              </div>
                              <p className="font-[Poppins] text-[#1E1E1E] mt-2 text-[0.89919rem]">
                                 What would you like to create to day?
                              </p>
                           </div>
                           {/* first  section on left pined services */}
                           <div className="lg:col-span-6 col-span-10 gap-4 items rounded-2xl border-2 border-[#E8E8E8] p-7 bg-white mt-4">
                              <div className="flex">
                                 <div className="flex-2 grid grid-cols-5  items-center justify-center">
                                    <div className="img col-span-1  p-2   ">
                                       <LazyLoadImage
                                          src={pin}
                                          className="w-full bg-[#D9D9D9] lg:p-2 p-0 rounded-md"
                                       />
                                    </div>
                                    <div className="col-span-4  ms-3">
                                       <h3 className="text-[#26222B] text-[1.125rem] font-[700] mb-0">
                                          Pinned Service providers
                                       </h3>
                                       <p>Service sproviders Pinned by you</p>
                                    </div>
                                 </div>
                                 <div className="flex-1 text-right grid items-center">
                                    <p className="text-[#868686] text-[1.195rem] leading-[186%]">
                                       See all
                                    </p>
                                 </div>
                              </div>
                              <div className="flex mt-4">
                                 <div className="flex-3 ">
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
                                       Category
                                    </div>
                                 </div>
                                 <div className="flex-1 text-right">
                                    <select
                                       name="sort"
                                       id=""
                                       className="select-sort text-[0.6715rem]  bg-[#FAFAFA] py-3 ps-[0.9rem]  pr-20 rounded-[0.375rem] "
                                    >
                                       <option value="none" selected>
                                          Sort
                                       </option>
                                    </select>
                                 </div>
                              </div>
                              <div className="max-h-[30rem] w-full overflow-y-auto mt-2  ">
                                 {items.map((item) => {
                                    return (
                                       <div className="grid grid-cols-12 mt-3 items-center bg-[#F5F6FA]  shadow-[0px_8px_24px_0px_rgba(0, 0, 0, 0.10)]  font-[Poppins] rounded-xl ">
                                          <div className="col-span-2 p-3">
                                             <LazyLoadImage src={item.img} />
                                          </div>
                                          <div className="col-span-9">
                                             <h5 className="text-[0.7665rem] font-[700] leading-[140%] font-[Poppins] ">
                                                {item.title}
                                             </h5>
                                             <p className="text-[0.70225rem] leading-[140%]  font-[Poppins] ">
                                                {item.text}
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
                                             <div>
                                                <p className="inline-block leading-[140%] text-[0.70225rem] px-2 me-1 border-2 border-[#6161FF] rounded-full text-[#6161FF] ">
                                                   {item.bussniss}
                                                </p>
                                                <p className="inline-block leading-[140%] text-[0.70225rem] px-2 border-2 border-[#6AA2F3] rounded-full text-[#6AA2F3]">
                                                   {item.bar2}
                                                </p>
                                                <div className="inline-block text-right ms-4">
                                                   <LazyLoadImage
                                                      className="inline-block w-[12.6px]"
                                                      src={pin2}
                                                   />{" "}
                                                   <p className="inline-block text-[0.72906rem] font-[Poppins] text-[#7D7D7D]">
                                                      200{" "}
                                                   </p>
                                                   <LazyLoadImage
                                                      className="inline-block w-[12.6px]"
                                                      src={time}
                                                   />{" "}
                                                   <p className="font-[Poppins] inline-block text-[0.72906rem] text-[#7D7D7D]">
                                                      16h ago
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-span-1 shadow-[0px_8px_24px_0px_rgba(0, 0, 0, 0.10)] rounded-xl  m-auto w-11/12 bg-white text-center p-3">
                                             <div className=" rounded-xl text-center">
                                                <div className="text-center">
                                                   <LazyLoadImage
                                                      src={arrow}
                                                      className="w-5 m-auto"
                                                   />{" "}
                                                   <p className="text-[0.3235rem] text-[#6161FF]">
                                                      Explore More
                                                   </p>
                                                </div>
                                                <div className="text-center mt-2">
                                                   <LazyLoadImage
                                                      src={bank}
                                                      className="w-5 m-auto"
                                                   />{" "}
                                                   <p className="text-[0.3235rem] text-[#6161FF]">
                                                      Share
                                                   </p>
                                                </div>
                                                <div className="text-center mt-2">
                                                   <LazyLoadImage
                                                      src={pin3}
                                                      className="w-5 m-auto"
                                                   />{" "}
                                                   <p className="text-[0.3235rem] text-[#6161FF]">
                                                      Unpin
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    );
                                 })}
                              </div>
                           </div>
                           {/* first and second section on right recent */}
                           <div className="lg:col-span-4 col-span-10 lg:ms-4 mt-4">
                              <div className="items rounded-2xl border-2 border-[#E8E8E8] p-7 bg-white">
                                 <div className="flex">
                                    <div className="flex-2 grid grid-cols-5  items-center justify-center">
                                       <div className="img col-span-1  p-2   ">
                                          <LazyLoadImage
                                             src={time2}
                                             className="w-full bg-[#D9D9D9] lg:p-2 p-0 rounded-md"
                                          />
                                       </div>
                                       <div className="col-span-4  ms-3 ">
                                          <h3 className="text-[#26222B] text-[1.125rem] font-[700] mb-0">
                                             Recent
                                          </h3>
                                          <p className="">Recent Activity</p>
                                       </div>
                                    </div>
                                    <div className="flex-1 text-right grid items-center">
                                       <p className="text-[#868686] text-[1.195rem] leading-[186%]">
                                          See all
                                       </p>
                                    </div>
                                 </div>
                                 <div className="p-2 rescent">
                                    <div className="mt-[0.63rem]">
                                       <LazyLoadImage
                                          src={frame11}
                                          className="inline-block w-5"
                                       />{" "}
                                       <p className="inline-block ms-2 recent-p">
                                          Add new Section “Bussiness Section”
                                       </p>{" "}
                                    </div>
                                    <div className="mt-[0.63rem]">
                                       <LazyLoadImage
                                          src={chat11}
                                          className="inline-block w-5"
                                       />{" "}
                                       <p className="inline-block ms-2 recent-p">
                                          Chat{" "}
                                       </p>{" "}
                                    </div>
                                    <div className="mt-[0.63rem]">
                                       <LazyLoadImage
                                          src={trash2}
                                          className="inline-block w-5"
                                       />{" "}
                                       <p className="inline-block ms-2 recent-p">
                                          Remove Marchant Name From Pinned{" "}
                                       </p>{" "}
                                    </div>
                                    <div className="mt-[0.63rem]">
                                       <LazyLoadImage
                                          src={search11}
                                          className="inline-block w-5"
                                       />{" "}
                                       <p className="inline-block ms-2 recent-p">
                                          Search About .....
                                       </p>{" "}
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-4 items rounded-2xl border-2 border-[#E8E8E8] p-7 bg-white">
                                 <div className="flex">
                                    <div className="flex-2 grid grid-cols-5  items-center justify-center">
                                       <div className="img col-span-1  p-2   ">
                                          <LazyLoadImage
                                             src={chat11}
                                             className="w-full bg-[#D9D9D9] lg:p-2 p-0 rounded-md"
                                          />
                                       </div>
                                       <div className=" ms-3 col-span-4 ">
                                          <h3 className="text-[#26222B] text-[1.125rem] font-[700] mb-0">
                                             saved-chat-history
                                          </h3>
                                          <p className="">
                                             last Chat with Ai assistant
                                          </p>
                                       </div>
                                    </div>
                                    <div className="flex-1 text-right grid items-center">
                                       <p className="text-[#868686] text-[1.195rem] leading-[186%]">
                                          See all
                                       </p>
                                    </div>
                                 </div>
                                 <div className="max-h-[14rem] overflow-y-auto">
                                    <div className="chat">
                                       <div className="user grid grid-cols-8 items-start p-1">
                                          <div className="col-span-1 p-2">
                                             <LazyLoadImage src={userchat} />
                                          </div>
                                          <div className="ms-3 col-span-5 bg-white  rounded-xl py-4 px-5 shadow-[0_8px_24px_0px_rgba(0,0,0,0.1)] mt-2">
                                             <p className="text-[0.58306rem]">
                                                Ask any Question ?{" "}
                                             </p>
                                          </div>
                                       </div>
                                       <div className="ai grid grid-cols-8 items-start p-1 justify-center">
                                          <div className="ms-3 col-start-3 col-span-5 bg-white  rounded-xl py-4 px-5 shadow-[0_8px_24px_0px_rgba(0,0,0,0.1)] mt-2">
                                             <p className="text-[0.625rem]">
                                                Lorem ipsum dolor sit amet
                                                consectetur. Ipsum nisi molestie
                                                diam nisi sed sem est. Lobortis
                                                tristique convallis pellentesque
                                                nec. Est viverra massa dolor
                                                proin leo.{" "}
                                             </p>
                                             <div></div>
                                          </div>
                                          <div className="col-span-1 p-2">
                                             <LazyLoadImage src={aichat} />
                                          </div>
                                       </div>
                                       <div className="ai grid grid-cols-8 items-start p-1 justify-center">
                                          <div className="ms-3 col-start-3 col-span-5 bg-white  rounded-xl py-4 px-5 shadow-[0_8px_24px_0px_rgba(0,0,0,0.1)] mt-2">
                                             <p className="text-[0.625rem]">
                                                Lorem ipsum dolor sit amet
                                                consectetur. Ipsum nisi molestie
                                                diam nisi sed sem est. Lobortis
                                                tristique convallis pellentesque
                                                nec. Est viverra massa dolor
                                                proin leo.{" "}
                                             </p>
                                             <div></div>
                                          </div>
                                          <div className="col-span-1 p-2">
                                             <LazyLoadImage src={aichat} />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mt-4 relative shadow-input">
                                    <input
                                       type="text"
                                       className="w-full bg-white p-7 placeholder:text-[1rem] "
                                       placeholder="Write a message"
                                    />
                                    <button className="absolute bg-[#6161FF] top-2 right-3 p-4 rounded-full">
                                       <LazyLoadImage src={essential} />
                                    </button>
                                 </div>
                              </div>
                           </div>
                           {/* last section bottom business  */}
                           <div className="col-span-10 rounded-2xl border-2 border-[#E8E8E8] p-7 bg-white mt-4 font-[Poppins]">
                              <div className="grid grid-flow-col justify-between items-center">
                                 <div className=" flex items-center">
                                    <div className="inline-block col-span-2  bg-[#d9d9d9] p-2 rounded-md">
                                       <LazyLoadImage
                                          src={business}
                                          className=" w-5"
                                       />
                                    </div>
                                    <p className="inline-block ms-2 text-[1.38219rem] text-[#26222B] leading-[184.523%]">
                                       Bussiness Section
                                    </p>
                                 </div>
                                 <div className="">
                                    <button className="inline-block">
                                       <LazyLoadImage
                                          src={setting}
                                          className="w-5"
                                       />
                                    </button>
                                    <button className="inline-block ms-3">
                                       {" "}
                                       <LazyLoadImage
                                          src={dots}
                                          className="w-5"
                                       />
                                    </button>
                                 </div>
                              </div>
                              <div className="flex justify-center mt-4">
                                 <LazyLoadImage
                                    src={emptylist}
                                    className="w-1/12 "
                                 />
                              </div>
                              <div>
                                 <p className="px-12 text-[1.38219rem] font-[400] text-center leading-[184.523%]">
                                    To add new Service Provider to your custom
                                    card,
                                    <span className="text-[#6161FF] font-[600]">
                                       {" "}
                                       Pin from the search results
                                    </span>{" "}
                                    and choose a card name. Alternatively, you
                                    can{" "}
                                    <span className="text-[#6161FF] font-[600]">
                                       {" "}
                                       use the drag and drop{" "}
                                    </span>
                                    feature for merchants from your pinned list.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </div>
   );
}
// font-[Poppins]   text-[#1E1E1E]    bg-[#FAFAFA]
