import React from "react";

export default function RiskAnalysis({data}) {
  if(!data) return null;
  return (
    <div>
      <h3>Risk Analysis</h3>
      {Object.keys(data).map(ticker=>(
        <div key={ticker}>
          <h4>{ticker}</h4>
          <p>Mean: {data[ticker].mean.toFixed(2)}</p>
          <p>Std: {data[ticker].std.toFixed(2)}</p>
          <p>5% Quantile: {data[ticker]["5%_quantile"].toFixed(2)}</p>
          <p>95% Quantile: {data[ticker]["95%_quantile"].toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}
