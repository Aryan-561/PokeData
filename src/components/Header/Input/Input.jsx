import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { onFilterPokemon } from "../../../store/pokemonSlice";

function Input (){
    const [value,setValue] = useState()
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFilter = (e)=>{
        e.preventDefault()
        dispatch(onFilterPokemon(value.toLowerCase()))
        console.log(value.toLowerCase())
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(value != '')
        navigate(`/pokemon/${value}`)
    }

    return(
        <form onSubmit={handleSubmit}  >
           <div className="w-full flex justify-center my-6 sm:mb-12  gap-2">
                <input type="text" required 
                    placeholder="Search  Pokemon  By Name" 
                   
                    className="bg-slate-800 text-slate-300 dark:bg-slate-400  rounded border border-gray-700 focus:border-slate-500 focus:ring-2 focus:ring-slate-600 text-base outline-none dark:text-slate-800 py-1 px-3  transition-colors duration-200 ease-in-out  sm:w-[40%]  lg:text-xl 
                    placeholder:text-sm sm:placeholder:text-base dark:placeholder:text-slate-800 font-semibold"
                    value={value}
                    onChange={(e)=>{
                        setValue(e.target.value)
                    }}
                    onKeyUp={onFilter}
                />
                <button type="submit" className="py-2 px-4 text-xl bg-slate-800 dark:bg-slate-400 text-slate-200  dark:text-slate-800 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md border-gray-700 focus:border-slate-500 focus:ring-2 focus:ring-white transition-colors duration-200 ease-in-out  ">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
                
           </div>
        </form>
    )
}

export default Input;