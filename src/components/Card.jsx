import React from "react";
import map from "../assets/location.svg";
import arrowUp from "../assets/arrow-up.svg";
import RatingStars from "../components/RatingStars";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Card = ({ photographer }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full card-motion group bg-white rounded-xl border border-gray-200 overflow-hidden transition-transform"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Photographer portfolio banner image */}
      <img
        src={photographer.portfolio[0]}
        alt="Banner"
        loading="lazy"   // Lazy load image for better performance
        className="h-48 w-full object-cover group-hover:scale-105 duration-500 transition-transform"
      />

      <div className="p-4">
        {/* Photographer profile image and basic info */}
        <div className="flex items-center gap-3">
          <img
            src={photographer.profilePic}
            alt={photographer.name}
            loading="lazy"   // Lazy load profile image too
            className="w-14 h-14 object-cover rounded-full border-2 border-pink-500"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {photographer.name}
            </h3>
            {/* Location with icon */}
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <img src={map} alt="Location" className="w-4 h-4" />
              <span>{photographer.location}</span>
            </div>
          </div>
        </div>

        {/* Rating stars and price */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
            <RatingStars rating={photographer.rating} />
            <span className="text-gray-600">({photographer.rating})</span>
          </div>
          <p className="text-lg font-semibold text-purple-600">
            ₹{photographer.price}
          </p>
        </div>

        {/* Photographer tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {photographer.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button to navigate to detailed profile page */}
        <button
          onClick={() => navigate(`/profilepage/${photographer.id}`)}
          className="w-full flex justify-center items-center gap-3 mt-6 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] hover:opacity-90 transition-opacity cursor-pointer"
        >
          <img
            src={arrowUp}
            alt="arrow-up"
            className="group-hover:rotate-45 duration-300"
          />
          View Profile
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
