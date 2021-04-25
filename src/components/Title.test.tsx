import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Title } from "./Title";

afterEach(cleanup);

describe("This will test Title", () => {
  test("should render text", () => {
    const title = "Hi";
    const { getByText } = render(<Title title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
