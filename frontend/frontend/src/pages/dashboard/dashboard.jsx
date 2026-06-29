import React from "react";
import "./dashboard.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

function Dashboard() {
  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        {/* Header */}
        <Header />

        {/* Dashboard Body */}
        <div className="dashboard-container">

          <h1>Dashboard</h1>

          <div className="dashboard-cards">

            <div className="card">
              <h3>Total Users</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>Total Products</h3>
              <p>45</p>
            </div>

            <div className="card">
              <h3>Total Orders</h3>
              <p>78</p>
            </div>

            <div className="card">
              <h3>Total Revenue</h3>
              <p>₹25,000</p>
            </div>

          </div>

          <div className="dashboard-section">

            <h2>Recent Activity</h2>

            <ul>
              <li>✅ New user registered</li>
              <li>📦 New order received</li>
              <li>🛒 Product updated</li>
              <li>👤 Admin logged in</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;