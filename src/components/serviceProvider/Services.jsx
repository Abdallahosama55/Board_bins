import React from "react";
import I from "../../assets/service/i.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pic14 from "../../assets/service/14.svg";
import pic15 from "../../assets/service/15.svg";
import pic16 from "../../assets/service/16.svg";
import pic17 from "../../assets/service/17.svg";
import pic13 from "../../assets/service/13.svg";
import arrowright from "../../assets/service/arrowright.svg";

export default function Services() {
   return (
      <div>
         <h4 className="text-[#000] text-[1.54394rem]  font-[500] font-[Poppins] leading-[140%] flex justify-between mt-10">
            Packaging services
            <LazyLoadImage src={I} className="w-6" />
         </h4>
         <p className="text-[#6B6A6A] text-[1.49225rem]  font-[400] font-[Poppins] leading-[140%] mt-2">
            Primary category
         </p>
         <div className="mt-10">
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 ">
               <div className="flex items-start">
                  <LazyLoadImage
                     src={pic13}
                     className="w-8 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] inline-block ">
                     Custom Packaging Design
                     <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block mt-2">
                        Collaborating with clients to create bespoke packaging
                        solutions tailored to their specific products, branding
                        guidelines, and target audience. This may include
                        packaging materials, dimensions, graphics, and
                        structural design elements.
                     </p>
                  </p>
                  <br />
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div className="flex items-start">
                  <LazyLoadImage
                     src={pic14}
                     className="w-8 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] inline-block ">
                     Packaging Prototyping
                     <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block mt-2">
                        Developing prototypes and mock-ups of packaging designs
                        to test functionality, aesthetics, and durability before
                        mass production. Prototyping helps identify and address
                        any potential issues or improvements early in the design
                        process.
                     </p>
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div className="flex items-start">
                  <LazyLoadImage
                     src={pic15}
                     className="w-8 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] inline-block ">
                     Packaging Production
                     <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block mt-2">
                        Manufacturing packaging components and assemblies
                        in-house or through third-party suppliers. Utilizing
                        advanced printing, cutting, and assembly technologies to
                        achieve high-quality packaging with efficient production
                        processes.
                     </p>
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div className="flex items-start">
                  <LazyLoadImage
                     src={pic17}
                     className="w-8 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] inline-block ">
                     Packaging Testing and Quality Assurance
                     <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block mt-2">
                        Conducting rigorous testing and quality control checks
                        to assess packaging durability, stability, tamper
                        resistance, and environmental impact. Testing methods
                        may include drop tests, compression tests, moisture
                        resistance tests, and compatibility testing with product
                        contents.
                     </p>
                  </p>
               </div>

               <LazyLoadImage src={arrowright} className="w-6 inline-block" />
            </div>
            <div className="flex justify-between border-b-2 border-[rgba(112, 112, 112, 0.27)] pb-6 mt-8 ">
               <div className="flex items-start">
                  <LazyLoadImage
                     src={pic16}
                     className="w-8 inline-block me-6"
                  />
                  <p className="text-[#5a5a5a] text-[1.5rem]  font-[400] font-[Poppins] leading-[140%] inline-block ">
                     Specialized Packaging Services
                     <p className="text-[#5a5a5a] text-[0.98269rem]  font-[300] font-[Poppins] leading-[140%] inline-block mt-2">
                        Offering specialized packaging solutions for unique
                        products or industries, such as food packaging,
                        pharmaceutical packaging, medical device packaging,
                        electronics packaging, and luxury goods packaging.
                     </p>
                  </p>
               </div>

               <LazyLoadImage
                  src={arrowright}
                  className="w-6 inline-block self-start"
               />
            </div>
         </div>
      </div>
   );
}
