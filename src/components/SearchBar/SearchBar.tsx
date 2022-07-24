import "./style.css";

type SearchBarProps = {};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="search-bar">
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar"
          name="search"
        />
      </form>

      <button className="button">
        <h2>+</h2>
        Nuevo
      </button>
    </div>
  );
};

export default SearchBar;
