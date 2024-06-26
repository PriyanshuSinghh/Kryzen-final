import React from "react";

export default function Swisschard() {
  return (
<div classNameName="page-wrapper">
<div classNameName="page">
        <header classNameName="navbar navbar-expand-md d-print-none">
          <div classNameName="container-xl">
            <button
              classNameName="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-controls="navbar-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span classNameName="navbar-toggler-icon"></span>
            </button>
            <h1 classNameName="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a href=".">
                <img
                  src="https://app.kryzen.com/packs/media/images/kryzen-logo2-3500bcbbdeb667df12ee3d574941ce09.png"
                  width="110"
                  height="32"
                  alt="Kryzen Biotech"
                  classNameName="navbar-brand-image"
                />
              </a>
            </h1>
            <div classNameName="navbar-nav flex-row order-md-last">
              <div classNameName="d-none d-md-flex">
                <a
                  href="?theme=light"
                  classNameName="nav-link px-0 hide-theme-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  aria-label="Enable light mode"
                  data-bs-original-title="Enable light mode"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    classNameName="icon"
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
                <div classNameName="nav-item dropdown d-none d-md-flex me-3">
                  <a
                    href="/"
                    classNameName="nav-link px-0"
                    data-bs-toggle="dropdown"
                    tabindex="-1"
                    aria-label="Show notifications"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      classNameName="icon"
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
                    <span classNameName="badge bg-red"></span>
                  </a>
                  <div classNameName="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                    <div classNameName="card">
                      <div classNameName="card-header">
                        <h3 classNameName="card-title">Last updates</h3>
                      </div>
                      <div classNameName="list-group list-group-flush list-group-hoverable">
                        <div classNameName="list-group-item">
                          <div classNameName="row align-items-center">
                            <div classNameName="col-auto">
                              <span classNameName="status-dot status-dot-animated bg-red d-block"></span>
                            </div>
                            <div classNameName="col text-truncate">
                              <a href="/" classNameName="text-body d-block">
                                Example 1
                              </a>
                              <div classNameName="d-block text-muted text-truncate mt-n1">
                                Change deprecated html tags to text decoration
                                classNameNamees (#29604)
                              </div>
                            </div>
                            <div classNameName="col-auto">
                              <a href="/" classNameName="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  classNameName="icon text-muted"
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
                        <div classNameName="list-group-item">
                          <div classNameName="row align-items-center">
                            <div classNameName="col-auto">
                              <span classNameName="status-dot d-block"></span>
                            </div>
                            <div classNameName="col text-truncate">
                              <a href="/" classNameName="text-body d-block">
                                Example 2
                              </a>
                              <div classNameName="d-block text-muted text-truncate mt-n1">
                                justify-content:between ?
                                justify-content:space-between (#29734)
                              </div>
                            </div>
                            <div classNameName="col-auto">
                              <a
                                href="/"
                                classNameName="list-group-item-actions show"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  classNameName="icon text-yellow"
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
                        <div classNameName="list-group-item">
                          <div classNameName="row align-items-center">
                            <div classNameName="col-auto">
                              <span classNameName="status-dot d-block"></span>
                            </div>
                            <div classNameName="col text-truncate">
                              <a href="/" classNameName="text-body d-block">
                                Example 3
                              </a>
                              <div classNameName="d-block text-muted text-truncate mt-n1">
                                Update change-version.js (#29736)
                              </div>
                            </div>
                            <div classNameName="col-auto">
                              <a href="/" classNameName="list-group-item-actions">
                                {/*<!-- Download SVG icon from http://tabler-icons.io/i/star -->*/}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  classNameName="icon text-muted"
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
                        <div classNameName="list-group-item">
                          <div classNameName="row align-items-center">
                            <div classNameName="col-auto">
                              <span classNameName="status-dot status-dot-animated bg-green d-block"></span>
                            </div>
                            <div classNameName="col text-truncate">
                              <a href="/" classNameName="text-body d-block">
                                Example 4
                              </a>
                              <div classNameName="d-block text-muted text-truncate mt-n1">
                                Regenerate package-lock.json (#29730)
                              </div>
                            </div>
                            <div classNameName="col-auto">
                              <a href="/" classNameName="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  classNameName="icon text-muted"
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
              <div classNameName="nav-item dropdown">
                <a
                  href="/"
                  classNameName="nav-link d-flex lh-1 text-reset p-0"
                  data-bs-toggle="dropdown"
                  aria-label="Open user menu"
                >
                  <span
                    classNameName="avatar avatar-sm"
                    allign="background-image: url(./static/avatars/000m.jpg)"
                  ></span>
                  <div classNameName="d-none d-xl-block ps-2">
                  <div>Test Account</div>
                  <div classNameName="mt-1 small text-muted">
                    Test Account's team
                  </div>
                </div>
                </a>
                <div classNameName="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <a href="/" classNameName="dropdown-item">
                    Status
                  </a>
                  <a href="./profile.html" classNameName="dropdown-item">
                    Profile
                  </a>
                  <a href="/" classNameName="dropdown-item">
                    Feedback
                  </a>
                  <div classNameName="dropdown-divider"></div>
                  <a href="./settings.html" classNameName="dropdown-item">
                    Settings
                  </a>
                  <a href="./sign-in.html" classNameName="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header classNameName="navbar-expand-md">
          <div classNameName="collapse navbar-collapse" id="navbar-menu">
            <div classNameName="navbar">
              <div classNameName="container-xl">
                <ul classNameName="navbar-nav">
                  <li classNameName="nav-item active">
                    <a classNameName="nav-link" href="/Home">
                      <span classNameName="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🏠 Home </span>
                    </a>
                  </li>
                  <li classNameName="nav-item dropdown">
                    <a classNameName="nav-link" href="/Pricewatcher">
                      <span classNameName="nav-link-link d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🗓️ Pricewatcher </span>
                    </a>
                  </li>
                  <li classNameName="nav-item">
                    <a classNameName="nav-link" href="./form-elements.html">
                      <span classNameName="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🙋🏽‍♂️ Buyer Connect </span>
                    </a>
                  </li>
                  <li classNameName="nav-item dropdown">
                    <a classNameName="nav-link" href="./">
                      <span classNameName="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🌱 Nurseries </span>
                    </a>
                  </li>
                  <li classNameName="nav-item dropdown">
                    <a classNameName="nav-link" href="./">
                      <span classNameName="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🥬 Farms </span>
                    </a>
                  </li>
                  <li classNameName="nav-item">
                    <a classNameName="nav-link" href="./icons.html">
                      <span classNameName="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🎯 Market Prices </span>
                    </a>
                  </li>
                  <li classNameName="nav-item dropdown">
                    <a classNameName="nav-link" href="./">
                      <span classNameName="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span classNameName="nav-link-title"> 🧑🏽‍🌾 Workforce </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div classNameName="page-wrapper">
          <div classNameName="page-header d-print-none">
            <div classNameName="container-xl">
              <div classNameName="row g-2 align-items-center">
                <div classNameName="col-auto ms-auto d-print-none">
                  <div classNameName="btn-list">
                    <a
                      href="/"
                      classNameName="btn btn-primary d-sm-none btn-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-report"
                      aria-label="Create new report"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        classNameName="icon"
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
  <div classNameName="page-header d-print-none">
    <div classNameName="container">
      <div classNameName="row g-3 align-items-center">
        <div classNameName="col-auto">
         
        </div>
        <div classNameName="col">
          <h2 classNameName="page-title">Swisschard
</h2>
          <div classNameName="text-secondary">
            <ul classNameName="list-inline list-inline-dots mb-0">
              <li classNameName="list-inline-item">
              </li>
              <li classNameName="list-inline-item">Swisschard
</li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  {/* Page body */}
  <div classNameName="page-body">
    <div classNameName="container-xl">
      <div classNameName="row row-cards">
      <div classNameName="page-body">
        <div classNameName="container-xl">
          <div classNameName="row row-deck row-cards">
            <div classNameName="col-12">
              <div classNameName="row row-cards">
                <div classNameName="col-sm-6 col-lg-3">
                  <div classNameName="card card-sm">
                    <div classNameName="card-body">
                      <div classNameName="row align-items-center">
                        <div classNameName="col">
                          <span classNameName="bg-yellow text-white stamp mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              classNameName="icon ml-1"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M0 0h24v24H0z" />
                              <polyline points="3 7 9 13 13 9 21 17" />
                              <polyline points="21 10 21 17 14 17" />
                            </svg>
                          </span>
                          <div classNameName="font-weight-medium">
                            ₹52.00 Today Retail
                          </div>
                          <div classNameName="text-secondary">Online</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNameName="col-sm-6 col-lg-3">
                  <div classNameName="card card-sm">
                    <div classNameName="card-body">
                      <div classNameName="row align-items-center">
                        <div classNameName="col">
                          <span classNameName="bg-yellow text-white stamp mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              classNameName="icon ml-1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="3 7 9 13 13 9 21 17" />
                              <polyline points="21 10 21 17 14 17" />
                            </svg>
                          </span>

                          <div classNameName="font-weight-medium">
                            ₹33.80 Today Wholesale
                          </div>
                          <div classNameName="text-secondary">Offline</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNameName="col-sm-6 col-lg-3">
                  <div classNameName="card card-sm">
                    <div classNameName="card-body">
                      <div classNameName="row align-items-center">
                        <div classNameName="col">
                          <span classNameName="bg-green text-white stamp mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              classNameName="icon ml-1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M0 0h24v24H0z" stroke="none" />
                              <polyline points="3 17 9 11 13 15 21 7" />
                              <polyline points="14 7 21 7 21 14" />
                            </svg>
                          </span>
                          <div classNameName="font-weight-medium">
                            ₹59.00 Week Highest
                          </div>
                          <div classNameName="text-secondary">(Wholesale)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNameName="col-sm-6 col-lg-3">
                  <div classNameName="card card-sm">
                    <div classNameName="card-body">
                      <div classNameName="row align-items-center">
                        <div classNameName="col">
                          <span classNameName="bg-yellow text-white stamp mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              classNameName="icon ml-1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M0 0h24v24H0z" stroke="none" />
                              <polyline points="3 7 9 13 13 9 21 17" />
                              <polyline points="21 10 21 17 14 17" />
                            </svg>
                          </span>
                          <div classNameName="font-weight-medium">
                            ₹47.00 Week Lowest
                          </div>
                          <div classNameName="text-secondary">(Wholesale)</div>
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
        <div classNameName="col-md-8">
          <div classNameName="card">
            <div classNameName="card-body">
              <h3 classNameName="card-title">
                Response times across regions in the last day
              </h3>
              <div id="chart-uptime" style={{ minHeight: 240 }}>
                <div
                  id="apexchartsbzz0m4fi"
                  classNameName="apexcharts-canvas apexchartsbzz0m4fi apexcharts-theme-light"
                  style={{ width: 529, height: 240 }}
                >
                  <svg
                    id="SvgjsSvg1287"
                    width={529}
                    height={240}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.dev"
                    classNameName="apexcharts-svg apexcharts-zoomable"
                    xmlnsData="ApexChartsNS"
                    transform="translate(0, 0)"
                    style={{ background: "transparent" }}
                  >
                    <foreignObject x={0} y={0} width={529} height={240}>
                      <div
                        classNameName="apexcharts-legend"
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{ maxHeight: 120 }}
                      />
                    </foreignObject>
                    <rect
                      id="SvgjsRect1293"
                      width={0}
                      height={0}
                      x={0}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fefefe"
                    />
                    <g
                      id="SvgjsG1359"
                      classNameName="apexcharts-yaxis"
                      rel={0}
                      transform="translate(17.842578887939453, 0)"
                    >
                      <g id="SvgjsG1360" classNameName="apexcharts-yaxis-texts-g">
                        <text
                          id="SvgjsText1362"
                          fontFamily="inherit"
                          x={4}
                          y="11.5"
                          textAnchor="end"
                          dominantBaseline="auto"
                          fontSize="11px"
                          fontWeight={400}
                          fill="#373d3f"
                          classNameName="apexcharts-text apexcharts-yaxis-label "
                          style={{ fontFamily: "inherit" }}
                        >
                          <tspan id="SvgjsTspan1363">240</tspan>
                          <title>240</title>
                        </text>
                        <text
                          id="SvgjsText1365"
                          fontFamily="inherit"
                          x={4}
                          y="51.65200004577637"
                          textAnchor="end"
                          dominantBaseline="auto"
                          fontSize="11px"
                          fontWeight={400}
                          fill="#373d3f"
                          classNameName="apexcharts-text apexcharts-yaxis-label "
                          style={{ fontFamily: "inherit" }}
                        >
                          <tspan id="SvgjsTspan1366">200</tspan>
                          <title>200</title>
                        </text>
                        <text
                          id="SvgjsText1368"
                          fontFamily="inherit"
                          x={4}
                          y="91.80400009155274"
                          textAnchor="end"
                          dominantBaseline="auto"
                          fontSize="11px"
                          fontWeight={400}
                          fill="#373d3f"
                          classNameName="apexcharts-text apexcharts-yaxis-label "
                          style={{ fontFamily: "inherit" }}
                        >
                          <tspan id="SvgjsTspan1369">160</tspan>
                          <title>160</title>
                        </text>
                        <text
                          id="SvgjsText1371"
                          fontFamily="inherit"
                          x={4}
                          y="131.9560001373291"
                          textAnchor="end"
                          dominantBaseline="auto"
                          fontSize="11px"
                          fontWeight={400}
                          fill="#373d3f"
                          classNameName="apexcharts-text apexcharts-yaxis-label "
                          style={{ fontFamily: "inherit" }}
                        >
                          <tspan id="SvgjsTspan1372">120</tspan>
                          <title>120</title>
                        </text>
                        <text
                          id="SvgjsText1374"
                          fontFamily="inherit"
                          x={4}
                          y="172.10800018310547"
                          textAnchor="end"
                          dominantBaseline="auto"
                          fontSize="11px"
                          fontWeight={400}
                          fill="#373d3f"
                          classNameName="apexcharts-text apexcharts-yaxis-label "
                          style={{ fontFamily: "inherit" }}
                        >
                          <tspan id="SvgjsTspan1375">80</tspan>
                          <title>80</title>
                        </text>
                        <text
                          id="SvgjsText1377"
                          fontFamily="inherit"
                          x={4}
                          y="212.26000022888184"
                          textAnchor="end"
                          dominantBaseline="auto"
                          fontSize="11px"
                          fontWeight={400}
                          fill="#373d3f"
                          classNameName="apexcharts-text apexcharts-yaxis-label "
                          style={{ fontFamily: "inherit" }}
                        >
                          <tspan id="SvgjsTspan1378">40</tspan>
                          <title>40</title>
                        </text>
                      </g>
                    </g>
                    <g
                      id="SvgjsG1289"
                      classNameName="apexcharts-inner apexcharts-graphical"
                      transform="translate(31.842578887939453, 10)"
                    >
                      <defs id="SvgjsDefs1288">
                        <clipPath id="gridRectMaskbzz0m4fi">
                          <rect
                            id="SvgjsRect1304"
                            width="503.15742111206055"
                            height="202.76000022888184"
                            x={-3}
                            y={-1}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <clipPath id="forecastMaskbzz0m4fi" />
                        <clipPath id="nonForecastMaskbzz0m4fi" />
                        <clipPath id="gridRectMarkerMaskbzz0m4fi">
                          <rect
                            id="SvgjsRect1305"
                            width="501.15742111206055"
                            height="204.76000022888184"
                            x={-2}
                            y={-2}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                      </defs>
                      <line
                        id="SvgjsLine1294"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2="200.76000022888184"
                        stroke="#b6b6b6"
                        strokeDasharray={3}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xcrosshairs"
                        x={0}
                        y={0}
                        width={1}
                        height="200.76000022888184"
                        fill="#b1b9c4"
                        filter="none"
                        fillOpacity="0.9"
                        strokeWidth={1}
                      />
                      <line
                        id="SvgjsLine1316"
                        x1="41.777934547231986"
                        y1="201.76000022888184"
                        x2="41.777934547231986"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <line
                        id="SvgjsLine1317"
                        x1="100.26704291335679"
                        y1="201.76000022888184"
                        x2="100.26704291335679"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <line
                        id="SvgjsLine1318"
                        x1="171.2895316436512"
                        y1="201.76000022888184"
                        x2="171.2895316436512"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <line
                        id="SvgjsLine1319"
                        x1="229.778640009776"
                        y1="201.76000022888184"
                        x2="229.778640009776"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <line
                        id="SvgjsLine1320"
                        x1="300.8011287400704"
                        y1="201.76000022888184"
                        x2="300.8011287400704"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <line
                        id="SvgjsLine1321"
                        x1="359.2902371061952"
                        y1="201.76000022888184"
                        x2="359.2902371061952"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <line
                        id="SvgjsLine1322"
                        x1="426.1349323817664"
                        y1="201.76000022888184"
                        x2="426.1349323817664"
                        y2="207.76000022888184"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-xaxis-tick"
                      />
                      <g id="SvgjsG1312" classNameName="apexcharts-grid">
                        <g
                          id="SvgjsG1313"
                          classNameName="apexcharts-gridlines-horizontal"
                        >
                          <line
                            id="SvgjsLine1324"
                            x1={0}
                            y1="40.15200004577637"
                            x2="497.15742111206055"
                            y2="40.15200004577637"
                            stroke="#e0e0e0"
                            strokeDasharray={4}
                            strokeLinecap="butt"
                            classNameName="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1325"
                            x1={0}
                            y1="80.30400009155274"
                            x2="497.15742111206055"
                            y2="80.30400009155274"
                            stroke="#e0e0e0"
                            strokeDasharray={4}
                            strokeLinecap="butt"
                            classNameName="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1326"
                            x1={0}
                            y1="120.45600013732911"
                            x2="497.15742111206055"
                            y2="120.45600013732911"
                            stroke="#e0e0e0"
                            strokeDasharray={4}
                            strokeLinecap="butt"
                            classNameName="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1327"
                            x1={0}
                            y1="160.60800018310547"
                            x2="497.15742111206055"
                            y2="160.60800018310547"
                            stroke="#e0e0e0"
                            strokeDasharray={4}
                            strokeLinecap="butt"
                            classNameName="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1314"
                          classNameName="apexcharts-gridlines-vertical"
                        />
                        <line
                          id="SvgjsLine1330"
                          x1={0}
                          y1="200.76000022888184"
                          x2="497.15742111206055"
                          y2="200.76000022888184"
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                        <line
                          id="SvgjsLine1329"
                          x1={0}
                          y1={1}
                          x2={0}
                          y2="200.76000022888184"
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                      </g>
                      <g
                        id="SvgjsG1306"
                        classNameName="apexcharts-area-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG1307"
                          classNameName="apexcharts-series"
                          seriesname="Uptime"
                          dataLongestseries="true"
                          rel={1}
                          dataRealindex={0}
                        >
                          <path
                            id="SvgjsPath1310"
                            d="M 0 200.76000022888184 L 0 90.34200010299682C 1.4622277091531193 90.34200010299682 2.715565745570079 80.30400009155272 4.177793454723198 80.30400009155272C 5.640021163876318 80.30400009155272 6.893359200293277 70.26600008010863 8.355586909446396 70.26600008010863C 9.817814618599515 70.26600008010863 11.071152655016474 79.30020009040831 12.533380364169593 79.30020009040831C 13.995608073322712 79.30020009040831 15.248946109739673 73.27740008354186 16.711173818892792 73.27740008354186C 18.17340152804591 73.27740008354186 19.42673956446287 78.2964000892639 20.88896727361599 78.2964000892639C 22.35119498276911 78.2964000892639 23.604533019186068 79.30020009040831 25.066760728339187 79.30020009040831C 26.528988437492306 79.30020009040831 27.782326473909265 88.334400100708 29.244554183062384 88.334400100708C 30.706781892215503 88.334400100708 31.960119928632466 99.3762001132965 33.422347637785585 99.3762001132965C 34.8845753469387 99.3762001132965 36.13791338335566 96.36480010986327 37.60014109250878 96.36480010986327C 39.0623688016619 96.36480010986327 40.31570683807886 86.32680009841917 41.77793454723198 86.32680009841917C 43.2401622563851 86.32680009841917 44.493500292802054 74.28120008468628 45.95572800195517 74.28120008468628C 47.41795571110829 74.28120008468628 48.671293747525255 64.24320007324218 50.13352145667837 64.24320007324218C 51.59574916583149 64.24320007324218 52.849087202248455 53.20140006065367 54.311314911401574 53.20140006065367C 55.77354262055469 53.20140006065367 57.02688065697165 42.15960004806519 58.48910836612477 42.15960004806519C 59.95133607527789 42.15960004806519 61.20467411169485 30.114000034332264 62.66690182084797 30.114000034332264C 64.1291295300011 30.114000034332264 65.38246756641804 44.16720005035398 66.84469527557117 44.16720005035398C 68.30692298472428 44.16720005035398 69.56026102114124 33.1254000377655 71.02248873029436 33.1254000377655C 72.48471643944748 33.1254000377655 73.73805447586443 40.15200004577636 75.20028218501756 40.15200004577636C 76.66250989417068 40.15200004577636 77.91584793058763 53.20140006065367 79.37807563974076 53.20140006065367C 80.84030334889388 53.20140006065367 82.09364138531083 48.182400054931634 83.55586909446396 48.182400054931634C 85.01809680361708 48.182400054931634 86.27143484003403 36.13680004119871 87.73366254918716 36.13680004119871C 89.19589025834027 36.13680004119871 90.44922829475723 47.17860005378722 91.91145600391035 47.17860005378722C 93.37368371306347 47.17860005378722 94.62702174948042 36.13680004119871 96.08924945863355 36.13680004119871C 97.55147716778667 36.13680004119871 98.80481520420362 32.12160003662109 100.26704291335675 32.12160003662109C 101.72927062250987 32.12160003662109 102.98260865892682 44.16720005035398 104.44483636807995 44.16720005035398C 105.90706407723307 44.16720005035398 107.16040211365002 47.17860005378722 108.62262982280315 47.17860005378722C 110.08485753195626 47.17860005378722 111.33819556837322 62.23560007095335 112.80042327752633 62.23560007095335C 114.26265098667946 62.23560007095335 115.51598902309641 49.186200056076046 116.97821673224954 49.186200056076046C 118.44044444140266 49.186200056076046 119.69378247781961 36.13680004119871 121.15601018697274 36.13680004119871C 122.61823789612586 36.13680004119871 123.87157593254281 22.08360002517699 125.33380364169594 22.08360002517699C 126.79603135084906 22.08360002517699 128.049369387266 29.11020003318785 129.51159709641914 29.11020003318785C 130.97382480557226 29.11020003318785 132.2271628419892 22.08360002517699 133.68939055114234 22.08360002517699C 135.15161826029546 22.08360002517699 136.4049562967124 24.091200027465817 137.86718400586554 24.091200027465817C 139.32941171501864 24.091200027465817 140.5827497514356 39.14820004463195 142.0449774605887 39.14820004463195C 143.50720516974184 39.14820004463195 144.7605432061588 43.16340004920957 146.2227709153119 43.16340004920957C 147.68499862446504 43.16340004920957 148.938336660882 50.19000005722046 150.4005643700351 50.19000005722046C 151.86279207918824 50.19000005722046 153.1161301156052 61.23180006980894 154.5783578247583 61.23180006980894C 156.04058553391144 61.23180006980894 157.2939235703284 68.2584000778198 158.75615127948151 68.2584000778198C 160.21837898863464 68.2584000778198 161.4717170250516 82.31160009384155 162.93394473420472 82.31160009384155C 164.39617244335784 82.31160009384155 165.6495104797748 81.30780009269714 167.11173818892792 81.30780009269714C 168.57396589808104 81.30780009269714 169.827303934498 93.35340010643003 171.28953164365112 93.35340010643003C 172.75175935280424 93.35340010643003 174.0050973892212 88.334400100708 175.46732509837432 88.334400100708C 176.92955280752741 88.334400100708 178.1828908439444 88.334400100708 179.6451185530975 88.334400100708C 181.10734626225062 88.334400100708 182.36068429866756 96.36480010986327 183.8229120078207 96.36480010986327C 185.28513971697382 96.36480010986327 186.53847775339077 103.39140011787413 188.0007054625439 103.39140011787413C 189.46293317169702 103.39140011787413 190.71627120811397 104.39520011901854 192.1784989172671 104.39520011901854C 193.64072662642022 104.39520011901854 194.89406466283717 117.44460013389586 196.3562923719903 117.44460013389586C 197.81852008114342 117.44460013389586 199.07185811756037 128.48640014648436 200.5340858267135 128.48640014648436C 201.99631353586662 128.48640014648436 203.24965157228357 141.5358001613617 204.7118792814367 141.5358001613617C 206.17410699058982 141.5358001613617 207.42744502700677 140.53200016021728 208.8896727361599 140.53200016021728C 210.35190044531302 140.53200016021728 211.60523848172997 145.55100016593934 213.0674661908831 145.55100016593934C 214.52969390003622 145.55100016593934 215.78303193645317 135.51300015449522 217.2452596456063 135.51300015449522C 218.7074873547594 135.51300015449522 219.96082539117637 124.47120014190673 221.42305310032947 124.47120014190673C 222.8852808094826 124.47120014190673 224.13861884589954 115.43700013160705 225.60084655505267 115.43700013160705C 227.0630742642058 115.43700013160705 228.31641230062274 116.44080013275145 229.77864000977587 116.44080013275145C 231.240867718929 116.44080013275145 232.49420575534594 107.40660012245178 233.95643346449907 107.40660012245178C 235.4186611736522 107.40660012245178 236.67199921006915 111.4218001270294 238.13422691922227 111.4218001270294C 239.5964546283754 111.4218001270294 240.84979266479235 124.47120014190673 242.31202037394547 124.47120014190673C 243.7742480830986 124.47120014190673 245.02758611951555 121.4598001384735 246.48981382866867 121.4598001384735C 247.9520415378218 121.4598001384735 249.20537957423875 131.4978001499176 250.66760728339187 131.4978001499176C 252.129834992545 131.4978001499176 253.38317302896195 126.47880014419555 254.84540073811507 126.47880014419555C 256.3076284472682 126.47880014419555 257.56096648368515 125.47500014305113 259.0231941928383 125.47500014305113C 260.4854219019914 125.47500014305113 261.73875993840835 129.49020014762877 263.2009876475615 129.49020014762877C 264.6632153567146 129.49020014762877 265.91655339313155 144.5472001647949 267.3787811022847 144.5472001647949C 268.8410088114378 144.5472001647949 270.09434684785475 136.51680015563966 271.5565745570079 136.51680015563966C 273.018802266161 136.51680015563966 274.27214030257795 136.51680015563966 275.7343680117311 136.51680015563966C 277.1965957208842 136.51680015563966 278.4499337573011 138.52440015792845 279.9121614664542 138.52440015792845C 281.37438917560735 138.52440015792845 282.6277272120243 124.47120014190673 284.0899549211774 124.47120014190673C 285.55218263033055 124.47120014190673 286.8055206667475 114.43320013046264 288.2677483759006 114.43320013046264C 289.72997608505375 114.43320013046264 290.9833141214707 123.46740014076232 292.4455418306238 123.46740014076232C 293.90776953977695 123.46740014076232 295.1611075761939 110.41800012588499 296.623335285347 110.41800012588499C 298.08556299450015 110.41800012588499 299.3389010309171 116.44080013275145 300.8011287400702 116.44080013275145C 302.26335644922335 116.44080013275145 303.5166944856403 114.43320013046264 304.9789221947934 114.43320013046264C 306.44114990394655 114.43320013046264 307.6944879403635 109.4142001247406 309.1567156495166 109.4142001247406C 310.61894335866975 109.4142001247406 311.8722813950867 97.36860011100768 313.3345091042398 97.36860011100768C 314.79673681339295 97.36860011100768 316.0500748498099 110.41800012588499 317.51230255896303 110.41800012588499C 318.97453026811615 110.41800012588499 320.2278683045331 124.47120014190673 321.69009601368623 124.47120014190673C 323.15232372283936 124.47120014190673 324.4056617592563 122.46360013961791 325.86788946840943 122.46360013961791C 327.33011717756256 122.46360013961791 328.5834552139795 118.44840013504027 330.04568292313263 118.44840013504027C 331.50791063228576 118.44840013504027 332.7612486687027 108.41040012359619 334.22347637785583 108.41040012359619C 335.68570408700896 108.41040012359619 336.9390421234259 114.43320013046264 338.40126983257903 114.43320013046264C 339.86349754173216 114.43320013046264 341.1168355781491 104.39520011901854 342.57906328730223 104.39520011901854C 344.04129099645536 104.39520011901854 345.2946290328723 117.44460013389586 346.75685674202543 117.44460013389586C 348.21908445117856 117.44460013389586 349.4724224875955 128.48640014648436 350.93465019674863 128.48640014648436C 352.39687790590176 128.48640014648436 353.6502159423187 124.47120014190673 355.11244365147184 124.47120014190673C 356.57467136062496 124.47120014190673 357.82800939704185 127.48260014533996 359.290237106195 127.48260014533996C 360.7524648153481 127.48260014533996 362.00580285176505 127.48260014533996 363.4680305609182 127.48260014533996C 364.9302582700713 127.48260014533996 366.18359630648825 131.4978001499176 367.6458240156414 131.4978001499176C 369.1080517247945 131.4978001499176 370.36138976121146 141.5358001613617 371.8236174703646 141.5358001613617C 373.2858451795177 141.5358001613617 374.53918321593466 140.53200016021728 376.0014109250878 140.53200016021728C 377.4636386342409 140.53200016021728 378.71697667065786 145.55100016593934 380.179204379811 145.55100016593934C 381.6414320889641 145.55100016593934 382.89477012538106 157.59660017967224 384.3569978345342 157.59660017967224C 385.8192255436873 157.59660017967224 387.07256358010426 161.6118001842499 388.5347912892574 161.6118001842499C 389.9970189984105 161.6118001842499 391.25035703482746 176.668800201416 392.7125847439806 176.668800201416C 394.1748124531337 176.668800201416 395.42815048955066 161.6118001842499 396.8903781987038 161.6118001842499C 398.3526059078569 161.6118001842499 399.60594394427386 159.60420018196106 401.068171653427 159.60420018196106C 402.5303993625801 159.60420018196106 403.78373739899706 146.55480016708373 405.2459651081502 146.55480016708373C 406.7081928173033 146.55480016708373 407.96153085372026 141.5358001613617 409.4237585628734 141.5358001613617C 410.8859862720265 141.5358001613617 412.13932430844346 143.54340016365052 413.6015520175966 143.54340016365052C 415.0637797267497 143.54340016365052 416.31711776316666 157.59660017967224 417.7793454723198 157.59660017967224C 419.2415731814729 157.59660017967224 420.49491121788986 169.64220019340513 421.957138927043 169.64220019340513C 423.4193666361961 169.64220019340513 424.67270467261307 165.6270001888275 426.1349323817662 165.6270001888275C 427.5971600909193 165.6270001888275 428.85049812733627 171.64980019569396 430.3127258364894 171.64980019569396C 431.7749535456425 171.64980019569396 433.02829158205947 169.64220019340513 434.4905192912126 169.64220019340513C 435.9527470003657 169.64220019340513 437.2060850367826 165.6270001888275 438.66831274593574 165.6270001888275C 440.13054045508886 165.6270001888275 441.3838784915058 156.59280017852782 442.84610620065894 156.59280017852782C 444.30833390981206 156.59280017852782 445.561671946229 150.57000017166138 447.02389965538214 150.57000017166138C 448.48612736453526 150.57000017166138 449.7394654009522 140.53200016021728 451.20169311010534 140.53200016021728C 452.66392081925846 140.53200016021728 453.9172588556754 144.5472001647949 455.37948656482854 144.5472001647949C 456.84171427398167 144.5472001647949 458.0950523103986 132.501600151062 459.55728001955174 132.501600151062C 461.01950772870487 132.501600151062 462.2728457651218 138.52440015792845 463.73507347427494 138.52440015792845C 465.19730118342807 138.52440015792845 466.450639219845 124.47120014190673 467.91286692899814 124.47120014190673C 469.37509463815127 124.47120014190673 470.6284326745682 128.48640014648436 472.09066038372134 128.48640014648436C 473.55288809287447 128.48640014648436 474.8062261292914 128.48640014648436 476.26845383844454 128.48640014648436C 477.73068154759767 128.48640014648436 478.9840195840146 138.52440015792845 480.44624729316774 138.52440015792845C 481.90847500232087 138.52440015792845 483.1618130387378 125.47500014305113 484.62404074789094 125.47500014305113C 486.08626845704407 125.47500014305113 487.339606493461 120.4560001373291 488.80183420261415 120.4560001373291C 490.26406191176727 120.4560001373291 491.5173999481842 122.46360013961791 492.97962765733735 122.46360013961791C 494.4418553664905 122.46360013961791 495.6951934029074 122.46360013961791 497.15742111206055 122.46360013961791C 497.15742111206055 122.46360013961791 497.15742111206055 122.46360013961791 497.15742111206055 200.76000022888184M 497.15742111206055 122.46360013961791z"
                            fill="rgba(32,107,196,0.16)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            classNameName="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMaskbzz0m4fi)"
                            pathto="M 0 200.76000022888184 L 0 90.34200010299682C 1.4622277091531193 90.34200010299682 2.715565745570079 80.30400009155272 4.177793454723198 80.30400009155272C 5.640021163876318 80.30400009155272 6.893359200293277 70.26600008010863 8.355586909446396 70.26600008010863C 9.817814618599515 70.26600008010863 11.071152655016474 79.30020009040831 12.533380364169593 79.30020009040831C 13.995608073322712 79.30020009040831 15.248946109739673 73.27740008354186 16.711173818892792 73.27740008354186C 18.17340152804591 73.27740008354186 19.42673956446287 78.2964000892639 20.88896727361599 78.2964000892639C 22.35119498276911 78.2964000892639 23.604533019186068 79.30020009040831 25.066760728339187 79.30020009040831C 26.528988437492306 79.30020009040831 27.782326473909265 88.334400100708 29.244554183062384 88.334400100708C 30.706781892215503 88.334400100708 31.960119928632466 99.3762001132965 33.422347637785585 99.3762001132965C 34.8845753469387 99.3762001132965 36.13791338335566 96.36480010986327 37.60014109250878 96.36480010986327C 39.0623688016619 96.36480010986327 40.31570683807886 86.32680009841917 41.77793454723198 86.32680009841917C 43.2401622563851 86.32680009841917 44.493500292802054 74.28120008468628 45.95572800195517 74.28120008468628C 47.41795571110829 74.28120008468628 48.671293747525255 64.24320007324218 50.13352145667837 64.24320007324218C 51.59574916583149 64.24320007324218 52.849087202248455 53.20140006065367 54.311314911401574 53.20140006065367C 55.77354262055469 53.20140006065367 57.02688065697165 42.15960004806519 58.48910836612477 42.15960004806519C 59.95133607527789 42.15960004806519 61.20467411169485 30.114000034332264 62.66690182084797 30.114000034332264C 64.1291295300011 30.114000034332264 65.38246756641804 44.16720005035398 66.84469527557117 44.16720005035398C 68.30692298472428 44.16720005035398 69.56026102114124 33.1254000377655 71.02248873029436 33.1254000377655C 72.48471643944748 33.1254000377655 73.73805447586443 40.15200004577636 75.20028218501756 40.15200004577636C 76.66250989417068 40.15200004577636 77.91584793058763 53.20140006065367 79.37807563974076 53.20140006065367C 80.84030334889388 53.20140006065367 82.09364138531083 48.182400054931634 83.55586909446396 48.182400054931634C 85.01809680361708 48.182400054931634 86.27143484003403 36.13680004119871 87.73366254918716 36.13680004119871C 89.19589025834027 36.13680004119871 90.44922829475723 47.17860005378722 91.91145600391035 47.17860005378722C 93.37368371306347 47.17860005378722 94.62702174948042 36.13680004119871 96.08924945863355 36.13680004119871C 97.55147716778667 36.13680004119871 98.80481520420362 32.12160003662109 100.26704291335675 32.12160003662109C 101.72927062250987 32.12160003662109 102.98260865892682 44.16720005035398 104.44483636807995 44.16720005035398C 105.90706407723307 44.16720005035398 107.16040211365002 47.17860005378722 108.62262982280315 47.17860005378722C 110.08485753195626 47.17860005378722 111.33819556837322 62.23560007095335 112.80042327752633 62.23560007095335C 114.26265098667946 62.23560007095335 115.51598902309641 49.186200056076046 116.97821673224954 49.186200056076046C 118.44044444140266 49.186200056076046 119.69378247781961 36.13680004119871 121.15601018697274 36.13680004119871C 122.61823789612586 36.13680004119871 123.87157593254281 22.08360002517699 125.33380364169594 22.08360002517699C 126.79603135084906 22.08360002517699 128.049369387266 29.11020003318785 129.51159709641914 29.11020003318785C 130.97382480557226 29.11020003318785 132.2271628419892 22.08360002517699 133.68939055114234 22.08360002517699C 135.15161826029546 22.08360002517699 136.4049562967124 24.091200027465817 137.86718400586554 24.091200027465817C 139.32941171501864 24.091200027465817 140.5827497514356 39.14820004463195 142.0449774605887 39.14820004463195C 143.50720516974184 39.14820004463195 144.7605432061588 43.16340004920957 146.2227709153119 43.16340004920957C 147.68499862446504 43.16340004920957 148.938336660882 50.19000005722046 150.4005643700351 50.19000005722046C 151.86279207918824 50.19000005722046 153.1161301156052 61.23180006980894 154.5783578247583 61.23180006980894C 156.04058553391144 61.23180006980894 157.2939235703284 68.2584000778198 158.75615127948151 68.2584000778198C 160.21837898863464 68.2584000778198 161.4717170250516 82.31160009384155 162.93394473420472 82.31160009384155C 164.39617244335784 82.31160009384155 165.6495104797748 81.30780009269714 167.11173818892792 81.30780009269714C 168.57396589808104 81.30780009269714 169.827303934498 93.35340010643003 171.28953164365112 93.35340010643003C 172.75175935280424 93.35340010643003 174.0050973892212 88.334400100708 175.46732509837432 88.334400100708C 176.92955280752741 88.334400100708 178.1828908439444 88.334400100708 179.6451185530975 88.334400100708C 181.10734626225062 88.334400100708 182.36068429866756 96.36480010986327 183.8229120078207 96.36480010986327C 185.28513971697382 96.36480010986327 186.53847775339077 103.39140011787413 188.0007054625439 103.39140011787413C 189.46293317169702 103.39140011787413 190.71627120811397 104.39520011901854 192.1784989172671 104.39520011901854C 193.64072662642022 104.39520011901854 194.89406466283717 117.44460013389586 196.3562923719903 117.44460013389586C 197.81852008114342 117.44460013389586 199.07185811756037 128.48640014648436 200.5340858267135 128.48640014648436C 201.99631353586662 128.48640014648436 203.24965157228357 141.5358001613617 204.7118792814367 141.5358001613617C 206.17410699058982 141.5358001613617 207.42744502700677 140.53200016021728 208.8896727361599 140.53200016021728C 210.35190044531302 140.53200016021728 211.60523848172997 145.55100016593934 213.0674661908831 145.55100016593934C 214.52969390003622 145.55100016593934 215.78303193645317 135.51300015449522 217.2452596456063 135.51300015449522C 218.7074873547594 135.51300015449522 219.96082539117637 124.47120014190673 221.42305310032947 124.47120014190673C 222.8852808094826 124.47120014190673 224.13861884589954 115.43700013160705 225.60084655505267 115.43700013160705C 227.0630742642058 115.43700013160705 228.31641230062274 116.44080013275145 229.77864000977587 116.44080013275145C 231.240867718929 116.44080013275145 232.49420575534594 107.40660012245178 233.95643346449907 107.40660012245178C 235.4186611736522 107.40660012245178 236.67199921006915 111.4218001270294 238.13422691922227 111.4218001270294C 239.5964546283754 111.4218001270294 240.84979266479235 124.47120014190673 242.31202037394547 124.47120014190673C 243.7742480830986 124.47120014190673 245.02758611951555 121.4598001384735 246.48981382866867 121.4598001384735C 247.9520415378218 121.4598001384735 249.20537957423875 131.4978001499176 250.66760728339187 131.4978001499176C 252.129834992545 131.4978001499176 253.38317302896195 126.47880014419555 254.84540073811507 126.47880014419555C 256.3076284472682 126.47880014419555 257.56096648368515 125.47500014305113 259.0231941928383 125.47500014305113C 260.4854219019914 125.47500014305113 261.73875993840835 129.49020014762877 263.2009876475615 129.49020014762877C 264.6632153567146 129.49020014762877 265.91655339313155 144.5472001647949 267.3787811022847 144.5472001647949C 268.8410088114378 144.5472001647949 270.09434684785475 136.51680015563966 271.5565745570079 136.51680015563966C 273.018802266161 136.51680015563966 274.27214030257795 136.51680015563966 275.7343680117311 136.51680015563966C 277.1965957208842 136.51680015563966 278.4499337573011 138.52440015792845 279.9121614664542 138.52440015792845C 281.37438917560735 138.52440015792845 282.6277272120243 124.47120014190673 284.0899549211774 124.47120014190673C 285.55218263033055 124.47120014190673 286.8055206667475 114.43320013046264 288.2677483759006 114.43320013046264C 289.72997608505375 114.43320013046264 290.9833141214707 123.46740014076232 292.4455418306238 123.46740014076232C 293.90776953977695 123.46740014076232 295.1611075761939 110.41800012588499 296.623335285347 110.41800012588499C 298.08556299450015 110.41800012588499 299.3389010309171 116.44080013275145 300.8011287400702 116.44080013275145C 302.26335644922335 116.44080013275145 303.5166944856403 114.43320013046264 304.9789221947934 114.43320013046264C 306.44114990394655 114.43320013046264 307.6944879403635 109.4142001247406 309.1567156495166 109.4142001247406C 310.61894335866975 109.4142001247406 311.8722813950867 97.36860011100768 313.3345091042398 97.36860011100768C 314.79673681339295 97.36860011100768 316.0500748498099 110.41800012588499 317.51230255896303 110.41800012588499C 318.97453026811615 110.41800012588499 320.2278683045331 124.47120014190673 321.69009601368623 124.47120014190673C 323.15232372283936 124.47120014190673 324.4056617592563 122.46360013961791 325.86788946840943 122.46360013961791C 327.33011717756256 122.46360013961791 328.5834552139795 118.44840013504027 330.04568292313263 118.44840013504027C 331.50791063228576 118.44840013504027 332.7612486687027 108.41040012359619 334.22347637785583 108.41040012359619C 335.68570408700896 108.41040012359619 336.9390421234259 114.43320013046264 338.40126983257903 114.43320013046264C 339.86349754173216 114.43320013046264 341.1168355781491 104.39520011901854 342.57906328730223 104.39520011901854C 344.04129099645536 104.39520011901854 345.2946290328723 117.44460013389586 346.75685674202543 117.44460013389586C 348.21908445117856 117.44460013389586 349.4724224875955 128.48640014648436 350.93465019674863 128.48640014648436C 352.39687790590176 128.48640014648436 353.6502159423187 124.47120014190673 355.11244365147184 124.47120014190673C 356.57467136062496 124.47120014190673 357.82800939704185 127.48260014533996 359.290237106195 127.48260014533996C 360.7524648153481 127.48260014533996 362.00580285176505 127.48260014533996 363.4680305609182 127.48260014533996C 364.9302582700713 127.48260014533996 366.18359630648825 131.4978001499176 367.6458240156414 131.4978001499176C 369.1080517247945 131.4978001499176 370.36138976121146 141.5358001613617 371.8236174703646 141.5358001613617C 373.2858451795177 141.5358001613617 374.53918321593466 140.53200016021728 376.0014109250878 140.53200016021728C 377.4636386342409 140.53200016021728 378.71697667065786 145.55100016593934 380.179204379811 145.55100016593934C 381.6414320889641 145.55100016593934 382.89477012538106 157.59660017967224 384.3569978345342 157.59660017967224C 385.8192255436873 157.59660017967224 387.07256358010426 161.6118001842499 388.5347912892574 161.6118001842499C 389.9970189984105 161.6118001842499 391.25035703482746 176.668800201416 392.7125847439806 176.668800201416C 394.1748124531337 176.668800201416 395.42815048955066 161.6118001842499 396.8903781987038 161.6118001842499C 398.3526059078569 161.6118001842499 399.60594394427386 159.60420018196106 401.068171653427 159.60420018196106C 402.5303993625801 159.60420018196106 403.78373739899706 146.55480016708373 405.2459651081502 146.55480016708373C 406.7081928173033 146.55480016708373 407.96153085372026 141.5358001613617 409.4237585628734 141.5358001613617C 410.8859862720265 141.5358001613617 412.13932430844346 143.54340016365052 413.6015520175966 143.54340016365052C 415.0637797267497 143.54340016365052 416.31711776316666 157.59660017967224 417.7793454723198 157.59660017967224C 419.2415731814729 157.59660017967224 420.49491121788986 169.64220019340513 421.957138927043 169.64220019340513C 423.4193666361961 169.64220019340513 424.67270467261307 165.6270001888275 426.1349323817662 165.6270001888275C 427.5971600909193 165.6270001888275 428.85049812733627 171.64980019569396 430.3127258364894 171.64980019569396C 431.7749535456425 171.64980019569396 433.02829158205947 169.64220019340513 434.4905192912126 169.64220019340513C 435.9527470003657 169.64220019340513 437.2060850367826 165.6270001888275 438.66831274593574 165.6270001888275C 440.13054045508886 165.6270001888275 441.3838784915058 156.59280017852782 442.84610620065894 156.59280017852782C 444.30833390981206 156.59280017852782 445.561671946229 150.57000017166138 447.02389965538214 150.57000017166138C 448.48612736453526 150.57000017166138 449.7394654009522 140.53200016021728 451.20169311010534 140.53200016021728C 452.66392081925846 140.53200016021728 453.9172588556754 144.5472001647949 455.37948656482854 144.5472001647949C 456.84171427398167 144.5472001647949 458.0950523103986 132.501600151062 459.55728001955174 132.501600151062C 461.01950772870487 132.501600151062 462.2728457651218 138.52440015792845 463.73507347427494 138.52440015792845C 465.19730118342807 138.52440015792845 466.450639219845 124.47120014190673 467.91286692899814 124.47120014190673C 469.37509463815127 124.47120014190673 470.6284326745682 128.48640014648436 472.09066038372134 128.48640014648436C 473.55288809287447 128.48640014648436 474.8062261292914 128.48640014648436 476.26845383844454 128.48640014648436C 477.73068154759767 128.48640014648436 478.9840195840146 138.52440015792845 480.44624729316774 138.52440015792845C 481.90847500232087 138.52440015792845 483.1618130387378 125.47500014305113 484.62404074789094 125.47500014305113C 486.08626845704407 125.47500014305113 487.339606493461 120.4560001373291 488.80183420261415 120.4560001373291C 490.26406191176727 120.4560001373291 491.5173999481842 122.46360013961791 492.97962765733735 122.46360013961791C 494.4418553664905 122.46360013961791 495.6951934029074 122.46360013961791 497.15742111206055 122.46360013961791C 497.15742111206055 122.46360013961791 497.15742111206055 122.46360013961791 497.15742111206055 200.76000022888184M 497.15742111206055 122.46360013961791z"
                            pathfrom="M -1 240.9120002746582 L -1 240.9120002746582 L 4.177793454723198 240.9120002746582 L 8.355586909446396 240.9120002746582 L 12.533380364169593 240.9120002746582 L 16.711173818892792 240.9120002746582 L 20.88896727361599 240.9120002746582 L 25.066760728339187 240.9120002746582 L 29.244554183062384 240.9120002746582 L 33.422347637785585 240.9120002746582 L 37.60014109250878 240.9120002746582 L 41.77793454723198 240.9120002746582 L 45.95572800195517 240.9120002746582 L 50.13352145667837 240.9120002746582 L 54.311314911401574 240.9120002746582 L 58.48910836612477 240.9120002746582 L 62.66690182084797 240.9120002746582 L 66.84469527557117 240.9120002746582 L 71.02248873029436 240.9120002746582 L 75.20028218501756 240.9120002746582 L 79.37807563974076 240.9120002746582 L 83.55586909446396 240.9120002746582 L 87.73366254918716 240.9120002746582 L 91.91145600391035 240.9120002746582 L 96.08924945863355 240.9120002746582 L 100.26704291335675 240.9120002746582 L 104.44483636807995 240.9120002746582 L 108.62262982280315 240.9120002746582 L 112.80042327752633 240.9120002746582 L 116.97821673224954 240.9120002746582 L 121.15601018697274 240.9120002746582 L 125.33380364169594 240.9120002746582 L 129.51159709641914 240.9120002746582 L 133.68939055114234 240.9120002746582 L 137.86718400586554 240.9120002746582 L 142.0449774605887 240.9120002746582 L 146.2227709153119 240.9120002746582 L 150.4005643700351 240.9120002746582 L 154.5783578247583 240.9120002746582 L 158.75615127948151 240.9120002746582 L 162.93394473420472 240.9120002746582 L 167.11173818892792 240.9120002746582 L 171.28953164365112 240.9120002746582 L 175.46732509837432 240.9120002746582 L 179.6451185530975 240.9120002746582 L 183.8229120078207 240.9120002746582 L 188.0007054625439 240.9120002746582 L 192.1784989172671 240.9120002746582 L 196.3562923719903 240.9120002746582 L 200.5340858267135 240.9120002746582 L 204.7118792814367 240.9120002746582 L 208.8896727361599 240.9120002746582 L 213.0674661908831 240.9120002746582 L 217.2452596456063 240.9120002746582 L 221.42305310032947 240.9120002746582 L 225.60084655505267 240.9120002746582 L 229.77864000977587 240.9120002746582 L 233.95643346449907 240.9120002746582 L 238.13422691922227 240.9120002746582 L 242.31202037394547 240.9120002746582 L 246.48981382866867 240.9120002746582 L 250.66760728339187 240.9120002746582 L 254.84540073811507 240.9120002746582 L 259.0231941928383 240.9120002746582 L 263.2009876475615 240.9120002746582 L 267.3787811022847 240.9120002746582 L 271.5565745570079 240.9120002746582 L 275.7343680117311 240.9120002746582 L 279.9121614664542 240.9120002746582 L 284.0899549211774 240.9120002746582 L 288.2677483759006 240.9120002746582 L 292.4455418306238 240.9120002746582 L 296.623335285347 240.9120002746582 L 300.8011287400702 240.9120002746582 L 304.9789221947934 240.9120002746582 L 309.1567156495166 240.9120002746582 L 313.3345091042398 240.9120002746582 L 317.51230255896303 240.9120002746582 L 321.69009601368623 240.9120002746582 L 325.86788946840943 240.9120002746582 L 330.04568292313263 240.9120002746582 L 334.22347637785583 240.9120002746582 L 338.40126983257903 240.9120002746582 L 342.57906328730223 240.9120002746582 L 346.75685674202543 240.9120002746582 L 350.93465019674863 240.9120002746582 L 355.11244365147184 240.9120002746582 L 359.290237106195 240.9120002746582 L 363.4680305609182 240.9120002746582 L 367.6458240156414 240.9120002746582 L 371.8236174703646 240.9120002746582 L 376.0014109250878 240.9120002746582 L 380.179204379811 240.9120002746582 L 384.3569978345342 240.9120002746582 L 388.5347912892574 240.9120002746582 L 392.7125847439806 240.9120002746582 L 396.8903781987038 240.9120002746582 L 401.068171653427 240.9120002746582 L 405.2459651081502 240.9120002746582 L 409.4237585628734 240.9120002746582 L 413.6015520175966 240.9120002746582 L 417.7793454723198 240.9120002746582 L 421.957138927043 240.9120002746582 L 426.1349323817662 240.9120002746582 L 430.3127258364894 240.9120002746582 L 434.4905192912126 240.9120002746582 L 438.66831274593574 240.9120002746582 L 442.84610620065894 240.9120002746582 L 447.02389965538214 240.9120002746582 L 451.20169311010534 240.9120002746582 L 455.37948656482854 240.9120002746582 L 459.55728001955174 240.9120002746582 L 463.73507347427494 240.9120002746582 L 467.91286692899814 240.9120002746582 L 472.09066038372134 240.9120002746582 L 476.26845383844454 240.9120002746582 L 480.44624729316774 240.9120002746582 L 484.62404074789094 240.9120002746582 L 488.80183420261415 240.9120002746582 L 492.97962765733735 240.9120002746582 L 497.15742111206055 240.9120002746582"
                          />
                          <path
                            id="SvgjsPath1311"
                            d="M 0 90.34200010299682C 1.4622277091531193 90.34200010299682 2.715565745570079 80.30400009155272 4.177793454723198 80.30400009155272C 5.640021163876318 80.30400009155272 6.893359200293277 70.26600008010863 8.355586909446396 70.26600008010863C 9.817814618599515 70.26600008010863 11.071152655016474 79.30020009040831 12.533380364169593 79.30020009040831C 13.995608073322712 79.30020009040831 15.248946109739673 73.27740008354186 16.711173818892792 73.27740008354186C 18.17340152804591 73.27740008354186 19.42673956446287 78.2964000892639 20.88896727361599 78.2964000892639C 22.35119498276911 78.2964000892639 23.604533019186068 79.30020009040831 25.066760728339187 79.30020009040831C 26.528988437492306 79.30020009040831 27.782326473909265 88.334400100708 29.244554183062384 88.334400100708C 30.706781892215503 88.334400100708 31.960119928632466 99.3762001132965 33.422347637785585 99.3762001132965C 34.8845753469387 99.3762001132965 36.13791338335566 96.36480010986327 37.60014109250878 96.36480010986327C 39.0623688016619 96.36480010986327 40.31570683807886 86.32680009841917 41.77793454723198 86.32680009841917C 43.2401622563851 86.32680009841917 44.493500292802054 74.28120008468628 45.95572800195517 74.28120008468628C 47.41795571110829 74.28120008468628 48.671293747525255 64.24320007324218 50.13352145667837 64.24320007324218C 51.59574916583149 64.24320007324218 52.849087202248455 53.20140006065367 54.311314911401574 53.20140006065367C 55.77354262055469 53.20140006065367 57.02688065697165 42.15960004806519 58.48910836612477 42.15960004806519C 59.95133607527789 42.15960004806519 61.20467411169485 30.114000034332264 62.66690182084797 30.114000034332264C 64.1291295300011 30.114000034332264 65.38246756641804 44.16720005035398 66.84469527557117 44.16720005035398C 68.30692298472428 44.16720005035398 69.56026102114124 33.1254000377655 71.02248873029436 33.1254000377655C 72.48471643944748 33.1254000377655 73.73805447586443 40.15200004577636 75.20028218501756 40.15200004577636C 76.66250989417068 40.15200004577636 77.91584793058763 53.20140006065367 79.37807563974076 53.20140006065367C 80.84030334889388 53.20140006065367 82.09364138531083 48.182400054931634 83.55586909446396 48.182400054931634C 85.01809680361708 48.182400054931634 86.27143484003403 36.13680004119871 87.73366254918716 36.13680004119871C 89.19589025834027 36.13680004119871 90.44922829475723 47.17860005378722 91.91145600391035 47.17860005378722C 93.37368371306347 47.17860005378722 94.62702174948042 36.13680004119871 96.08924945863355 36.13680004119871C 97.55147716778667 36.13680004119871 98.80481520420362 32.12160003662109 100.26704291335675 32.12160003662109C 101.72927062250987 32.12160003662109 102.98260865892682 44.16720005035398 104.44483636807995 44.16720005035398C 105.90706407723307 44.16720005035398 107.16040211365002 47.17860005378722 108.62262982280315 47.17860005378722C 110.08485753195626 47.17860005378722 111.33819556837322 62.23560007095335 112.80042327752633 62.23560007095335C 114.26265098667946 62.23560007095335 115.51598902309641 49.186200056076046 116.97821673224954 49.186200056076046C 118.44044444140266 49.186200056076046 119.69378247781961 36.13680004119871 121.15601018697274 36.13680004119871C 122.61823789612586 36.13680004119871 123.87157593254281 22.08360002517699 125.33380364169594 22.08360002517699C 126.79603135084906 22.08360002517699 128.049369387266 29.11020003318785 129.51159709641914 29.11020003318785C 130.97382480557226 29.11020003318785 132.2271628419892 22.08360002517699 133.68939055114234 22.08360002517699C 135.15161826029546 22.08360002517699 136.4049562967124 24.091200027465817 137.86718400586554 24.091200027465817C 139.32941171501864 24.091200027465817 140.5827497514356 39.14820004463195 142.0449774605887 39.14820004463195C 143.50720516974184 39.14820004463195 144.7605432061588 43.16340004920957 146.2227709153119 43.16340004920957C 147.68499862446504 43.16340004920957 148.938336660882 50.19000005722046 150.4005643700351 50.19000005722046C 151.86279207918824 50.19000005722046 153.1161301156052 61.23180006980894 154.5783578247583 61.23180006980894C 156.04058553391144 61.23180006980894 157.2939235703284 68.2584000778198 158.75615127948151 68.2584000778198C 160.21837898863464 68.2584000778198 161.4717170250516 82.31160009384155 162.93394473420472 82.31160009384155C 164.39617244335784 82.31160009384155 165.6495104797748 81.30780009269714 167.11173818892792 81.30780009269714C 168.57396589808104 81.30780009269714 169.827303934498 93.35340010643003 171.28953164365112 93.35340010643003C 172.75175935280424 93.35340010643003 174.0050973892212 88.334400100708 175.46732509837432 88.334400100708C 176.92955280752741 88.334400100708 178.1828908439444 88.334400100708 179.6451185530975 88.334400100708C 181.10734626225062 88.334400100708 182.36068429866756 96.36480010986327 183.8229120078207 96.36480010986327C 185.28513971697382 96.36480010986327 186.53847775339077 103.39140011787413 188.0007054625439 103.39140011787413C 189.46293317169702 103.39140011787413 190.71627120811397 104.39520011901854 192.1784989172671 104.39520011901854C 193.64072662642022 104.39520011901854 194.89406466283717 117.44460013389586 196.3562923719903 117.44460013389586C 197.81852008114342 117.44460013389586 199.07185811756037 128.48640014648436 200.5340858267135 128.48640014648436C 201.99631353586662 128.48640014648436 203.24965157228357 141.5358001613617 204.7118792814367 141.5358001613617C 206.17410699058982 141.5358001613617 207.42744502700677 140.53200016021728 208.8896727361599 140.53200016021728C 210.35190044531302 140.53200016021728 211.60523848172997 145.55100016593934 213.0674661908831 145.55100016593934C 214.52969390003622 145.55100016593934 215.78303193645317 135.51300015449522 217.2452596456063 135.51300015449522C 218.7074873547594 135.51300015449522 219.96082539117637 124.47120014190673 221.42305310032947 124.47120014190673C 222.8852808094826 124.47120014190673 224.13861884589954 115.43700013160705 225.60084655505267 115.43700013160705C 227.0630742642058 115.43700013160705 228.31641230062274 116.44080013275145 229.77864000977587 116.44080013275145C 231.240867718929 116.44080013275145 232.49420575534594 107.40660012245178 233.95643346449907 107.40660012245178C 235.4186611736522 107.40660012245178 236.67199921006915 111.4218001270294 238.13422691922227 111.4218001270294C 239.5964546283754 111.4218001270294 240.84979266479235 124.47120014190673 242.31202037394547 124.47120014190673C 243.7742480830986 124.47120014190673 245.02758611951555 121.4598001384735 246.48981382866867 121.4598001384735C 247.9520415378218 121.4598001384735 249.20537957423875 131.4978001499176 250.66760728339187 131.4978001499176C 252.129834992545 131.4978001499176 253.38317302896195 126.47880014419555 254.84540073811507 126.47880014419555C 256.3076284472682 126.47880014419555 257.56096648368515 125.47500014305113 259.0231941928383 125.47500014305113C 260.4854219019914 125.47500014305113 261.73875993840835 129.49020014762877 263.2009876475615 129.49020014762877C 264.6632153567146 129.49020014762877 265.91655339313155 144.5472001647949 267.3787811022847 144.5472001647949C 268.8410088114378 144.5472001647949 270.09434684785475 136.51680015563966 271.5565745570079 136.51680015563966C 273.018802266161 136.51680015563966 274.27214030257795 136.51680015563966 275.7343680117311 136.51680015563966C 277.1965957208842 136.51680015563966 278.4499337573011 138.52440015792845 279.9121614664542 138.52440015792845C 281.37438917560735 138.52440015792845 282.6277272120243 124.47120014190673 284.0899549211774 124.47120014190673C 285.55218263033055 124.47120014190673 286.8055206667475 114.43320013046264 288.2677483759006 114.43320013046264C 289.72997608505375 114.43320013046264 290.9833141214707 123.46740014076232 292.4455418306238 123.46740014076232C 293.90776953977695 123.46740014076232 295.1611075761939 110.41800012588499 296.623335285347 110.41800012588499C 298.08556299450015 110.41800012588499 299.3389010309171 116.44080013275145 300.8011287400702 116.44080013275145C 302.26335644922335 116.44080013275145 303.5166944856403 114.43320013046264 304.9789221947934 114.43320013046264C 306.44114990394655 114.43320013046264 307.6944879403635 109.4142001247406 309.1567156495166 109.4142001247406C 310.61894335866975 109.4142001247406 311.8722813950867 97.36860011100768 313.3345091042398 97.36860011100768C 314.79673681339295 97.36860011100768 316.0500748498099 110.41800012588499 317.51230255896303 110.41800012588499C 318.97453026811615 110.41800012588499 320.2278683045331 124.47120014190673 321.69009601368623 124.47120014190673C 323.15232372283936 124.47120014190673 324.4056617592563 122.46360013961791 325.86788946840943 122.46360013961791C 327.33011717756256 122.46360013961791 328.5834552139795 118.44840013504027 330.04568292313263 118.44840013504027C 331.50791063228576 118.44840013504027 332.7612486687027 108.41040012359619 334.22347637785583 108.41040012359619C 335.68570408700896 108.41040012359619 336.9390421234259 114.43320013046264 338.40126983257903 114.43320013046264C 339.86349754173216 114.43320013046264 341.1168355781491 104.39520011901854 342.57906328730223 104.39520011901854C 344.04129099645536 104.39520011901854 345.2946290328723 117.44460013389586 346.75685674202543 117.44460013389586C 348.21908445117856 117.44460013389586 349.4724224875955 128.48640014648436 350.93465019674863 128.48640014648436C 352.39687790590176 128.48640014648436 353.6502159423187 124.47120014190673 355.11244365147184 124.47120014190673C 356.57467136062496 124.47120014190673 357.82800939704185 127.48260014533996 359.290237106195 127.48260014533996C 360.7524648153481 127.48260014533996 362.00580285176505 127.48260014533996 363.4680305609182 127.48260014533996C 364.9302582700713 127.48260014533996 366.18359630648825 131.4978001499176 367.6458240156414 131.4978001499176C 369.1080517247945 131.4978001499176 370.36138976121146 141.5358001613617 371.8236174703646 141.5358001613617C 373.2858451795177 141.5358001613617 374.53918321593466 140.53200016021728 376.0014109250878 140.53200016021728C 377.4636386342409 140.53200016021728 378.71697667065786 145.55100016593934 380.179204379811 145.55100016593934C 381.6414320889641 145.55100016593934 382.89477012538106 157.59660017967224 384.3569978345342 157.59660017967224C 385.8192255436873 157.59660017967224 387.07256358010426 161.6118001842499 388.5347912892574 161.6118001842499C 389.9970189984105 161.6118001842499 391.25035703482746 176.668800201416 392.7125847439806 176.668800201416C 394.1748124531337 176.668800201416 395.42815048955066 161.6118001842499 396.8903781987038 161.6118001842499C 398.3526059078569 161.6118001842499 399.60594394427386 159.60420018196106 401.068171653427 159.60420018196106C 402.5303993625801 159.60420018196106 403.78373739899706 146.55480016708373 405.2459651081502 146.55480016708373C 406.7081928173033 146.55480016708373 407.96153085372026 141.5358001613617 409.4237585628734 141.5358001613617C 410.8859862720265 141.5358001613617 412.13932430844346 143.54340016365052 413.6015520175966 143.54340016365052C 415.0637797267497 143.54340016365052 416.31711776316666 157.59660017967224 417.7793454723198 157.59660017967224C 419.2415731814729 157.59660017967224 420.49491121788986 169.64220019340513 421.957138927043 169.64220019340513C 423.4193666361961 169.64220019340513 424.67270467261307 165.6270001888275 426.1349323817662 165.6270001888275C 427.5971600909193 165.6270001888275 428.85049812733627 171.64980019569396 430.3127258364894 171.64980019569396C 431.7749535456425 171.64980019569396 433.02829158205947 169.64220019340513 434.4905192912126 169.64220019340513C 435.9527470003657 169.64220019340513 437.2060850367826 165.6270001888275 438.66831274593574 165.6270001888275C 440.13054045508886 165.6270001888275 441.3838784915058 156.59280017852782 442.84610620065894 156.59280017852782C 444.30833390981206 156.59280017852782 445.561671946229 150.57000017166138 447.02389965538214 150.57000017166138C 448.48612736453526 150.57000017166138 449.7394654009522 140.53200016021728 451.20169311010534 140.53200016021728C 452.66392081925846 140.53200016021728 453.9172588556754 144.5472001647949 455.37948656482854 144.5472001647949C 456.84171427398167 144.5472001647949 458.0950523103986 132.501600151062 459.55728001955174 132.501600151062C 461.01950772870487 132.501600151062 462.2728457651218 138.52440015792845 463.73507347427494 138.52440015792845C 465.19730118342807 138.52440015792845 466.450639219845 124.47120014190673 467.91286692899814 124.47120014190673C 469.37509463815127 124.47120014190673 470.6284326745682 128.48640014648436 472.09066038372134 128.48640014648436C 473.55288809287447 128.48640014648436 474.8062261292914 128.48640014648436 476.26845383844454 128.48640014648436C 477.73068154759767 128.48640014648436 478.9840195840146 138.52440015792845 480.44624729316774 138.52440015792845C 481.90847500232087 138.52440015792845 483.1618130387378 125.47500014305113 484.62404074789094 125.47500014305113C 486.08626845704407 125.47500014305113 487.339606493461 120.4560001373291 488.80183420261415 120.4560001373291C 490.26406191176727 120.4560001373291 491.5173999481842 122.46360013961791 492.97962765733735 122.46360013961791C 494.4418553664905 122.46360013961791 495.6951934029074 122.46360013961791 497.15742111206055 122.46360013961791"
                            fill="none"
                            fillOpacity={1}
                            stroke="#206bc4"
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={2}
                            strokeDasharray={0}
                            classNameName="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMaskbzz0m4fi)"
                            pathto="M 0 90.34200010299682C 1.4622277091531193 90.34200010299682 2.715565745570079 80.30400009155272 4.177793454723198 80.30400009155272C 5.640021163876318 80.30400009155272 6.893359200293277 70.26600008010863 8.355586909446396 70.26600008010863C 9.817814618599515 70.26600008010863 11.071152655016474 79.30020009040831 12.533380364169593 79.30020009040831C 13.995608073322712 79.30020009040831 15.248946109739673 73.27740008354186 16.711173818892792 73.27740008354186C 18.17340152804591 73.27740008354186 19.42673956446287 78.2964000892639 20.88896727361599 78.2964000892639C 22.35119498276911 78.2964000892639 23.604533019186068 79.30020009040831 25.066760728339187 79.30020009040831C 26.528988437492306 79.30020009040831 27.782326473909265 88.334400100708 29.244554183062384 88.334400100708C 30.706781892215503 88.334400100708 31.960119928632466 99.3762001132965 33.422347637785585 99.3762001132965C 34.8845753469387 99.3762001132965 36.13791338335566 96.36480010986327 37.60014109250878 96.36480010986327C 39.0623688016619 96.36480010986327 40.31570683807886 86.32680009841917 41.77793454723198 86.32680009841917C 43.2401622563851 86.32680009841917 44.493500292802054 74.28120008468628 45.95572800195517 74.28120008468628C 47.41795571110829 74.28120008468628 48.671293747525255 64.24320007324218 50.13352145667837 64.24320007324218C 51.59574916583149 64.24320007324218 52.849087202248455 53.20140006065367 54.311314911401574 53.20140006065367C 55.77354262055469 53.20140006065367 57.02688065697165 42.15960004806519 58.48910836612477 42.15960004806519C 59.95133607527789 42.15960004806519 61.20467411169485 30.114000034332264 62.66690182084797 30.114000034332264C 64.1291295300011 30.114000034332264 65.38246756641804 44.16720005035398 66.84469527557117 44.16720005035398C 68.30692298472428 44.16720005035398 69.56026102114124 33.1254000377655 71.02248873029436 33.1254000377655C 72.48471643944748 33.1254000377655 73.73805447586443 40.15200004577636 75.20028218501756 40.15200004577636C 76.66250989417068 40.15200004577636 77.91584793058763 53.20140006065367 79.37807563974076 53.20140006065367C 80.84030334889388 53.20140006065367 82.09364138531083 48.182400054931634 83.55586909446396 48.182400054931634C 85.01809680361708 48.182400054931634 86.27143484003403 36.13680004119871 87.73366254918716 36.13680004119871C 89.19589025834027 36.13680004119871 90.44922829475723 47.17860005378722 91.91145600391035 47.17860005378722C 93.37368371306347 47.17860005378722 94.62702174948042 36.13680004119871 96.08924945863355 36.13680004119871C 97.55147716778667 36.13680004119871 98.80481520420362 32.12160003662109 100.26704291335675 32.12160003662109C 101.72927062250987 32.12160003662109 102.98260865892682 44.16720005035398 104.44483636807995 44.16720005035398C 105.90706407723307 44.16720005035398 107.16040211365002 47.17860005378722 108.62262982280315 47.17860005378722C 110.08485753195626 47.17860005378722 111.33819556837322 62.23560007095335 112.80042327752633 62.23560007095335C 114.26265098667946 62.23560007095335 115.51598902309641 49.186200056076046 116.97821673224954 49.186200056076046C 118.44044444140266 49.186200056076046 119.69378247781961 36.13680004119871 121.15601018697274 36.13680004119871C 122.61823789612586 36.13680004119871 123.87157593254281 22.08360002517699 125.33380364169594 22.08360002517699C 126.79603135084906 22.08360002517699 128.049369387266 29.11020003318785 129.51159709641914 29.11020003318785C 130.97382480557226 29.11020003318785 132.2271628419892 22.08360002517699 133.68939055114234 22.08360002517699C 135.15161826029546 22.08360002517699 136.4049562967124 24.091200027465817 137.86718400586554 24.091200027465817C 139.32941171501864 24.091200027465817 140.5827497514356 39.14820004463195 142.0449774605887 39.14820004463195C 143.50720516974184 39.14820004463195 144.7605432061588 43.16340004920957 146.2227709153119 43.16340004920957C 147.68499862446504 43.16340004920957 148.938336660882 50.19000005722046 150.4005643700351 50.19000005722046C 151.86279207918824 50.19000005722046 153.1161301156052 61.23180006980894 154.5783578247583 61.23180006980894C 156.04058553391144 61.23180006980894 157.2939235703284 68.2584000778198 158.75615127948151 68.2584000778198C 160.21837898863464 68.2584000778198 161.4717170250516 82.31160009384155 162.93394473420472 82.31160009384155C 164.39617244335784 82.31160009384155 165.6495104797748 81.30780009269714 167.11173818892792 81.30780009269714C 168.57396589808104 81.30780009269714 169.827303934498 93.35340010643003 171.28953164365112 93.35340010643003C 172.75175935280424 93.35340010643003 174.0050973892212 88.334400100708 175.46732509837432 88.334400100708C 176.92955280752741 88.334400100708 178.1828908439444 88.334400100708 179.6451185530975 88.334400100708C 181.10734626225062 88.334400100708 182.36068429866756 96.36480010986327 183.8229120078207 96.36480010986327C 185.28513971697382 96.36480010986327 186.53847775339077 103.39140011787413 188.0007054625439 103.39140011787413C 189.46293317169702 103.39140011787413 190.71627120811397 104.39520011901854 192.1784989172671 104.39520011901854C 193.64072662642022 104.39520011901854 194.89406466283717 117.44460013389586 196.3562923719903 117.44460013389586C 197.81852008114342 117.44460013389586 199.07185811756037 128.48640014648436 200.5340858267135 128.48640014648436C 201.99631353586662 128.48640014648436 203.24965157228357 141.5358001613617 204.7118792814367 141.5358001613617C 206.17410699058982 141.5358001613617 207.42744502700677 140.53200016021728 208.8896727361599 140.53200016021728C 210.35190044531302 140.53200016021728 211.60523848172997 145.55100016593934 213.0674661908831 145.55100016593934C 214.52969390003622 145.55100016593934 215.78303193645317 135.51300015449522 217.2452596456063 135.51300015449522C 218.7074873547594 135.51300015449522 219.96082539117637 124.47120014190673 221.42305310032947 124.47120014190673C 222.8852808094826 124.47120014190673 224.13861884589954 115.43700013160705 225.60084655505267 115.43700013160705C 227.0630742642058 115.43700013160705 228.31641230062274 116.44080013275145 229.77864000977587 116.44080013275145C 231.240867718929 116.44080013275145 232.49420575534594 107.40660012245178 233.95643346449907 107.40660012245178C 235.4186611736522 107.40660012245178 236.67199921006915 111.4218001270294 238.13422691922227 111.4218001270294C 239.5964546283754 111.4218001270294 240.84979266479235 124.47120014190673 242.31202037394547 124.47120014190673C 243.7742480830986 124.47120014190673 245.02758611951555 121.4598001384735 246.48981382866867 121.4598001384735C 247.9520415378218 121.4598001384735 249.20537957423875 131.4978001499176 250.66760728339187 131.4978001499176C 252.129834992545 131.4978001499176 253.38317302896195 126.47880014419555 254.84540073811507 126.47880014419555C 256.3076284472682 126.47880014419555 257.56096648368515 125.47500014305113 259.0231941928383 125.47500014305113C 260.4854219019914 125.47500014305113 261.73875993840835 129.49020014762877 263.2009876475615 129.49020014762877C 264.6632153567146 129.49020014762877 265.91655339313155 144.5472001647949 267.3787811022847 144.5472001647949C 268.8410088114378 144.5472001647949 270.09434684785475 136.51680015563966 271.5565745570079 136.51680015563966C 273.018802266161 136.51680015563966 274.27214030257795 136.51680015563966 275.7343680117311 136.51680015563966C 277.1965957208842 136.51680015563966 278.4499337573011 138.52440015792845 279.9121614664542 138.52440015792845C 281.37438917560735 138.52440015792845 282.6277272120243 124.47120014190673 284.0899549211774 124.47120014190673C 285.55218263033055 124.47120014190673 286.8055206667475 114.43320013046264 288.2677483759006 114.43320013046264C 289.72997608505375 114.43320013046264 290.9833141214707 123.46740014076232 292.4455418306238 123.46740014076232C 293.90776953977695 123.46740014076232 295.1611075761939 110.41800012588499 296.623335285347 110.41800012588499C 298.08556299450015 110.41800012588499 299.3389010309171 116.44080013275145 300.8011287400702 116.44080013275145C 302.26335644922335 116.44080013275145 303.5166944856403 114.43320013046264 304.9789221947934 114.43320013046264C 306.44114990394655 114.43320013046264 307.6944879403635 109.4142001247406 309.1567156495166 109.4142001247406C 310.61894335866975 109.4142001247406 311.8722813950867 97.36860011100768 313.3345091042398 97.36860011100768C 314.79673681339295 97.36860011100768 316.0500748498099 110.41800012588499 317.51230255896303 110.41800012588499C 318.97453026811615 110.41800012588499 320.2278683045331 124.47120014190673 321.69009601368623 124.47120014190673C 323.15232372283936 124.47120014190673 324.4056617592563 122.46360013961791 325.86788946840943 122.46360013961791C 327.33011717756256 122.46360013961791 328.5834552139795 118.44840013504027 330.04568292313263 118.44840013504027C 331.50791063228576 118.44840013504027 332.7612486687027 108.41040012359619 334.22347637785583 108.41040012359619C 335.68570408700896 108.41040012359619 336.9390421234259 114.43320013046264 338.40126983257903 114.43320013046264C 339.86349754173216 114.43320013046264 341.1168355781491 104.39520011901854 342.57906328730223 104.39520011901854C 344.04129099645536 104.39520011901854 345.2946290328723 117.44460013389586 346.75685674202543 117.44460013389586C 348.21908445117856 117.44460013389586 349.4724224875955 128.48640014648436 350.93465019674863 128.48640014648436C 352.39687790590176 128.48640014648436 353.6502159423187 124.47120014190673 355.11244365147184 124.47120014190673C 356.57467136062496 124.47120014190673 357.82800939704185 127.48260014533996 359.290237106195 127.48260014533996C 360.7524648153481 127.48260014533996 362.00580285176505 127.48260014533996 363.4680305609182 127.48260014533996C 364.9302582700713 127.48260014533996 366.18359630648825 131.4978001499176 367.6458240156414 131.4978001499176C 369.1080517247945 131.4978001499176 370.36138976121146 141.5358001613617 371.8236174703646 141.5358001613617C 373.2858451795177 141.5358001613617 374.53918321593466 140.53200016021728 376.0014109250878 140.53200016021728C 377.4636386342409 140.53200016021728 378.71697667065786 145.55100016593934 380.179204379811 145.55100016593934C 381.6414320889641 145.55100016593934 382.89477012538106 157.59660017967224 384.3569978345342 157.59660017967224C 385.8192255436873 157.59660017967224 387.07256358010426 161.6118001842499 388.5347912892574 161.6118001842499C 389.9970189984105 161.6118001842499 391.25035703482746 176.668800201416 392.7125847439806 176.668800201416C 394.1748124531337 176.668800201416 395.42815048955066 161.6118001842499 396.8903781987038 161.6118001842499C 398.3526059078569 161.6118001842499 399.60594394427386 159.60420018196106 401.068171653427 159.60420018196106C 402.5303993625801 159.60420018196106 403.78373739899706 146.55480016708373 405.2459651081502 146.55480016708373C 406.7081928173033 146.55480016708373 407.96153085372026 141.5358001613617 409.4237585628734 141.5358001613617C 410.8859862720265 141.5358001613617 412.13932430844346 143.54340016365052 413.6015520175966 143.54340016365052C 415.0637797267497 143.54340016365052 416.31711776316666 157.59660017967224 417.7793454723198 157.59660017967224C 419.2415731814729 157.59660017967224 420.49491121788986 169.64220019340513 421.957138927043 169.64220019340513C 423.4193666361961 169.64220019340513 424.67270467261307 165.6270001888275 426.1349323817662 165.6270001888275C 427.5971600909193 165.6270001888275 428.85049812733627 171.64980019569396 430.3127258364894 171.64980019569396C 431.7749535456425 171.64980019569396 433.02829158205947 169.64220019340513 434.4905192912126 169.64220019340513C 435.9527470003657 169.64220019340513 437.2060850367826 165.6270001888275 438.66831274593574 165.6270001888275C 440.13054045508886 165.6270001888275 441.3838784915058 156.59280017852782 442.84610620065894 156.59280017852782C 444.30833390981206 156.59280017852782 445.561671946229 150.57000017166138 447.02389965538214 150.57000017166138C 448.48612736453526 150.57000017166138 449.7394654009522 140.53200016021728 451.20169311010534 140.53200016021728C 452.66392081925846 140.53200016021728 453.9172588556754 144.5472001647949 455.37948656482854 144.5472001647949C 456.84171427398167 144.5472001647949 458.0950523103986 132.501600151062 459.55728001955174 132.501600151062C 461.01950772870487 132.501600151062 462.2728457651218 138.52440015792845 463.73507347427494 138.52440015792845C 465.19730118342807 138.52440015792845 466.450639219845 124.47120014190673 467.91286692899814 124.47120014190673C 469.37509463815127 124.47120014190673 470.6284326745682 128.48640014648436 472.09066038372134 128.48640014648436C 473.55288809287447 128.48640014648436 474.8062261292914 128.48640014648436 476.26845383844454 128.48640014648436C 477.73068154759767 128.48640014648436 478.9840195840146 138.52440015792845 480.44624729316774 138.52440015792845C 481.90847500232087 138.52440015792845 483.1618130387378 125.47500014305113 484.62404074789094 125.47500014305113C 486.08626845704407 125.47500014305113 487.339606493461 120.4560001373291 488.80183420261415 120.4560001373291C 490.26406191176727 120.4560001373291 491.5173999481842 122.46360013961791 492.97962765733735 122.46360013961791C 494.4418553664905 122.46360013961791 495.6951934029074 122.46360013961791 497.15742111206055 122.46360013961791"
                            pathfrom="M -1 240.9120002746582 L -1 240.9120002746582 L 4.177793454723198 240.9120002746582 L 8.355586909446396 240.9120002746582 L 12.533380364169593 240.9120002746582 L 16.711173818892792 240.9120002746582 L 20.88896727361599 240.9120002746582 L 25.066760728339187 240.9120002746582 L 29.244554183062384 240.9120002746582 L 33.422347637785585 240.9120002746582 L 37.60014109250878 240.9120002746582 L 41.77793454723198 240.9120002746582 L 45.95572800195517 240.9120002746582 L 50.13352145667837 240.9120002746582 L 54.311314911401574 240.9120002746582 L 58.48910836612477 240.9120002746582 L 62.66690182084797 240.9120002746582 L 66.84469527557117 240.9120002746582 L 71.02248873029436 240.9120002746582 L 75.20028218501756 240.9120002746582 L 79.37807563974076 240.9120002746582 L 83.55586909446396 240.9120002746582 L 87.73366254918716 240.9120002746582 L 91.91145600391035 240.9120002746582 L 96.08924945863355 240.9120002746582 L 100.26704291335675 240.9120002746582 L 104.44483636807995 240.9120002746582 L 108.62262982280315 240.9120002746582 L 112.80042327752633 240.9120002746582 L 116.97821673224954 240.9120002746582 L 121.15601018697274 240.9120002746582 L 125.33380364169594 240.9120002746582 L 129.51159709641914 240.9120002746582 L 133.68939055114234 240.9120002746582 L 137.86718400586554 240.9120002746582 L 142.0449774605887 240.9120002746582 L 146.2227709153119 240.9120002746582 L 150.4005643700351 240.9120002746582 L 154.5783578247583 240.9120002746582 L 158.75615127948151 240.9120002746582 L 162.93394473420472 240.9120002746582 L 167.11173818892792 240.9120002746582 L 171.28953164365112 240.9120002746582 L 175.46732509837432 240.9120002746582 L 179.6451185530975 240.9120002746582 L 183.8229120078207 240.9120002746582 L 188.0007054625439 240.9120002746582 L 192.1784989172671 240.9120002746582 L 196.3562923719903 240.9120002746582 L 200.5340858267135 240.9120002746582 L 204.7118792814367 240.9120002746582 L 208.8896727361599 240.9120002746582 L 213.0674661908831 240.9120002746582 L 217.2452596456063 240.9120002746582 L 221.42305310032947 240.9120002746582 L 225.60084655505267 240.9120002746582 L 229.77864000977587 240.9120002746582 L 233.95643346449907 240.9120002746582 L 238.13422691922227 240.9120002746582 L 242.31202037394547 240.9120002746582 L 246.48981382866867 240.9120002746582 L 250.66760728339187 240.9120002746582 L 254.84540073811507 240.9120002746582 L 259.0231941928383 240.9120002746582 L 263.2009876475615 240.9120002746582 L 267.3787811022847 240.9120002746582 L 271.5565745570079 240.9120002746582 L 275.7343680117311 240.9120002746582 L 279.9121614664542 240.9120002746582 L 284.0899549211774 240.9120002746582 L 288.2677483759006 240.9120002746582 L 292.4455418306238 240.9120002746582 L 296.623335285347 240.9120002746582 L 300.8011287400702 240.9120002746582 L 304.9789221947934 240.9120002746582 L 309.1567156495166 240.9120002746582 L 313.3345091042398 240.9120002746582 L 317.51230255896303 240.9120002746582 L 321.69009601368623 240.9120002746582 L 325.86788946840943 240.9120002746582 L 330.04568292313263 240.9120002746582 L 334.22347637785583 240.9120002746582 L 338.40126983257903 240.9120002746582 L 342.57906328730223 240.9120002746582 L 346.75685674202543 240.9120002746582 L 350.93465019674863 240.9120002746582 L 355.11244365147184 240.9120002746582 L 359.290237106195 240.9120002746582 L 363.4680305609182 240.9120002746582 L 367.6458240156414 240.9120002746582 L 371.8236174703646 240.9120002746582 L 376.0014109250878 240.9120002746582 L 380.179204379811 240.9120002746582 L 384.3569978345342 240.9120002746582 L 388.5347912892574 240.9120002746582 L 392.7125847439806 240.9120002746582 L 396.8903781987038 240.9120002746582 L 401.068171653427 240.9120002746582 L 405.2459651081502 240.9120002746582 L 409.4237585628734 240.9120002746582 L 413.6015520175966 240.9120002746582 L 417.7793454723198 240.9120002746582 L 421.957138927043 240.9120002746582 L 426.1349323817662 240.9120002746582 L 430.3127258364894 240.9120002746582 L 434.4905192912126 240.9120002746582 L 438.66831274593574 240.9120002746582 L 442.84610620065894 240.9120002746582 L 447.02389965538214 240.9120002746582 L 451.20169311010534 240.9120002746582 L 455.37948656482854 240.9120002746582 L 459.55728001955174 240.9120002746582 L 463.73507347427494 240.9120002746582 L 467.91286692899814 240.9120002746582 L 472.09066038372134 240.9120002746582 L 476.26845383844454 240.9120002746582 L 480.44624729316774 240.9120002746582 L 484.62404074789094 240.9120002746582 L 488.80183420261415 240.9120002746582 L 492.97962765733735 240.9120002746582 L 497.15742111206055 240.9120002746582"
                            fillRule="evenodd"
                          />
                          <g
                            id="SvgjsG1308"
                            classNameName="apexcharts-series-markers-wrap"
                            dataRealindex={0}
                          >
                            <g classNameName="apexcharts-series-markers">
                              <circle
                                id="SvgjsCircle1382"
                                r={0}
                                cx={0}
                                cy={0}
                                classNameName="apexcharts-marker wfegg4iiq no-pointer-events"
                                stroke="#ffffff"
                                fill="#206bc4"
                                fillOpacity={1}
                                strokeWidth={2}
                                strokeOpacity="0.9"
                                default-marker-size={0}
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1309"
                          classNameName="apexcharts-datalabels"
                          dataRealindex={0}
                        />
                      </g>
                      <g id="SvgjsG1315" classNameName="apexcharts-grid-borders">
                        <line
                          id="SvgjsLine1323"
                          x1={0}
                          y1={0}
                          x2="497.15742111206055"
                          y2={0}
                          stroke="#e0e0e0"
                          strokeDasharray={4}
                          strokeLinecap="butt"
                          classNameName="apexcharts-gridline"
                        />
                        <line
                          id="SvgjsLine1328"
                          x1={0}
                          y1="200.76000022888184"
                          x2="497.15742111206055"
                          y2="200.76000022888184"
                          stroke="#e0e0e0"
                          strokeDasharray={4}
                          strokeLinecap="butt"
                          classNameName="apexcharts-gridline"
                        />
                      </g>
                      <line
                        id="SvgjsLine1331"
                        x1={0}
                        y1={0}
                        x2="497.15742111206055"
                        y2={0}
                        stroke="#b6b6b6"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                        classNameName="apexcharts-ycrosshairs"
                      />
                      <line
                        id="SvgjsLine1332"
                        x1={0}
                        y1={0}
                        x2="497.15742111206055"
                        y2={0}
                        strokeDasharray={0}
                        strokeWidth={0}
                        strokeLinecap="butt"
                        classNameName="apexcharts-ycrosshairs-hidden"
                      />
                      <g
                        id="SvgjsG1333"
                        classNameName="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG1334"
                          classNameName="apexcharts-xaxis-texts-g"
                          transform="translate(0, -4)"
                        >
                          <text
                            id="SvgjsText1336"
                            fontFamily="inherit"
                            x="41.777934547231986"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={600}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1337">Jul '20</tspan>
                            <title>Jul '20</title>
                          </text>
                          <text
                            id="SvgjsText1339"
                            fontFamily="inherit"
                            x="100.26704291335679"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1340">15 Jul</tspan>
                            <title>15 Jul</title>
                          </text>
                          <text
                            id="SvgjsText1342"
                            fontFamily="inherit"
                            x="171.2895316436512"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={600}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1343">Aug '20</tspan>
                            <title>Aug '20</title>
                          </text>
                          <text
                            id="SvgjsText1345"
                            fontFamily="inherit"
                            x="229.778640009776"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1346">15 Aug</tspan>
                            <title>15 Aug</title>
                          </text>
                          <text
                            id="SvgjsText1348"
                            fontFamily="inherit"
                            x="300.8011287400704"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={600}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1349">Sep '20</tspan>
                            <title>Sep '20</title>
                          </text>
                          <text
                            id="SvgjsText1351"
                            fontFamily="inherit"
                            x="359.2902371061952"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1352">15 Sep</tspan>
                            <title>15 Sep</title>
                          </text>
                          <text
                            id="SvgjsText1354"
                            fontFamily="inherit"
                            x="426.1349323817664"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={600}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1355">Oct '20</tspan>
                            <title>Oct '20</title>
                          </text>
                          <text
                            id="SvgjsText1357"
                            fontFamily="inherit"
                            x="484.62404074789123"
                            y="229.76000022888184"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            classNameName="apexcharts-text apexcharts-xaxis-label "
                            style={{ fontFamily: "inherit" }}
                          >
                            <tspan id="SvgjsTspan1358" />
                            <title />
                          </text>
                        </g>
                      </g>
                      <g
                        id="SvgjsG1379"
                        classNameName="apexcharts-yaxis-annotations"
                      />
                      <g
                        id="SvgjsG1380"
                        classNameName="apexcharts-xaxis-annotations"
                      />
                      <g
                        id="SvgjsG1381"
                        classNameName="apexcharts-point-annotations"
                      />
                      <rect
                        id="SvgjsRect1383"
                        width={0}
                        height={0}
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fefefe"
                        classNameName="apexcharts-zoom-rect"
                      />
                      <rect
                        id="SvgjsRect1384"
                        width={0}
                        height={0}
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fefefe"
                        classNameName="apexcharts-selection-rect"
                      />
                    </g>
                  </svg>
                  <div classNameName="apexcharts-tooltip apexcharts-theme-dark">
                    <div
                      classNameName="apexcharts-tooltip-title"
                      style={{ fontFamily: "inherit", fontSize: 12 }}
                    />
                    <div
                      classNameName="apexcharts-tooltip-series-group"
                      style={{ order: 1 }}
                    >
                      <span
                        classNameName="apexcharts-tooltip-marker"
                        style={{ backgroundColor: "rgb(32, 107, 196)" }}
                      />
                      <div
                        classNameName="apexcharts-tooltip-text"
                        style={{ fontFamily: "inherit", fontSize: 12 }}
                      >
                        <div classNameName="apexcharts-tooltip-y-group">
                          <span classNameName="apexcharts-tooltip-text-y-label" />
                          <span classNameName="apexcharts-tooltip-text-y-value" />
                        </div>
                        <div classNameName="apexcharts-tooltip-goals-group">
                          <span classNameName="apexcharts-tooltip-text-goals-label" />
                          <span classNameName="apexcharts-tooltip-text-goals-value" />
                        </div>
                        <div classNameName="apexcharts-tooltip-z-group">
                          <span classNameName="apexcharts-tooltip-text-z-label" />
                          <span classNameName="apexcharts-tooltip-text-z-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                    <div classNameName="apexcharts-yaxistooltip-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="col-12">
          <div classNameName="card">
            <div classNameName="card-table table-responsive">
              <table classNameName="table">
                <thead>
                  <tr>
                    <th>DATE	</th>
                    <th>RETAIL PRICE	</th>
                    <th>WHOLESALE PRICE	</th>
                    <th>PRICE AT FARM</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                    
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  <tr>
                  <td>7 Mar 2024	</td>
                    <td>₹52.00	</td>
                    <td>₹33.00 - ₹35.00	</td>
                    <td>₹34.00 - ₹31.00</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer classNameName="footer">
            <div classNameName="container">
              <div classNameName="row align-items-center flex-row-reverse">
                <div classNameName="col col-auto ml-auto">
                  <div classNameName="row align-items-center"></div>
                </div>
                <div classNameName="col col-12 col-lg-auto mt-3 mt-lg-0 text-center">
                  <div classNameName="text-center">
                    Copyright © 2024 Kryzen Biotech. All rights reserved.
                    <br />
                    Made in India with{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="heart"
                      classNameName="svg-inline--fa fa-heart fa-w-16 icon text-danger"
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
};
