'use client';

import { useState, useEffect } from 'react';

export default function ClientDashboard() {
  const [client, setClient] = useState({
    name: 'نايف',
    plan: 'الباقة المتقدمة',
    planStatus: 'نشطة',
    stats: {
      messagesSent: 3241,
      activeReplies: 27,
      totalContacts: 832,
    },
    notifications: [
      '👋 مرحبًا بك مجددًا في Smar-WA!',
      '💬 تم إرسال 1,000 رسالة هذا الأسبوع.',
      '⚠️ صلاحية الباقة تنتهي خلال 5 أيام.',
    ],
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">مرحبًا، {client.name} 👋</h1>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">حالة الباقة</h2>
        <p className="text-sm">الباقة: {client.plan}</p>
        <p className="text-sm">الحالة: <span className={client.planStatus === 'نشطة' ? 'text-green-600' : 'text-red-600'}>{client.planStatus}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="الرسائل المرسلة" value={client.stats.messagesSent} />
        <StatCard label="الردود التلقائية" value={client.stats.activeReplies} />
        <StatCard label="العملاء المتواصلين" value={client.stats.totalContacts} />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">تنبيهاتك</h2>
        <ul className="list-disc pr-6 space-y-2 text-sm text-gray-700">
          {client.notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded text-center hover:bg-blue-700">فتح جلسة WhatsApp Web</a>
        <a href="#" className="bg-gray-200 px-6 py-3 rounded text-center hover:bg-gray-300">إعدادات الباقة</a>
        <a href="#" className="bg-gray-200 px-6 py-3 rounded text-center hover:bg-gray-300">إعدادات البوت</a>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded shadow p-4 text-center">
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
