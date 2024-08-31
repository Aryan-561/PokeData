import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { typeIcon } from "../../hooks/index";
import {  loadingPage} from "../../store/pokemonSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";



function FilterSec() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isActive,setIsActive] = useState(false)

  const type = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "water",
    "fire",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy"
  ]

  const gen = [
    "gen-i",
    "gen-ii",
    "gen-iii",
    "gen-iv",
    "gen-v",
    "gen-vi",
    "gen-vii",
    "gen-viii",
    "gen-ix",
  ]
const generationPokemon = (number)=>{

  dispatch(loadingPage(true))
  navigate(`/pokemons/generation/${number}`)
}

const typePokemon = (typeName)=>{

    dispatch(loadingPage(true))
    navigate(`/pokemons/type/${typeName}`)
  }


  return (
    <>
      <div>
        <div className={`sm:hidden flex justify-center`}>
          <button 
            onClick={()=>setIsActive(prev=>!prev)}
            className="p-2"
          >
            <FontAwesomeIcon icon={isActive?faSortUp:faSortDown} size="2xl" />
          </button>
        </div>
       <div className={`${isActive?'block':'hidden'} duration-300  sm:block`}>
      <ul className="flex  text-xl flex-wrap gap-2 justify-center mx-1 my-4" >
            
          
            {gen.map((type,index) => (
              <li key={type}>
                <div className={`border-2 border-solid border-white dark:border-slate-700 rounded-2xl px-2 py-1 bg-slate-800 dark:bg-slate-400
                  flex  justify-center items-center gap-2 text-slate-200  dark:text-slate-800 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors duration-200 ease-in-out hover:border-black dark:hover:border-white`}>
  
                <button 
                className=" font-bold font-mono text-sm "
                onClick={()=>{
                  generationPokemon(index+1)
                }}
                >
                  {type}
                </button>
                </div>
              </li>
            ))}
          </ul>

        <ul className="flex mx-1 text-xl flex-wrap gap-2 justify-center" >
            
          
          {type.map((type,index) => (
            <li key={type}>
              <div className={`border-2 border-solid border-white dark:border-slate-700 rounded-3xl px-2.5 py-1 bg-slate-800 dark:bg-slate-400
                flex  justify-center items-center gap-2  text-slate-200  dark:text-slate-800 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors duration-200 ease-in-out  hover:border-black dark:hover:border-white`}>

              <button 
              onClick={()=>{
                
                typePokemon(type)
              }}
              >
              <FontAwesomeIcon icon={typeIcon(type) } 
             
              className={` `}
              
              
              />
              </button>
              </div>
            </li>
          ))}
        </ul>
        </div> 
      </div>
      
    </>
  );
}

export default FilterSec;