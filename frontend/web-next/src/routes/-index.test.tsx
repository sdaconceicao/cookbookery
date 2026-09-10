import { render, screen } from "@testing-library/react";

import { HomePage } from "./index";

describe("HomePage", () => {
  it("identifies the Cookbookery frontend foundation", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "Cookbookery" })).toBeInTheDocument();
    expect(screen.getByText(/TanStack Start and Lago experience/i)).toBeInTheDocument();
  });
});
