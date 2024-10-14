import React from "react";
import ReactApexChart from "react-apexcharts";

const SparklineChart = ({ data, title }) => {
  const chartOptions = {
    chart: {
      type: "line",
      sparkline: {
        enabled: false,
      },
    },
    title: {
      text: title,
      align: "center",
      style: {
        fontSize: "16px",
      },
    },
    xaxis: {
      categories: data.map((_, index) => index + 1),
      title: {
        text: "Time",
      },
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        formatter: function (val) {
          return val;
        },
      },
      tickAmount: 10, // Set a fixed number of ticks
    },
    yaxis: {
      title: {
        text: "Number of Visitors",
      },
      labels: {
        show: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    tooltip: {
      x: {
        show: true,
      },
    },
  };

  const series = [
    {
      name: title,
      data: data.map((item) => item.value),
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default SparklineChart;
