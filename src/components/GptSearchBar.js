import React from "react";
import { useSelector } from "react-redux";
import {lang} from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12  bg-[#000000]">
        <input
          type="text"
          className="p-4 m-4 rounded-sm col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-700 m-4 text-white rounded-sm col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
