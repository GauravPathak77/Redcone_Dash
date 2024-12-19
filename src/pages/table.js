export default function TablePage() {
    const data = [
      { id: 1, name: 'Camera 1', status: 'Active' },
      { id: 2, name: 'Camera 2', status: 'Inactive' },
      { id: 3, name: 'Camera 3', status: 'Active' },
    ];
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Table View</h1>
        <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  