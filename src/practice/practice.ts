import { Totals, Transaction } from "./practice.types";

const filterAndMap = (array: Transaction[], type: Transaction["type"]) => {
  return array.filter(item => item.type === type).map(item => item.amount);
};

const reduceArray = (array: number[]) => {
  return array.reduce((prevValue, value) => {
    return Math.abs(prevValue) + Math.abs(value);
  }, 0);
};

/**
 * Calcula el total de ingresos y gastos a partir de un arreglo de transacciones.
 * @param {Transaction[]} transactions - Un arreglo de objetos de transacciones.
 * @returns {Totals} - Un objeto con las propiedades totalIncome y totalExpenses.
 */
const calculateTotals = (transactions: Transaction[]): Totals => {
  const expenses = filterAndMap(transactions, "melomerezco🗿");
  const income = filterAndMap(transactions, "money🤑");

  const totalIncome = reduceArray(income);
  const totalExpenses = reduceArray(expenses);

  return {
    totalIncome,
    totalExpenses
  };
};

export { calculateTotals };
