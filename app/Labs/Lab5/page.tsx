import * as client from "./client";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParamters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const HTTP_SERVER = process.env.VITE_REMOTE_SERVER;
export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h1>Lab 5</h1>
        <div className="list-group">
          <a href={`${HTTP_SERVER}/lab5/welcome`}           
             className="list-group-item">
             Welcome
          </a>
        </div>
        <EnvironmentVariables />
        <PathParameters/>
        <QueryParameters />
        <WorkingWithObjects />
        <WorkingWithArrays/>
        {/* <HttpClient/> */}
        <WorkingWithObjectsAsynchronously/>
        <WorkingWithArraysAsynchronously />
      </div>
  );}
  