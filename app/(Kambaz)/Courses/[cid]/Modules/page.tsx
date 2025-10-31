"use client"
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

    return (
      <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => { dispatch(addModule({ name: moduleName, course: cid })); setModuleName(""); }} />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules 
        .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />

                {!module.editing && (
                  <span className="flex-grow-1">{module.name}</span>
                )}

                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block me-2"
                    value={module.name}
                    onChange={(e) =>dispatch(
                      updateModule({ ...module, name: e.target.value })
                    )

                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                  />
                )}

                <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => { dispatch(deleteModule(moduleId));}}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem key={lesson.name} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>))}</ListGroup>)}</ListGroupItem>))} </ListGroup> 
       </div>     
);}
