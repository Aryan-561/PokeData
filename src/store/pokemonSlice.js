import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons:{
        all:[],
        typePokemons:[],
        loading:true,
        isDarkMode:false
    },
}

const pokeSilce = createSlice({
    name:'pokemons',
    initialState,
    reducers:{
        getPokemonData:(state,action)=>{
            state.pokemons.all = [...action.payload];
            state.pokemons.typePokemons = [...action.payload];
        },
        loadingPage:(state,action)=>{
            state.pokemons.loading = action.payload
        },
        onFilterPokemon:(state,action)=>{
            state.pokemons.typePokemons.map(pokemon=>{
                pokemon.isHidden = !pokemon.name.includes(action.payload)
            })
        },
        onChangeMode : (state)=>{
            state.isDarkMode = !state.isDarkMode;
        }
    }

})


export const {getPokemonData,loadingPage,onFilterPokemon,onChangeMode} = pokeSilce.actions

export default pokeSilce.reducer