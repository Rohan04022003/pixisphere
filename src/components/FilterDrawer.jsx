import close from "../assets/close.svg";
import { usePhotographer } from "../context/PhotographerContextProvider";

// photography styles
const styles = ["Traditional", "Candid", "Studio", "Outdoor"];

// List of cities for filtering
const cities = [
  "Mumbai",
  "Bengaluru",
  "Ahmedabad",
  "Jaipur",
  "Delhi",
  "Chennai",
  "Pune",
  "Hyderabad",
];

const FilterDrawer = ({ isOpen, onClose }) => {
  // states and handlers from context
  const {
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
    handleReset,
  } = usePhotographer();

  // Toggle selection for photography styles (checkboxes)
  const handleStyleToggle = (style) => {
    if (selectedStyles.includes(style)) {
      // Remove style if already selected
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      // Add style if not selected
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  return (
    <>
      {/* dark transparent background shown when drawer is open */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose} // Clicking outside closes the drawer
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer content */}
        <div className="p-4 overflow-y-auto h-full text-gray-800">
          {/* Header with title and close button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-purple-700">Filters</h2>
            <button onClick={onClose} className="cursor-pointer">
              <img src={close} alt="close" className="w-5" />
            </button>
          </div>

          {/* Max Price Filter using a range slider */}
          <div className="mb-6">
            <label className="block font-medium text-sm text-purple-700 mb-2">
              Max Price
            </label>
            <div className="flex justify-between text-xs text-gray-600 font-medium mb-1">
              <span>₹{slideValue}</span>
              <span>₹25000</span>
            </div>
            <input
              type="range"
              min={5000}
              max={25000}
              step={500}
              value={slideValue}
              onChange={(e) => setSlideValue(Number(e.target.value))}
              className="w-full appearance-none h-2 rounded-full bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] outline-none cursor-pointer"
            />
          </div>

          {/* Ratings Filter: radio buttons */}
          <div className="mb-6">
            <label className="block font-medium text-sm text-purple-700 mb-2">
              Ratings
            </label>
            {[4, 3, 2].map((r) => (
              <div key={r} className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name="rating"
                  value={r}
                  checked={isRating === r}
                  onChange={() => setRating(r)}
                  className="accent-pink-500 cursor-pointer"
                />
                <label className="text-sm text-gray-700 cursor-pointer">{r}+</label>
              </div>
            ))}
          </div>

          {/* Styles Filter: multiple checkbox options */}
          <div className="mb-6">
            <label className="block font-medium text-sm text-purple-700 mb-2">
              Styles
            </label>
            {styles.map((style) => (
              <div key={style} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  id={style}
                  checked={selectedStyles.includes(style)}
                  onChange={() => handleStyleToggle(style)}
                  className="accent-pink-500 cursor-pointer"
                />
                <label htmlFor={style} className="text-sm text-gray-700 cursor-pointer">
                  {style}
                </label>
              </div>
            ))}
          </div>

          {/* City Filter: dropdown select */}
          <div className="mb-6">
            <label className="block font-medium text-sm text-purple-700 mb-2">
              City
            </label>
            <select
              className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Filter: dropdown select */}
          <div className="mb-8">
            <label className="block font-medium text-sm text-purple-700 mb-2">
              Sort By
            </label>
            <select
              className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">None</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="ratingHighLow">Rating: High to Low</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>

          {/* Button to reset all filters */}
          <button
            onClick={handleReset}
            className="w-full py-2.5 text-white font-semibold rounded-xl bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] hover:opacity-90 transition-opacity cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
