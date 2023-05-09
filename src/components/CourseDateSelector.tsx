import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Class {
  id: string;
  course_id: string;
  start_date: string;
  end_date: string;
  location: string;
  enrolled_students: [string];
}

const BASE_URL: string = "http://localhost:8080";

const CourseDateSelector = () => {
  const [startDate, setStartDate] = useState(null);
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
  };

  return (
    <DatePicker
      placeholderText={"Select start date"}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      includeDates={getAvailableDatesForClasses()}
      withPortal
      className="custom-datepicker"
    />
  );
};

export default CourseDateSelector;
