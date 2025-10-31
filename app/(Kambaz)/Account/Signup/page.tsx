/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign up</h1>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password"
             placeholder="verify password" type="password"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign Up </Link>
      <Link id="wd-signin-link" href="/Account/Signup">Sign in</Link>
    </div> );}
