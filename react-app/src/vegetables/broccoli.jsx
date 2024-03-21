import React, { useState, useEffect } from "react";
import LineChart from "../components/chart"; // Assuming this is a custom component for rendering a line chart
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";

export default function Broccoli() {
  // State to hold broccoli data
  const [broccoliData, setBroccoliData] = useState([]);

  useEffect(() => {
    // Function to fetch broccoli data
    const fetchBroccoliData = async () => {
      try {
        // Fetch data from server
        const response = await axios.get(
          "http://localhost:4000/api/broccolidata"
        );
        // Check if request was successful
        if (response.status !== 200) {
          throw new Error("Failed to fetch broccoli data");
        }
        // Set broccoli data to state
        setBroccoliData(response.data);
      } catch (error) {
        // Log error if request fails
        console.error("Error fetching broccoli data:", error.message);
      }
    };

    // Call fetchBroccoliData function
    fetchBroccoliData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  // Render the component
  return (
  
    <div className="page-wrapper">


      <div>
        <NavigationBar/>
      </div>
      {/* Page header */}
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
      <div>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-sm shadow">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <span className="bg-yellow text-white stamp mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon ml-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="3 7 9 13 13 9 21 17"></polyline>
                      <polyline points="21 10 21 17 14 17"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="col">
                  <div className="font-weight-medium">₹52.00 Today Retail</div>
                  <div className="text-secondary">Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-sm shadow">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <span className="bg-yellow text-white stamp mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon ml-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="3 7 9 13 13 9 21 17"></polyline>
                      <polyline points="21 10 21 17 14 17"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="col">
                  <div className="font-weight-medium">
                    ₹33.80 Today Wholesale
                  </div>
                  <div className="text-secondary">Offline</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-sm shadow">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <span className="bg-green text-white stamp mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon ml-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="3 17 9 11 13 15 21 7"></polyline>
                      <polyline points="14 7 21 7 21 14"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="col">
                  <div className="font-weight-medium">
                    ₹59.00 Week Highest
                  </div>
                  <div className="text-secondary">(Wholesale)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-sm shadow">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <span className="bg-yellow text-white stamp mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon ml-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="3 7 9 13 13 9 21 17"></polyline>
                      <polyline points="21 10 21 17 14 17"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="col">
                  <div className="font-weight-medium">
                    ₹47.00 Week Lowest
                  </div>
                  <div className="text-secondary">(Wholesale)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Render the LineChart component */}
      <LineChart />

      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-12">
              <div className="card">
                <div className="card-table table-responsive">
                  {/* Render broccoli data in a table */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>RETAIL PRICE</th>
                        <th>WHOLESALE PRICE</th>
                        <th>PRICE AT FARM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Map over broccoliData and generate table rows */}
                      {broccoliData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
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

     <div>
      <Footer/>
     </div>
    </div>
    </div>
  );
}
