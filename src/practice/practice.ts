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
  //  TODO: Trabajar 😠 ARRE
  if (transactions.length === 0) {
    return {
      totalIncome: 0,
      totalExpenses: 0
    };
  }
  return transactions.reduce(
    (acc, transaction) => {
      const { amount, type } = transaction;
      const totalIncome = acc.totalIncome + Math.abs(amount);
      const totalExpenses = acc.totalExpenses + Math.abs(amount);
      if (type === "money🤑") return { ...acc, totalIncome };
      if (type === "melomerezco🗿") return { ...acc, totalExpenses };
      return { ...acc };
    },
    { totalIncome: 0, totalExpenses: 0 }
  );
}

export { calculateTotals };
