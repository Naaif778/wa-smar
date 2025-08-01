'use client';

export default function AdminClients() {
  const clients = [
    { id: 1, name: 'أحمد القحطاني', email: 'ahmed@domain.com', plan: 'احترافية', status: 'نشط', messages: 1245 },
    { id: 2, name: 'سارة العنزي', email: 'sarah@domain.com', plan: 'تجريبية', status: 'منتهي', messages: 87 },
    { id: 3, name: 'محمد الزهراني', email: 'mohammed@domain.com', plan: 'أساسية', status: 'نشط', messages: 453 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">إدارة العملاء</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">+ عميل جديد</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-right">الاسم</th>
              <th className="py-3 px-4 text-right">البريد الإلكتروني</th>
              <th className="py-3 px-4 text-right">الباقة</th>
              <th className="py-3 px-4 text-right">الحالة</th>
              <th className="py-3 px-4 text-right">الرسائل</th>
              <th className="py-3 px-4 text-right">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b">
                <td className="py-2 px-4 text-right">{client.name}</td>
                <td className="py-2 px-4 text-right">{client.email}</td>
                <td className="py-2 px-4 text-right">{client.plan}</td>
                <td className="py-2 px-4 text-right">
                  <span className={`px-2 py-1 rounded text-sm ${
                    client.status === 'نشط' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-right">{client.messages}</td>
                <td className="py-2 px-4 text-right space-x-2 space-x-reverse">
                  <button className="text-blue-500 hover:underline">تفاصيل</button>
                  <button className="text-yellow-500 hover:underline">تعديل</button>
                  <button className="text-red-500 hover:underline">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
