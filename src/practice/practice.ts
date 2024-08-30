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

// const calculateTotals = (transactions: Transaction[]): Totals => {
//   let totalIncome = 0;
//   let totalExpenses = 0;

//   for (const transaction of transactions) {
//     if (transaction.type === 'money🤑') {
//       totalIncome += Math.abs(transaction.amount);
//     } else if (transaction.type === 'melomerezco🗿') {
//       totalExpenses += Math.abs(transaction.amount);
//     }
//   }

//   return {
//     totalIncome,
//     totalExpenses
//   };
// }

// const calculateTotals2 = (transactions: Transaction[]): Totals => {
//   let totalIncome = 0;
//   let totalExpenses = 0;

//   for (const transaction of transactions) {
//     transaction.type === 'money🤑' ? totalIncome += Math.abs(transaction.amount) :
//       totalExpenses += Math.abs(transaction.amount);
//   }

//   return {
//     totalIncome,
//     totalExpenses
//   };
// }

// const calculateTotals3 = (transactions: Transaction[]): Totals => {
//   let totalIncome = 0;
//   let totalExpenses = 0;

//   transactions.forEach(transaction => {
//     transaction.type === 'money🤑' ? totalIncome += Math.abs(transaction.amount) :
//       totalExpenses += Math.abs(transaction.amount);
//   });

//   return {
//     totalIncome,
//     totalExpenses
//   };
// }

const calculateTotals = (transactions: Transaction[]): Totals => {
  return transactions.reduce(
    (acc, { type, amount }) => (
      type === "money🤑"
        ? (acc.totalIncome += Math.abs(amount))
        : (acc.totalExpenses += Math.abs(amount)),
      acc
    ),
    { totalIncome: 0, totalExpenses: 0 }
  );
};

export { calculateTotals };
