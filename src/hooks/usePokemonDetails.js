
import { useEffect, useState } from "react";

function usePokemonDetails(pokemonName){
    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data)
            setData(data)
            setLoading(false)

        }).catch(err=>console.log(err.message))
    },[pokemonName])

    return [data,loading]
}

export default usePokemonDetails;