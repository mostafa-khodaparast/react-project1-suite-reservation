import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const startData = [
  {
    duration: "1شب",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 شب",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 شب",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 شب",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 شب",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 شب",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "14+ شب",
    value: 0,
    color: "#3b82f6",
  },
]


function prepareData(startData, bookings) {


  function countValueInStartData(startDataArr, startDataField) {
    return startDataArr.map(eachStartDataObj =>
      eachStartDataObj.duration === startDataField ?
        { ...eachStartDataObj, value: eachStartDataObj.value + 1 }
        : eachStartDataObj
    )
  }

  const data = bookings?.reduce((arr, cur) => {
    const num = cur.numNights
    if (num === 1) return countValueInStartData(arr, "1شب")
    if (num === 2) return countValueInStartData(arr, "2 شب")
    if (num === 3) return countValueInStartData(arr, "3 شب")
    if ([4, 5].includes(num)) return countValueInStartData(arr, "4-5 شب")
    if ([6, 7].includes(num)) return countValueInStartData(arr, "6-7 شب")
    if (num >= 8 && num <= 14) return countValueInStartData(arr, "8-14 شب")
    if (num >= 14) return countValueInStartData(arr, "14+ nights")
    return arr
  }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}


const DurationChart =({ bookings }) => {
  const data = prepareData(startData, bookings.data);

  return (
    <div dir="rtl" className="w-[80%] mx-auto mt-10 border-2 border-stone-500 p-7 rounded-lg">
      <span className=" font-beyekan font-bold pl-10 text-2xl text-blue-950 dark:text-stone-300">نمودار مدت اقامت</span>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data?.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="left"
            width="40%"
            layout="vertical"
            iconSize={10}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DurationChart;
