import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/broccolidata"
        );
        const broccolidata = response.data.reverse(); 

        const retailPrices = broccolidata.map((item) =>
          parseFloat(item.retailprice.replace("₹", "").trim())
        );

        setChartData({
          labels: broccolidata.map((item) => item.date),
          datasets: [
            {
              label: "Retail Price (Per Kg)",
              data: retailPrices,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching broccoli data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData) {
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [chartData]);

  return (
    <div
      className="text-center"
      style={{
        marginTop: "25px",
        marginRight: "115px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
