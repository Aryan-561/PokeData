import React, { useState } from "react";
import pokeball from '../assets/pokeball.svg'


function Img({
    id,
    width='w-32',
    className="",
    name="pokemon",
    src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
}){

    const [hasLoaded,setHasLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    const handleLoading = ()=>{
        setHasLoaded(true)
        setHasError(false)
        
    }
    const handleError = (e)=>{
        setHasError(true)
    }

    return(
        <>
            {!hasLoaded && !hasError && (<img src={pokeball}  className={`w-32  animate-[spin_3s_linear_infinite] `} />)}
            {hasError && (<img src={pokeball}  className={`w-32 `} />)}
            {!hasError && (<div>
                <img 
                    src={src} 
                    alt={name}
                    className={`${width} ${className} ${hasLoaded?'block':'hidden'} `}
                    draggable='false'
                    onLoad={handleLoading} 
                    onError={handleError}
                />
            </div>)}
            
        </>
    )
}

export default Img;