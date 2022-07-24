import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from ".";

const mock = jest.fn();

describe("SearchBar component tests", () => {
  it("Should render search input", () => {
    render(
      <SearchBar
        searchHandler={mock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const searchInput = screen.getByPlaceholderText(/buscar/i);
    expect(searchInput).toBeInTheDocument();
  });

  it("Should render add new button", () => {
    render(
      <SearchBar
        searchHandler={mock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const addNewBtn = screen.getByRole("button", { name: /nuevo/i });
    expect(addNewBtn).toBeInTheDocument();
  });

  it("Should call functions when click on addButton", () => {
    const addNewMock = jest.fn();
    render(
      <SearchBar
        searchHandler={mock}
        setShowAdd={addNewMock}
        setAddTitle={addNewMock}
        setActualData={addNewMock}
      />
    );
    const addNewBtn = screen.getByRole("button", { name: /nuevo/i });

    fireEvent.click(addNewBtn);

    expect(addNewMock).toHaveBeenCalledTimes(3);
  });

  it("Should save the user typing in value", async () => {
    const searchMock = jest.fn();
    render(
      <SearchBar
        searchHandler={searchMock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/buscar/i);

    await userEvent.type(searchInput, "Bulbasaur");

    expect(searchMock).toHaveBeenCalled();
    expect(searchInput).toHaveValue("Bulbasaur");
  });
});
