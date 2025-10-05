import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import API from "../api";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const [data, setData] = useState(null);
  const user = localStorage.getItem("user");

  useEffect(() => {
    API.get("/data").then((res) => setData(res.data));
  }, []);

  if (!data) return <div className="loading">Loading...</div>;

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Money Flow",
        data: data.chart_data,
        borderColor: "#2563eb",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard">
      <header>
        <h2>Hello, {user} 👋</h2>
        <button onClick={() => { localStorage.clear(); window.location.href = "/"; }}>Logout</button>
      </header>

      <section className="card-grid">
        <div className="card highlight">💳 Balance: ${data.balance}</div>
        <div className="card">Income: ${data.financial_record.income}</div>
        <div className="card">Expenses: ${data.financial_record.expenses}</div>
        <div className="card">Savings: ${data.financial_record.savings}</div>
      </section>

      <section className="chart-container">
        <Line data={chartData} />
      </section>

      <section className="transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {data.transactions.map((t, i) => (
            <li key={i}>{t.name} — <span>${t.amount}</span></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
