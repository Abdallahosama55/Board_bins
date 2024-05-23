import React, { useEffect, useState } from "react";
import AdminSide from "../sidebar/AdminSide";
import SearchAdmin from "../search/SearchAdmin";
import { LazyLoadImage } from "react-lazy-load-image-component";
import grid from "../../../assets/admin/userC.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import content from "../../../assets/admin/content.svg";
import trash from "../../../assets/admin/Trash.svg";
import api from "../../store/api";
import axios from "axios";
function createData(name, email, created, last) {
   return { name, email, created, last };
}
const rows = [
   createData(
      "Frozen yoghurt",
      "keroo adel5@gmail.com",
      "15 / 1 / 2024   05:00 AM",
      "15 / 1 / 2024   05:00 AM"
   ),
   createData(
      "Ice cream sandwich",
      "keroo adel5@gmail.com",
      "15 / 1 / 2024   05:00 AM",
      "15 / 1 / 2024   05:00 AM"
   ),
   createData(
      "Eclair",
      "keroo adel5@gmail.com",
      "15 / 1 / 2024   05:00 AM",
      "15 / 1 / 2024   05:00 AM"
   ),
   createData(
      "Cupcake",
      "keroo adel5@gmail.com",
      "15 / 1 / 2024   05:00 AM",
      "15 / 1 / 2024   05:00 AM"
   ),
   createData(
      "Gingerbread",
      "keroo adel5@gmail.com",
      "15 / 1 / 2024   05:00 AM",
      "15 / 1 / 2024   05:00 AM"
   ),
];
export default function Users() {
   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          const response = await API.get("/admin");
   //          console.log("hello");
   //          return response.data;
   //       } catch (error) {
   //          console.error("Error fetching data:", error);
   //          throw error;
   //       }
   //    };
   // }, []);
   const [data, setData] = useState("");
   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const responce = await api.get("/api/v1/categories/");
            console.log("gj");
            setData(responce.name);
         } catch (err) {
            console.log("error");
         }
      };
      fetchUsers();
   }, []);
   console.log("response");

   return (
      <section className="Myboard bg-white  xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               {/* side bar */}
               <AdminSide />
               {/* Main */}
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <SearchAdmin />
                  <div className="mt-12 bg-[#FDFDFD] px-10 py-8">
                     <div className="flex items-center">
                        <div className="inline-block p-2 bg-[#E5E5FF] rounded-lg me-4 ">
                           <LazyLoadImage src={grid} />
                        </div>
                        <div className="inline-block">
                           <p className="text-[#292D32] text-[1.8125rem] font-[Poppins] font-[700] leading-[184.523%]">
                              Users
                           </p>
                        </div>
                     </div>
                     <div className="bg-white shadow-[0px_0px_9.344px_0px_rgba(195,195,195,0.25)] p-6 mt-4 rounded-[0.97331rem]">
                        <div className="btn text-end">
                           <button className="bg-[#6161FF] rounded-[0.47981rem] px-[1.47rem] py-3 text-white text-[1.0275rem] font-[500]">
                              Add New category
                           </button>
                           <div className="mt-6">
                              <TableContainer component={Paper}>
                                 <Table
                                    sx={{ minWidth: 650 }}
                                    aria-label="simple table"
                                 >
                                    <TableHead>
                                       <TableRow>
                                          <TableCell
                                             style={{
                                                color: "#757575",
                                                fontWeight: "500",
                                                fontSize: "1.375rem",
                                                lineHeight: "1.125rem",
                                             }}
                                          >
                                             User name
                                          </TableCell>
                                          <TableCell
                                             align="center"
                                             style={{
                                                color: "#757575",
                                                fontWeight: "500",
                                                fontSize: "1.375rem",
                                                lineHeight: "1.125rem",
                                             }}
                                          >
                                             Email
                                          </TableCell>
                                          <TableCell
                                             align="center"
                                             style={{
                                                color: "#757575",
                                                fontWeight: "500",
                                                fontSize: "1.375rem",
                                                lineHeight: "1.125rem",
                                             }}
                                          >
                                             Created Date{" "}
                                          </TableCell>
                                          <TableCell
                                             align="center"
                                             style={{
                                                color: "#757575",
                                                fontWeight: "500",
                                                fontSize: "1.375rem",
                                                lineHeight: "1.125rem",
                                             }}
                                          >
                                             Last Login
                                          </TableCell>

                                          <TableCell
                                             align="center"
                                             style={{
                                                color: "#757575",
                                                fontWeight: "500",
                                                fontSize: "1.375rem",
                                                lineHeight: "1.125rem",
                                             }}
                                          >
                                             Actions
                                          </TableCell>
                                          {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                                       </TableRow>
                                    </TableHead>
                                    <TableBody>
                                       {rows.map((row) => (
                                          <TableRow
                                             key={row.name}
                                             sx={{
                                                "&:last-child td, &:last-child th":
                                                   { border: 0 },
                                             }}
                                          >
                                             <TableCell
                                                component="th"
                                                scope="row"
                                                style={{
                                                   fontSize: "1.5rem",
                                                   fontWeight: "700",
                                                   lineHeight: "1.125rem",
                                                   padding: "1rem",
                                                }}
                                             >
                                                {row.name}
                                             </TableCell>
                                             <TableCell
                                                align="center"
                                                style={{
                                                   fontSize: "0.9375rem",
                                                   fontWeight: "400",
                                                   lineHeight: "1.125rem",
                                                   fontFamily: "Inter",
                                                }}
                                             >
                                                {row.email}
                                             </TableCell>
                                             <TableCell
                                                align="center"
                                                style={{
                                                   color: "#695858",
                                                   fontSize: "0.78075rem",
                                                   fontWeight: "300",
                                                   lineHeight: "0.58556rem",
                                                }}
                                             >
                                                {row.created}
                                             </TableCell>
                                             <TableCell
                                                align="center"
                                                style={{
                                                   color: "#695858",
                                                   fontSize: "0.78075rem",
                                                   fontWeight: "300",
                                                   lineHeight: "0.58556rem",
                                                }}
                                             >
                                                {row.last}
                                             </TableCell>

                                             <TableCell align="center">
                                                <LazyLoadImage
                                                   src={content}
                                                   className="inline-block w-4 me-1"
                                                />
                                                <LazyLoadImage
                                                   src={trash}
                                                   className="inline-block w-4 me-1"
                                                />
                                             </TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </TableContainer>
                           </div>
                           <div className="bg-[#EDEDED] text-[#A1A1A1] text-[0.875rem] mt-6 rounded-b-xl px-6 py-3 text-left font-[700] leading-[1.125rem] ">
                              {rows.length} Sevices Provider
                           </div>

                           {/* {data} */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
