import { Student } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useMemo } from "react";

interface props {
  students: Student[];
}

export const StudentTable = ({students}: props) => {

  useEffect(() => {
    if (students.length === 5) {
      alert("You have 5 students");
    }
  }, [students]);

  const studentWithScholarship =useMemo(()=>{
    return students.map ((s)=> {
    let result = false;
    for (let i = 0; i < students.length; i++) {
      result= Math.random() > 0.5;
      }
      return {...s, eligable: result}
});
},[students]) 

  return (
    <TableContainer component={Paper} sx={{ width: 650, marginTop: 2 }}>
    <Table size="small" sx={{ border: 2 }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#7291b0" }}>
          <TableCell >Student Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>class</TableCell>
          <TableCell>Scholarship</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student, index) => {
          
          return (
            <tr key={student.id}>
              <TableCell>{student.fullName}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{studentWithScholarship[index]?.eligable ? "Yes" : "No"}</TableCell>
              
            </tr>
          );
        })}
        
      </TableBody>
    </Table>
    </TableContainer>
  );
};
