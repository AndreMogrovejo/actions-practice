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
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach(transaction => {
    if (transaction.type === 'money🤑') {
      totalIncome += Math.abs(transaction.amount);
    } else if (transaction.type === 'melomerezco🗿') {
      totalExpenses += Math.abs(transaction.amount);
    }
  });

  return {
    totalIncome,
    totalExpenses
  }
}


export { calculateTotals };