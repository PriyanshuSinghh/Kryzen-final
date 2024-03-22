import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./footer";

export default function Home() {
  return (
    
       <>


       <div>
        <NavigationBar/>
       </div>
       <div className="container">

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/p/a">Accounts</a></li>
    <li className="breadcrumb-item">Test Account's team</li>
  </ol>
</nav>

<div className="row">
  <div className="col-6 col-sm-4 col-lg-6">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="h1 m-0" style={{ color: '#23bf6a' }}>₹0.00</div>
        <div className="text-muted">30 Days Revenue</div>
      </div>
    </div>
  </div>
  <div className="col-6 col-sm-4 col-lg-6">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="h1 m-0">0kg</div>
        <div className="text-muted">30 Days Output</div>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-6 col-sm-4 col-lg-3">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="h1 m-0">1</div>
        <div className="text-muted">Nurseries</div>
      </div>
    </div>
  </div>
  <div className="col-6 col-sm-4 col-lg-3">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="h1 m-0">0</div>
        <div className="text-muted">Active Batches</div>
      </div>
    </div>
  </div>
  <div className="col-6 col-sm-4 col-lg-3">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="h1 m-0"></div>
        <div className="text-muted">Current Revenue</div>
      </div>
    </div>
  </div>
  <div className="col-6 col-sm-4 col-lg-3">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="h1 m-0"></div>
        <div className="text-muted">Current Output</div>
      </div>
    </div>
  </div>
</div>

<div className="row row-cards">
  <div className="col-12">
    <div className="card ">
      <div className="card-header">
        <h3 className="card-title">Test Account's team</h3>
        <div className="card-options">
          <div className="btn-list">
            <a className="btn btn-primary btn-sm" href="/p/a/1509/edit">Edit</a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <dl className="row">
          <dt className="col-sm-4">Name</dt>
          <dd className="col-sm-8">Test Account's team</dd>
          <dt className="col-sm-4">Farm count</dt>
          <dd className="col-sm-8">0</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

<div className="row row-cards">
  <div className="col-12">
    <div className="card ">
      <div className="card-header">
        <h3 className="card-title">Nurseries</h3>
        <div className="card-options">
          <div className="btn-list">
            <a className="btn btn-primary btn-sm" href="/p/a/1509/nurseries/new">New</a>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Active Batches</th>
              <th>Number of Plants</th>
              <th>Germinated Plants</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/p/a/1509/nurseries/2403">Priyanshu</a>
              </td>
              <td>
                0 batches
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td className="text-right">
                <a className="btn btn-primary btn-sm" href="/p/a/1509/nurseries/2403">View</a>
                <a className="btn btn-danger btn-sm" data-confirm="Delete shubham?" rel="nofollow" data-method="delete" href="/p/a/1509/nurseries/2403"><i className="fe fe-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer text-right">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a className="btn btn-primary btn-sm" href="/p/a/1509/nurseries">View all</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="row row-cards">
  <div className="col-12">
    <div className="card ">
      <div className="card-header">
        <h3 className="card-title">Farms</h3>
        <div className="card-options">
          <div className="btn-list">
            <a className="btn btn-primary btn-sm" href="/p/a/1509/farms/new">New</a>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Aream (sqft)</th>
              <th>Structure</th>
              <th>Last Output</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div className="card-footer text-right">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a className="btn btn-primary btn-sm" href="/p/a/1509/farms">View all</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
      <div>
          <Footer/>
        </div>
      
      </>

    
  );
};

