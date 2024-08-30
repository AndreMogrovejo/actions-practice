import { calculateTotals } from "src/practice/practice";
import { Transaction } from "src/practice/practice.types";
import { describe, it, expect } from "vitest";

describe("calculateTotals", () => {
  it("debe calcular correctamente los ingresos y gastos", () => {
    const transactions: Transaction[] = [
      { amount: 100, type: "money🤑" },
      { amount: 50, type: "melomerezco🗿" },
      { amount: 200, type: "money🤑" },
      { amount: 30, type: "melomerezco🗿" }
    ];
    expect(calculateTotals(transactions)).toEqual({
      totalIncome: 300,
      totalExpenses: 80
    });
  });

  it("debe devolver cero para ambos totales si no hay transacciones", () => {
    expect(calculateTotals([])).toEqual({
      totalIncome: 0,
      totalExpenses: 0
    });
  });

  it("debe manejar un solo tipo de transacción", () => {
    const incomeTransactions: Transaction[] = [
      { amount: 500, type: "money🤑" },
      { amount: 150, type: "money🤑" }
    ];
    expect(calculateTotals(incomeTransactions)).toEqual({
      totalIncome: 650,
      totalExpenses: 0
    });

    const expenseTransactions: Transaction[] = [
      { amount: 100, type: "melomerezco🗿" },
      { amount: 50, type: "melomerezco🗿" }
    ];
    expect(calculateTotals(expenseTransactions)).toEqual({
      totalIncome: 0,
      totalExpenses: 150
    });
  });

  it("debe manejar transacciones con montos negativos", () => {
    const transactions: Transaction[] = [
      { amount: -100, type: "money🤑" },
      { amount: 50, type: "melomerezco🗿" },
      { amount: -200, type: "money🤑" },
      { amount: -30, type: "melomerezco🗿" }
    ];
    expect(calculateTotals(transactions)).toEqual({
      totalIncome: 300,
      totalExpenses: 80
    });
  });
});
