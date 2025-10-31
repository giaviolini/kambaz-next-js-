import { Button, Form, FormControl, InputGroup, Placeholder } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import assignments from "../../../Database/assignments.json";
import AssignmentLink from "./assignmentEditorLink";
import { useParams } from "next/navigation";

export default function AssignmentControls() {
  const { cid } = useParams();
 return (
    <div id="wd-modules-controls" className="text-nowrap">
    <InputGroup className="float-start me-2" style={{ width: "300px" }}>
      <InputGroupText><FaSearch /></InputGroupText>
      <FormControl placeholder="Search..." id="wd-search-assignments" />
    </InputGroup>
    <AssignmentLink 
      cid={cid} 
      assignmentId={assignments[0]._id}
      className="wd-assignment-link text-decoration-none">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-edit-assignment-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
    </AssignmentLink>
    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-group-module-btn">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Group
    </Button>
  </div>
);}