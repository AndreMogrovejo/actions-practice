interface Transaction {
    amount: number;
    type: 'money🤑' | 'melomerezco🗿';
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
  return transactions.reduce(
    (totals, { amount, type }) => {
      const absAmount = Math.abs(amount);
      if (type === "money🤑") {
        totals.totalIncome += absAmount;
      } else if (type === "melomerezco🗿") {
        totals.totalExpenses += absAmount;
      }
      return totals;
    },
    { totalIncome: 0, totalExpenses: 0 }
  );
}


export { calculateTotals };