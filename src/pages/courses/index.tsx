import Course from "@/components/Course";
import CourseForm from "@/components/CourseForm";
import { Course as ICourse } from "@/models/models";
import { useEffect, useState } from "react";
import courseApi from "../../api/coursesApi";

export default function Courses() {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const loadCourses = async () => await courseApi.getAllCourses();
    loadCourses().then((courses) => setCourses(courses));
  }, []);

  return (
    <div>
      {courses.map((course) => {
        return (
          <Course
            key={course.id}
            description="Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!"
            subTitle="2 Days Course"
            title="CPR Certification"
            image="https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"
          />
        );
      })}
      <CourseForm />
    </div>
  );
}
