import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

function CastePieChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:3002/api/getStudentData')
      .then((response) => {
        const data = response.data;

        if (!data || data.length === 0) {
          console.warn('No data available.');
          return;
        }

        // Calculate data for the pie chart
        const casteCounts = {};
        data.forEach((student) => {
          const caste = student.caste || 'Unknown';
          casteCounts[caste] = (casteCounts[caste] || 0) + 1;
        });

        const chartData = [['Caste', 'Number of Students']];
        for (const [caste, count] of Object.entries(casteCounts)) {
          chartData.push([caste, count]);
        }

        setChartData(chartData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Student Caste Breakdown</h2>
      {chartData.length > 1 ? (
        <Chart
          chartType="PieChart"
          data={chartData}
          options={{
            title: 'Student Caste Breakdown',
            is3D: true,
          }}
          width={'100%'}
          height={'400px'}
        />
      ) : (
        <p>No data available for the pie chart.</p>
      )}
    </div>
  );
}

export default CastePieChart;
