import React from "react";

export default function NewsSummary({news}) {
  if(!news) return null;
  return (
    <div>
      <h3>News Summaries</h3>
      <ul>
        {news.map((n,i)=> <li key={i}>{n}</li>)}
      </ul>
    </div>
  )
}
