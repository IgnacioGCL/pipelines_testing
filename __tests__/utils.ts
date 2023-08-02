import { render as _render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";

export * from "@testing-library/react";

type RenderOptions = Parameters<typeof _render>[1];

export const render = (ui: ReactElement, options?: RenderOptions) => {
  const user = userEvent.setup();
  const result = _render(ui, options);
  return {
    user,
    ...result,
  };
};
