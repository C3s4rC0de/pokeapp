import "./style.css";

type AddPokemonProps = {};

const AddPokemon = (props: AddPokemonProps) => {
  return (
    <div className="add-pokemon">
      <h3>Nuevo Pokemon</h3>

      <div className="add-pokemon-grid">
        <div className="grid-row">
          <div className="grid-column">
            <h4 className="input-label">Nombre:</h4>
            <input type="text" className="generic-input" />
          </div>

          <div className="grid-column">
            <h4 className="input-label">Ataque:</h4>
            <span>0</span>
            <input
              name="attackRange"
              id="attackRange"
              type="range"
              min="0"
              max="100"
              value="0"
            />
            <label htmlFor="attackRange">0</label>
          </div>
        </div>

        <div className="grid-row">
          <div className="grid-column">
            <h4 className="input-label">Imagen:</h4>
            <input type="text" className="generic-input" />
          </div>

          <div className="grid-column">
            <h4 className="input-label">Defensa:</h4>
            <span>0</span>
            <input
              name="defenseRange"
              id="defenseRange"
              type="range"
              min="0"
              max="100"
              value="0"
            />
            <label htmlFor="defenseRange">0</label>
          </div>
        </div>
      </div>

      <div className="add-pokemon-buttons">
        <button>Guardar</button>

        <button>Cancelar</button>
      </div>
    </div>
  );
};

export default AddPokemon;
