import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import filter from "../assets/filter.svg";
import previous from "../assets/previous.svg";
import camera from "../assets/camera.svg";
import next from "../assets/next.svg";
import Card from "../components/Card";
import { usePhotographer } from "../context/PhotographerContextProvider";
import FilterDrawer from "../components/FilterDrawer";
import CategoryPageSkeleton from "../components/Skeletons/CategoryPageSkeleton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CategoryPage = () => {
  // Access photographers and loading state from context
  const { photographers, loading } = usePhotographer();

  // State to control filter drawer visibility
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // State to track current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const itemsPerPage = 6;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPhotographers = photographers.slice(indexOfFirst, indexOfLast);

  // Total number of pages
  const totalPages = Math.ceil(photographers.length / itemsPerPage);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Show skeleton loader while data is loading
  if (loading) {
    return <CategoryPageSkeleton />;
  }

  return (
    <div className="bg-gray-50">
      {/* Top banner section */}
      <HeroSection />

      {/* Filter bar with animation */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="filter-row flex items-center gap-4 lg:py-10 py-6 lg:px-16 md:px-10 sm:px-4 px-2"
      >
        {/* Filter button to toggle drawer */}
        <button
          onClick={() => setDrawerOpen(!isDrawerOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 cursor-pointer"
        >
          <span>
            <img src={filter} alt="filter" className="w-5" />
          </span>
          Filters
        </button>

        {/* Display number of photographers found */}
        <div className="no-of-photographers">
          <p>{photographers.length} photographers found</p>
        </div>
      </motion.div>

      {/* Side filter drawer */}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* If no photographers match the criteria */}
      {photographers.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-center px-4">
          <img
            src={camera}
            alt="No results"
            className="w-16 h-16 mb-2 opacity-80"
          />
          <p className="text-2xl font-semibold bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] bg-clip-text text-transparent">
            No photographers found
          </p>
          <span className="text-gray-500 mt-2 text-sm">
            Try adjusting your filters or check back later.
          </span>
        </div>
      ) : (
        <>
          {/* Photographer cards grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 pb-5 lg:px-16 md:px-10 sm:px-4 px-2">
            {currentPhotographers.map((photographer, i) => (
              <Card key={i} photographer={photographer} />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-4 py-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-2 bg-pink-600 text-white rounded-xl disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
            >
              <img src={previous} alt="previous" />
            </button>
            <span className="text-gray-700 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-2 bg-pink-600 text-white rounded-xl disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              <img src={next} alt="next" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
