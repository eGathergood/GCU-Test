import React from 'react';

type Filter = 'all' | 'completed' | 'pending';

interface Props {
  currentFilter: Filter;
  onChange: (filter: Filter) => void;
}

const FilterButtons: React.FC<Props> = ({ currentFilter, onChange }) => {
  const filters: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
  ];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-4 py-2 rounded-md font-medium transition ${
            currentFilter === value
              ? 'bg-[#004785] text-white'
              : 'bg-white border border-[#004785] text-[#004785] hover:bg-[#004785] hover:text-white'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
