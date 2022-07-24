import { render, screen, fireEvent } from "@testing-library/react";
import AddPokemon from ".";

const mock = jest.fn();
const dummyPokemon = {
  id: 1000,
  name: "Charmeleon",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  attack: 41,
  defense: 6,
  hp: 35,
  type: "electrico",
  id_author: 1,
};

describe("AddPokemon component tests", () => {
  it("Should render the correct title", () => {
    render(
      <AddPokemon
        createPokemon={mock}
        show={true}
        setShowAdd={mock}
        title="Title"
        actualData={undefined}
        editPokemon={mock}
      />
    );
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
  });

  it("Should render inputs", () => {
    render(
      <AddPokemon
        createPokemon={mock}
        show={true}
        setShowAdd={mock}
        title="Title"
        actualData={undefined}
        editPokemon={mock}
      />
    );
    const nombre = screen.getByText(/nombre/i);
    const tipo = screen.getByText(/tipo/i);
    const imagen = screen.getByText(/imagen/i);
    const ataque = screen.getByText(/ataque/i);
    const hp = screen.getByText(/hp/i);
    const defensa = screen.getByText(/defensa/i);

    expect(nombre).toBeInTheDocument();
    expect(tipo).toBeInTheDocument();
    expect(imagen).toBeInTheDocument();
    expect(hp).toBeInTheDocument();
    expect(defensa).toBeInTheDocument();
    expect(ataque).toBeInTheDocument();
  });

  it("Should render buttons", () => {
    render(
      <AddPokemon
        createPokemon={mock}
        show={true}
        setShowAdd={mock}
        title="Title"
        actualData={undefined}
        editPokemon={mock}
      />
    );
    const saveBtn = screen.getByText(/guardar/i);
    const cancelBtn = screen.getByText(/cancelar/i);

    expect(saveBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  it("Should not render when show is false", () => {
    render(
      <AddPokemon
        createPokemon={mock}
        show={false}
        setShowAdd={mock}
        title="Title"
        actualData={undefined}
        editPokemon={mock}
      />
    );
    const title = screen.queryByText(/title/i);
    expect(title).not.toBeInTheDocument();
  });

  it("Should render the pokemon data", () => {
    render(
      <AddPokemon
        createPokemon={mock}
        show={true}
        setShowAdd={mock}
        title="Title"
        actualData={dummyPokemon}
        editPokemon={mock}
      />
    );

    const name = screen.getByDisplayValue(/charmeleon/i);
    const attack = screen.getByText(/41/i);
    const defense = screen.getByText(/6/i);
    const hp = screen.getByText(/35/i);

    expect(name).toBeInTheDocument();
    expect(attack).toBeInTheDocument();
    expect(defense).toBeInTheDocument();
    expect(hp).toBeInTheDocument();
  });

  it("Should call save function when click on save if there's no actualData", () => {
    const saveMock = jest.fn();

    render(
      <AddPokemon
        createPokemon={saveMock}
        show={true}
        setShowAdd={mock}
        title="Title"
        actualData={undefined}
        editPokemon={mock}
      />
    );

    const saveButton = screen.getByRole("button", { name: /guardar/i });
    fireEvent.click(saveButton);

    expect(saveMock).toHaveBeenCalledTimes(1);
  });

  it("Should call edit function when click on save if there is actualData", () => {
    const editMock = jest.fn();

    render(
      <AddPokemon
        createPokemon={mock}
        show={true}
        setShowAdd={mock}
        title="Title"
        actualData={dummyPokemon}
        editPokemon={editMock}
      />
    );

    const editButton = screen.getByRole("button", { name: /guardar/i });

    fireEvent.click(editButton);

    expect(editMock).toHaveBeenCalledTimes(1);
  });
});
