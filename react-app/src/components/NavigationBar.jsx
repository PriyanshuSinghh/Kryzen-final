import React from "react";

export default function NavigationBar() {
  return (
    <div>
      <div className="page">
        <header className="navbar navbar-expand-md d-print-none">
          <div className="container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-controls="navbar-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a href=".">
                <img
                  src="https://app.kryzen.com/packs/media/images/kryzen-logo2-3500bcbbdeb667df12ee3d574941ce09.png"
                  width="110"
                  height="32"
                  alt="Kryzen Biotech"
                  className="navbar-brand-image"
                />
              </a>
            </h1>
            <div className="navbar-nav flex-row order-md-last">
              <div className="d-none d-md-flex">
                <a
                  href="?theme=light"
                  className="nav-link px-0 hide-theme-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  aria-label="Enable light mode"
                  data-bs-original-title="Enable light mode"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                  </svg>
                </a>
                <div className="nav-item dropdown d-none d-md-flex me-3">
                  <a
                    href="/"
                    className="nav-link px-0"
                    data-bs-toggle="dropdown"
                    tabindex="-1"
                    aria-label="Show notifications"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Last updates</h3>
                      </div>
                      <div className="list-group list-group-flush list-group-hoverable">
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-red d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 1
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                Change deprecated html tags to text decoration
                                classNamees (#29604)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/" className="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 2
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                justify-content:between ?
                                justify-content:space-between (#29734)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a
                                href="/"
                                className="list-group-item-actions show"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-yellow"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 3
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                Update change-version.js (#29736)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/" className="list-group-item-actions">
                                {/*<!-- Download SVG icon from http://tabler-icons.io/i/star -->*/}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-green d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 4
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                Regenerate package-lock.json (#29730)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/" className="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link d-flex lh-1 text-reset p-0"
                  data-bs-toggle="dropdown"
                  aria-label="Open user menu"
                >
                  <span
                    className="avatar avatar-sm"
                    allign="background-image: url(./static/avatars/000m.jpg)"
                  ></span>
                  <div className="d-none d-xl-block ps-2">
                  <div>Test Account</div>
                  <div className="mt-1 small text-muted">
                    Test Account's team
                  </div>
                </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <a href="/" className="dropdown-item">
                    Status
                  </a>
                  <a href="./profile.html" className="dropdown-item">
                    Profile
                  </a>
                  <a href="/" className="dropdown-item">
                    Feedback
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="./settings.html" className="dropdown-item">
                    Settings
                  </a>
                  <a href="./sign-in.html" className="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="navbar-expand-md">
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar">
              <div className="container-xl">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/Home">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🏠 Home </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/Pricewatcher">
                      <span className="nav-link-link d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🗓️ Pricewatcher </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./form-elements.html">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🙋🏽‍♂️ Buyer Connect </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🌱 Nurseries </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🥬 Farms </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./icons.html">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🎯 Market Prices </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🧑🏽‍🌾 Workforce </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="page-wrapper">
          <div className="page-header d-print-none">
            <div className="container-xl">
              <div className="row g-2 align-items-center">
                <div className="col-auto ms-auto d-print-none">
                  <div className="btn-list">
                    <a
                      href="/"
                      className="btn btn-primary d-sm-none btn-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-report"
                      aria-label="Create new report"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
         
          </div>
          
          );
}
