"use client";
import Link from "next/link";

export default function AssignmentLink({ cid, assignmentId, children, className }) {
  return (
    <Link
      href={`/Courses/${cid}/Assignments/${assignmentId}`}
      className={className} >
      {children}
    </Link>
  );
}
