import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokemons } from '../../hooks'
import { useDispatch } from 'react-redux'
import { getPokemonData, loadingPage } from '../../store/pokemonSlice'
import Container from '../Container/Container'

function GenPokemon(){

    const dispatch = useDispatch()
    const {number} = useParams()
    const [data,loading] = usePokemons({endPoint:`generation/${number}`, getDataBy:'generation'})
    
    useEffect(()=>{
     dispatch(getPokemonData(data))
     dispatch(loadingPage(loading))   
    },[data,loading])

    return(
        <>
            <div className='text-center text-2xl mt-12 font-bold'>Generation-{number} Pokemon</div>
            <Container/>
        </>
    )
}

export default GenPokemon