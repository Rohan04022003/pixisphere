import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSuggestion } from "./SuggestionContext";

const PhotographerContext = createContext(null);

const PhotographerContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [slideValue, setSlideValue] = useState(5000);
  const [isRating, setRating] = useState(0);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { setSuggestion, suggestion } = useSuggestion();

  // Fetch photographers
  useEffect(() => {
    setLoading(true);
    axios
      .get("/db.json")
      .then((res) => {
        setData(res.data.photographers);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch photographers", err);
        setLoading(false);
      });
  }, []);

  // Update suggestion when filters change
  useEffect(() => {
    setSuggestion({
      price: slideValue > 5000 ? slideValue : 20000,
      city: selectedCity || "Bengaluru",
    });
  }, [slideValue, selectedStyles, selectedCity]);

  // Filter logic
  useEffect(() => {
    let filtered = [...data];

    if (searchValue) {
      const q = searchValue.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (slideValue > 5000) {
      filtered = filtered.filter((item) => item.price <= slideValue);
    }

    if (isRating > 0) {
      filtered = filtered.filter((item) => item.rating >= isRating);
    }

    if (selectedStyles.length > 0) {
      filtered = filtered.filter((item) =>
        selectedStyles.every((style) => item.styles.includes(style))
      );
    }

    if (selectedCity) {
      filtered = filtered.filter((item) => item.location === selectedCity);
    }

    if (sortBy === "priceLowHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "ratingHighLow") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "recent") {
      filtered.sort((a, b) => new Date(b.id) - new Date(a.id));
    }

    setPhotographers(filtered);
  }, [
    data,
    slideValue,
    isRating,
    selectedStyles,
    selectedCity,
    sortBy,
    searchValue,
  ]);

  // Suggestion-based filter (when needed)
  const suggestionFilter = () => {
    let filtered = [...data];

    if (suggestion.price) {
      filtered = filtered.filter((item) => item.price <= suggestion.price);
    }

    if (suggestion.city) {
      filtered = filtered.filter((item) => item.location === suggestion.city);
    }

    // it is for top rated
    filtered.sort((a, b) => b.rating - a.rating);

    setPhotographers(filtered);
  };

  const handleReset = () => {
    setSlideValue(5000);
    setRating(0);
    setSelectedStyles([]);
    setSelectedCity("");
    setSortBy("");
    setSearchValue("");
  };

  return (
    <PhotographerContext.Provider
      value={{
        loading,
        photographers,
        slideValue,
        setSlideValue,
        isRating,
        setRating,
        selectedStyles,
        setSelectedStyles,
        selectedCity,
        setSelectedCity,
        sortBy,
        setSortBy,
        searchValue,
        setSearchValue,
        handleReset,
        suggestionFilter,
      }}
    >
      {children}
    </PhotographerContext.Provider>
  );
};

export default PhotographerContextProvider;

export function usePhotographer() {
  const context = useContext(PhotographerContext);
  if (!context) {
    throw new Error(
      "usePhotographer must be used within a PhotographerContextProvider"
    );
  }
  return context;
}
