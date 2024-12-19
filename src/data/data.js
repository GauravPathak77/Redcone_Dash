// data.js
export const dummyData = [
    { id: 1, name: 'Camera 1', status: 'Active' },
    { id: 2, name: 'Camera 2', status: 'Inactive' },
    { id: 3, name: 'Camera 3', status: 'Active' },
  ];
  
  export const graphDataTemplate = {
    labels: ['Camera 1', 'Camera 2', 'Camera 3'],
    datasets: [
      {
        label: 'Status Count',
        data: [5, 3, 7],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };
  