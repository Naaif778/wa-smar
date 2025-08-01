'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('يرجى إدخال البريد وكلمة المرور');
      return;
    }
    console.log('تم تسجيل الدخول:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">تسجيل دخول الأدمن</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-right">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-right"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-right">كلمة المرور</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-right"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="ml-2" />
              تذكرني
            </label>
            <a href="#" className="text-blue-500 text-sm">نسيت كلمة المرور؟</a>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
