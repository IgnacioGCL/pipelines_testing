import { render } from "test/utils";
import App from "../src/App";

describe("App", () => {
  it("should render", () => {
    const result = render(<App />);
    expect(result).toMatchSnapshot();
  });
});
