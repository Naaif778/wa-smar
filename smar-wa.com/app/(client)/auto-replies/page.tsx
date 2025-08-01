'use client';

import { useState } from 'react';

export default function AutoReplies() {
  const [replies, setReplies] = useState([
    { keyword: 'مرحبا', response: 'أهلاً وسهلاً بك! 😊' },
    { keyword: 'سعر', response: 'يرجى تحديد الخدمة المطلوبة لمعرفة السعر 💰' },
  ]);
  const [newKeyword, setNewKeyword] = useState('');
  const [newResponse, setNewResponse] = useState('');

  const handleAdd = () => {
    if (newKeyword && newResponse) {
      setReplies([...replies, { keyword: newKeyword, response: newResponse }]);
      setNewKeyword('');
      setNewResponse('');
    }
  };

  const handleDelete = (index) => {
    const updated = [...replies];
    updated.splice(index, 1);
    setReplies(updated);
  };

  const handleSave = () => {
    alert('✅ تم حفظ الردود التلقائية!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">إدارة الردود التلقائية</h1>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="الكلمة المفتاحية"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="الرد"
            value={newResponse}
            onChange={(e) => setNewResponse(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            إضافة
          </button>
        </div>

        <table className="w-full mt-4 text-sm text-right">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2">الكلمة المفتاحية</th>
              <th className="p-2">الرد</th>
              <th className="p-2">إجراء</th>
            </tr>
          </thead>
          <tbody>
            {replies.map((reply, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{reply.keyword}</td>
                <td className="p-2">{reply.response}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:underline"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={handleSave}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          حفظ التعديلات
        </button>
      </div>
    </div>
  );
}
