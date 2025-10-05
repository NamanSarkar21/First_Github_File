import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PortfolioChart({data}) {
  if(!data) return null;
  const labels = ["Day 1","Day 2","Day 3","Day 4","Day 5"];
  const datasets = Object.keys(data).map(ticker => ({
    label: ticker,
    data: data[ticker],
    borderColor: "#"+Math.floor(Math.random()*16777215).toString(16),
    tension: 0.3
  }));
  return <Line data={{labels,datasets}} />;
}
