"use client"
import { useParams, usePathname } from "next/navigation";
import Link from "next/link"
export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People/Table"];
  const pathname = usePathname();
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} href={`/Courses/${cid}/${link}`}
        className={`
          ${pathname.includes(link) ? "link-group-item active border-0" : "list-group-item text-danger border-0"} `}>
          {link}
        </Link>
      ))}
    </div>
);}

