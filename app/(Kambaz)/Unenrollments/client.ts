import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/enrollments/${courseId}/users/${userId}`);
  return response.data;
};