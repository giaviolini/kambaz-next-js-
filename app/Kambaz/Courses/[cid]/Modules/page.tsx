export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>  <button>View Progress</button> 
          <select id="wd-publish-all">
            <option value="MODULE">Modules</option>
            <option value="QUIZ">Quizzes</option>
            <option value="TEST">Exams</option>
            <option value="ASSIGN">Assignments</option>
          </select> 
          <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <span className="wd-title">First Assignment</span>
                  <ul className="wd-content">
                    <li className="wd-content-item">Build your own Kambaz Page</li>
                    <li className="wd-content-item">Learn hands on how to build websites!</li>
                  </ul>
                </li>
              </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <span className="wd-title">Don't Stress, Breath!</span>
                  <ul className="wd-content">
                    <li className="wd-content-item">Sayings to Keep in Mind</li>
                    <li className="wd-content-item">Everything will get figured out, don't get too overwhelmed!</li>
                  </ul>
                </li>
              </ul>
          </li>
        </ul>
      </div>
  );}
  