import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Search from "../main/Search";
import SideBar from "../sidebar/SideBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import setting from "../../../assets/dashboard/SettingS.svg";
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import "./setting.css";
const validationSchema = yup.object({
   firstName: yup
      .string("Enter your first name")
      .required("First name is required"),
   lastName: yup
      .string("Enter your last name")
      .required("Last name is required"),
   email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
   phone: yup
      .string("Enter your phone number")
      .required("Phone number is required"),
   gender: yup.boolean().required,
});
export default function Setting() {
   return (
      <section className="Myboard bg-[#F5F6FA] xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               <SideBar />
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <Search />
                  <div className="service bg-[#FDFDFD] mt-5 rounded-[2.375rem]  lg:px-[4.12] py-6 px-6">
                     <div className="flex items-center">
                        <div className="inline-block p-2 bg-[#E5E5FF] rounded-lg me-4 ">
                           <LazyLoadImage src={setting} />
                        </div>
                        <div className="inline-block">
                           <p className="text-[#292D32] text-[1.8125rem] font-[Inter] font-[700] leading-[184.523%]">
                              Settings
                           </p>
                        </div>
                     </div>
                     <div className="px-8 w-5/6">
                        <Formik
                           initialValues={{
                              firstName: "",
                              lastName: "",
                              email: "",
                              phone: "",
                              isMale: "",
                              password: "",

                           }}
                           validationSchema={validationSchema}
                           onSubmit={(values, { setSubmitting }) => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                           }}
                        >
                           {({ isSubmitting }) => (
                              <Form>
                                 <div className="flex">
                                    <div className="flex-1 me-12">
                                       <label
                                          htmlFor="firstName"
                                          className="block"
                                       >
                                          First Name
                                       </label>
                                       <Field
                                          name="firstName"
                                          type="text"
                                          className="block w-full  border-2 border-[#707275] px-6 py-2 text-[1.48rem] me-6"
                                       />
                                       <ErrorMessage
                                          name="firstName"
                                          component="div"
                                       />
                                    </div>
                                    <div className="flex-1 ms-12">
                                       <label
                                          htmlFor="lastName"
                                          className="block"
                                       >
                                          Last Name
                                       </label>
                                       <Field
                                          name="lastName"
                                          type="text"
                                          className="block w-full border-2 border-[#707275] px-6 py-2 text-[1.48rem]"
                                       />
                                       <ErrorMessage
                                          name="lastName"
                                          component="div"
                                       />
                                    </div>
                                 </div>

                                 <label htmlFor="email" className="block">
                                    Email
                                 </label>
                                 <Field
                                    name="email"
                                    type="email"
                                    className="block w-full border-2 border-[#707275] px-6 py-2 text-[1.48rem]"
                                 />
                                 <ErrorMessage name="email" component="div" />
                                 <label htmlFor="password" className="block">
                                    New Password
                                 </label>
                                 <Field
                                    name="password"
                                    type="password"
                                    className="block w-full border-2 border-[#707275] px-6 py-2 text-[1.48rem]"
                                 />
                                 <ErrorMessage name="password" component="div" />

                                 <label htmlFor="phone" className="block">
                                    Phone
                                 </label>
                                 <Field
                                    name="phone"
                                    type="text"
                                    className="block w-full border-2 border-[#707275] px-6 py-2 text-[1.48rem]"
                                 />
                                 <ErrorMessage name="phone" component="div" />

                                 <label className="mt-6 block">Gender:</label>
                                 <label className="inline-block w-[20%]">
                                    <Field
                                       type="radio"
                                       name="isMale"
                                       value="true"
                                    />
                                    Male
                                 </label>
                                 <label className="inline-block w-[20%]">
                                    <Field
                                       type="radio"
                                       name="isMale"
                                       value="false"
                                       className=""
                                    />
                                    Female
                                 </label>
                                 <ErrorMessage name="isMale" component="div" />

                                 
                                 <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="block  w-[100%] text-[#6161FF] text-[1.89444rem] bg-white p-3 rounded-2xl border-2 border-[#6161FF] mt-6"
                                 >
                                    change Password
                                 </button>
                                 <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="block w-[100%] text-white text-[1.89444rem] bg-[#6161FF] p-3 rounded-2xl mt-6"
                                 >
                                    Update Profile
                                 </button>
                              </Form>
                           )}
                        </Formik>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
