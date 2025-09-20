export default function AssignmentEditor() {
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
  );}
  