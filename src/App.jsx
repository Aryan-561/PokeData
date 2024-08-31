import React, { useEffect} from "react";

import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import { Route,BrowserRouter as Router, Routes, useNavigate} from "react-router-dom";
import Layout from './Layout'
import GenPokemon from "./components/Pokemon/GenPokemon.jsx";
import TypePokemon from "./components/Pokemon/TypePokemon";

function App() {
 
  return (
    <>
  
      <Router>
        <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<RedirectComponent/>} />
          <Route path="pokemons/generation/:number" element={<GenPokemon/>} />
          <Route path="pokemons/type/:typeName" element={<TypePokemon/>} /> 
        </Route>
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

function RedirectComponent(){
 const navigate =  useNavigate() 
 useEffect(()=>{
  navigate('/pokemons/generation/1')
 })
 return null
}