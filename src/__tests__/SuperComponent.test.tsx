import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SuperComponent from "../components/SuperComponent";

describe("SuperComponent", () => {
  it("should render", () => {
    const result = render(<SuperComponent />);
    expect(result).toMatchSnapshot();
  });

  it("should change counter when pressed", () => {
    render(<SuperComponent />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByRole("button")).toHaveTextContent("count is 1");
  });
});
