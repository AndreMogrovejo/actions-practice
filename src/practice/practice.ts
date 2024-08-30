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
  let totals={
    totalIncome: 0,
    totalExpenses: 0
  };

  if (transactions.length){
    const totalIncome=transactions.reduce((acc, item)=>{
      if (item.type==='money🤑'){
        return acc+Math.abs(item.amount);
      }
      return acc;
    },0)

    const totalExpenses=transactions.reduce((acc, item)=>{
      if (item.type==='melomerezco🗿'){
        return acc+Math.abs(item.amount);
      }
      return acc;
    },0)

    totals= {
      totalIncome,
      totalExpenses
    }
  }
  return totals;
}


export { calculateTotals };