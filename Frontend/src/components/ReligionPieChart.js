import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const ReligionPieChart = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch student data from the API
    axios
      .get("http://localhost:3002/api/getStudentData")
      .then((response) => {
        const data = response.data;

        if (!data || data.length === 0) {
          console.warn("No data available.");
          setIsLoading(false);
          return;
        }

        // Calculate data for the pie chart
        const religionData = data.reduce((acc, student) => {
          const religion = student.religion || "Unknown";
          acc[religion] = (acc[religion] || 0) + 1;
          return acc;
        }, {});

        // Prepare data for the chart
        const chartData = [["Religion", "Number of Students"]];
        for (const religion in religionData) {
          chartData.push([religion, religionData[religion]]);
        }

        setChartData(chartData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const options = {
    title: "Student Religion Distribution",
    pieHole: 0.4,
    is3D: true,
  };

  return (
    <div>
      <h2>Student Religion Distribution</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      )}
    </div>
  );
};

export default ReligionPieChart;
