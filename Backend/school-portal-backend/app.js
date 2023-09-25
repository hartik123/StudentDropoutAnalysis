const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Connect to MongoDB (make sure MongoDB is running)
const mongoUrl = "mongodb+srv://denishsuhagiya18:Suhagiya%40321@cluster0.tvzkbyw.mongodb.net/"
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
})
  .then(() => {
    console.log("Connected to database");
  })
  .catch(e => console.log(e));

// Define MongoDB schema and model for student data
const studentSchema = new mongoose.Schema({
  schoolName: String,
  studentName: String,
  studentClass: Number,
  age: Number,
  religion: String, // Add religion field
  caste: String,
  schoolArea: String,
  schoolDistrict: String,
  gender: String, // Add gender field
  dropoutCategory: String, // Add dropout category field
  dropoutReason: String,
});

const Student = mongoose.model('Student', studentSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/api/submitStudentData', async (req, res) => {
  try {
    const {
      schoolName,
      studentName,
      studentClass,
      age,
      religion,
      caste,
      schoolArea,
      schoolDistrict,
      gender,
      dropoutCategory,
      dropoutReason,
    } = req.body;

    // Create a new Student document
    const student = new Student({
      schoolName,
      studentName,
      studentClass,
      age,
      religion,
      caste,
      schoolArea,
      schoolDistrict,
      gender,
      dropoutCategory,
      dropoutReason,
    });

    // Save the document to the MongoDB database
    await student.save();

    // Respond with a success message or the saved document
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/getStudentData', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
