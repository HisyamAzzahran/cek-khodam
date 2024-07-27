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
    <div className="min-h-screen bg-prabu flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Cek Khodam Prabubur</h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Nama</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nama"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cek Khodam
            </button>
          </div>
        </form>
        {result && (
          <div className="mt-8 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-gray-900">Hasil:</h2>
            <p className="mt-2 text-gray-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
