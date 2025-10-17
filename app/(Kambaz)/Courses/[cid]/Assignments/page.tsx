"use client"
import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import assignments from "../../../Database/assignments.json";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(a => a.course === cid);
    return (
      <div>
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <FaPlus className="float-end" />
            <Badge className="float-end" bg="dark">40% of Total</Badge>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {courseAssignments.map(assignment => (
              <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen />
                <Link 
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none"
                >
                  {assignment.title}
                </Link>
                <LessonControlButtons />
                <br />
                {/* Customize these date displays if you have date info */}
                Multiple Modules | Not available until {assignment.startDate} | <br />
                Due {assignment.endDate}| 100 points
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>   
      </div>
  );}
  