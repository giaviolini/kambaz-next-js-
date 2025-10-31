/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaAlignJustify } from "react-icons/fa6";
import { useParams, usePathname } from "next/navigation";

export default function Courses({ courses }: { courses: any[] }) {
    const { cid } = useParams();
    const pathname = usePathname(); 
    const course = courses.find((course) => course._id === cid);
    
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-3 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
        </div>
    );
}


  