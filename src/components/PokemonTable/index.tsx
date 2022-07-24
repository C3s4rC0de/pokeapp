import { PokemonT } from "../../types/pokemon";
import "./style.css";
import deleteIcon from "../../assets/deleteIcon.svg";
import editIcon from "../../assets/editIcon.svg";

type PokemonTableProps = {
  pokemons: PokemonT[];
  searchString: string;
  deletePokemon: (id: number) => Promise<void>;
  setShowAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setAddTitle: React.Dispatch<React.SetStateAction<string>>;
  setActualData: React.Dispatch<React.SetStateAction<PokemonT | undefined>>;
};

const PokemonTable = ({
  pokemons,
  searchString,
  deletePokemon,
  setShowAdd,
  setAddTitle,
  setActualData,
}: PokemonTableProps) => {
  const filteredPokemons = pokemons.filter((poke) => {
    //if no input the return the original pokemon
    if (searchString === "") {
      return poke;
    }
    //return the item which contains the user search
    else {
      return poke?.name.toLowerCase().includes(searchString);
    }
  });

  return (
    <table className="pokemon-table">
      <thead className="table-head">
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Tipo</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>HP</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredPokemons.map((pokemon) => {
          const style = `${pokemon.type}`;
          return (
            <tr key={pokemon.id} className={style}>
              <td>{pokemon.name}</td>
              <td>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="pokemon-image"
                />
              </td>
              <td>{pokemon.type}</td>
              <td>{pokemon.attack}</td>
              <td>{pokemon.defense}</td>
              <td>{pokemon.hp}</td>
              <td className="actions">
                <img
                  src={deleteIcon}
                  alt="deleteIcon"
                  className="icon"
                  onClick={() => deletePokemon(pokemon.id)}
                />
                <img
                  src={editIcon}
                  alt="editIcon"
                  className="icon"
                  onClick={() => {
                    setActualData(pokemon);
                    setAddTitle("Editar Pokemon");
                    setShowAdd(true);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PokemonTable;
