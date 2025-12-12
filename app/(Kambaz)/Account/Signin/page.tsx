/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  const signinHandler = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err: any) {
      console.error("Signin error:", err.response?.data || err.message);
      alert("Signin failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        placeholder="username"
        id="wd-username"
        className="mb-2"
      />
      <FormControl
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="password"
        type="password"
        id="wd-password"
        className="mb-2"
      />
      <Button onClick={signinHandler} id="wd-signin-btn" className="btn btn-primary w-100 mb-2">
        Sign in
      </Button>
      <Link href="/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
