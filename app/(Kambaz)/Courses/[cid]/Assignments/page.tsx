/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";
import Link from 'next/link';
import AssignmentsControls from './AssignmentControls';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import LessonControlButtons from '../Modules/LessonControlButtons';
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from './reducer';
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  
  // Get assignments from Redux store
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  // Filter assignments for current course
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  
  // State for delete confirmation dialog
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const handleDeleteClick = (assignmentId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments"> 
      <AssignmentsControls />

      <br /><br />
      
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2"/>
            <b>ASSIGNMENTS</b>
            <div className="d-flex align-items-center ms-auto">
              <p className="percent-total me-4">40% of Total</p>
            </div>
          </div>
          
          <ListGroup className="wd-assignments rounded-0">
            {courseAssignments.map((assignment: any) => (
              <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
                <BsGripVertical className="me-2 fs-3" /> 
                <LuNotebookPen className="me-2 fs-4" style={{color: 'green'}}/>
                
                <div className="assignment-subtext">
                  <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link border-0 text-dark">
                    <b className="fs-3">{assignment.title}</b>
                  </Link>
                  <p> 
                    <span className="red-module">Multiple Modules</span>
                    {' | '}
                    <b>Not available until</b> {assignment.release} 
                    {' | '}
                    <b>Due</b> {assignment.due || assignment.endDate} 
                    {' | '}
                    {assignment.points || 100}pts
                  </p>
                </div>
            
                <div className="ms-auto d-flex gap-2">
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={(e) => handleDeleteClick(assignment._id, e)}
                  >
                    Delete
                  </Button>
                  <LessonControlButtons />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-quizzes">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2"/>
            <b>QUIZZES</b>
            <div className="d-flex align-items-center ms-auto">
              <p className="percent-total me-4">10% of Total</p>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-exams">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2"/>
            <b>EXAMS</b>
            <div className="d-flex align-items-center ms-auto">
              <p className="percent-total me-4">20% of Total</p>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-project">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2"/>
            <b>PROJECT</b>
            <div className="d-flex align-items-center ms-auto">
              <p className="percent-total me-4">30% of Total</p>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="modal show d-block" tabIndex={-1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to remove this assignment?</p>
              </div>
              <div className="modal-footer">
                <Button variant="secondary" onClick={cancelDelete}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={confirmDelete}>
                  Yes, Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}