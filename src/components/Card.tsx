import React from "react";

interface CardType {
  title: string;
  amount: number;
  type: string;
}

const Card: React.FC<CardType> = ({ title, amount, type }) => {
  return (
    <div className="w-[355.41px] h-[181px] rounded-[15px] bg-[#9B9B9B] flex flex-col justify-center items-center">
      <p className="text-3xl">
        {title}: <span className="font-bold">{amount}</span>
      </p>
      {type === "INCOME" ? (
        <button>Add Income</button>
      ) : (
        <button>Add Expense</button>
      )}
    </div>
  );
};

export default Card;
