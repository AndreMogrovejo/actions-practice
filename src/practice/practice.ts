interface Transaction {
  amount: number;
  type: "money🤑" | "melomerezco🗿";
}

interface Totals {
  totalIncome: number;
  totalExpenses: number;
}

const getTotal = (ts: Transaction[], tp: Transaction["type"]): number => {
  return ts.reduce((a, t) => (t.type === tp ? a + Math.abs(t.amount) : a), 0);
};

/**
 * Calcula el total de ingresos y gastos a partir de un arreglo de transacciones.
 * @param {Transaction[]} trs - Un arreglo de objetos de transacciones.
 * @returns {Totals} - Un objeto con las propiedades totalIncome y totalExpenses.
 */
function calculateTotals(ts: Transaction[]): Totals {
  return {
    totalIncome: getTotal(ts, "money🤑"),
    totalExpenses: getTotal(ts, "melomerezco🗿")
  };
}

export { calculateTotals };
