import React, { useState, useEffect, useRef } from 'react';

interface AutocompleteProps {
  options: string[];
  label: string;
  placeholder: string;
  onSelect: (value: string) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ options, label, placeholder, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic filtering logic
    if (inputValue.trim() === '') {
      setFilteredOptions([]);
    } else {
      const lowerInput = inputValue.toLowerCase();
      const matches = options.filter(opt => 
        opt.toLowerCase().includes(lowerInput)
      );
      setFilteredOptions(matches);
    }
  }, [inputValue, options]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
    // Reset selection in parent if user types something new
    if (e.target.value === '') {
      onSelect('');
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full relative" ref={wrapperRef}>
      <label className="block text-sm font-semibold text-[#1B2B4C] mb-2 uppercase tracking-wide">{label}</label>
      <div className="relative group">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F08C34] focus:border-[#F08C34] outline-none transition-all shadow-sm text-lg text-[#1B2B4C] placeholder-gray-400"
        />
        {inputValue && (
          <button
            onClick={() => {
                setInputValue('');
                onSelect('');
                setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F08C34] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-72 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-3 hover:bg-orange-50 hover:text-[#F08C34] cursor-pointer transition-colors border-b border-gray-50 last:border-b-0 text-[#1B2B4C] font-medium"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      
      {isOpen && inputValue && filteredOptions.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 text-center text-gray-500">
          Aucun département trouvé
        </div>
      )}
    </div>
  );
};