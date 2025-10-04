import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="Signin" id="wd-course-signin-link"
        className="list-group-item active border-0"> Signin </Link>
      <Link href="Signup" id="wd-course-signup-link"
        className="list-group-item text-danger border-0"> Signup </Link>
      <Link href="Profile" id="wd-course-profile-link"
        className="list-group-item text-danger border-0"> Profile </Link>
    </div>
);}

