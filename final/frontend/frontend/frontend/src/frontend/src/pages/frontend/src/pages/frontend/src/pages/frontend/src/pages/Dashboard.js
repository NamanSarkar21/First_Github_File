import React, { useState } from "react";
import { forecast, risk, summarize } from "../api";
import PortfolioChart from "../components/PortfolioChart";
import RiskAnalysis from "../components/RiskAnalysis";
import NewsSummary from "../components/NewsSummary";

export default function Dashboard() {
  const [portfolio,setPortfolio] = useState({"AAPL":100,"TSLA":50});
  const [forecastData,setForecastData] = useState({});
  const [riskData,setRiskData] = useState({});
  const [news,setNews] = useState(["Stock market hits new high", "Tesla announces new model"]);

  const handleForecast = async () => {
    const res = await forecast({portfolio});
    setForecastData(res.data);
  }

  const handleRisk = async () => {
    const res = await risk({portfolio});
    setRiskData(res.data);
  }

  const handleSummarize = async () => {
    const res = await summarize({news});
    setNews(res.data.summaries);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleForecast}>Forecast Portfolio</button>
      <button onClick={handleRisk}>Analyze Risk</button>
      <button onClick={handleSummarize}>Summarize News</button>
      <PortfolioChart data={forecastData}/>
      <RiskAnalysis data={riskData}/>
      <NewsSummary news={news}/>
    </div>
  );
}
