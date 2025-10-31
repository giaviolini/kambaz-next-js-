/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get assignments from Redux store
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  // Filter assignments for current course
  const courseAssignments = assignments.filter((a: any) => a.course === cid);
  
  // State for delete confirmation dialog
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const handleDeleteClick = (assignmentId: string) => {
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
    <div>
      <h2>Assignments</h2>
      
      <Link href={`/Courses/${cid}/Assignments/new`}>
        <Button variant="primary" className="mb-3">+ Assignment</Button>
      </Link>

      <ul className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}>
                <strong>{assignment.title}</strong>
              </Link>
              <div className="text-muted small">
                Points: {assignment.points} | 
                Due: {assignment.endDate ? new Date(assignment.endDate).toLocaleDateString() : 'N/A'}
              </div>
            </div>
            
            <Button 
              variant="danger" 
              size="sm"
              onClick={() => handleDeleteClick(assignment._id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>

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
  