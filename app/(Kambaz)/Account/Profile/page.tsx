/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
   const [profile, setProfile] = useState<any>({});
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const fetchProfile = () => {
   if (!currentUser) return redirect("/Account/Signin");
   setProfile(currentUser);
 };
 const signout = () => {
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };
 useEffect(() => {
   fetchProfile();
 }, []);

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
       <div>
      <FormControl placeholder="username" id="wd-username" className="mb-2"
      defaultValue={profile.username}
           onChange={(e) => setProfile({ ...profile, username: e.target.value }) }/>
      <FormControl placeholder="password" type="password"
             id="wd-password" className="mb-2"
             defaultValue={profile.password}
           onChange={(e) => setProfile({ ...profile, password: e.target.value }) }/>
      <FormControl placeholder="First Name" id="wd-firstname" className="mb-2"
      defaultValue={profile.firstName}
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) }/>
      <FormControl placeholder="Last Name" id="wd-lastname" className="mb-2"
      defaultValue={profile.lastName}
           onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) }/>
      <FormControl type="date" id="wd-dob" className="mb-2"
       defaultValue={profile.dob}
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
      <FormControl type="email" id="wd-email" className="mb-2"
      defaultValue={profile.email}
           onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2"
      onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
        <option defaultValue="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </FormSelect>
      <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
           Sign out
         </Button>
      </div>
     )}
    </div>
);}