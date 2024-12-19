'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CameraList from '../components/CameraList';
import TableView from '../components/Table';
import GraphView from '../components/Graph';
import { dummyData, graphDataTemplate } from '../data/data'; // Import dummy data and graph template

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleCameraSelect = (camera) => {
    setSelectedCamera(camera);
  };

  if (!user) return null;

  // Generate graph data dynamically based on selected camera
  const graphData = selectedCamera
    ? {
        ...graphDataTemplate,
        datasets: [
          {
            ...graphDataTemplate.datasets[0],
            label: `${selectedCamera} Status Count`,
          },
        ],
      }
    : null;

  return (
    <div style={{ padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Username at the top-right */}
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <p>{user.name}</p>
      </div>

      {!selectedCamera ? (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Full-screen CameraList */}
          <CameraList cameras={user.cameras} onCameraSelect={handleCameraSelect} />
        </div>
      ) : (
        <div style={{ display: 'flex', flex: 1 }}>
          {/* Left Column: Table */}
          <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
            <TableView data={dummyData} />
          </div>

          {/* Right Column: CameraList and Graph */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px' }}>
            {/* Top Row: CameraList */}
            <div style={{ flex: 1, marginBottom: '10px', overflowY: 'auto' }}>
              <h3 style={{ textAlign: 'center' }}>Select Another Camera</h3>
              <CameraList cameras={user.cameras} onCameraSelect={handleCameraSelect} />
            </div>

            {/* Bottom Row: Graph */}
            <div style={{ flex: 2 }}>
              {graphData && <GraphView data={graphData} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
