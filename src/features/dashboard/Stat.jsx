

function Stat({ icon, title, value, color }) {
  return (
    <div dir="rtl" className={`flex items-center bg-${color}-300 py-8 font-beyekan font-bold text-${color}-600 rounded-md mx-4 col-span-1 h-14`}>
      <div className={`text-${color}-600 rounded-full text-2xl p-4`}>{icon}</div>
      <div>
        <h5>{title}</h5>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default Stat;
