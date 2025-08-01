'use client';

import { useState } from 'react';

const mockChats = [
  {
    phone: '966500000001',
    name: 'عميل 1',
    messages: [
      { from: 'client', text: 'السلام عليكم' },
      { from: 'bot', text: 'وعليكم السلام، كيف أقدر أساعدك؟' },
    ],
  },
  {
    phone: '966511111111',
    name: 'عميل 2',
    messages: [
      { from: 'client', text: 'كم سعر الاشتراك؟' },
      { from: 'bot', text: 'الاشتراك يبدأ من 99 ريال شهريًا 💸' },
    ],
  },
];

export default function LiveChat() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [reply, setReply] = useState('');

  const handleSend = () => {
    if (!reply.trim()) return;
    const updated = { ...selectedChat };
    updated.messages.push({ from: 'bot', text: reply });
    setSelectedChat(updated);
    setReply('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/3 bg-white p-4 border-r">
        <h2 className="text-xl font-bold mb-4">المحادثات</h2>
        <ul className="space-y-2">
          {mockChats.map((chat, index) => (
            <li
              key={index}
              onClick={() => setSelectedChat(chat)}
              className="p-3 rounded cursor-pointer hover:bg-gray-100 border"
            >
              <div className="font-medium">{chat.name}</div>
              <div className="text-sm text-gray-500">{chat.phone}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-4">
        {selectedChat ? (
          <>
            <h2 className="text-lg font-bold mb-2">{selectedChat.name} - {selectedChat.phone}</h2>
            <div className="bg-white rounded shadow p-4 h-96 overflow-y-auto space-y-2">
              {selectedChat.messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded w-fit max-w-xs ${
                    msg.from === 'bot' ? 'ml-auto bg-green-100 text-right' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="اكتب ردك هنا..."
                className="flex-1 border px-3 py-2 rounded"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                إرسال
              </button>
            </div>
          </>
        ) : (
          <div className="text-gray-600">اختر محادثة لعرضها...</div>
        )}
      </div>
    </div>
  );
}
