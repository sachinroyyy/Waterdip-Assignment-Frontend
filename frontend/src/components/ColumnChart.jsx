import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = ({ data, title }) => {
  const series = [
    {
      name: "Visitors",
      data: data.map((item) => item.visitors),
    },
  ];

  const options = {
    chart: { id: "country-column-chart", type: "bar" },
    xaxis: { categories: data.map((item) => item.country) },
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
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};

export default ColumnChart;
