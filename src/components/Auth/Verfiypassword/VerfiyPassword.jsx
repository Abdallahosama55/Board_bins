import google from "../../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from '../../../assets/login/Group 1000001547.png'
import '../Auth.css'
import { Link } from "react-router-dom";
import { useRef } from "react";

const validationSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email address").required("Email is required"),

   otp1: Yup.string().matches(/^\d{1}$/, "").required(),
   otp2: Yup.string().matches(/^\d{1}$/, "").required(),
   otp3: Yup.string().matches(/^\d{1}$/, "").required(),
   otp4: Yup.string().matches(/^\d{1}$/, "").required(),
});


export default function ForgetPassword() {
   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

   const focusNextInput = (index) => {
      if (index < inputRefs.length - 1) {
         inputRefs[index + 1].current.focus();
      }
   };

   const handleInput = (e, index) => {
      const { value } = e.target;
      if (value.length === 1) {
         focusNextInput(index);
      }
   };

   return (
      <section className="Auth mb-5">
         <div className="mx-14">
            <div className="font-bold">
              <img src={logo} alt="logo Bard pins" className="xl:w-[200px] lg:w-[200px] md:w-[170px]  w-[150px] pb-12 mt-7"/>
            </div>

         
            <Formik
               initialValues={{ email: "", password: "", otp1: "", otp2: "", otp3: "", otp4: "" }}
               validationSchema={validationSchema}
        
            >
               {({ isSubmitting }) => (
                  <Form className="mt-3 xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-7">
                     <div className=" py-5  text-center  font-poppins text-5xl md:text-4xl font-bold md:leading-7 text-gray-800">
                     Verify Email
                     </div>
                     <div className=" w-full text-center ">
                     <span className=" text-2xl font-poppins font-normal text-gray-800 ">Code has been sent to <span className="text-[#6161FF]">johndoe@gmail.com</span></span>
                     </div>
                     <div className=" text-center pt-12">enter code</div>
                     <div className="flex justify-center py-5 space-x-4">
              
                     {inputRefs.map((inputRef, index) => (
                        <input
                           key={index}
                           ref={inputRef}
                           type="text"
                           name={`otp${index + 1}`}
                           maxLength="1"
                           placeholder={`${index + 1}`}
                           className="form-input block w-12 px-4 py-3 leading-tight bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500 text-center"
                           onChange={(e) => handleInput(e, index)}
                        />
                     ))}
                     </div>
                  
                     <ErrorMessage name="otp4" component="div" className="text-red-500 mt-1" />
                     <div className=" text-center pt-12">
                     
                     <span className=" text-[##1E1E1E]">Didn’t Receive Code?</span>
                     <span className=" px-3 text-[#0685FA] underline font-poppins">Resend Code</span>
                     </div>
                     <div className=" text-center text-[#6161FF] py-2"><span>Resend code in 00:59</span></div>
                     <div className=" py-5 px-24">
                        <button type="submit" className="btn-g md:py-[1rem] py-1 create-account mt-5 " disabled={isSubmitting}>
                           <span className="inline-block ml-3 text-white">Send me the link</span>
                        </button>
                     </div>
                  
                     <div className="text-center mt-10 text-[ 1.5705rem] font-[Poppins]">
                        <p>
                           Need an account ?{" "}
                           <Link to="/signup" className="blue text-1xl font-bold">
                              Sign Up
                           </Link>
                        </p>
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </section>
   );
}
