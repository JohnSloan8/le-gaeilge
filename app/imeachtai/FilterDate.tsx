import { type Dispatch, type SetStateAction } from "react";

interface FilterDateProps {
  dateFilter: string;
  setDateFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterDate({
  dateFilter,
  setDateFilter,
}: FilterDateProps) {
  return (
    <div>
      <h2>Event Filter</h2>
      <select
        value={dateFilter}
        onChange={(e) => {
          setDateFilter(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="today">Today</option>
        <option value="thisWeek">This Week</option>
        <option value="next30Days">This Month</option>
      </select>
    </div>
  );
}
