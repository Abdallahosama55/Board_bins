import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Contact.css";
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
   message: yup.string("Enter your message").required("Message is required"),
});
export default function Contact({ onClosef, openf, selectedValuef }) {
   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
         message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
         console.log(JSON.stringify(values, null, 2));
      },
   });
   return (
      <Dialog
         open={openf}
         onClose={onClosef}
         fullWidth
         maxWidth="md"
         //  PaperProps={{
         //     component: "form",
         //     onSubmit: (event) => {
         //        event.preventDefault();
         //        const formData = new FormData(event.currentTarget);
         //        const formJson = Object.fromEntries(formData.entries());
         //        const email = formJson.email;
         //        console.log(email);
         //        handleClose();
         //     },
         //  }}
         className="bg-white"
      >
         <DialogContent>
            <div className=" h-screen w-full font-[Poppins] contact">
               <div className="bg-white lg:p-8 rounded-lg  w-full ">
                  <h1 className="text-[2.5rem] font-bold text-[#6161FF] mb-6">
                     Connect Form
                  </h1>
                  <form
                     onSubmit={formik.handleSubmit}
                     className="space-y-4 mt-12"
                  >
                     <div className="flex justify-between ">
                        <div className="flex-1 me-6">
                           <p className="block">First Name</p>
                           <TextField
                              className="bg-[#FBFBFB]"
                              id="firstName"
                              name="firstName"
                              label="First Name"
                              value={formik.values.firstName}
                              onChange={formik.handleChange}
                              error={
                                 formik.touched.firstName &&
                                 Boolean(formik.errors.firstName)
                              }
                              helperText={
                                 formik.touched.firstName &&
                                 formik.errors.firstName
                              }
                              margin="normal"
                              style={{ width: "100%" }} // 1.5rem margin split between both fields
                           />
                        </div>
                        <div className="flex-1 ms-6">
                           <p>Last Name</p>

                           <TextField
                              className="bg-[#FBFBFB]"
                              id="lastName"
                              name="lastName"
                              label="Last Name"
                              value={formik.values.lastName}
                              onChange={formik.handleChange}
                              error={
                                 formik.touched.lastName &&
                                 Boolean(formik.errors.lastName)
                              }
                              helperText={
                                 formik.touched.lastName &&
                                 formik.errors.lastName
                              }
                              margin="normal"
                              style={{ width: "100%" }}
                           />
                        </div>
                     </div>
                     <p>Email</p>
                     <TextField
                        className="bg-[#FBFBFB]"
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                           formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        margin="normal"
                     />
                     <p>Phone Number (What’s app)</p>
                     <TextField
                        className="bg-[#FBFBFB] border-0"
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={
                           formik.touched.phone && Boolean(formik.errors.phone)
                        }
                        helperText={formik.touched.phone && formik.errors.phone}
                        margin="normal"
                     />
                     <p>Message</p>
                     <TextField
                        className="bg-[#FBFBFB]"
                        fullWidth
                        id="message"
                        name="message"
                        label="Message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={
                           formik.touched.message &&
                           Boolean(formik.errors.message)
                        }
                        helperText={
                           formik.touched.message && formik.errors.message
                        }
                        margin="normal"
                        multiline
                        rows={4}
                     />
                     <div className="text-end">
                        <Button
                           color="primary"
                           variant="contained"
                           type="submit"
                           style={{
                              fontSize: "1.2065rem",
                              //   padding: "0.8rem 3.5rem",
                              //   margin: "0 0 0 auto",

                              alignSelf: "center", // Align the button as per design
                           }}
                           className="mt-6 ms-auto w-auto lowercase rounded-[0.75019rem]"
                        >
                           Connect Now
                        </Button>
                     </div>
                  </form>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
}
// .css-1d3z3hw-MuiOutlinedInput-notchedOutline
