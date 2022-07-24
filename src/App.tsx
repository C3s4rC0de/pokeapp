import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "./utils/constants";
import { PokemonBodyT, PokemonT } from "./types/pokemon";

import AddPokemon from "./components/AddPokemon";
import PokemonTable from "./components/PokemonTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemons, setPokemons] = useState<PokemonT[]>([]);
  const [actualData, setActualData] = useState<PokemonT>();
  const [reloadPokemons, setReloadPokemons] = useState<boolean>(false);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [addTitle, setAddTitle] = useState<string>("Nuevo Pokemon");
  const [searchString, setSearchString] = useState<string>("");

  const getPokemons = async () => {
    const data = await axios.get(`${API_URL}?idAuthor=7`);
    setPokemons(data.data);
  };

  const searchHandler = (e: any) => {
    setSearchString(e.target.value.toLowerCase());
  };

  const deletePokemon = async (id: number) => {
    try {
      setPokemons((prevPokemons) =>
        prevPokemons.filter((pokemon) => pokemon.id !== id)
      );
      await axios.delete(`${API_URL}:${id}`);
      setReloadPokemons(true);
    } catch (error) {
      console.log(error);
    }
  };

  const createPokemon = async (pokemon: PokemonBodyT) => {
    try {
      await axios.post(`${API_URL}?idAuthor=7`, {
        ...pokemon,
        idAuthor: 7,
      });
      setReloadPokemons(true);
      setShowAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editPokemon = async (id: number, pokemon: PokemonBodyT) => {
    try {
      await axios.put(`${API_URL}:${id}`, {
        ...pokemon,
        idAuthor: 7,
      });
      setReloadPokemons(true);
      setShowAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
    setReloadPokemons(false);
  }, [reloadPokemons]);

  return (
    <div className="container">
      <h1 className="no-margin">PokeApp</h1>
      <h3 className="no-margin">Listado de Pokemon</h3>

      <SearchBar
        searchHandler={searchHandler}
        setShowAdd={setShowAdd}
        setAddTitle={setAddTitle}
        setActualData={setActualData}
      />

      <AddPokemon
        createPokemon={createPokemon}
        show={showAdd}
        setShowAdd={setShowAdd}
        title={addTitle}
        actualData={actualData}
        editPokemon={editPokemon}
      />

      <PokemonTable
        pokemons={pokemons}
        searchString={searchString}
        deletePokemon={deletePokemon}
        setAddTitle={setAddTitle}
        setShowAdd={setShowAdd}
        setActualData={setActualData}
      />
    </div>
  );
}

export default App;
