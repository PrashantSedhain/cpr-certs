import { Course } from "@/models/models";
import { api } from "./fetchWrapper";

const getAllCourses = async () => {
  return await api.get<Course[]>(`course/all`)
}

const courseApi = {
  getAllCourses: getAllCourses
}

export default courseApi;