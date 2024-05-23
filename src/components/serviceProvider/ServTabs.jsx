import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Overview from "./Overview";
import Services from "./Services";
import Reviews from "./Reviews";
import Photos from "./Photos";

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

export default function ServTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: "100%" }}>
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab label="overview" {...a11yProps(0)} />
               <Tab label="About" {...a11yProps(1)} />
               <Tab label="Services" {...a11yProps(2)} />
               <Tab label="Reviews" {...a11yProps(3)} />
               <Tab label="Photos" {...a11yProps(4)} />
            </Tabs>
         </Box>
         <CustomTabPanel value={value} index={0}>
            <Overview />
         </CustomTabPanel>
         <CustomTabPanel value={value} index={1}>
            About
         </CustomTabPanel>
         <CustomTabPanel value={value} index={2}>
            <Services />
         </CustomTabPanel>
         <CustomTabPanel value={value} index={3}>
           <Reviews/>
         </CustomTabPanel>
         <CustomTabPanel value={value} index={4}>
            <Photos/>
         </CustomTabPanel>
      </Box>
   );
}
