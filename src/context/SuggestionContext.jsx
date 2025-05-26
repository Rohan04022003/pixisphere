import React, { createContext, useContext, useState } from "react";

const SuggestionContext = createContext();

// default suggestion state
const defaultSuggestion = {
  city: "Bengaluru",
  price: 20000,
};

export const SuggestionProvider = ({ children }) => {
  const [suggestion, setSuggestion] = useState(defaultSuggestion);

  return (
    <SuggestionContext.Provider value={{ suggestion, setSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  );
};

export const useSuggestion = () => useContext(SuggestionContext);
