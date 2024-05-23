import{ useState } from "react";

import google from "../../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo from '../../../assets/login/Group 1000001547.png'
import * as Yup from 'yup';

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    policy: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
  });

  // Define an array of form fields
  const formFields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' }
  ];

  return (
    <section className="Auth mb-7">
      <div className="mx-14">
        <div className="pl-6 font-bold">
        <div className="font-bold">
        <img src={logo} alt="logo Bard pins" className="xl:w-[200px] lg:w-[200px] md:w-[170px]  w-[150px] pb-12 mt-7"/>
      </div>
        </div>
        <div className="text-center welcome  mt-3">
          <h1 className=" mb-[0px]">Welcome to board pins</h1>
          <p>Get started - it's free!</p>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            policy: false
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const response = await axios.post(
                "http://ec2-184-73-109-159.compute-1.amazonaws.com:8000/api/users/",
                {
                  username: values.email, // Assuming username is the same as email
                  password: values.password,
                  email: values.email,
                }
              );
              localStorage.setItem("token", response.data.accessToken);
              navigate('/'); // Redirect to home after successful signup
            } catch (error) {
              console.error("Signup failed:", error);
            }
            setLoading(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-12 xl:w-3/6 lg:w-4/6 md:w-5/6 m-auto xl:px-6">
              <button type="button" className="btn-g md:py-[1rem] py-1 ">
                <LazyLoadImage
                  src={google}
                  alt="google"
                  effect="none"
                  className="w-[75%]"
                  placeholderSrc={google}
                  opasity="0.5"
                />{" "}
                <span className="inline-block ml-3">Google</span>
              </button>
              <div className="relative border-t-[#b0b0b0] border-t-2 mt-10 pt-3">
                <p className="absolute w-10 bg-white bottom-0 text-center left-[48%] rounded text-[#b0b0b0]">
                  or
                </p>
              </div>
              {formFields.map(field => (
                <div key={field.name} className="md:flex md:flex-row block text-[#1E1E1E] justify-between">
                  <div className="flex-1 md:mr-5 mr-0 mb-5">
                    <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">
                      {field.label}
                    </p>
                    <Field
                      type={field.type}
                      name={field.name}
                      placeholder={field.label}
                      className="pl-[1.92rem] w-full py-[1.5rem] bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                    />
                    <ErrorMessage name={field.name} component="div" className="text-red-500" />
                  </div>
                </div>
              ))}
              <div className="mt-2 pb-5">
                <label className="text-[1rem] text-[#1E1E1E] font-[Poppins]">
                  <Field type="checkbox" name="policy" className="mr-2" />
                  By proceeding, you agree to the{" "}
                  <Link to="#" className="text-[#0685FA] underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link to="#" className="text-[#0685FA] underline">Privacy Policy</Link>
                </label>
                <ErrorMessage name="policy" component="div" className="text-red-500" />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-g md:py-[1rem] py-1 create-account mt-3"
                  disabled={isSubmitting}
                >
                  <span className="inline-block ml-3 text-white">{loading ? "Creating Account..." : "Create Account"}</span>
                </button>
              </div>
              <div className="text-center mt-10 text-[ 1.5705rem] font-[Poppins]">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="blue">
                    {" "}
                    Login
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
