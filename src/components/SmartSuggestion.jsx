import React from "react";
import { useSuggestion } from "../context/SuggestionContext";
import { usePhotographer } from "../context/PhotographerContextProvider";

const SmartSuggestion = () => {
  const { suggestion } = useSuggestion();
  const { suggestionFilter } = usePhotographer();

  return (
    <div className="w-fit bg-[#ffffff4c] lg:py-4 py-3 lg:px-10 px-4 rounded-xl flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <div className="dot-blinking w-2 h-2 rounded-full bg-[#F3C322] blink"></div>
        <p className="text-sm font-semibold">AI Smart Suggestions</p>
      </div>

      <div className="suggested-message text-center md:text-lg ml-2">
        <p onClick={suggestionFilter} className="cursor-pointer">
          <span className="pr-1 text-xlr">✨</span>
          Top-rated photographer in {suggestion.city} starting from ₹
          {suggestion.price}
        </p>
      </div>
    </div>
  );
};

export default SmartSuggestion;
