import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { data, Student } from "../utils/data";
import { Dispatch } from "react";
import { createStudent } from "../api/students";

interface props {
  students: Student[];
  setStudents: Dispatch<React.SetStateAction<Student[]>>;
}

const initialStudent = {
  id: data.length + 1,
  fullName: "",
  age: "",
  email: "",
  class: "",
  year: "",
};

export const AddStudent = ({ setStudents, students }: props) => {
  const [newStudent, setNewStudent] = useState(initialStudent);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    newStudent.fullName = e.target.value;
  };

  const handleSubmit = async () => {
    try {
      const data = await createStudent(newStudent);
      setStudents([...students, data]);
      // data.push(newStudent);
      setNewStudent(initialStudent);
    } catch (err) {
      alert(`${err}`);
    }
  };

  useEffect(() => {
    if (newStudent.fullName === "Admin") {
      alert("You are not allowed to add this name");
    }
  }, [newStudent.fullName]);

  return (
    <Paper
      sx={{
        width: 300,
        padding: 5,
        marginTop: 1,
        gap: 1.5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        onChange={handleChange}
        value={newStudent.fullName}
        id="outline-basic "
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={newStudent.age}
        id="outline-basic "
        label="Age"
        name="age"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={newStudent.email}
        id="outline-basic "
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={newStudent.class}
        id="outline-basic "
        label="Class"
        name="class"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={newStudent.year}
        id="outline-basic "
        label="Year"
        name="year"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Paper>
  );
};
