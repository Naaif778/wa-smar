'use client';

export default function AdminPlans() {
  const plans = [
    { id: 1, name: 'الخطة المجانية', price: '0 ريال', duration: '7 أيام', features: ['رد تلقائي', 'QR ربط مبدئي'], active: true },
    { id: 2, name: 'الخطة الأساسية', price: '99 ريال', duration: 'شهر', features: ['ردود + إحصائيات', 'إرسال رسائل جماعية'], active: true },
    { id: 3, name: 'الخطة الاحترافية', price: '249 ريال', duration: 'شهر', features: ['ذكاء صناعي', 'أزرار تفاعلية', 'دعم مميز'], active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">إدارة الباقات</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">+ باقة جديدة</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{plan.name}</h2>
              <span className={`text-sm px-2 py-1 rounded ${
                plan.active ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
              }`}>
                {plan.active ? 'مفعلة' : 'غير مفعلة'}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{plan.price} – {plan.duration}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              {plan.features.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
            <div className="flex justify-between text-sm text-blue-600">
              <button className="hover:underline">تعديل</button>
              <button className="hover:underline">تفاصيل</button>
              <button className="text-red-500 hover:underline">حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
