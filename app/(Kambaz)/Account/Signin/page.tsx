/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import { FormControl, Button, Alert, Spinner } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignin = async () => {
    setError(null);
    setLoading(true);

    try {
      const user = await client.signin(credentials);

      if (!user) {
        setError("Invalid username or password.");
        setLoading(false);
        return;
      }

      // Update Redux state
      dispatch(setCurrentUser(user));

      // Redirect to dashboard
      router.push("/Dashboard");
    } catch (err: any) {
      console.error("Signin error:", err);
      setError("Sign in failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1 className="mb-3">Sign in</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <FormControl
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        placeholder="Username"
        id="wd-username"
        className="mb-2"
      />
      <FormControl
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="Password"
        type="password"
        id="wd-password"
        className="mb-3"
      />

      <Button
        onClick={handleSignin}
        id="wd-signin-btn"
        className="w-100 mb-2"
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      <div className="text-center">
        <Link href="/Signup" id="wd-signup-link">
           Sign up
        </Link>
      </div>
    </div>
  );
}
