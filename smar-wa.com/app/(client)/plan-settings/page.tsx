'use client';

import { useState } from 'react';

export default function PlanSettings() {
  const [plan, setPlan] = useState({
    name: 'الباقة المتقدمة',
    price: 149,
    startDate: '2025-07-01',
    endDate: '2025-08-01',
    status: 'نشطة',
  });

  const otherPlans = [
    { name: 'الباقة الأساسية', price: 49 },
    { name: 'الباقة الاحترافية', price: 299 },
  ];

  const handleRenew = () => {
    alert('✅ تم تجديد الباقة بنجاح!');
  };

  const handleUpgrade = () => {
    alert('📈 تم تحويلك إلى صفحة الترقية!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">إعدادات الباقة</h1>

      <div className="bg-white rounded shadow p-6 space-y-3">
        <p><strong>اسم الباقة:</strong> {plan.name}</p>
        <p><strong>السعر:</strong> {plan.price} ريال / شهر</p>
        <p><strong>بداية الاشتراك:</strong> {plan.startDate}</p>
        <p><strong>نهاية الاشتراك:</strong> {plan.endDate}</p>
        <p>
          <strong>الحالة:</strong>{' '}
          <span className={plan.status === 'نشطة' ? 'text-green-600' : 'text-red-600'}>
            {plan.status}
          </span>
        </p>

        <div className="flex gap-4 pt-4">
          <button onClick={handleRenew} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            تجديد الاشتراك
          </button>
          <button onClick={handleUpgrade} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            ترقية الباقة
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6 space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">باقات أخرى</h2>
        <ul className="space-y-2 text-sm">
          {otherPlans.map((plan, index) => (
            <li key={index} className="border p-3 rounded bg-gray-50 flex justify-between">
              <span>{plan.name}</span>
              <span>{plan.price} ريال / شهر</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
