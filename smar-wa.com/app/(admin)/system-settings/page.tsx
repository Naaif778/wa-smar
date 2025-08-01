'use client';

import { useState } from 'react';

export default function SystemSettings() {
  const [settings, setSettings] = useState({
    platformName: 'Smar-WA',
    email: 'support@smar-wa.com',
    language: 'ar',
    timezone: 'Asia/Riyadh',
    autoRepliesEnabled: true,
    aiEnabled: true,
    notificationsEnabled: true,
  });

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert('✅ تم حفظ إعدادات النظام بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">إعدادات النظام</h1>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">اسم المنصة</label>
          <input
            type="text"
            value={settings.platformName}
            onChange={(e) => handleChange('platformName', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">البريد الرسمي</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">اللغة الافتراضية</label>
          <select
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
          >
            <option value="ar">العربية</option>
            <option value="en">الإنجليزية</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">المنطقة الزمنية</label>
          <input
            type="text"
            value={settings.timezone}
            onChange={(e) => handleChange('timezone', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div className="flex flex-col space-y-2 pt-4">
          <label className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              checked={settings.autoRepliesEnabled}
              onChange={() => handleChange('autoRepliesEnabled', !settings.autoRepliesEnabled)}
            />
            <span>تفعيل الردود التلقائية</span>
          </label>

          <label className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              checked={settings.aiEnabled}
              onChange={() => handleChange('aiEnabled', !settings.aiEnabled)}
            />
            <span>تفعيل الذكاء الاصطناعي</span>
          </label>

          <label className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              checked={settings.notificationsEnabled}
              onChange={() => handleChange('notificationsEnabled', !settings.notificationsEnabled)}
            />
            <span>تفعيل التنبيهات</span>
          </label>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );
}
