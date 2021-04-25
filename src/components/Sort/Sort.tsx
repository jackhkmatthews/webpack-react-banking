import React from "react";

interface SortProps {
  sort: TransactionSort;
  onSort: (sort: TransactionSort) => void;
  className?: string;
}

export enum TransactionSort {
  NEWEST = "newest",
  OLDEST = "oldest",
  LARGEST = "largest",
  SMALLEST = "smallest",
}

export enum TransactionSortLabel {
  NEWEST = "Date (newest)",
  OLDEST = "Date (oldest)",
  LARGEST = "Size (largest)",
  SMALLEST = "Size (smallest)",
}

export interface TransactionSortOption {
  value: TransactionSort;
  label: TransactionSortLabel;
}

const SORT_OPTIONS: TransactionSortOption[] = [
  { value: TransactionSort.NEWEST, label: TransactionSortLabel.NEWEST },
  { value: TransactionSort.OLDEST, label: TransactionSortLabel.OLDEST },
  { value: TransactionSort.LARGEST, label: TransactionSortLabel.LARGEST },
  { value: TransactionSort.SMALLEST, label: TransactionSortLabel.SMALLEST },
];

export const Sort: React.FC<SortProps> = ({ sort, onSort, className }) => {
  return (
    <form className={className}>
      <label htmlFor="sort">Sort transactions by:</label>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(e) => onSort(e.target.value as TransactionSort)}
      >
        {SORT_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </form>
  );
};
