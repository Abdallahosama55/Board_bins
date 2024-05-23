import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "./tabs/List";
import Kanban from "./tabs/Kanban";
function CustomTabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

CustomTabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function TaskTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <div className="relative">
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
               >
                  <Tab label={`kanban`} {...a11yProps(0)} />
                  <Tab label={`list`} {...a11yProps(1)} />
                  <Tab label={`table`} {...a11yProps(2)} />
                  <Tab label={`calnder`} {...a11yProps(3)} />
               </Tabs>
            </Box>

            <CustomTabPanel value={value} index={1}>
               <List/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               table
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
               calnder
            </CustomTabPanel>
         </Box>
         <div className="absolute right-4 top-2 ">
            <div className="inline-block me-8">Filter</div>
            <div className="inline-block me-8">Sort</div>
            <div className="inline-block bg-[#6161FF] text-center text-[#FCFCFC] py-2 px-4 rounded-lg">
               New Task
            </div>
         </div>
      </div>
   );
}
