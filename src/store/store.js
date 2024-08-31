import {configureStore} from '@reduxjs/toolkit'
import pokeReducer from './pokemonSlice'

export const store = configureStore({
    reducer:pokeReducer
})