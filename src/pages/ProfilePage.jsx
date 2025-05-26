import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePhotographer } from "../context/PhotographerContextProvider";
import { FaStar } from "react-icons/fa";
import map from "../assets/location.svg";
import camera from "../assets/camera.svg";
import InquiryModal from "../components/InquiryModal";
import ImageLargeView from "../components/ImageLargeView";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProfilePage = () => {
  const { profileID } = useParams(); // Get profile ID from route
  const navigate = useNavigate();
  const { photographers } = usePhotographer(); // Access photographer data from context

  // State variables
  const [seeAllImages, setSeeAllImages] = useState(4); // Controls portfolio image count
  const [showModal, setShowModal] = useState(false); // Controls InquiryModal visibility
  const [imgView, setImgView] = useState(false); // Controls large image view visibility
  const [isImg, setImg] = useState(""); // Holds selected image URL

  // Find photographer by ID
  const photographer = photographers.find((p) => p.id.toString() === profileID);

  // Scroll to top on photographer change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profileID]);

  // If photographer not found
  if (!photographer) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-center px-4">
        <img src={camera} alt="No results" className="w-16 h-16 mb-2 opacity-80" />
        <p className="text-2xl font-semibold bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] bg-clip-text text-transparent">
          Photographer not found
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-3 px-4 py-2 text-sm bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] text-white rounded-lg shadow hover:opacity-90 transition duration-300 cursor-pointer"
        >
          Back to Previous Page
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:px-16 md:px-10 sm:px-4 px-2 mx-auto pt-4 pb-8"
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] text-white rounded-lg shadow hover:opacity-90 transition duration-300 cursor-pointer"
      >
        Back to Previous Page
      </button>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile picture with animation */}
        <motion.img
          src={photographer.profilePic}
          alt={photographer.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-pink-400"
          loading="lazy"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Name, location, price, rating, tags */}
        <div>
          <h1 className="text-3xl font-bold">{photographer.name}</h1>
          <p className="text-gray-600 flex items-center gap-1">
            <img src={map} alt={`Location - ${photographer.location}`} className="w-5" loading="lazy" />
            {photographer.location}
          </p>
          <p className="mt-2 text-purple-700 font-semibold text-xl">₹{photographer.price}</p>

          {/* Rating and review count */}
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center text-yellow-500 font-bold">
              {photographer.rating}
              <FaStar />
            </span>
            <span className="text-sm text-gray-500">
              (based on {photographer.reviews?.length || 0} reviews)
            </span>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {photographer.tags?.map((tag) => (
              <span key={tag} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">{photographer.bio}</p>
      </div>

      {/* Portfolio Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {photographer.portfolio.slice(1, seeAllImages).map((url, index) => (
            <motion.img
              onClick={() => {
                setImgView(true);
                setImg(url);
              }}
              key={index}
              src={url}
              alt={`${photographer.name}'s portfolio image ${index + 1}`}
              className="w-full h-92 object-cover rounded-lg cursor-pointer"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}

          {/* Toggle button to show more or less images */}
          <button
            onClick={() =>
              photographer.portfolio.length === seeAllImages
                ? setSeeAllImages(4)
                : setSeeAllImages(photographer.portfolio.length)
            }
            className="mt-3 cursor-pointer text-sm bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] bg-clip-text text-transparent"
          >
            {photographer.portfolio.length === seeAllImages
              ? "Show Less"
              : "See All Images"}
          </button>
        </div>
      </div>

      {/* Image large view modal */}
      {imgView && (
        <ImageLargeView img={isImg} onClose={() => setImgView(false)} />
      )}

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {photographer.reviews?.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-2 grid-cols-1">
            {photographer.reviews.map((review, idx) => (
              <motion.div
                key={idx}
                className="w-full bg-gray-100 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-yellow-500 font-semibold">
                    {review.rating}★
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{review.date}</p>
                <p className="mt-2">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Inquiry button and modal */}
      <div className="mt-8 text-center">
        <motion.button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] text-white rounded-lg hover:opacity-90 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Inquiry
        </motion.button>
      </div>

      {/* Inquiry Modal */}
      {showModal && (
        <InquiryModal
          photographerName={photographer.name}
          onClose={() => setShowModal(false)}
        />
      )}
    </motion.div>
  );
};

export default ProfilePage;
