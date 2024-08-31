import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card.jsx'
import {Link,useNavigate} from 'react-router-dom'
import LoadingCard from "../Loading/LoadingCard.jsx";
import { loadingPage } from "../../store/pokemonSlice.js";


function Container(){
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector(state=>state.pokemons.loading)
    const data =useSelector(state=>state.pokemons.typePokemons)




    return (
        <div >
            {loading?<LoadingCard />:(
                <div className="w-full  grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4  place-items-center gap-6 p-4">
            {data.map(pokemon=>(
                
                <div key={pokemon.name} className={` mt-12  ${pokemon.isHidden?'hidden':'block'}`}>
                 <Link to={`/pokemon/${pokemon.name}`} onClick={()=>dispatch(loadingPage(true))}>
                        <Card 
                            name={pokemon.name} 
                            id={pokemon.url.split("/")[6]}
                            type={pokemon.type}
                            src={pokemon.imgSrc}
                        />
                 </Link>
                </div>
            ))}
            </div>
            )}
        </div>
    )
}

export default Container;