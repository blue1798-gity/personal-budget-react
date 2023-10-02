import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

export default function Charts() {
  const chartRef = useRef(null);

  useEffect(() => {
    var dataSource = {
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#ffcd56",
            "#ff6384",
            "#36a2eb",
            "#fd6b19",
            "#83FF33",
            "#F633FF",
            "#FF3333",
          ],
        },
      ],
      labels: [],
    };

    axios.get("http://localhost:3100/budget").then((res) => {
      console.log(res);
      for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
      }

      // Destroy the existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart on the canvas
      const ctx = document.getElementById("myChart").getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: dataSource,
      });
    });
  }, []);

  return (
    <div className="App">
      <canvas id="myChart" />
    </div>
  );
}
