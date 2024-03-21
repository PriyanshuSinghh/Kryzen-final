import React, { useState, useEffect } from 'react';
import LineChart from '../components/chart';
import axios from 'axios';

export default function Broccoli() {
    const [broccoliData, setBroccoliData] = useState([]);

    useEffect(() => {
        const fetchBroccoliData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/broccolidata");
                if (!response.ok) {
                    throw new Error('Failed to fetch broccoli data');
                }
                const data = await response.json();
                // Extract broccolidata array from combined data object
                const { broccolidata } = data;
                setBroccoliData(broccolidata);
            } catch (error) {
              console.error('Error fetching broccoli data:', error.message);
            }
        };

        fetchBroccoliData();
    }, []);

    // Ensure broccoliData is an array before mapping over it
   
    return (

      <div className="page-wrapper">
      <div className="page-header d-print-none">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-auto"></div>
            <div className="col">
              <h2 className="page-title">Broccoli</h2>
              <div className="text-secondary">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item"></li>
                  <li className="list-inline-item">Broccoli</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     <LineChart/>
      
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            

            <div className="col-12">
              <div className="card">
                <div className="card-table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>DATE </th>
                        <th>RETAIL PRICE </th>
                        <th>WHOLESALE PRICE </th>
                        <th>PRICE AT FARM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Map over broccoliData and generate table rows */}
                      {broccoliData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.data}</td>
                          <td>{item.retailprice}</td>
                          <td>{item.wholesaleprice}</td>
                          <td>{item.priceatfarm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col col-auto ml-auto">
              <div className="row align-items-center"></div>
            </div>
            <div className="col col-12 col-lg-auto mt-3 mt-lg-0 text-center">
              <div className="text-center">
                Copyright © 2024 Kryzen Biotech. All rights reserved.
                <br />
                Made in India with{" "}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  className="svg-inline--fa fa-heart fa-w-16 icon text-danger"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

      );
}
