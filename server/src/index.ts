import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routers/students';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
}));

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("✅ MongoDB connected!");
}).catch(err => {
    console.error("❌ MongoDB connection error:", err);
});


app.use('/students', studentRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

