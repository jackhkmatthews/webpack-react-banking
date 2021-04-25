import { TransactionSort } from "./components/Sort/Sort";
import { MocklyTransaction } from "./types/mockly";

export function sortTransactions(
  transactions: MocklyTransaction[],
  sort: TransactionSort
): MocklyTransaction[] {
  switch (sort) {
    case TransactionSort.NEWEST:
      // TODO(jack.matthews): refactor so only new Date once per transaction
      return transactions.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        if (a.date == b.date) {
          return 0;
        } else if (aDate > bDate) {
          return -1;
        } else {
          return +1;
        }
      });
    case TransactionSort.OLDEST:
      return transactions.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        if (a.date == b.date) {
          return 0;
        } else if (aDate > bDate) {
          return +1;
        } else {
          return -1;
        }
      });
    // TODO(jack.matthews): refactor so only Maths abs once per transaction
    case TransactionSort.LARGEST:
      return transactions.sort(
        (a, b) => Math.abs(b.amount.value) - Math.abs(a.amount.value)
      );
    case TransactionSort.SMALLEST:
      return transactions.sort(
        (a, b) => Math.abs(a.amount.value) - Math.abs(b.amount.value)
      );
  }
}
