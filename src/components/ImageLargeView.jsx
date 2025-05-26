import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ImageLargeView = ({ img, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={(prev) => onClose(!prev)}
        className="absolute top-4 right-4 z-50 text-white hover:scale-110 transition border border-white px-3 py-1 rounded-full cursor-pointer"
      >
        X
      </button>

      {/* Zoomable Image */}
      <motion.div
        className="relative z-50 w-[90%] sm:w-[28rem] md:w-[32rem] lg:w-[36rem]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Zoom>
          <img
            src={img}
            alt="Zoomable View"
            className="w-full h-[80vh] rounded-lg object-contain"
          />
        </Zoom>
      </motion.div>
    </div>
  );
};

export default ImageLargeView;
