'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraphPage() {
  const data = {
    labels: ['Camera 1', 'Camera 2', 'Camera 3'],
    datasets: [
      {
        label: 'Status Count',
        data: [5, 3, 7],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Camera Status Counts',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Graph View</h1>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
