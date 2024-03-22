import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const LineChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Fetch broccoli data from the server
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/broccolidata");
                const broccolidata = response.data;

                // Extract retail prices from broccolidata
                const retailPrices = broccolidata.map(item => parseFloat(item.retailprice.replace('₹', '').trim()));

                // Set chart data
                setChartData({
                    labels: broccolidata.map(item => item.date),
                    datasets: [{
                        label: 'Retail Price (Per Kg)',
                        data: retailPrices
                    }]
                });
            } catch (error) {
                console.error('Error fetching broccoli data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData) {
            // Create the chart once data is available
            const myChart = new Chart(chartRef.current, {
                type: 'line',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    }
                }
            });

            // Cleanup function to destroy the chart when component unmounts
            return () => {
                myChart.destroy();
            };
        }
    }, [chartData]);

    return (
        <div className="text-center" style={{ marginTop: '25px' }}>
    <div className="card" style={{ width: '60%', margin: '0 auto' }}> 
        <div className="card-body">
            <canvas ref={chartRef}></canvas>
        </div>
    </div>
</div>

    );
};

export default LineChart;
