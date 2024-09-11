import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Summary {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: Date;
}

export interface ExpenseState {
  balance: number;
  expense: number;
  expenseSummary: Summary[];
}

const initialState: ExpenseState = {
  balance: 5000,
  expense: 0,
  expenseSummary: [],
};

export const expenseSlice = createSlice({
  name: "expense-tracker",
  initialState,
  reducers: {
    addBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    addExpense: (state, action: PayloadAction<Summary>) => {
      state.balance -= action.payload.amount;
      state.expense += action.payload.amount;
      state.expenseSummary.push(action.payload);
    },
    editExpense: (state, action: PayloadAction<Summary>) => {
      const index = state.expenseSummary.findIndex(
        (item) => item.id === action.payload.id
      );
      state.expenseSummary[index] = {
        ...state.expenseSummary[index],
        ...action.payload,
      };
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenseSummary = state.expenseSummary.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addBalance, addExpense, editExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
