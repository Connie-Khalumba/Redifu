import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { day: "01", lastWeek: 30, last6Days: 50 },
  { day: "02", lastWeek: 20, last6Days: 45 },
  { day: "03", lastWeek: 25, last6Days: 60 },
  { day: "04", lastWeek: 35, last6Days: 70 },
  { day: "05", lastWeek: 20, last6Days: 55 },
  { day: "06", lastWeek: 15, last6Days: 65 },
];

const pieData = [
  { name: "Afternoon", value: 40, color: "#4CAF50" },
  { name: "Evening", value: 32, color: "#9C27B0" },
  { name: "Morning", value: 28, color: "#03A9F4" },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Amount of wasted food</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <Tooltip />
              <Bar dataKey="last6Days" fill="#4CAF50" />
              <Bar dataKey="lastWeek" fill="#BDBDBD" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Order Time</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Ratings */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Your Rating</h3>
          <div className="flex gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg">92%</div>
            <div className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white rounded-full text-lg">85%</div>
            <div className="w-16 h-16 flex items-center justify-center bg-purple-500 text-white rounded-full text-lg">85%</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
