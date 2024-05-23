
import google from "../../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from '../../../assets/login/Group 1000001547.png'
import '../Auth.css'
import { Link } from "react-router-dom";
const validationSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email address").required("Email is required"),
   password: Yup.string().required("Password is required"),
});

export default function ForgetPassword() {
 

   return (
      <section className="Auth mb-5">
         <div className="mx-14">
            <div className="font-bold">
              <img src={logo} alt="logo Bard pins" className="xl:w-[200px] lg:w-[200px] md:w-[170px]  w-[150px] pb-12 mt-7"/>
            </div>

         
            <Formik
               initialValues={{ email: "", password: "" }}
               validationSchema={validationSchema}
        
            >
               {({ isSubmitting }) => (
                  <Form className="mt-3 xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-7">
                  <div className=" py-14  text-center  font-poppins text-4xl md:text-5xl font-bold md:leading-7 text-gray-800">
                  Forget your Password ?
                  </div>
                    
               
                        <div className="mt-[0.75rem]">
                           <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">{"email"}</p>
                           <Field
                              type="email"
                              name="email"
                              placeholder="enter email"
                              className="pl-[1rem] w-full py-[1rem] bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                           />
                           <ErrorMessage name={"Inavaild email"} component="div" className="text-red-500" />
                        </div>
               
               
                     <div className=" py-5">
                        <button type="submit" className="btn-g md:py-[1rem] py-1 create-account   mt-5 " disabled={isSubmitting}>
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
