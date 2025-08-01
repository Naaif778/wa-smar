'use client';

export default function Statistics() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">الإحصائيات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">عدد العملاء المتفاعلين</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">124</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">عدد الرسائل المرسلة</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">879</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">أكثر كلمة مفتاحية استخدامًا</h2>
          <p className="text-xl mt-2">"سعر"</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">متوسط الردود اليومية</h2>
          <p className="text-2xl mt-2">35</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">تفاعل العملاء خلال 7 أيام</h2>
        <img src="https://quickchart.io/chart?c={type:'bar',data:{labels:['أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'],datasets:[{label:'عدد الرسائل',data:[25,32,41,38,22,50,35]}]}}" className="w-full max-w-3xl" />
      </div>
    </div>
  );
}
