/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./PeopleTable";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${HTTP_SERVER}/api/courses/${cid}/users`, {
        withCredentials: true
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching enrolled users:", error);
    }
  };

  useEffect(() => {
    if (cid) {
      fetchUsers();
    }
  }, [cid]);

  return (
    <div>
      <h3>People</h3>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}