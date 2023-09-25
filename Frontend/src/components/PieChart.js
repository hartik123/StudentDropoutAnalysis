import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

function PieChart() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:3002/api/getStudentData')
      .then((response) => {
        const data = response.data;

        if (!data || data.length === 0) {
          // Handle the case where data is undefined or empty
          console.warn('No data available.');
          setIsLoading(false);
          return;
        }

        // Calculate data for the pie chart
        const categories = {};
        data.forEach((student) => {
          const category = student.dropoutCategory || 'Unknown';
          categories[category] = (categories[category] || 0) + 1;
        });

        const chartData = [['Task', 'Students']];
        Object.keys(categories).forEach((category) => {
          chartData.push([category, categories[category]]);
        });

        setChartData(chartData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Student Dropout Categories</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Chart
          chartType="PieChart"
          data={chartData}
          options={{
            title: 'Student Dropout Categories',
            pieHole: 0.4,
          }}
          width={'100%'}
          height={'400px'}
        />
      )}
    </div>
    
  );
}

export default PieChart;
