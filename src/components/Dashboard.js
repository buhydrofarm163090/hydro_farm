import React from "react";
import Sidebar from "./Sidebar";
import MainDash from "./MainDash";

function Dashboard () {
  return (
    <section className = "Dashboard">
      <section className="DashBoardNav">
        <section className="DashboardGlass">
          <Sidebar/>
          <MainDash/>
        </section>
      </section>
    </section>
  );
}

export default Dashboard;