"use client";
import { FaAlignJustify } from "react-icons/fa6";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as client from "./client"; // or wherever your course client is

export default function Courses() {
  const { cid } = useParams();
  const pathname = usePathname();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await client.findMyCourses(); // or fetchAllCourses()
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const course = courses.find((course) => course._id === cid);

  if (loading) return <div>Loading...</div>;

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
    </div>
  );
}


  