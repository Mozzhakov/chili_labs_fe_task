import { StyledFilterInput } from "./StyledFilterInput";
import { useState, useEffect, useCallback } from "react";

interface FilterInputProps {
  filter: string;
  setFilter: (filter: string) => void;
  debounceDelay?: number;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  filter,
  setFilter,
  debounceDelay = 500,
}) => {
  const [inputValue, setInputValue] = useState(filter);

  const debouncedSetFilter = useCallback(() => {
    const handler = setTimeout(() => {
      setFilter(inputValue);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, debounceDelay, setFilter]);

  useEffect(() => {
    return debouncedSetFilter();
  }, [inputValue, debouncedSetFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledFilterInput
      type="text"
      placeholder="Enter product name"
      value={inputValue}
      onChange={handleChange}
    />
  );
};
