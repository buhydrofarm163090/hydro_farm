import React from "react";
import Cards from "./Cards";
import Table from "./Table";
import DataFetcher from "./DataFetcher";

function MainDash() {
  return (
    <section className="MainDash">
      <h1>Dashboard</h1>
      <DataFetcher/>
    </section>
  );
}

export default MainDash;