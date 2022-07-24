import "./style.css";

type PokemonTableProps = {};

const PokemonTable = (props: PokemonTableProps) => {
  return (
    <table className="pokemon-table">
      <thead className="table-head">
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Ataque</th>
        <th>Defensa</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr>
          <td>Pokemon</td>
          <td>Pokemon</td>
          <td>Pokemon</td>
          <td>Pokemon</td>
          <td>Pokemon</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PokemonTable;
