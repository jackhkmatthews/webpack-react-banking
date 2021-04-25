import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AccountCard } from "./AccountCard";
import { AccountProvider, MocklyBalance } from "../../types/mockly";

const mockBalance: MocklyBalance = {
  amount: 1250.32,
  currency_iso: "GBP",
};

const mockProvider: AccountProvider = {
  account_number: "12345678",
  description: "Current Account",
  sort_code: "12-34-56",
  title: "Monzo",
};

afterEach(cleanup);

describe("This will test AccountCard", () => {
  test("should render account information", () => {
    const { getByText } = render(
      <AccountCard
        amount={mockBalance.amount}
        currency={mockBalance.currency_iso}
        title={mockProvider.title}
        accountNumber={mockProvider.account_number}
        type={mockProvider.description}
        sortCode={mockProvider.sort_code}
      />
    );

    expect(
      getByText(`${mockBalance.amount} - ${mockBalance.currency_iso}`)
    ).toBeInTheDocument();
    expect(getByText(mockProvider.account_number)).toBeInTheDocument();
    expect(getByText(mockProvider.title)).toBeInTheDocument();
    expect(getByText(mockProvider.description)).toBeInTheDocument();
    expect(getByText(mockProvider.sort_code)).toBeInTheDocument();
  });
});
