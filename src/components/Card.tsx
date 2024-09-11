import React from "react";

interface CardType {
  title: string;
  amount: number;
  type: string;
}

const Card: React.FC<CardType> = ({ title, amount, type }) => {
  return (
    <div className="w-[355.41px] h-[181px] rounded-[15px] bg-[#9B9B9B] flex flex-col justify-center items-center gap-[19px]">
      <p className="text-3xl">
        {title}: <span className="font-bold">{amount}</span>
      </p>
      {type === "INCOME" ? (
        <button className="h-[38px] w-[167.65px] rounded-[15px] bg-gradient-to-r from-[#B5DC52] to-[#89E148] font-bold">+ Add Income</button>
      ) : (
        <button className="h-[38px] w-[167.65px] rounded-[15px] bg-gradient-to-r from-[#FF9595] via-[#FF4747] to-[#FF3838] font-bold">+ Add Expense</button>
      )}
    </div>
  );
};

export default Card;
