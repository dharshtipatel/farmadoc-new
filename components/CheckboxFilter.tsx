"use client";
import { useState } from "react";

type CheckboxOption = {
  label: string;
  value?: string; // optional, not used in filter state
};

type CheckboxFilterProps = {
  options: CheckboxOption[];
  selected?: string[]; // array of selected labels
  onChange?: (label: string, checked: boolean) => void;
  defaultVisible?: number;
};

export default function CheckboxFilter({
  options,
  selected = [],
  onChange,
  defaultVisible = 10,
}: CheckboxFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleOptions = expanded
    ? options
    : options.slice(0, defaultVisible);

  const hiddenCount = Math.max(options.length - defaultVisible, 0);

  return (
    <div className="flex flex-col gap-2">
      {visibleOptions.map((option) => (
        <label
          key={option.label}
          className="inline-flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selected.includes(option.label)}
            onChange={(e) =>
              onChange?.(option.label, e.target.checked) // pass label
            }
            className="form-checkbox h-[23px] w-[23px] text-[#1E3862] peer"
          />

          <span className="text-gray-700 font-medium peer-checked:text-[#1E3862]">
            {option.label}
          </span>
        </label>
      ))}

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-left text-[#1E3862] text-sm font-medium mt-1"
        >
          {expanded ? "Show less" : `+ ${hiddenCount} more`}
        </button>
      )}
    </div>
  );
}