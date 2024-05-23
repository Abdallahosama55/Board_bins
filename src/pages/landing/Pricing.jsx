import AccordionPricing from "./components/AccordionPricing"
import Footers from "./components/Footers"
import {Navbars} from "./components/Navbars"
import Plan from "../landing/components/Plan"

function Pricing() {
  return (
    <div className=" bg-[#F5F6FA] px-24">
    <Navbars/>
    <section  className=" flex   justify-center py-9  " id={"section-1-price"}>
    <div className=" block">
    
    
    <h1 className="text-[#333333] text-[2.4rem] font-[600] text-center">Try Boardpins For Free with a 14 day free trail </h1>
    <p className=" font-light block py-1 text-[#333333] opacity-[65]  text-[2.3rem] text-center">instant access i cancel anytime  |  No Credit Card Needed</p>
  <div className=" flex justify-center align-center w-full pt-9">
  <button className=" bg-[#6161FF] rounded-[3rem] text-white block py-3 px-7 ">Get Started 🠚 </button>

  
  </div>
  <div  className=" text-center mt-2">
  No credit card needed ✦  Unlimited time on Free plan
  </div>
    
    
    
    </div>
    
    </section>
    <section className="  py-5  flex justify-center" id={"section-2-price"}>
    <div className=" ">
    <Plan/>
    
    
    </div>
  

    
    
    </section>
    <section className=" py-12">
    <h2 className=" text-[2.6rem] text-[#1E1E1E] text-center opacity-[90] py-5 font-[500]">Frequently Asked Questions</h2>
    <AccordionPricing/>
    </section>

    
   <Footers/> 
    
    
    </div>
  )
}

export default Pricing