import { render, screen } from "test/utils";
import { describe, expect, it } from "vitest";
import SuperComponent from "@/components/SuperComponent";

describe("SuperComponent", () => {
  it("should render", () => {
    const result = render(<SuperComponent />);
    expect(result).toMatchSnapshot();
  });

  it("should change counter when pressed", async () => {
    const { user } = render(<SuperComponent />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByRole("button")).toHaveTextContent("count is 1");
  });

  it("should have red color when counter is even", async () => {
    const { user } = render(<SuperComponent />);
    const counter = screen.getByTestId("counter");
    expect(counter.style.color).toBe("red");
    const button = screen.getByRole("button");
    await user.click(button);
    expect(counter.style.color).not.toBe("red");
    await user.click(button);
    expect(counter.style.color).toBe("red");
  });

  it("should have blue color when counter is odd", async () => {
    const { user } = render(<SuperComponent />);
    const counter = screen.getByTestId("counter");
    expect(counter.style.color).not.toBe("blue");
    const button = screen.getByRole("button");
    await user.click(button);
    expect(counter.style.color).toBe("blue");
    await user.click(button);
    expect(counter.style.color).not.toBe("blue");
  });
});
