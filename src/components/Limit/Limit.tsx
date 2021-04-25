import React from "react";

interface LimitProps {
  limit: number;
  onLimit: (limit: number) => void;
  className?: string;
}

const LIMIT_OPTIONS = [10, 15, 20];

export const Limit: React.FC<LimitProps> = ({ limit, onLimit, className }) => {
  return (
    <form className={className}>
      <label htmlFor="limit">Number of transactions:</label>
      <select
        name="limit"
        id="limit"
        value={limit}
        onChange={(e) => onLimit(Number(e.target.value))}
      >
        {LIMIT_OPTIONS.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
    </form>
  );
};
