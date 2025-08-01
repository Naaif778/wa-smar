'use client';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">لوحة تحكم الأدمن</h1>
        <p className="text-sm text-gray-500">مرحبًا بك في Smar-WA 👋</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">عدد العملاء</h2>
          <p className="text-2xl font-bold text-green-600">132</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">الباقات النشطة</h2>
          <p className="text-2xl font-bold text-green-600">76</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">الرسائل اليومية</h2>
          <p className="text-2xl font-bold text-green-600">3,245</p>
        </div>
      </section>

      <section className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">الإجراءات السريعة</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">إضافة عميل</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">إنشاء باقة</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">إحصائيات</button>
        </div>
      </section>
    </div>
  );
}
