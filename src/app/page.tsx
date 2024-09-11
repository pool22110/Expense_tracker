"use client";

import Card from "@/components/Card";
import PiePresentation from "@/components/PiePresentation";
import TopExpense from "@/components/TopExpense";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="py-3 px-8">
        <h1 className="text-[32px] font-bold leading-9">Expense Tracker</h1>
        <div className="w-full h-max p-6 rounded-[10px] bg-[#626262] mt-[9px] flex justify-between">
          <Card title="Wallet Balance" amount={500} type="INCOME"/>
          <Card title="Expenses" amount={500} type="EXPENSE"/>
          <PiePresentation />
        </div>
        <TopExpense />
      </main>
    </Provider>
  );
}
