import { Button, Form, FormControl, InputGroup, Placeholder } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import assignments from "../../../Database/assignments.json";
import AssignmentLink from "./assignmentEditorLink";
import { useParams } from "next/navigation";

export default function AssignmentsControls() {
  const { cid } = useParams();
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex">
            <InputGroup className="me-5 float-start">
            <InputGroupText><FaSearch /></InputGroupText>
            <FormControl placeholder="Search..."
             id="wd-search-assignment" /> 
            </InputGroup>
     <Button variant="secondary" 
     size="lg" className="me-1 float-end" id="wd-collapse-all">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-view-progress" 
     href={`/Courses/${cid}/Assignments/new`}>
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
        </div>

    )
}