import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../slices/auth";

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}

export default Dashboard;
