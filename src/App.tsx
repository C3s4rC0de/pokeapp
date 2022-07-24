import "./App.css";
import AddPokemon from "./components/AddPokemon/AddPokemon";
import PokemonTable from "./components/PokemonTable/PokemonTable";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="container">
      <h1>PokeApp</h1>
      <h3>Listado de Pokemon</h3>

      <SearchBar />

      <PokemonTable />

      <AddPokemon />
    </div>
  );
}

export default App;
