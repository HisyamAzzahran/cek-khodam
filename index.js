import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/cekKhodam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>Cek Khodam Prabubur</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <button type="submit">Cek Khodam Prabubur</button>
      </form>
      {result && (
        <div>
          <h2>Hasil:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
