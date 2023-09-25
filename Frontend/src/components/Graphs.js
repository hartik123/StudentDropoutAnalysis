import React from 'react';
import SchoolBarGraph from './bar';
import { Card, CardContent, Typography } from '@mui/material';

const Graphs = () => {
  return (
    <div>
      <Card sx={{ marginBottom: 2, border: '1px solid #e0e0e0', borderRadius: '8px', margin:"30px"}}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Schoo-wise Dropout Graph
          </Typography>
          <SchoolBarGraph />
        </CardContent>
      </Card>
  </div>
  );
}

export default Graphs;


