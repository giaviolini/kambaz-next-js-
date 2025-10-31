import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl placeholder="username" id="wd-username" className="mb-2" defaultValue="mpaclob"/>
      <FormControl placeholder="password" type="password" id="wd-password" className="mb-2" defaultValue="helloWorld"/>
      <FormControl placeholder="verify password"
             type="password" id="wd-password-verify" className="mb-2" defaultValue="helloWorld"/>
      <Link  href="Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link>
      <Link  href="Signin" > Sign in </Link>
    </div>
);}