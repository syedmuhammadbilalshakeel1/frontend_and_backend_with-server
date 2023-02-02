import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const email1 = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  console.log(email1);
  return (
    <div>
      <h1 className="font-semibold">Welcome to Dashboard</h1>
      <p>Email: {email1}</p>
      <p>here your  token</p>
      <p>token: {token}</p>
    </div>
  );
};

export default Dashboard;
