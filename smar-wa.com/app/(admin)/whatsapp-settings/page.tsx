'use client';

import { useState } from 'react';

export default function WhatsAppSettings() {
  const [qrVisible, setQrVisible] = useState(false);
  const [connected, setConnected] = useState(false);
  const [webhook, setWebhook] = useState('');

  const generateQR = () => {
    setQrVisible(true);
    setConnected(true); // للاختبار فقط
  };

  const saveSettings = () => {
    alert('تم حفظ إعدادات Webhook بنجاح ✅');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">إعدادات الربط مع WhatsApp</h2>

      <div className="bg-white rounded shadow p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 text-lg font-medium">حالة الاتصال:</span>
          <span className={`text-sm font-bold px-3 py-1 rounded ${
            connected ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}>
            {connected ? 'متصل' : 'غير متصل'}
          </span>
        </div>

        <button
          onClick={generateQR}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          توليد QR جديد
        </button>

        {qrVisible && (
          <div className="border p-4 rounded bg-gray-50 text-center">
            <p className="text-gray-600 mb-2">امسح هذا الكود من خلال تطبيق WhatsApp على الجوال:</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://smar-wa.com/qr-session" alt="QR Code" className="mx-auto" />
          </div>
        )}
      </div>

      <div className="bg-white rounded shadow p-4 space-y-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Webhook أو API Token:</label>
        <input
          type="text"
          value={webhook}
          onChange={(e) => setWebhook(e.target.value)}
          placeholder="https://your-server.com/webhook"
          className="w-full border border-gray-300 px-3 py-2 rounded text-right"
        />
        <button
          onClick={saveSettings}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );
}
