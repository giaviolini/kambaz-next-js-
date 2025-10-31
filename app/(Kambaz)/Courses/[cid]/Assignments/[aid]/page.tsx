"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Form, FormControl } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer"; // adjust path

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get assignment from Redux store
  const assignment = useSelector((state: any) =>
    state.assignments.assignments.find((a: any) => a._id === aid)
  );

  // Local state for form fields
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    points: 100,
    startDate: "",
    endDate: "",
    availableUntil: "",
  });

  // Initialize form with existing assignment data (for editing)
  useEffect(() => {
    if (assignment) {
      setFormData({
        title: assignment.title || "",
        description: assignment.description || "",
        points: assignment.points || 100,
        startDate: assignment.startDate?.split('T')[0] || "",
        endDate: assignment.endDate?.split('T')[0] || "",
        availableUntil: assignment.availableUntil?.split('T')[0] || assignment.endDate?.split('T')[0] || "",
      });
    }
  }, [assignment]);

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle save
  const handleSave = () => {
    if (aid && aid !== "new") {
      dispatch(updateAssignment({
        ...assignment,
        ...formData,
      }));
    } else {
      // Create new assignment
      dispatch(addAssignment({
        ...formData,
        course: cid,
      }));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="float-start">
      <h1>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h1>
      
      <label htmlFor="wd-name">Assignment Name: </label>
      <FormControl 
        id="wd-name"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="wd-description">Description: </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="form-control"
        id="wd-description"
        style={{ width: "600px" }}
      />
      <br />

      <label htmlFor="wd-points">Points</label>
      <input
        id="wd-points"
        name="points"
        type="number"
        value={formData.points}
        onChange={handleChange}
      />
      <br /><br />

      <label>Available from</label><br />
      <FormControl
        id="wd-start-date"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        className="mb-2"
      />

      <label>Due</label>
      <FormControl
        id="wd-due-date"
        name="endDate"
        type="date"
        value={formData.endDate}
        onChange={handleChange}
        className="mb-2"
      />

      <label>Until</label><br />
      <FormControl
        id="wd-until-date"
        name="availableUntil"
        type="date"
        value={formData.availableUntil}
        onChange={handleChange}
        className="mb-2"
      />

      <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="secondary" className="me-2">Cancel</Button>
      </Link>
      <Button variant="primary" onClick={handleSave}>Save</Button>
    </div>
  );
}