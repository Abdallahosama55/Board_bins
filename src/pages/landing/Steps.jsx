import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import step1 from "../../assets/landing/step1.png";
import step2 from "../../assets/landing/step2.png";
import step3 from "../../assets/landing/step3.png";
import step4 from "../../assets/landing/step4.png";
import step5 from "../../assets/landing/step5.png";
import step6 from "../../assets/landing/step6.png";
import step7 from "../../assets/landing/step7.png";
import active1 from "../../assets/landing/lab1.svg";
import noactive1 from "../../assets/landing/nlap1.svg";
import active2 from "../../assets/landing/lab2.svg";
import noactive2 from "../../assets/landing/nlab2.svg";
import active3 from "../../assets/landing/lab3.svg";
import noactive3 from "../../assets/landing/nlab3.svg";
import active4 from "../../assets/landing/lab4.svg";
import noactive4 from "../../assets/landing/nalb4.svg";
import active5 from "../../assets/landing/lab5.svg";
import noactive5 from "../../assets/landing/nlab5.svg";
import active6 from "../../assets/landing/lab6.svg";
import noactive6 from "../../assets/landing/nlap6.svg";
import active7 from "../../assets/landing/lab7.svg";
import noactive7 from "../../assets/landing/nlap7.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Steps() {
   const [value, setValue] = React.useState("1");

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   const MainSteps = [
      {
         title: "Sign Up",
         text: "Sign Up and Create Your Account Start by signing up for a Board Pins account. Provide your basic information and create a secure login. Once registered, you'll gain access to our platform and its array of verified service providers.",
         img: step1,
         labelA: active1,
         label: noactive1,
         id: "0",
      },
      {
         title: "Browse and Explore Service ",
         text: "Browse and Explore Service Categories through our searchengine Discover a wide range of service categories tailored specifically for e-commerce merchants. Explore options like legal, accounting, marketing, manufacturing, customer support, and more. Each category is filled with verified service providers ready to meet your business needs.",
         img: step2,
         labelA: active2,
         label: noactive2,
         id: "1",
      },
      {
         title: "Conduct Search and Pin Results for Later",
         text: "Conduct Search and Pin Results for Later Utilize our powerful search engine to find service providers that match your specific requirements. As you browse through the search results, conveniently pin the most relevant ones to your personalized boards for easy access later. This allows you to create a curated collection of potential partners for future reference.",
         img: step3,
         labelA: active3,
         label: noactive3,
         id: "2",
      },
      {
         title: "Review Profiles",
         text: "Take a closer look at the profiles of pinned service providers that caught your interest. Read through their descriptions, view their expertise, This helps you make informed decisions while selecting the right providers for your business.",
         img: step4,
         labelA: active4,
         label: noactive4,
         id: "3",
      },
      {
         title: "Pin and Engage",
         text: "Once you've identified potential service providers, initiate contact directly through the Board Pins platform. Connect with them to discuss your specific requirements, ask questions, and get a better understanding of how they can support your business goals. Establishing this direct connection enables you to build a strong working relationship.",
         img: step5,
         labelA: active5,
         label: noactive5,
         id: "4",
      },
      {
         title: "Enjoy Exclusive Discounts",
         text: "As a Board Pins member, you gain access to exclusive discounts and offers from our verified service providers. These special deals are designed specifically for e-commerce merchants, helping you save costs while accessing high-quality services. Take advantage of these discounts to optimize your budget and maximize your return on investment.",
         img: step6,
         labelA: active6,
         label: noactive6,
         id: "5",
      },
      {
         title: "Grow and Succeed",
         text: "With reliable and verified service providers by your side, focus on growing your e-commerce business with confidence. Leverage the expertise and support of our trusted partners to streamline operations, increase sales, and enhance customer satisfaction. Board Pins is here to empower you on your journey to e-commerce success .",
         img: step7,
         labelA: active7,
         label: noactive7,
         id: "6",
      },
   ];
   const lable = MainSteps.map((items) => {
      return (
         <div className="text-center" key={items.id}>
            {items.id == 1 ? (
               <LazyLoadImage src={items.label} className="w-3/4 m-auto " />
            ) : (
               <LazyLoadImage
                  src={items.label}
                  className="w-3/4 m-auto opacity-60"
               />
            )}
            {/* <LazyLoadImage src={items.label} className="w-3/4 m-auto opacity-60" /> */}
            <p>step {+items.id + 1}</p>
         </div>
      );
   });
   const lableA = MainSteps.map((items) => {
      return (
         <div className="text-center mx-6" key={items.id}>
            <LazyLoadImage src={items.labelA} className="w-3/4 m-auto" />
            <p>step {+items.id + 1}</p>
         </div>
      );
   });
   return (
      <Box sx={{ width: "100%", typography: "body1" }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
               <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="justify-center items-center"
               >
                  {MainSteps.map((items) => {
                     return (
                        <Tab
                           label={
                              items.id === value
                                 ? lableA[items.id]
                                 : lable[items.id]
                           }
                           value={items.id.toString()}
                           key={items.id}
                        />
                     );
                  })}
                  {/* <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                  <Tab label="Item Three" value="3" /> */}
               </TabList>
            </Box>
            {/* <TabPanel value="1"></TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"></TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
            <TabPanel value="6">Item Three</TabPanel>
            <TabPanel value="7">Item 7</TabPanel> */}
            {MainSteps.map((item) => {
               return (
                  <TabPanel value={(+item.id).toString()} key={item.id}>
                     <div className="grid grid-cols-12 mt-8 items-center lg:pb-0 pb-12">
                        <div className="img lg:col-span-6 col-span-12 lg:me-6">
                           <LazyLoadImage src={item.img} alt="steps" />
                        </div>
                        <div className="lg:col-span-6 col-span-12 lg:ps-8 mt-8 lg:mt-0">
                           <h5 className=" text-[#6161FF] text-[1.94444rem]  font-[500] font-[Poppins] leading-[2.77775rem]">
                              <LazyLoadImage
                                 src={active1}
                                 className="w-1/12 p-2 inline-block"
                              />
                              {item.title}
                           </h5>
                           <p className="text-[#333] text-xl leading-[2.22225rem]">
                              {item.text}
                           </p>
                        </div>
                     </div>
                  </TabPanel>
               );
            })}
         </TabContext>
      </Box>
   );
}
