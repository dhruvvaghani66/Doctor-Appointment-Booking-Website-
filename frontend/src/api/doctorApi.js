// frontend/src/api/doctorApi.js
import axios from "axios";

// Make sure your Vercel env variable does NOT have a trailing slash
const API_BASE = import.meta.env.VITE_BACKEND_URL;

const doctorApi = axios.create({
  baseURL: `${API_BASE}/api/doctor`,
});

// Function to fetch doctor list
export const getDoctorList = async () => {
  try {
    const res = await doctorApi.get("/list");
    return res.data;
  } catch (err) {
    console.error("Error fetching doctors:", err);
    throw err;
  }
};
