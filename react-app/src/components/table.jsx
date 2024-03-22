import React, { useState, useEffect } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [loadingPreviousPage, setLoadingPreviousPage] = useState(false); 

  const elementsPerPage = 8; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/data");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalPages = Math.ceil(data.length / elementsPerPage);

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = Math.min(startIndex + elementsPerPage, data.length);

  const currentElements = data.slice(startIndex, endIndex);

  const goToPreviousPage = async () => {
    setLoadingPreviousPage(true); 
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setLoadingPreviousPage(false); 
  };

  const goToNextPage = async () => {
    setLoadingNextPage(true); 
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setLoadingNextPage(false); 
  };

  return (
    <>
      <div className="page-content d-flex flex-fill max-w-full full-height">
        <div className="flex-fill px-lg-2 mw-100">
          <div className="container my-4">
            <div className="row">
              <div className="col col-12">
                <div className="card">
                  <div
                    className="card-header py-2"
                    style={{ display: "block" }}
                  >
                    <div className="float-left">
                      <h3 className="card-title">Price Watchlist: India</h3>
                      <p className="card-subtitle p-0 m-0">
                        Find price of different comodities.
                      </p>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="dimmer">
                      <div className="loader" />
                      <div className="dimmer-content">
                        <div className="table-responsive">
                          <table className="table table-vcenter">
                            <thead>
                              <tr>
                                <th>Product Name</th>
                                <th>Wholesale Price</th>
                                <th>Retail Price</th>
                                <th>Weeks High</th>
                                <th>Weeks Low</th>
                                <th>Trend</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentElements.map((item, index) => (
                                <tr key={index}>
                                  <td>
                                    <a
                                      href={`/${item.productname.toLowerCase()}`}
                                    >
                                      {item.productname}
                                    </a>
                                  </td>
                                  <td>{item.wholesaleprice}</td>
                                  <td>{item.retailprice}</td>
                                  <td>{item.weekshigh}</td>
                                  <td>{item.weekslow}</td>
                                  <td>{item.trend}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="d-flex justify-content-center my-2">
                            <button
                              className="btn btn-md btn-primary m-2"
                              disabled={currentPage === 1}
                              onClick={goToPreviousPage}
                            >
                              {loadingPreviousPage ? "Loading..." : "Previous"}
                            </button>
                            <span>
                              Page {currentPage} of {totalPages}
                            </span>
                            <button
                              className="btn btn-md btn-primary m-2"
                              disabled={currentPage === totalPages}
                              onClick={goToNextPage}
                            >
                              {loadingNextPage ? "Loading..." : "Next"}
                            </button>
                          </div>

                          <div className="my-2">
                            <h3>Disclosure:</h3>
                            <ol>
                              <li>
                                This lists are made available on as available
                                basis.
                              </li>
                              <li>
                                Do not consider this pricing as selling or
                                buying price.
                              </li>
                              <li>
                                Price watcher only helps you to understand the
                                market directions.
                              </li>
                              <li>
                                if you want to suggest any changes or want to
                                add any crop here give us call on 9870-424-425
                                or email us at contact@kryzen.com
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
