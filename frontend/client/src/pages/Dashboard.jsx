import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

      return (
        <div className="dashboard">
          <h2 className="dashboard-title">Welcome, {user.username}!</h2>
          <div className="dashboard-buttons">
            <button onClick={() => navigate("/my-pets")}>View My Pets</button>
            <button onClick={() => navigate("/add-pet")}>Add a New Pet</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      );
};

export default Dashboard;