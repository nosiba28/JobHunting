import React from "react";
import './Statistics.css'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const Statistics = () => {
  const data = [
    {
      id: 1,
      name: "Assignment-1",
      marks: 60
    },
    {
      id: 2,
      name: "Assignment-2",
      marks: 60
    },
    {
      id: 3,
      name: "Assignment-3",
      marks: 60
    },
    {
      id: 4,
      name: "Assignment-4",
      marks: 60
    },
    {
      id: 5,
      name: "Assignment-5",
      marks: 57
    },
    {
      id: 6,
      name: "Assignment-6",
      marks: 30
    },
    {
      id: 7,
      name: "Assignment-7",
      marks: 30
    },
    {
      id: 8,
      name: "Assignment-8",
      marks: 60
    }
  ];

  return (
    <div className="statistics">
      <div className="stat-banner">
        <h2>Assignment Statistics</h2>

      </div>
      <div className="area-chart">
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;