'use client';

import { useEffect, useState } from 'react';

export default function AdminAnalytics() {
  const [data, setData] = useState({
    users: 42,
    messages: 13589,
    autoReplies: 128,
    whatsappSessions: 6,
    topTriggers: [
      { trigger: 'مرحبا', count: 356 },
      { trigger: 'الباقة', count: 288 },
      { trigger: 'دعم', count: 143 },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">لوحة الإحصائيات والتحليلات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="عدد العملاء" value={data.users} />
        <StatCard label="الرسائل المرسلة" value={data.messages} />
        <StatCard label="الردود التلقائية" value={data.autoReplies} />
        <StatCard label="جلسات WhatsApp" value={data.whatsappSessions} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">الكلمات الأكثر استخدامًا</h2>
        <table className="w-full text-right">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">الكلمة المفتاحية</th>
              <th className="py-2 px-4">عدد الاستخدامات</th>
            </tr>
          </thead>
          <tbody>
            {data.topTriggers.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2 px-4">{item.trigger}</td>
                <td className="py-2 px-4">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded shadow p-4 text-center">
      <p className="text-gray-500 text-sm mb-2">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
