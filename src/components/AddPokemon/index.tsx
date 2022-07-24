import { useEffect, useState } from "react";
import { PokemonBodyT, PokemonT } from "../../types/pokemon";
import "./style.css";
import saveIcon from "../../assets/saveIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";

type AddPokemonProps = {
  createPokemon: (pokemon: PokemonBodyT) => Promise<void>;
  editPokemon: (id: number, pokemon: PokemonBodyT) => Promise<void>;
  show: boolean;
  setShowAdd: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  actualData: PokemonT | undefined;
};

const AddPokemon = ({
  createPokemon,
  show,
  setShowAdd,
  title,
  actualData,
  editPokemon,
}: AddPokemonProps) => {
  const [newPokemon, setNewPokemon] = useState<PokemonBodyT>({
    attack: 0,
    defense: 0,
    hp: 0,
    image: "",
    name: "",
    type: "",
  });

  useEffect(() => {
    setNewPokemon({
      attack: actualData?.attack ?? 0,
      defense: actualData?.defense ?? 0,
      hp: actualData?.hp ?? 0,
      image: actualData?.image ?? "",
      name: actualData?.name ?? "",
      type: actualData?.type ?? "",
    });
  }, [actualData]);

  return (
    <>
      {show && (
        <div className="add-pokemon">
          <h3>{title}</h3>

          <form>
            <div className="add-pokemon-grid">
              <div className="grid-row">
                <div className="grid-column">
                  <h4 className="input-label">Nombre:</h4>
                  <input
                    required
                    type="text"
                    name="name"
                    className="generic-input"
                    defaultValue={actualData?.name}
                    onChange={(e) =>
                      setNewPokemon({ ...newPokemon, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid-column">
                  <h4 className="input-label">Ataque:</h4>
                  <input
                    required
                    name="attackRange"
                    id="attackRange"
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={actualData?.attack ?? 0}
                    onChange={(e) =>
                      setNewPokemon({
                        ...newPokemon,
                        attack: parseInt(e.target.value),
                      })
                    }
                  />
                  <label htmlFor="attackRange">{newPokemon.attack}</label>
                </div>
              </div>

              <div className="grid-row">
                <div className="grid-column">
                  <h4 className="input-label">Tipo:</h4>
                  <select
                    required
                    className="select-input generic-input"
                    name="type"
                    id="type"
                    defaultValue={actualData?.type}
                    onChange={(e) =>
                      setNewPokemon({
                        ...newPokemon,
                        type: e.target.value,
                      })
                    }
                  >
                    <option value="" />
                    <option value="bicho">Bicho</option>
                    <option value="agua">Agua</option>
                    <option value="fuego">Fuego</option>
                    <option value="planta">Planta</option>
                    <option value="electrico">Eléctrico</option>
                    <option value="tierra">Tierra</option>
                    <option value="dragon">Dragón</option>
                    <option value="hada">Hada</option>
                    <option value="lucha">Lucha</option>
                    <option value="volador">Volador</option>
                    <option value="fantasma">Fantasma</option>
                    <option value="hielo">Hielo</option>
                    <option value="normal">Normal</option>
                    <option value="veneno">Veneno</option>
                    <option value="psiquico">Psíquico</option>
                    <option value="roca">Roca</option>
                    <option value="acero">Acero</option>
                  </select>
                </div>

                <div className="grid-column">
                  <h4 className="input-label">Hp:</h4>
                  <input
                    required
                    name="hp"
                    id="hp"
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={actualData?.hp ?? 0}
                    onChange={(e) =>
                      setNewPokemon({
                        ...newPokemon,
                        hp: parseInt(e.target.value),
                      })
                    }
                  />
                  <label htmlFor="hp">{newPokemon.hp}</label>
                </div>
              </div>

              <div className="grid-row">
                <div className="grid-column">
                  <h4 className="input-label">Imagen:</h4>
                  <input
                    required
                    type="text"
                    name="image"
                    className="generic-input"
                    defaultValue={actualData?.image}
                    onChange={(e) =>
                      setNewPokemon({ ...newPokemon, image: e.target.value })
                    }
                  />
                </div>

                <div className="grid-column">
                  <h4 className="input-label">Defensa:</h4>
                  <input
                    required
                    name="defenseRange"
                    id="defenseRange"
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={actualData?.defense ?? 0}
                    onChange={(e) =>
                      setNewPokemon({
                        ...newPokemon,
                        defense: parseInt(e.target.value),
                      })
                    }
                  />
                  <label htmlFor="defenseRange">{newPokemon.defense}</label>
                </div>
              </div>
            </div>

            <div className="add-pokemon-buttons">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (actualData) {
                    editPokemon(actualData.id, newPokemon);
                  } else {
                    createPokemon(newPokemon);
                  }
                }}
              >
                <img src={saveIcon} alt="saveIcon" className="icon" />
                Guardar
              </button>

              <button type="button" onClick={(e) => setShowAdd(false)}>
                <img src={closeIcon} alt="closeIcon" className="icon" />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddPokemon;
