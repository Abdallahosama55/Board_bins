
import mail from "../../../assets/login/image 72.png";
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

export default function NewPasswordSend() {
 

   return (
      <section className="Auth mb-5">
         <div className="mx-14">
            <div className="font-bold">
              <img src={logo} alt="logo Bard pins" className="xl:w-[200px] lg:w-[200px] md:w-[170px]  w-[150px] pb-12 mt-7"/>
            </div>
<div className=" w-full   flex justify-center align-center">

<div className="rounded-[30px] relative w-[600px] h-[450px]   bg-white shadow-lg">
<img src={mail} className=" md:w-[250px] w-[150px] z-3 bottom-[50%] left-[30%] absolute "/>
<p className="text-center md:text-5xl text-3xl  font-[700] text-[#333] w-full absolute top-[55%]">Recovery link sent!</p> 
<p className="text-center md:text-3xl text-2xl  w-full absolute text-[#333] lg:top-[75%] md:top-[65%] xl:top-[71%] top-[70%] ">Now, check your email.</p>    
</div>

</div>
         
         </div>
      </section>
   );
}
