/* export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
        </table>
        <br></br>
        <label  htmlFor="wd-select-assign-group">Assignment Group </label>
          <select id="wd-select-one-assign-group">
            <option value="DISC">Discussion</option>
            <option value="ASSIGN">Assignment</option>
            <option value="QUIZ">Quiz</option>
            <option value="EXAM">Exam</option>
          </select> <br></br>
          <label  htmlFor="wd-select-one-grade">Display Grade as </label>
          <select id="wd-select-one-one-grade">
            <option value="PERCENT">Percentage</option>
            <option value="LETTER">Letter</option>
          </select><br></br>
          <label  htmlFor="wd-select-submission-type">Submission Type: </label>
          <select id="wd-select-one-submission-type">
            <option value="ONLINE">Online</option>
            <option value="PERSON">In-Person</option>
            <option value="NOSUB">No Submission</option>
          </select><br></br>
          <br></br>
          <label>Online Entry Options:</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-text-entry"/>
          <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-web"/>
          <label htmlFor="wd-chkbox-web">Websitre URL</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-media"/>
          <label htmlFor="wd-chkbox-media">Media Recording</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-anno"/>
          <label htmlFor="wd-chkbox-anno">Student Annotations</label><br></br>
          <input type="checkbox" name="check-genre" id="wd-chkbox-upload"/>
          <label htmlFor="wd-chkbox-upload">File Upload</label>
          <br></br>
          <br></br>
          <label>Assign to:</label>
          <select id="wd-select-one-assign-to">
            <option value="EVERY">Everyone</option>
            <option value="ONE">One Person</option>
          </select><br></br>

          <label>Due</label> <br></br>
          <input type="date"
                value="2000-01-21"
                id="wd-text-fields-due"/><br/>

          <label>Available from</label> <br></br>
          <input type="date"
                value="2000-01-21"
                id="wd-text-fields-ava"/><br/>
          <label>Until</label> <br></br>
          <input type="date"
                value="2000-01-21"
                id="wd-text-fields-until"/><br/>
          <button>Cancel</button><button>Submit</button>
      </div>
  );} */

import Link from "next/link";
import { Button, Form, FormControl } from "react-bootstrap";
export default function AssignmentEditor() {
  return (
    <div id="wd-signin-screen" className="float-start">
      <h1>Assignment Editor</h1>
      <label htmlFor="wd-name">Assignment Name: </label>
      <FormControl id="wd-firstname" defaultValue="A1 - ENV + HTML"/> <br></br>
      <textarea defaultValue="The assignment is available online Submit a link to the landing page of" className="form-control" id="wd-description" style={{width: "600px"}}>
      </textarea> <br></br>
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" defaultValue={100}/> <br></br><br></br>
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
      <FormControl id="wd-text-fields-ava" defaultValue="2000-01-01"
             type="date"
             className="mb-2"/>
      <label>Available from</label><br></br>
      <FormControl id="wd-text-fields-ava" defaultValue="2000-01-01"
             type="date"
             className="mb-2"/>
      <label>Until</label><br></br>
      <FormControl id="wd-text-fields-until" defaultValue="2000-01-01"
             type="date"
             className="mb-2"/>
      <Button>Cancel</Button><Button>Submit</Button>
    </div> );}

  