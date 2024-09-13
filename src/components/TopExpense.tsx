import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const TopExpense: React.FC = () => {

  const data = useSelector((state: RootState) => state.expenseSummary);

  return (
    <div >
      <h1 className="text-[28px] italic font-extrabold">Top Expense</h1>
      <ComposedChart
        layout="vertical"
        width={400}
        height={345}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        className="h-[345px] w-[417px] p-2 bg-white rounded-[15px] mt-[10px] text-xs"
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  );
};

export default TopExpense;
