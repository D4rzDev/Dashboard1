// components/LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

interface LineChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, labels, title }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const options: any = {
    scales: {
      x: {
        type: 'category' // 'categoryAxis' in Chart.js v3.x
      }
    }
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
