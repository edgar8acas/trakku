import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../slices/auth";

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <div className="Dashboard">
      <div className="Sidebar">
        <h1>Logo</h1>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
      <section className="Main">
        <header className="Main-header">
          <h2>Dashboard</h2>
          <a href="#">Where</a> / <a href="#">am</a> / <a href="#">I</a> /
        </header>
      </section>
    </div>
  );
}

export default Dashboard;
