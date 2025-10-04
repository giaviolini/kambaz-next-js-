import Link from "next/link";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </Link> 
          </li>
          <li className="wd-assignment-list-item">
            Multiple Modules | Not available until MAY 6 AT 12:00AM | <br></br>
            Due May 13 at 11:59pm | 100 points
          </li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A2 - CSS + HTML
            </Link> </li>
          <li className="wd-assignment-list-item">
          Multiple Modules | Not available until MAY 12 AT 12:00AM | <br></br>
          Due May 20 at 11:59pm | 100 points
          </li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A3 - CSS + HTML + JAVASCRIPT
            </Link> </li>
          <li className="wd-assignment-list-item">
          Multiple Modules | Not available until MAY 21 AT 12:00AM | <br></br>
          Due May 30 at 11:59pm | 100 points
          </li>
        </ul>
      </div>
  );}
  
  