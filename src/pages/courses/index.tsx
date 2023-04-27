import Course from "@/components/Course";
import { useEffect, useState } from "react";

interface Course {
  id: string;
  description: string;
}

const BASE_URL = "http://localhost:8080";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        let response: any = await fetch(`${BASE_URL}/course/all`);
        response = await response.json();
        console.log(response);
        if (response?.success) {
          setCourses(response?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadCourses();
  }, []);

  return (
    <div>
      {courses.map((course: Course) => {
        return (
          <Course
            key={course.id}
            description="Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!"
            subTitle="2 Days Course"
            title="CPR Certification"
            image="https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"
          />
        );
      })}</div>
  );
}
