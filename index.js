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
    <div className="container">
      <div className="card">
        <h1 className="animate-bounce">Cek Khodam Prabubur</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nama:</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
          />
          <button type="submit">Cek Khodam Prabubur</button>
        </form>
        {result && (
          <div className="result">
            <h2>Hasil:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
