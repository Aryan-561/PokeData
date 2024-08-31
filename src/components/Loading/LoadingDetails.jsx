import React from "react";


function LoadingDetails() {
  return (
    <>
      <div className=" w-full md:w-[90%]  sm:mx-auto sm:flex items-center justify-evenly xl:h-[90%] space-y-8 ">
        <div className="flex flex-col space-y-6 items-center justify-center">
          <div className="w-44 sm:w-56 xl:w-80 bg-gray-400 dark:bg-gray-500 rounded-lg h-44 xl:h-52 animate-pulse"></div>
          <div className="w-20  bg-gray-500 dark:bg-gray-600 h-6 rounded-md animate-pulse"></div>
          <div className="flex flex-row gap-2 animate-pulse ">
            <div className="w-16  bg-gray-500 dark:bg-gray-600 h-5 rounded-md"></div>
            <div className="w-16  bg-gray-500 dark:bg-gray-600 h-5 rounded-md"></div>
          </div>
        </div>

      <div className=" bg-slate-100 dark:bg-slate-800 duration-500 sm:shadow-[6px_6px_0px_#e2e8f0,9px_9px_0px_#94a3b8]   border-4 border-slate-400 sm:dark:border-slate-700 sm:dark:shadow-[6px_6px_0px_#475569,9px_9px_0px_#334155] sm:rounded-lg sm:p-2 sm:w-[70%] md:w-[60%] text-xs sm:text-sm xl:text-lg">

        <div className="w-24 mx-auto my-6 xl:my-8 bg-gray-400 dark:bg-gray-500 h-6 rounded-md animate-pulse"></div>

        <div className=" grid grid-cols-3">
          <div className="px-4 sm:px-6 py-2 flex flex-col items-center justify-end space-y-3">
            <div className="w-8 h-6  bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>
            <div className="w-16  bg-gray-300 dark:bg-gray-600 h-4 rounded-md animate-pulse"></div>
            <div className="w-20  bg-gray-300 dark:bg-gray-600 h-6 rounded-md animate-pulse"></div>
          </div>

          <div className="px-4 sm:px-6 py-2 flex flex-col items-center justify-end space-y-3">
            <div className="w-8 h-6  bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>
            <div className="w-16  bg-gray-300 dark:bg-gray-600 h-4 rounded-md animate-pulse"></div>
            <div className="w-20  bg-gray-300 dark:bg-gray-600 h-5 rounded-md animate-pulse"></div>
          </div>

          <div className="px-4 sm:px-6 py-2 flex flex-col items-center justify-end space-y-3">
            
            <div className="w-16  bg-gray-300 dark:bg-gray-600 h-4 rounded-md animate-pulse"></div>
            <div className="w-16  bg-gray-300 dark:bg-gray-600 h-4 rounded-md animate-pulse"></div>
            <div className="w-20  bg-gray-300 dark:bg-gray-600 h-5 rounded-md animate-pulse"></div>
          </div>

          
        </div>
        
        <div className="w-24 mx-auto my-6 xl:my-8 bg-gray-400 dark:bg-gray-500 h-6 rounded-md"></div>

        <div>
            <ul>
                {[...Array(5)].map((item,index)=>(

                    <li key={index} className="grid grid-cols-[20%,10%,70%]  sm:grid-cols-[15%,10%,75%] place-items-center my-1 animate-pluse xl:space-x-4 xl:text-lg ">
                    <div className="w-12  bg-gray-300 dark:bg-gray-600 h-4 rounded-md"></div>
                    <div className="w-8   bg-gray-300 dark:bg-gray-600 h-4 rounded-md"></div>
                    <div className="w-[90%] sm:w-full  h-2.5 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
                </li>
                ))}
            </ul>
        </div>

      </div>
      </div>
    </>
  );
}


export default LoadingDetails