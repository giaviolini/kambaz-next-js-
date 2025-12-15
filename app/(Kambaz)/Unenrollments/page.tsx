/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { setCourses } from "../Courses/reducer";
import { RootState } from "../store";
import * as client from "./client";
import * as clientCourse from "../Courses/client";

export default function UnenrollmentPage() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
      try {
        const courses = await clientCourse.findMyCourses();
        dispatch(setCourses(courses));
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      if (currentUser && currentUser._id) {
      fetchCourses();
    }
  }, [currentUser]);

  const toggleSelection = (courseId: string) => {
    setSelected(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const saveUnenrollment = async () => {
    if (!currentUser) return;

    for (const courseId of selected) {
      await client.unenrollFromCourse(currentUser._id, courseId);
    }

    redirect("/Dashboard");
  };

  return (
    <div>
  <h1 id="wd-enrollment-title">My Courses</h1>
  <hr />

  {courses.length === 0 && <p>You are not enrolled in any courses.</p>}

  {courses.map((course) => (
    <FormCheck
      key={course._id}
      type="checkbox"
      id={`course-${course._id}`}
      label={course.name}
      checked={selected.includes(course._id)}
      onChange={() => toggleSelection(course._id)}
      className="mb-2"
    />
  ))}

  <Button
    variant="danger"
    size="lg"
    className="mt-3"
    onClick={saveUnenrollment}
    disabled={selected.length === 0} // optional: disable until selection
  >
    Save Unenrollment
  </Button>
</div>
  );
}