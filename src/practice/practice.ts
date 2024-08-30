interface Transaction {
  amount: number;
  type: "money🤑" | "melomerezco🗿";
}

interface Totals {
  totalIncome: number;
  totalExpenses: number;
}

/**
 * Calcula el total de ingresos y gastos a partir de un arreglo de transacciones.
 * @param {Transaction[]} transactions - Un arreglo de objetos de transacciones.
 * @returns {Totals} - Un objeto con las propiedades totalIncome y totalExpenses.
 */
function calculateTotals(transactions: Transaction[]): Totals {
  if (transactions.length === 0) return { totalIncome: 0, totalExpenses: 0 };

  return transactions.reduce(
    (totals, transaction) => {
      const { amount, type } = transaction;
      const absolute = Math.abs(amount);
      if (type === "money🤑") {
        totals.totalIncome += absolute;
      } else {
        totals.totalExpenses += absolute;
      }
      return totals;
    },
    { totalIncome: 0, totalExpenses: 0 }
  );
}

export { calculateTotals };
