/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

/**
 * IMPORTANT:
 * We use withCredentials: true for ALL requests that need cookies
 */
export const axiosWithCredentials = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Server Base URL
 */
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

// Safety check
if (!HTTP_SERVER) {
  console.error("Missing NEXT_PUBLIC_HTTP_SERVER environment variable");
}

/**
 * Helper to combine base URL + route
 */
export const joinUrl = (base: string, path: string) =>
  base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");

/**
 * MAIN USERS API URL
 */
export const USERS_API = joinUrl(HTTP_SERVER!, "/api/users");

/* ------------------ USERS CRUD ------------------ */

export const findAllUsers = async () => {
  const { data } = await axiosWithCredentials.get(USERS_API);
  return data;
};

export const findUsersByRole = async (role: string) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}?role=${role}`);
  return data;
};

export const findUsersByPartialName = async (name: string) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}?name=${name}`);
  return data;
};

export const findUserById = async (id: string) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/${id}`);
  return data;
};

export const deleteUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
  return data;
};

export const createUser = async (user: any) => {
  const { data } = await axiosWithCredentials.post(USERS_API, user);
  return data;
};

/* ------------------ AUTH ------------------ */

export interface Credentials {
  username: string;
  password: string;
}

export const signin = async (credentials: Credentials) => {
  console.log("Sending signin:", credentials);
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  console.log("Signin response:", data);
  return data;
};

export const signup = async (user: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return data;
};

export const profile = async () => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return data;
};

export const updateUser = async (user: any) => {
  const { data } = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return data;
};

export const signout = async () => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return data;
};
