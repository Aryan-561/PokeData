import React from "react";

function LoadingCard(){
    
    
    return(
        <>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-3 items-center   place-items-center gap-4 p-4">

            {[...Array(6)].map((item,index) => (
                
                <div key={index} className="w-60 xl:w-72 mt-16 py-4 flex flex-col gap-2 items-center justify-end rounded-lg bg-gray-400 dark:bg-gray-800  h-40 xl:h-48 relative animate-pulse">
                <div className="w-32 xl:w-36 bg-gray-500 dark:bg-gray-600 h-28 xl:h-32  absolute bottom-24 xl:bottom-28  rounded-md"></div>
                <div className="w-20  bg-gray-300 dark:bg-gray-600 h-6 rounded-md"></div>
                <div className="flex flex-row gap-2 ">
                    <div className="w-16  bg-gray-300 dark:bg-gray-600 h-5 rounded-md"></div>
                    <div className="w-16  bg-gray-300 dark:bg-gray-600 h-5 rounded-md"></div>
                </div>
            </div>
            ))}
                </div>
        </>
    )
}

export default LoadingCard;