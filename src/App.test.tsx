import { render, screen } from "@testing-library/react";
import App from "./App";

describe("PokeApp main page tests", () => {
  it("Should render the title and subtitle", () => {
    render(<App />);
    const title = screen.getByText(/pokeapp/i);
    const subtitle = screen.getByText(/listado de pokemon/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
