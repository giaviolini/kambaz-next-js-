"use client";
import Link from "next/link";
import { Button, Form, FormControl } from "react-bootstrap";
import { useParams } from "next/navigation";
import assignments from "../../../../Database/assignments.json";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find(a => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  return (
    <div id="wd-signin-screen" className="float-start">
      <h1>Assignment Editor</h1>
      <label htmlFor="wd-name">Assignment Name: </label>
      <FormControl id="wd-firstname" defaultValue={assignment.title}/> <br></br>
      <textarea defaultValue="The assignment is available online Submit a link to the landing page of..." className="form-control" id="wd-description" style={{width: "600px"}}>
      </textarea> <br></br>
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" defaultValue={assignment.points}/> <br></br><br></br>
      <label  htmlFor="wd-select-assign-group">Assignment Group </label>
      <Form.Select aria-label="wd-select-assign-group"> 
        <option value="DISC">Discussion</option>
        <option value="ASSIGN">Assignment</option>
        <option value="QUIZ">Quiz</option>
        <option value="EXAM">Exam</option>
      </Form.Select><br></br>
      <label  htmlFor="wd-select-one-grade">Display Grade as </label>
      <Form.Select aria-label="wd-select-one-grade"> 
        <option value="PERCENT">Percentage</option>
        <option value="LETTER">Letter</option>
      </Form.Select><br></br>
      <label htmlFor="wd-select-submission-type">Submission Type: </label>
      <Form.Select aria-label="wd-select-submission-type"> 
          <option value="ONLINE">Online</option>
          <option value="PERSON">In-Person</option>
          <option value="NOSUB">No Submission</option>
      </Form.Select><br></br>
      <label>Online Entry Options:</label><br/>
      <div className="form-check">
        <input type="checkbox" name="check-genre" id="wd-chkbox-text-entry"/>
        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>
        <input type="checkbox" name="check-genre" id="wd-chkbox-web"/>
        <label htmlFor="wd-chkbox-web">Websitre URL</label><br/>
        <input type="checkbox" name="check-genre" id="wd-chkbox-media"/>
        <label htmlFor="wd-chkbox-media">Media Recording</label><br/>
        <input type="checkbox" name="check-genre" id="wd-chkbox-anno"/>
        <label htmlFor="wd-chkbox-anno">Student Annotations</label><br/>
        <input type="checkbox" name="check-genre" id="wd-chkbox-upload"/>
        <label htmlFor="wd-chkbox-upload">File Upload</label>
      </div>
      <label>Assign to:</label>
      <Form.Select aria-label="wd-select-one-assign-to"> 
          <option value="EVERY">Everyone</option>
          <option value="ONE">One Person</option>
      </Form.Select><br></br>
      <label>Due</label>
      <FormControl id="wd-text-fields-ava" defaultValue={assignment.endDate}
             type="date"
             className="mb-2"/>
      <label>Available from</label><br></br>
      <FormControl id="wd-text-fields-ava" defaultValue={assignment.startDate}
             type="date"
             className="mb-2"/>
      <label>Until</label><br></br>
      <FormControl id="wd-text-fields-until" defaultValue={assignment.endDate}
             type="date"
             className="mb-2"/>
      <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="secondary" className="me-2">Cancel</Button>
      </Link>
      <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="primary">Submit</Button>
      </Link>
    </div> );}

  