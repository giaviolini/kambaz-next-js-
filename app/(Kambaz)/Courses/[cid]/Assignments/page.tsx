import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import Link from "next/link";

export default function Assignments() {
    return (
      <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS 
          <FaPlus className="float-end"/> <Badge className="float-end" bg="dark">40% of Total</Badge>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen /> 
            <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link text-decoration-none">
             A1 - ENV + HTML
            </Link> <LessonControlButtons /> 
            <br></br> Multiple Modules | Not available until MAY 6 AT 12:00AM | <br></br>
            Due May 13 at 11:59pm | 100 points
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen /> 
            <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link text-decoration-none">
             A2 - HTML + CSS
            </Link> 
            <LessonControlButtons />
            <br></br> Multiple Modules | Not available until MAY 14 AT 12:00AM | <br></br>
              Due May 23 at 11:59pm | 100 points
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen /> 
            <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link text-decoration-none">
             A3 - JavaScript
            </Link> 
            <LessonControlButtons />
            <br></br> Multiple Modules | Not available until MAY 24 AT 12:00AM | <br></br>
            Due May 30 at 11:59pm | 100 points
           </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>    
      </div>
  );}
  