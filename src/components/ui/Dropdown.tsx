import React, { useState } from "react";

export interface DropdownItem {
  id: number;
  label: string;
  value: string;
}

interface DropdownProps {
  dropdownLabel: string;
  items: DropdownItem[];
  buttonStyle?: string;
  dropdownItemStyle?: string;
  setUserType: React.Dispatch<React.SetStateAction<number>>;
}

export default function Dropdown({
  dropdownLabel,
  items,
  buttonStyle = "",
  dropdownItemStyle = "",
  setUserType,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`${dropdownItemStyle} inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {dropdownLabel}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {isOpen && (
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <button
                className={`block px-4 py-2 text-sm text-gray-700 ${buttonStyle}`}
                onClick={() => {
                  setIsOpen((isOpen) => !isOpen);
                  setUserType(item.id);
                }}
                key={index}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
