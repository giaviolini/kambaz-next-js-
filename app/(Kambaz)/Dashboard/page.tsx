"use client"
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; })
 {

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr/>
      <h5>New Course </h5><br/>
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value }) } as="textarea" rows = {3} />
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update</button>
      <hr/>
      <br/>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
      {courses.map((course) => (
        <><Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                  <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                      <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                      <CardBody className="card-body">
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                              {course.name} </CardTitle>
                          <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                              {course.description} </CardText>
                          <Button variant="primary"> Go </Button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course); }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);}} 
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                        </button>
                      </CardBody>
                  </Link>
              </Card>
        </Col> </>
        ))}
        </Row>
      </div>
    </div>
);}
