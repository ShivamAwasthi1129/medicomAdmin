"use client";
import * as React from "react";
import { FiShoppingBag, FiUsers } from "react-icons/fi";
import { LineChart } from "@mui/x-charts/LineChart";

const Dashboard = ({
  sales = 14732,
  salesChange = 8.5,
  visitors = 129368,
  visitorsChange = -7.6,
}) => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4500, 3200, 5000, 6100, 7200];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 5900, 6700, 7500, 8100, 9200];
  const xLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getChangeColor = (change) => {
    return change > 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeBackgroundColor = (change) => {
    return change > 0 ? "bg-green-600" : "bg-red-600";
  };

  const getChangeText = (change) => {
    return change > 0 ? "Increase by" : "Decreased by";
  };

  return (
    <>
     <div className="flex flex-col">
     <p className="text-2xl font-bold px-4 text-center">Sales & Earnings</p>
      <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-start lg:justify-center">
        {/* Sales and Visitors Section */}
        <div className="flex flex-col gap-4 w-full lg:w-96 border-2 border-gray-300 shadow-lg rounded-md">
          {/* Total Sales Card */}
          <div className="bg-white p-6 m-2 rounded-lg shadow-md flex items-center justify-between flex-col sm:flex-row border">
            <div className="flex items-center gap-4">
              <div className="bg-pink-200 p-6 rounded-lg flex items-center justify-center">
                <FiShoppingBag size={24} className="text-white relative" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm">Total Sales</h3>
                <h2 className="text-2xl font-bold">{sales}</h2>
                <p className={`${getChangeColor(salesChange)} text-sm`}>
                  {getChangeText(salesChange)}
                  <span
                    className={`${getChangeBackgroundColor(salesChange)} p-1 ml-1 rounded-md text-white font-bold`}
                  >
                    {salesChange > 0 ? `+${salesChange}%` : `${salesChange}%`}
                  </span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>

          {/* Total Visitors Card */}
          <div className="bg-white p-6 m-2 rounded-lg shadow-md flex items-center justify-between flex-col sm:flex-row border">
            <div className="flex items-center gap-4">
              <div className="bg-green-200 p-6 rounded-lg flex items-center justify-center">
                <FiUsers size={24} className="text-white relative" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm">Total Visitors</h3>
                <h2 className="text-2xl font-bold">{visitors}</h2>
                <p className={`${getChangeColor(visitorsChange)} text-sm`}>
                  {getChangeText(visitorsChange)}
                  <span
                    className={`${getChangeBackgroundColor(visitorsChange)} p-1 ml-1 rounded-md text-white font-bold`}
                  >
                    {visitorsChange > 0 ? `+${visitorsChange}%` : `${visitorsChange}%`}
                  </span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Line Chart Section */}
        <div className="w-full lg:w-auto bg-white border-2 border-gray-300 p-6  rounded-lg shadow-lg">
          <LineChart
            width={window.innerWidth < 768 ? 300 : 1000}
            height={300}
            series={[
              { data: pData, label: "Price in $" },
              { data: uData, label: "Units sold" },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            yAxis={[
              {
                label: "Price ($)",
                valueFormatter: (value) => `$${value}`,
              },
            ]}
          />
        </div>
      </div>
     </div>
    </>


  );
};

export default Dashboard;
