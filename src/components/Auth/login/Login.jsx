
import "../Auth.css";
import google from "../../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import logo from '../../../assets/landing/logobored.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email address").required("Email is required"),
   password: Yup.string().required("Password is required"),
});

export default function Login() {
   const navigate = useNavigate();

   const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
      console.log(values)
      try {
         const response = await axios.post("http://ec2-184-73-109-159.compute-1.amazonaws.com:8000/api/user/login/", {
            username: values.email,
            password: values.password,
         });
         localStorage.setItem("token", response.data.accessToken);
         navigate("/");
         resetForm();
      } catch (error) {
         setErrors({ email: "Invalid email or password", password: "Invalid email or password" });
      } finally {
         setSubmitting(false);
      }
   };

   const inputs = [
      { name: "email", type: "email", placeholder: "name@host.com", label: "Email" },
      { name: "password", type: "password", placeholder: "Enter your password", label: "Password" },
   ];

   const policy = (
      <p className="text-[1.19563rem] font-[Poppins]">
         By proceeding, you agree to the{" "}
         <button className="text-[#0685FA] underline">Terms of Service</button>{" "}
         and{" "}
         <button className="text-[#0685FA] underline">Privacy Policy</button>
      </p>
   );

   return (
      <section className="Auth mb-5">
         <div className="mx-14">
            <div className="font-bold">
              <img src={logo} alt="logo Bard pins" className="xl:w-[200px] lg:w-[200px] md:w-[170px]  w-[150px] pb-12 mt-7"/>
            </div>
            <div className="text-center welcome ">
               <h1 className=" mb-11">Log in</h1>
            </div>
            <Formik
               initialValues={{ email: "", password: "" }}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}
            >
               {({ isSubmitting }) => (
                  <Form className="mt-3] xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-6">
                     <button type="button" className="btn-g md:py-[0.6rem] py-1 ">
                        <LazyLoadImage src={google} alt="google" effect="none" className=" w-5/6" placeholderSrc={google} opasity="0.5" />
                        <span className="inline-block ml-3">Continue with Google</span>
                     </button>
                     <div className="relative border-t-[#b0b0b0] border-t-2 mt-10 pt-3">
                        <p className="absolute w-10 bg-white bottom-0 text-center left-[48%] rounded text-[#b0b0b0]">or</p>
                     </div>
                     {inputs.map((input, index) => (
                        <div key={index} className="mt-[0.75rem]">
                           <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">{input.label}</p>
                           <Field
                              type={input.type}
                              name={input.name}
                              placeholder={input.placeholder}
                              className="pl-[1rem] w-full py-[1rem] bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                           />
                           <ErrorMessage name={input.name} component="div" className="text-red-500" />
                        </div>
                     ))}
                     <div className="mt-2">
                        <FormGroup>
                           <FormControlLabel required control={<Checkbox />} label={policy} />
                        </FormGroup>
                     </div>
                     <div>
                        <button type="submit" className="btn-g md:py-[1rem] py-1 create-account  mt-3" disabled={isSubmitting}>
                           <span className="inline-block ml-3 text-white">Log in</span>
                        </button>
                     </div>
                     <p className="forgot text-center underline no-underline text-[1.3625rem] mt-[1.7rem] ">
                        <Link to="/forgetpassword" className="">
                           Forgot password?
                        </Link>
                     </p>
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
