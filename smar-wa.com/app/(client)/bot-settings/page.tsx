'use client';

import { useState } from 'react';

export default function BotSettings() {
  const [botConfig, setBotConfig] = useState({
    botName: 'مساعدي الذكي 🤖',
    welcomeMessage: 'مرحباً بك! كيف يمكنني مساعدتك اليوم؟',
    goodbyeMessage: 'شكرًا لتواصلك معنا! 🌟',
    autoReplyEnabled: true,
  });

  const handleChange = (field, value) => {
    setBotConfig((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert('✅ تم حفظ إعدادات البوت بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">إعدادات البوت</h1>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">اسم البوت</label>
          <input
            type="text"
            value={botConfig.botName}
            onChange={(e) => handleChange('botName', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">الرسالة الترحيبية</label>
          <textarea
            value={botConfig.welcomeMessage}
            onChange={(e) => handleChange('welcomeMessage', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
            rows="2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">رسالة نهاية المحادثة</label>
          <textarea
            value={botConfig.goodbyeMessage}
            onChange={(e) => handleChange('goodbyeMessage', e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1"
            rows="2"
          />
        </div>

        <div className="flex items-center space-x-2 space-x-reverse pt-2">
          <input
            type="checkbox"
            checked={botConfig.autoReplyEnabled}
            onChange={() => handleChange('autoReplyEnabled', !botConfig.autoReplyEnabled)}
          />
          <label className="text-sm">تفعيل الردود التلقائية</label>
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
