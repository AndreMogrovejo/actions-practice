import { Totals, Transaction } from "./practice.types";

/**
 * Calcula el total de ingresos y gastos a partir de un arreglo de transacciones.
 * @param {Transaction[]} transactions - Un arreglo de objetos de transacciones.
 * @returns {Totals} - Un objeto con las propiedades totalIncome y totalExpenses.
 */
const calculateTotals = (transactions: Transaction[]): Totals => {
  const result = transactions.reduce<Totals>(
    (acc, transaction) => {
      const { amount, type } = transaction;
      const isIncome = type === "money🤑";
      const absoluteAmount = Math.abs(amount);
      const totalIncome = isIncome
        ? acc.totalIncome + absoluteAmount
        : acc.totalIncome;
      const totalExpenses = isIncome
        ? acc.totalExpenses
        : acc.totalExpenses + absoluteAmount;
      return {
        totalIncome,
        totalExpenses
      };
    },
    {
      totalIncome: 0,
      totalExpenses: 0
    }
  );

  return result;
};

export { calculateTotals };
