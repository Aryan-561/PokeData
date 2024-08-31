import { faFire, faDroplet, faLeaf, faBolt, faSnowflake, faFistRaised, faSkullCrossbones, faMountainSun, faFeather,  faBug, faGhost, faDragon,  faShieldAlt, faHurricane, faSplotch} from "@fortawesome/free-solid-svg-icons";
import {faHashnode, faBluesky, faHornbill} from "@fortawesome/free-brands-svg-icons" 
function typeIcon(type){
  const types = {
    normal: faHashnode,
    fire: faFire,
    water: faDroplet,
    electric: faBolt,
    grass: faLeaf,
    ice: faSnowflake,
    fighting: faFistRaised,
    poison: faSkullCrossbones,
    ground: faMountainSun,
    flying: faFeather,
    psychic: faHurricane,
    bug: faBug,
    rock: faSplotch,
    ghost: faGhost,
    dragon: faDragon,
    dark: faHornbill,
    steel: faShieldAlt,
    fairy: faBluesky,
  }
  return types[type]
}

function typeColor(type) {
  
    const types = {
        normal: "bg-[#A8A878]",
        fire: "bg-[#F08030]",
        water: "bg-[#6890F0]",
        electric: "bg-[#F8D030]",
        grass: "bg-[#78C850]",
        ice: "bg-[#98D8D8]",
        fighting: "bg-[#C03028]",
        poison: "bg-[#A040A0]",
        ground: "bg-[#E0C068]",
        flying: "bg-[#A890F0]",
        psychic: "bg-[#F85888]",
        bug: "bg-[#A8B820]",
        rock: "bg-[#B8A038]",
        ghost: "bg-[#705898]",
        dragon: "bg-[#7038F8]",
        dark: "bg-[#705848]",
        steel: "bg-[#B8B8D0]",
        fairy: "bg-[#EE99AC]"
  };
  return types[type];

  
}


export  {typeColor,typeIcon};