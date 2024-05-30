import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { FilterInput } from "@/components/FilterInput/FilterInput";

jest.useFakeTimers();

describe("FilterInput", () => {
  it("renders with placeholder and value correctly", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <FilterInput filter="" setFilter={() => {}} debounceDelay={500} />
    );
    const inputElement = getByPlaceholderText(
      "Enter product name"
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    const inputValue = getByDisplayValue("") as HTMLInputElement;
    expect(inputValue).toBeInTheDocument();
  });

  it("updates input value correctly on change", () => {
    const setFilterMock = jest.fn();
    const { getByPlaceholderText } = render(
      <FilterInput filter="" setFilter={setFilterMock} debounceDelay={500} />
    );
    const inputElement = getByPlaceholderText(
      "Enter product name"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });

  it("calls setFilter after debounce delay", async () => {
    const setFilterMock = jest.fn();
    const { getByPlaceholderText } = render(
      <FilterInput filter="" setFilter={setFilterMock} debounceDelay={500} />
    );
    const inputElement = getByPlaceholderText(
      "Enter product name"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test" } });
    jest.advanceTimersByTime(500);
    await waitFor(() => {
      expect(setFilterMock).toHaveBeenCalledWith("test");
    });
  });
});
