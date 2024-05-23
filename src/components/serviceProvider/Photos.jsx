import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import img2 from "../../assets/service/img2.png";
import img1 from "../../assets/service/img1.png";
import img3 from "../../assets/service/img3.png";
import img4 from "../../assets/service/img4.png";
import "./Photos.css";
const CategoryButton = ({ name, isActive, onClick }) => {
   // Apply active class conditionally based on the isActive prop
   const className = isActive
      ? "inline-block text-[0.90006rem] bg-[#FAFAFA]  py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full border-[#6161FF] border-2  text-[#6161FF]"
      : "inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full  border-2  ";
   return (
      <button className={className} onClick={onClick}>
         {name}
      </button>
   );
};
export default function Photos() {
   const [activeCategory, setActiveCategory] = useState("All");
   const categories = ["All", "Factories", "Agencies Legal", "Category"];

   // Handler to change the active category
   const selectCategory = (category) => {
      setActiveCategory(category);
   };
   const images = [
      {
         src: img2,
         width: 220,
         height: 174,
      },
      {
         src: img1,
         width: 380,
         height: 212,
      },
      {
         src: img3,
         width: 320,
         height: 212,
      },
      {
         src: img4,
         width: 320,
         height: 212,
      },
      {
         src: img1,
         width: 320,
         height: 174,
      },
      {
         src: img2,
         width: 320,
         height: 212,
      },
      {
         src: img3,
         width: 320,
         height: 212,
      },
      {
         src: img4,
         width: 320,
         height: 212,
      },
   ];
   //  ../../assets/service/img2.png
   return (
      <div className="Photos">
         <div className=" ">
            <div className="categories-container">
               {categories.map((category) => (
                  <CategoryButton
                     key={category}
                     name={category}
                     isActive={activeCategory === category}
                     onClick={() => selectCategory(category)}
                  />
               ))}
            </div>
         </div>
         <div className="gallary mt-10">
            <p className="text-[1.54394rem] font-[500] leading-[140%] text-[#000] mb-8">
               {activeCategory}
            </p>
            <Gallery
               images={images}
               enableImageSelection={false}
               margin={10}
               className="rounded-xl"
            />
         </div>
      </div>
   );

   //     <div className="inline-block text-[0.90006rem] bg-[#FAFAFA] text-[#8C8585] py-[0.34619rem ] me-2 cursor-pointer px-[0.69231rem] rounded-full hover:border-[#6161FF] border-2  hover:text-[#6161FF]">
   // All
   // </div>
}
