import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AccountCard } from "./AccountCard";

afterEach(cleanup);

describe("This will test AccountCard", () => {
  test("should render balance", () => {
    const balance = 110;
    const { getByText } = render(<AccountCard balance={balance} />);

    expect(getByText(balance)).toBeInTheDocument();
  });
});
