import Link from "next/link";
import { Form, FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username" defaultValue="alice"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password" defaultValue="123"
             placeholder="password" type="password"
             className="mb-2"/>
      <FormControl id="wd-fistname" defaultValue="Alice"
             placeholder="First name"
             className="mb-2"/>
      <FormControl id="wd-lastname" defaultValue="Wonderland"
             placeholder="Last Name"
             className="mb-2"/>
      <FormControl id="wd-dob" defaultValue="2000-01-01"
             type="date"
             className="mb-2"/>
      <FormControl id="wd-email" defaultValue="alice@wonderland"
             type="eamil"
             className="mb-2"/>
      <Form.Select aria-label="wd-role" defaultValue="FACULTY"> 
        <option value="USER">User</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="STUDENT">Studnet</option>
      </Form.Select> <br></br>
      <Link id="wd-signin-btn"
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-2"> 
            Sign out</Link>
    </div> );}
