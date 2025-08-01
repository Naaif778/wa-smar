'use client';

import { useState } from 'react';

export default function Settings() {
  const [name, setName] = useState('Smar-WA Client');
  const [email, setEmail] = useState('client@email.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    alert('✅ تم حفظ الإعدادات بنجاح');
  };

  const handleDelete = () => {
    if (confirm('هل أنت متأكد من حذف الحساب؟')) {
      alert('❌ تم حذف الحساب.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">الإعدادات</h1>

      <div className="bg-white p-6 rounded shadow space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">اسم الحساب</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">كلمة المرور الجديدة</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            حفظ
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            حذف الحساب
          </button>
        </div>
      </div>
    </div>
  );
}
