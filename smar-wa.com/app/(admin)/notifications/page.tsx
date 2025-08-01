'use client';

import { useState } from 'react';

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', message: 'تم ربط الحساب بنجاح ✅', time: '2025-08-01 10:24' },
    { id: 2, type: 'warning', message: 'اقترب انتهاء صلاحية الباقة الحالية!', time: '2025-07-31 18:10' },
    { id: 3, type: 'alert', message: 'تم إرسال أكثر من 1000 رسالة اليوم.', time: '2025-07-30 12:45' },
  ]);

  const getColor = (type) => {
    switch (type) {
      case 'info': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'alert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const clearAll = () => {
    if (confirm('هل أنت متأكد من حذف جميع التنبيهات؟')) {
      setNotifications([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">مركز التنبيهات</h1>
        <button onClick={clearAll} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          حذف الكل
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div key={note.id} className={`rounded p-4 shadow ${getColor(note.type)}`}>
            <div className="flex justify-between items-center">
              <p className="text-sm">{note.message}</p>
              <span className="text-xs">{note.time}</span>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center text-gray-500 mt-20">لا توجد تنبيهات حالياً</div>
        )}
      </div>
    </div>
  );
}
