'use client';

import { useEffect, useState } from 'react';

export default function AutoRepliesPage() {
  const [replies, setReplies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch('/api/replies')
      .then(res => res.json())
      .then(data => setReplies(data));
  }, []);

  const handleAdd = async () => {
    const res = await fetch('/api/replies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword, response, clientId: 'client123' }),
    });
    if (res.ok) {
      const newReply = await res.json();
      setReplies([...replies, newReply]);
      setKeyword('');
      setResponse('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">إعداد الردود التلقائية</h1>

      <div className="bg-white p-4 rounded shadow space-y-4 max-w-xl mb-6">
        <input
          type="text"
          placeholder="الكلمة المفتاحية"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="نص الرد"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إضافة الرد
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow max-w-xl">
        <h2 className="text-lg font-semibold mb-2">الردود الحالية:</h2>
        <ul className="space-y-2">
          {replies.map((r: any, i) => (
            <li key={i} className="border-b pb-2">
              <strong>{r.keyword}</strong>: {r.response}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
