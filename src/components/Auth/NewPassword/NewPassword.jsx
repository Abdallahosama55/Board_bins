
import google from "../../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from '../../../assets/login/Group 1000001547.png'
import '../Auth.css'
import { Link } from "react-router-dom";
const validationSchema = Yup.object().shape({
  confirm_password: Yup.string().email("Invalid email address").required("Email is required"),
   password: Yup.string().required("Password is required"),
});

export default function NewPassword() {
 

   return (
      <section className="Auth mb-5">
         <div className="mx-14">
            <div className="font-bold">
              <img src={logo} alt="logo Bard pins" className="xl:w-[200px] lg:w-[200px] md:w-[170px]  w-[150px] pb-12 mt-7"/>
            </div>

         
            <Formik
               initialValues={{ confirm_password: "", password: "" }}
               validationSchema={validationSchema}
        
            >
               {({ isSubmitting }) => (
                  <Form className="mt-3 xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-7">
                  <div className=" py-14  text-center  font-poppins text-4xl md:text-5xl font-bold md:leading-7 text-gray-800">
                  New Password ?
                  </div>
                    
               
                        <div className="mt-[0.75rem]">
                           <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">{"password"}</p>
                           <Field
                              type="password"
                              name="password"
                              placeholder="enter new password"
                              className="pl-[1rem] w-full py-[1rem] bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                           />
                        
                           <ErrorMessage name={"Inavaild password"} component="div" className="text-red-500" />
                           <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins] mt-5">{"Confirm password"}</p>
                           <Field
                           type="password"
                           name="Confirm_password"
                           placeholder=" Confirm Passwrd"
                           className="pl-[1rem] w-full py-[1rem] bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                        />
                        <ErrorMessage name={"Password Not match"} component="div" className="text-red-500" />
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
