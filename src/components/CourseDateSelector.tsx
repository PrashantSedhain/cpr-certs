import { Select } from "chakra-react-select";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

interface Class {
  id: string;
  course_id: string;
  start_date: string;
  end_date: string;
  location: string;
  enrolled_students: [string];
}

type DateOption = {
  value: string;
  label: string;
};

const BASE_URL: string = "http://localhost:8080";

const CourseDateSelector = () => {
  const [courseId, setSelectedCourseId] = useState<string>();
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const loadClasses = async () => {
      try {
        let response: any = await fetch(`${BASE_URL}/class/all`);
        response = await response.json();
        if (response?.success && response?.data) {
          setClasses(response?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadClasses();
  }, []);

  const getAvailableDatesForClasses = (): DateOption[] => {
    const dates: DateOption[] = classes.map((c) => {
      const startDate = new Date(c.start_date);
      const endDate = new Date(c.end_date);

      const formattedStartDate = startDate.toLocaleDateString("en-US", {
        month: "long", // Full month name
        day: "numeric", // Day of the month (1-31)
        year: "numeric", // Full year
      });

      const formattedEndDate = endDate.toLocaleDateString("en-US", {
        month: "long", // Full month name
        day: "numeric", // Day of the month (1-31)
        year: "numeric",
      });
      return {
        label: `${formattedStartDate} - ${formattedEndDate}`,
        value: c.course_id,
      };
    });
    return dates;
  };

  return (
    <Select
      name="colors"
      className="chakra-react-select"
      classNamePrefix="chakra-react-select"
      placeholder="Select from available dates"
      options={getAvailableDatesForClasses()}
      selectedOptionStyle="check"
      onChange={(option) => setSelectedCourseId(option?.value)}
      chakraStyles={{
        dropdownIndicator: (provided) => ({
          ...provided,
          bg: "gray.100",
          px: 2,
          cursor: "inherit",
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: "none",
        }),
      }}
    />
  );
};

export default CourseDateSelector;
