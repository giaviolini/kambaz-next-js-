/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    console.log("Attempting signin with:", credentials); // Debug log
    console.log("Available users:", db.users); // Debug log
    
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    dispatch(setCurrentUser(user));
    router.push("/Dashboard"); // Removed /Kambaz
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl 
        value={credentials.username} // Changed from defaultValue
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        placeholder="username" 
        id="wd-username" 
        className="mb-2"
      />
      <FormControl 
        value={credentials.password} // Changed from defaultValue
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="password" 
        type="password" 
        id="wd-password" 
        className="mb-2"
      />
      <Button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> 
        Sign in 
      </Button>
      <Link href="Signup" id="wd-signup-link"> Sign up </Link>
    </div>
  );
}