import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ data,title }) => {
  const series = [
    {
      name: "Visitors",
      data: data.map((item) => ({
        x: new Date(item.date),
        y: item.visitors,
      })),
    },
  ];

  const options = {
    chart: {
      id: "time-series",
      type: "line",
      zoom: { enabled: true },
    },
    xaxis: { type: "datetime" },
    yaxis: { title: { text: "Number of Visitors" } },
    title: {
      text: title,
      align: "center",
      style: {
        fontSize: "16px",
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default LineChart;
