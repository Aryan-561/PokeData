import React from "react";
import { typeColor, typeIcon } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "../Image";

function Card({ name, id, type, src }) {

  return (
    <>
      <div
        className={` flex flex-col items-center justify-end     rounded-2xl rounded-b-3xl bg-slate-200 w-60 xl:w-72 dark:text-white  dark:bg-slate-800  h-40 xl:h-48 pb-4 relative transition duration-200 ease-in-out cursor-pointer hover:border-4 border-2 border-slate-600 dark:border-slate-300 filter drop-shadow-[0px_6px_0px_#475569] dark:drop-shadow-[0_6px_0_#cbd5e1]`}
      >
        <div className="absolute   bottom-24 xl:bottom-28">
          <Img
            id={id}
            src={src}
            width="w-32 xl:w-36"
            className=" filter drop-shadow-[-3px_2px_0px_#94a3b8] dark:drop-shadow-[-2px_2px_0px_#cbd5e1]"
            name={name}
          />
        </div>

        <div className="capitalize font-semibold">{name}</div>

        <div className="flex justify-center gap-2 my-2">
          {type.map(
            (type) =>
              type && (
                <div
                  key={type}
                  className={`${typeColor(
                    type
                  )}  rounded-lg px-2 flex justify-center items-center gap-1 filter drop-shadow-[0_1px_1px] `}
                >
                  <FontAwesomeIcon icon={typeIcon(type)} />
                  <div>{type}</div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
