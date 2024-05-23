import React, { useState, useEffect } from "react";
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import axios from "axios";

const DatePicker = () => {
  const [date, setDate] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isApiConnected, setIsApiConnected] = useState(false);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/api/data?date=${date}&page=${page}`);
//       setData(response.data);
//       setIsApiConnected(true);
//     } catch (error) {
//       console.error(error);
//       setIsApiConnected(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [date, page]);

  const handleChange = (datepickerEvent) => {
    const [startValue, endValue, rangeDates] = datepickerEvent;
    setDate(startValue);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Datepicker
        onChange={handleChange}
        locale={enUS}
        startValue={date}
        endValue={date}
      />
      {isApiConnected? (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
          {Array.from({ length: Math.ceil(data.length / 10) }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      ) : (
       ''
      )}
    </div>
  );
};

export default DatePicker;