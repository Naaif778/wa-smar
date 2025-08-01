'use client';

import { useState } from 'react';

export default function SendMessageWithButtons() {
  const [message, setMessage] = useState('');
  const [buttons, setButtons] = useState(['', '', '']);
  const [recipients, setRecipients] = useState('');

  const handleChangeButton = (index, value) => {
    const updated = [...buttons];
    updated[index] = value;
    setButtons(updated);
  };

  const handleSend = () => {
    if (!message || !recipients) {
      alert('يرجى تعبئة الرسالة والمستلمين قبل الإرسال.');
      return;
    }

    alert('✅ تم إرسال الرسالة بنجاح مع الأزرار!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">إرسال رسالة مع أزرار</h1>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">نص الرسالة</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">نصوص الأزرار (حتى 3)</label>
          <div className="space-y-2 mt-2">
            {buttons.map((btn, index) => (
              <input
                key={index}
                type="text"
                value={btn}
                onChange={(e) => handleChangeButton(index, e.target.value)}
                placeholder={`زر ${index + 1}`}
                className="w-full border px-3 py-2 rounded"
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            رقم المستلم أو مجموعة أرقام (مفصولة بفاصلة)
          </label>
          <input
            type="text"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            placeholder="مثال: 966500000000,966511111111"
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <button
          onClick={handleSend}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          إرسال الرسالة
        </button>
      </div>
    </div>
  );
}
