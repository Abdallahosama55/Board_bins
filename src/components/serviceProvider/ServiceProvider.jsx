import React from "react";
import { useState } from "react";
import "./ServiceProvider.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@mui/material";
import ImgModal from "./ImgModal";
import { Typography } from "@mui/material";
export default function ServiceProvider() {
   const [open, setOpen] = useState(false);
   const [selectedValue, setSelectedValue] = useState("");

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
   };

   return (
      <section className="Service">
         <div className="">
            <Typography variant="subtitle1" component="div">
               {/* and this is the titel above it */}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
               {/* this is the title of the button */}
               details
            </Button>
            <ImgModal
               selectedValue={selectedValue}
               open={open}
               onClose={handleClose}
            />
         </div>
      </section>
   );
}
