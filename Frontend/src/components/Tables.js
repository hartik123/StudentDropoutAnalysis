
import '../Tables.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
} from '@mui/material';

function Tables() {
  const [noDataFound, setNoDataFound] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    schoolName: '',
    age: '',
    religion: '',
    caste: '',
    schoolArea: '',
    schoolDistrict: '',
  });

  useEffect(() => {
    // Fetch all student data from the API
    axios.get('http://localhost:3002/api/getStudentData')
      .then((response) => {
        setStudentData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    // Filter student data based on applied filters
    const filtered = studentData.filter((student) => {
      return (
        (!filters.schoolName || student.schoolName?.includes(filters.schoolName)) &&
        (!filters.age || (student.age && student.age === parseInt(filters.age))) &&
        (!filters.caste || student.caste?.includes(filters.caste)) &&
        (!filters.religion || student.religion?.includes(filters.religion)) &&
        (!filters.schoolArea || student.schoolArea?.includes(filters.schoolArea)) &&
        (!filters.schoolDistrict || student.schoolDistrict?.includes(filters.schoolDistrict))
      );
    });
  
    // Update the filteredData state and set noDataFound if no data is found
    setFilteredData(filtered);
    setNoDataFound(filtered.length === 0);
  };
  

  const handleResetFilters = () => {
    // Reset filters and show all student data
    setFilters({
      schoolName: '',
      age: '',
      caste: '',
     
      schoolArea: '',
      schoolDistrict: '',
    });
    setFilteredData(studentData);
  };

  return (
    
      <div>
    <Container maxWidth="2g" className="container">
      <Typography variant="h4" align="center" gutterBottom>
        Government Dashboard
      </Typography>
      <div className="filter-container">
        <TextField
          label="Filter by School Name"
          name="schoolName"
          value={filters.schoolName}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
          label="Filter by Age"
          name="age"
          value={filters.age}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
          label="Filter by Religion"
          name="religion"
          value={filters.religion}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
          label="Filter by Caste"
          name="caste"
          value={filters.caste}
          onChange={handleFilterChange}
          margin="normal"
        />
        
        <TextField
          label="Filter by School Area"
          name="schoolArea"
          value={filters.schoolArea}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
          label="Filter by School District"
          name="schoolDistrict"
          value={filters.schoolDistrict}
          onChange={handleFilterChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginTop: '16px', marginRight: '8px' }}
        >
          Search
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleResetFilters}
          style={{ marginTop: '16px' }}
        >
          Reset Filters
        </Button>
      </div>
      <TableContainer component={Paper} style={{ marginTop: '16px' }} className="table-container">
        {noDataFound ? (
          <Typography variant="h6" align="center" style={{ margin: '20px' }}>
            No student data found.
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell>School Name</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Student Class</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Religion</TableCell>
                <TableCell>Caste</TableCell>
                <TableCell>School Area</TableCell>
                <TableCell>School District</TableCell>
                <TableCell>Dropout Reason</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((student) => (
                <TableRow key={student.id} className="table-row">
                  <TableCell>{student.schoolName}</TableCell>
                  <TableCell>{student.studentName}</TableCell>
                  <TableCell>{student.studentClass}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.religion}</TableCell> 
                  <TableCell>{student.caste}</TableCell>
                  <TableCell>{student.schoolArea}</TableCell>
                  <TableCell>{student.schoolDistrict}</TableCell>
                  <TableCell>{student.dropoutReason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
    </div>
  );
}

export default Tables;
