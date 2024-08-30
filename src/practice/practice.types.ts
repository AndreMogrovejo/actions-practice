export type TransactionType = "money🤑" | "melomerezco🗿";

export interface Transaction {
  amount: number;
  type: TransactionType;
}

export interface Totals {
  totalIncome: number;
  totalExpenses: number;
}
