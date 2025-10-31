/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
 const dispatch = useDispatch();
 const signin = () => {
   const user = db.users.find(
     (u: any) =>
       u.username === credentials.username &&
       u.password === credentials.password
   );
   if (!user) return;
   dispatch(setCurrentUser(user));
 };

 return (
   <div id="wd-signin-screen">
     <h1>Sign in</h1>
     <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             placeholder="username" id="wd-username" className="mb-2"/>
     <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             placeholder="password" type="password" id="wd-password" className="mb-2"/>
     <Button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> 
     Sign in </Button>
     <Link href="Signup" id="wd-signup-link"> Sign up </Link>
   </div>
);}