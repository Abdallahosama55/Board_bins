import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const settings = {
   cornerRadius: "50%",
};

export default function GragueBar({
   color,
   textColor,
   fontSize,
   value,
   children,
}) {
   return (
      <Gauge
         {...settings}
         value={value}
         sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
               fontSize: fontSize,
               fill: textColor,
            },
            [`& .${gaugeClasses.valueArc}`]: {
               fill: color,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
               fill: theme.palette.text.disabled,
            },
         })}
      >
         <>{children}</>
      </Gauge>
   );
}
