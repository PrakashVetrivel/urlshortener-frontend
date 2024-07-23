import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({ daily: 0, monthly: 0 });

  useEffect(() => {
    // Fetch stats from the backend
    fetch('https://your-backend-api/stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>URLs Created Today</h3>
          <p>{stats.daily}</p>
        </div>
        <div className="stat-item">
          <h3>URLs Created This Month</h3>
          <p>{stats.monthly}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
