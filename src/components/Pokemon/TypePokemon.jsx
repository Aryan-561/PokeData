import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokemons } from '../../hooks'
import { useDispatch } from 'react-redux'
import { getPokemonData, loadingPage } from '../../store/pokemonSlice'
import Container from '../Container/Container'

function TypePokemon(){

    const dispatch = useDispatch()
    const {typeName} = useParams()
    const [data,loading] = usePokemons({endPoint:`type/${typeName}`, getDataBy:'type'})
    
    useEffect(() => {
        if (data) {
            dispatch(getPokemonData(data)) 
        }
        dispatch(loadingPage(loading))  
    }, [data, loading])
    
    return(
        <>
        <div className='text-center capitalize text-2xl my-12 font-bold'>{typeName} Pokemon</div>
            <Container/>
        </>
    )
}

export default TypePokemon