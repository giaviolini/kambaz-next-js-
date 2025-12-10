/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const HTTP_SERVER = process.env.VITE_REMOTE_SERVER;

export const joinUrl = (base: string, path: string) => {
    return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
  };

const MODULES_API = joinUrl(HTTP_SERVER!, "/api/modules");

export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data; 
};

export const updateModule = async (module: any) => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
};
  

