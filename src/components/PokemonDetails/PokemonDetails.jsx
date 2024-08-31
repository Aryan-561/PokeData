import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemonDetails, typeColor, typeIcon } from "../../hooks/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faRulerVertical,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
import Theme from "../Theme/Theme";
import LoadingDetails from "../Loading/LoadingDetails";

function PokemonDetails() {

  const navigate  = useNavigate()
  const { pokemonName } = useParams();
  

  const [pokemon,loading] = usePokemonDetails(pokemonName.toLowerCase());

  
  const stat = ["HP", "ATK", "DEF", "S-ATK", "S-DEF", "SPEED"];

  const primaryTypeColor = pokemon.types ? typeColor(pokemon.types[0].type.name):'bg-black';


  return (
    <>
      <div className="w-full h-screen bg-slate-300 dark:bg-slate-900 duration-500">

        <div className="flex w-[90%] mx-auto justify-between py-6 ">
          <button onClick={()=>navigate(-1)}>
          <div className=" py-2 px-3 rounded-full bg-slate-100 dark:bg-slate-700  ">
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </div>
          </button>
          <Theme size="xl" />
        </div>
        { loading? <LoadingDetails /> :

        <div className=" w-full md:w-[90%]  sm:mx-auto sm:flex items-center justify-evenly xl:h-[90%] space-y-8 sm:space-y-0">
          
          <div className="flex flex-col space-y-6 items-center justify-center">

            {pokemon?.sprites && ( <Image
              id={pokemon.id}
              src={pokemon.sprites.other.home.front_default}
              width="w-52 sm:w-72 xl:w-80"
              className="text-slate-600 filter drop-shadow-[-4px_4px_0px_#94a3b8] dark:drop-shadow-[-4px_4px_0px_#475569]"
            />)}

            <div className=" capitalize text-xl xl:text-2xl font-bold">{pokemon?.name}</div>

            <div className="flex justify-center gap-2 my-2">
              {pokemon?.types?.map((item) => (
                <div
                  key={item.type.name}
                  className={`${typeColor(
                    item.type.name
                  )}  rounded-lg px-2 xl:py-2 text-lg xl:font-semibold xl:px-4 flex justify-center items-center gap-1  filter drop-shadow-[0_1px_1px] `}
                >
                  <FontAwesomeIcon icon={typeIcon(item.type.name)} />
                  <div>{item.type.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className=" bg-slate-100 dark:bg-slate-800 duration-500 sm:shadow-[6px_6px_0px_#e2e8f0,9px_9px_0px_#94a3b8]   border-4 border-slate-400 sm:dark:border-slate-700 dark:shadow-[6px_6px_0px_#475569,9px_9px_0px_#334155] sm:rounded-lg sm:p-2 sm:w-[70%] md:w-[60%] text-xs sm:text-sm xl:text-lg">

            <div className="text-center  text-xl xl:text-2xl font-semibold xl:font-bold my-4 xl:my-8">About</div>

            <div className=" grid grid-cols-3">
              <div className="px-4 sm:px-6 py-2 flex flex-col items-center justify-end space-y-3">
                <FontAwesomeIcon icon={faWeightScale} size="xl" />

                <div>{pokemon.weight / 10} Kg</div>

                <div className="font-semibold">Weight</div>
              </div>

              <div className=" px-4 sm:px-6 py-2 flex flex-col items-center justify-end space-y-3 border-x-2">
                <FontAwesomeIcon icon={faRulerVertical} size="xl" />
                <div>{pokemon.height / 10} m</div>

                <div className="font-semibold">Height</div>
              </div>
              <div className=" px-4 sm:px-6 py-2 flex flex-col items-center justify-end space-y-3">
                {pokemon?.abilities?.map((item) => (
                  <div key={item.ability.name}>{item.ability.name}</div>
                ))}
                <div className="font-semibold">Moves</div>
              </div>
            </div>
            <div className="text-center text-xl xl:text-2xl font-semibold xl:font-bold mt-8 mb-2 xl:mb-6">
              Base Stat
            </div>
            <div>
              <ul className=" p-2">
                {pokemon &&
                  pokemon?.stats?.map((item, index) => (
                    <li
                      className="grid grid-cols-[20%,10%,70%]  sm:grid-cols-[15%,10%,75%] place-items-center my-1  xl:space-x-4 xl:text-lg "
                      key={item.stat.name}
                    >
                      <div className="border-r-2 border-gray-400 w-16 text-center font-semibold ">
                        {stat[index]}
                      </div>

                      <div>{item.base_stat}</div>

                      <div
                        className={`w-full ${primaryTypeColor} bg-opacity-40  rounded-lg  overflow-hidden h-2.5 border-[1px] border-black dark:border-slate-300 `}
                      >
                        <div
                          className={` ${typeColor(
                            pokemon.types[0].type.name
                          )} rounded-lg h-2.5 `}
                          style={{ width: `${(item.base_stat / 180) * 100}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
}

export default PokemonDetails;
