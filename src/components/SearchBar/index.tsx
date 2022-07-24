import { PokemonT } from "../../types/pokemon";
import "./style.css";

type SearchBarProps = {
  searchHandler: (e: any) => void;
  setShowAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setAddTitle: React.Dispatch<React.SetStateAction<string>>;
  setActualData: React.Dispatch<React.SetStateAction<PokemonT | undefined>>;
};

const SearchBar = ({
  searchHandler,
  setShowAdd,
  setAddTitle,
  setActualData,
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar"
        name="search"
        onChange={searchHandler}
      />

      <button
        className="button"
        onClick={() => {
          setActualData(undefined);
          setAddTitle("Nuevo Pokemon");
          setShowAdd(true);
        }}
      >
        <h2>+</h2>
        Nuevo
      </button>
    </div>
  );
};

export default SearchBar;
