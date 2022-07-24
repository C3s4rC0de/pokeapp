import { render, screen, fireEvent } from "@testing-library/react";
import PokemonTable from ".";

const mock = jest.fn();
const dummyPokemons = [
  {
    id: 1000,
    name: "Charmeleon",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    attack: 41,
    defense: 6,
    hp: 35,
    type: "electrico",
    id_author: 1,
  },
  {
    id: 999,
    name: "Bulbasaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    attack: 55,
    defense: 6,
    hp: 35,
    type: "planta",
    id_author: 1,
  },
];

describe("PokemonTable component tests", () => {
  it("Should render table headers", () => {
    render(
      <PokemonTable
        pokemons={[]}
        searchString=""
        deletePokemon={mock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const nombre = screen.getByText(/nombre/i);
    const tipo = screen.getByText(/tipo/i);
    const imagen = screen.getByText(/imagen/i);
    const ataque = screen.getByText(/ataque/i);
    const hp = screen.getByText(/hp/i);
    const defensa = screen.getByText(/defensa/i);
    const acciones = screen.getByText(/acciones/i);

    expect(nombre).toBeInTheDocument();
    expect(tipo).toBeInTheDocument();
    expect(imagen).toBeInTheDocument();
    expect(hp).toBeInTheDocument();
    expect(defensa).toBeInTheDocument();
    expect(ataque).toBeInTheDocument();
    expect(acciones).toBeInTheDocument();

    // const searchInput = screen.getByPlaceholderText(/buscar/i);
    // expect(searchInput).toBeInTheDocument();
  });

  it("Should render pokemons info", () => {
    render(
      <PokemonTable
        pokemons={dummyPokemons}
        searchString=""
        deletePokemon={mock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const pokemon1 = screen.getByText(/charmeleon/i);
    const pokemon2 = screen.getByText(/bulbasaur/i);

    expect(pokemon1).toBeInTheDocument();
    expect(pokemon2).toBeInTheDocument();
  });

  it("Should render only the pokemons that match with search", () => {
    render(
      <PokemonTable
        pokemons={dummyPokemons}
        searchString="bulbasaur"
        deletePokemon={mock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const pokemon1 = screen.queryByText(/charmeleon/i);
    const pokemon2 = screen.queryByText(/bulbasaur/i);

    expect(pokemon1).not.toBeInTheDocument();
    expect(pokemon2).toBeInTheDocument();
  });

  it("Should call delete function when click on deleteIcon", () => {
    const deleteMock = jest.fn();
    render(
      <PokemonTable
        pokemons={dummyPokemons}
        searchString=""
        deletePokemon={deleteMock}
        setShowAdd={mock}
        setAddTitle={mock}
        setActualData={mock}
      />
    );
    const deleteBtns = screen.getAllByAltText(/deleteIcon/i);

    fireEvent.click(deleteBtns[0]);

    expect(deleteMock).toHaveBeenCalledTimes(1);
  });

  it("Should call functions to update pokemon when click on editIcon", () => {
    const showAddMock = jest.fn();
    const addTitleMock = jest.fn();
    const actualDataMock = jest.fn();
    render(
      <PokemonTable
        pokemons={dummyPokemons}
        searchString=""
        deletePokemon={mock}
        setShowAdd={showAddMock}
        setAddTitle={addTitleMock}
        setActualData={actualDataMock}
      />
    );
    const editButtons = screen.getAllByAltText(/editIcon/i);

    fireEvent.click(editButtons[0]);

    expect(showAddMock).toHaveBeenCalledTimes(1);
    expect(addTitleMock).toHaveBeenCalledTimes(1);
    expect(actualDataMock).toHaveBeenCalledTimes(1);
  });
});
