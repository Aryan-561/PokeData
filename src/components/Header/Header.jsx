import React from "react";
import Input from "./Input/Input"
import Theme from "../Theme/Theme";

function Header(){
    

    return(
        <>
            <div className="flex  justify-between w-[90%] mx-auto pt-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center">PokeData</h1>
                <Theme size='xl' />
            </div>
            <Input/>
        </>
    )
}
 
export default Header;