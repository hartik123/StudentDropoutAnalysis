import React from 'react';
import PieChart from './PieChart';
import ReligionPieChart from './ReligionPieChart';
import CastePieChart from './CastePieChart';
import { Card, CardContent, Typography } from '@mui/material';

const ChartsCard = () => {
  return (
    <div>
      <Card sx={{ marginBottom: 2, border: '1px solid #e0e0e0', borderRadius: '8px', margin:"30px"}}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Dropout Pie Chart
          </Typography>
          <PieChart />
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 2, border: '1px solid #e0e0e0', borderRadius: '8px', margin:"30px"}}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Religion Pie Chart
          </Typography>
          <ReligionPieChart />
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 2, border: '1px solid #e0e0e0', borderRadius: '8px',margin:"30px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Caste Pie Chart
          </Typography>
          <CastePieChart />
        </CardContent>
      </Card>
    </div>
  );
}

export default ChartsCard;
