import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUS from "date-fns/locale/en-US";

interface Class {
  id: string;
  course_id: string;
  start_date: string;
  end_date: string;
  location: string;
  enrolled_students: [string]
}

const BASE_URL: string = "http://localhost:8080";

const CourseDateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const loadClasses = async () => {
        try {
          let response: any = await fetch(`${BASE_URL}/class/all`);
          response = await response.json();
          if (response?.success) {
            setClasses(response?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      loadClasses();
  }, []);

  const getAvailableDatesForClasses = () => {
    const dates: Date[] = classes.map((c) => new Date(c.start_date));
    return dates;
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      includeDates={getAvailableDatesForClasses()}
    //   locale="en-US"
      inline
    />
  );
};

export default CourseDateSelector;
