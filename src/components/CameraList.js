'use client';

import { useRouter } from 'next/navigation';

export default function CameraList({ cameras, onCameraSelect }) {
  const router = useRouter();

  return (
    <div>
      <h1>Available Cameras</h1>
      {cameras.map((camera, index) => (
        <button
          key={index}
          onClick={() => onCameraSelect(camera)}
          style={{ display: 'block', margin: '10px auto', padding: '10px 20px' }}
        >
          {camera}
        </button>
      ))}
    </div>
  );
}
