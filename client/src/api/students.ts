import { Student } from "../utils/data";

const Base_URL = "http://localhost:3000/students";

export const fetchStudents = async () => {
  try {
    const response = await fetch(Base_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }
    return await response.json();
  } catch (err) {
    throw new Error(`${err}`);
  }
};

export const createStudent = async (data: Student) => {
  try {
    const response = await fetch(Base_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    throw new Error(`${err}`);
  }
};
