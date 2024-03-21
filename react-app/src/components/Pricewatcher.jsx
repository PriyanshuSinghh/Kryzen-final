import React from "react";
import Table from "./table";
import NavigationBar from "./NavigationBar";
import Footer from "./footer";

export default function Pricewatcher() {
  return (
    <>
      <div>
        <NavigationBar/>
      </div>

      <div>
        <Table/>
      </div>
<div>
  <Footer/>
</div>

    </>
  );
}