import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import "../SchoolForm.css";

function SchoolForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    studentName: '',
    studentClass: '',
    age: '',
    religion: '', // Religion field comes before Caste
    caste: '',
    schoolArea: '',
    schoolDistrict: '',
    gender: '',
    dropoutCategory: '',
    dropoutReason: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   

  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Check if any field is empty before submission
    const isEmptyField = Object.values(formData).some((value) => value === '');
    if (isEmptyField) {
      alert('Please fill in all the required fields.');
      return; // Prevent submission if any field is empty
    }
  

    try {
      await axios.post('http://localhost:3002/api/submitStudentData', formData);
      alert('Data submitted successfully.');
      // Clear all fields after successful submission
      setFormData({
        schoolName: '',
        studentName: '',
        studentClass: '',
        age: '',
        religion: '',
        caste: '',
        schoolArea: '',
        schoolDistrict: '',
        gender: '',
        dropoutCategory: '',
        dropoutReason: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error submitting data.');
    }
  };

  return (
    <Container maxWidth="sm" className="school-container">
      <Box mt={4} p={4} boxShadow={2} borderRadius={4} className="whitebox">
        <Typography variant="h4" align="center" gutterBottom>
          School Portal
        </Typography>
        <form onSubmit={handleSubmit} className="school-form">
          <TextField
            fullWidth
            label="School Name"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            margin="normal"
            required
          />
           <TextField
            fullWidth
            label="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Student Class"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            margin="normal"
          />
        
          <TextField
            fullWidth
            label="School Area"
            name="schoolArea"
            value={formData.schoolArea}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="School District"
            name="schoolDistrict"
            value={formData.schoolDistrict}
            onChange={handleChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal"  className="select-dropdown">
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          {/* Add other input fields for student information here */}
          <FormControl fullWidth margin="normal" className="select-dropdown">
            <InputLabel htmlFor="religion" >Religion</InputLabel>
            <Select
              label="Religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
            >
              <MenuItem value="Hinduism">Hinduism</MenuItem>
              <MenuItem value="Buddhism">Buddhism</MenuItem>
              <MenuItem value="Sikhism">Sikhism</MenuItem>
              <MenuItem value="Jainism">Jainism</MenuItem>
              <MenuItem value="Christian">Christian</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal"className="select-dropdown" >
            <InputLabel htmlFor="caste" >Caste</InputLabel>
            <Select
              label="Caste"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              required
            >
               <MenuItem value="Brahmins">Brahmins</MenuItem>
              <MenuItem value="Rajput">Rajput</MenuItem>
              <MenuItem value="Bhumihar">Bhumihar</MenuItem>
              <MenuItem value="Sikh">Sikh</MenuItem>
              <MenuItem value="Kurmi">Kurmi</MenuItem>
              <MenuItem value="Ahir">Ahir</MenuItem>
              <MenuItem value="Jat">Jat</MenuItem>
              <MenuItem value="Gujar">Gujar</MenuItem>
              <MenuItem value="Meena">Meena</MenuItem>
              <MenuItem value="Reddy">Reddy</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            
            </Select>
          </FormControl>
          {/* The rest of the form fields */}
          <FormControl fullWidth margin="normal" className="select-dropdown">
             <InputLabel htmlFor="Dropout-category">Dropout Category</InputLabel>
             <Select
              label="Dropout-category"
               name="dropoutCategory"
               value={formData.dropoutCategory}
              onChange={handleChange}
              required
             >
              <MenuItem value="Financial problems">Financial problems</MenuItem>
              <MenuItem value="Religion">Religion</MenuItem>
              <MenuItem value="Caste">Caste</MenuItem>
              <MenuItem value="Bullying and harassment">Bullying and harassment</MenuItem>
              <MenuItem value="Poor academic performance">Poor academic performance</MenuItem>
              <MenuItem value="Personal or family issues">Personal or family issues</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Dropout Reason"
            name="dropoutReason"
            value={formData.dropoutReason}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className="school-submit-button">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SchoolForm;