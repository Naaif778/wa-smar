'use client';

import { useState } from 'react';

export default function AutoRepliesAI() {
  const [autoReplies, setAutoReplies] = useState([
    { id: 1, trigger: 'مرحبا', response: 'أهلاً وسهلاً! كيف يمكنني مساعدتك؟' },
    { id: 2, trigger: 'سعر الباقة', response: 'الباقة تبدأ من ٩٩ ريال شهرياً.' },
  ]);

  const [aiEnabled, setAiEnabled] = useState(true);
  const [testInput, setTestInput] = useState('');
  const [testResponse, setTestResponse] = useState('');

  const handleTestAI = () => {
    setTestResponse('🤖 رد تجريبي من الذكاء الاصطناعي بناءً على سؤالك...');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">الردود التلقائية</h2>
        <table className="w-full bg-white rounded shadow">
          <thead className="bg-gray-200 text-right">
            <tr>
              <th className="py-2 px-4">الكلمة المفتاحية</th>
              <th className="py-2 px-4">الرد</th>
              <th className="py-2 px-4">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {autoReplies.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4 text-right">{item.trigger}</td>
                <td className="py-2 px-4 text-right">{item.response}</td>
                <td className="py-2 px-4 text-right space-x-2 space-x-reverse">
                  <button className="text-blue-500 hover:underline">تعديل</button>
                  <button className="text-red-500 hover:underline">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">+ رد جديد</button>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">الذكاء الاصطناعي</h2>
        <div className="mb-4 flex items-center space-x-3 space-x-reverse">
          <label className="text-gray-700 text-sm">تفعيل الذكاء الاصطناعي:</label>
          <input type="checkbox" checked={aiEnabled} onChange={() => setAiEnabled(!aiEnabled)} />
        </div>
        <div className="bg-white rounded p-4 shadow space-y-4">
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-right"
            placeholder="اكتب استفسارك لاختبار الذكاء..."
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
          />
          <button onClick={handleTestAI} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            اختبار الرد
          </button>
          {testResponse && (
            <div className="text-sm text-gray-700 border-t pt-2">{testResponse}</div>
          )}
        </div>
      </section>
    </div>
  );
}
