import express from "express";
import { studentModel } from "../models/student";

const router = express.Router();



router.get('/',async (req, res) => {
    const students = await studentModel.find();
    res.status(200).send(students);
});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) {
        res.status(404).send({ message: 'Student not found' });
    } else {
        res.status(200).send(student);
    }
});

router.post('/', async (req, res) => {
    try{

        const data = req.body;
        console.log({data});
        const newStudent = await studentModel.create(data);
        res.status(201).send(newStudent);
    }catch(err:any){
       res.status(500).send(err.message);

    }
});


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    // new:true refer data after update 
    const student = await studentModel.findByIdAndUpdate(id, data, { new: true });
    if (!student) {
         res.status(404).send({ message: 'Student not found' });
    }else{
    res.status(200).send(student);
    }
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
        res.status(404).send({ message: 'Student not found' });
    } else {
        res.status(200).send({ message: 'Student deleted successfully' });
    }
});


export default router;