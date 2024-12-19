'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SelectOptionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const camera = searchParams.get('camera');

  const handleNavigate = (option) => {
    router.push(`/${option}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome, {camera}</h1>
        <p>Select an option:</p>
        <button onClick={() => handleNavigate('table')} style={{ padding: '10px 20px', marginRight: '20px' }}>
          Table
        </button>
        <button onClick={() => handleNavigate('graph')} style={{ padding: '10px 20px' }}>
          Graph
        </button>
      </div>
    </div>
  );
}
