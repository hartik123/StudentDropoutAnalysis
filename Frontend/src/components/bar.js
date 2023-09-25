import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const SchoolBarGraph = () => {
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

        // Calculate data for the bar chart
        const schoolData = data.reduce((acc, student) => {
          const schoolName = student.schoolName || "Unknown";
          acc[schoolName] = (acc[schoolName] || 0) + 1;
          return acc;
        }, {});

        // Prepare data for the chart
        const chartData = [["School Name", "Number of Students"]];
        for (const schoolName in schoolData) {
          chartData.push([schoolName, schoolData[schoolName]]);
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
    title: "Number of Students Dropped from Each School",
    chartArea: { width: "60%" },
    vAxis: {
      title: "School Name",
    },
    hAxis: {
      title: "Number of Students",
      minValue: 0,
    },
    legend: { position: "none" },
    bars: "vertical", // Make bars vertical
  };

  return (
    <div>
      <h2>Number of Students Dropped from Each School</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Chart
          chartType="BarChart"
          data={chartData}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      )}
    </div>
  );
};

export default SchoolBarGraph;
