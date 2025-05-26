[![Pixisphere GitHub Repo](https://img.shields.io/badge/GitHub-View%20Repository-blue?logo=github)](https://github.com/Rohan04022003/pixisphere)

# Pixisphere

Pixisphere is a modern web platform for discovering, filtering, and connecting with professional photographers for various occasions such as weddings, maternity, family, and more. The project is built with React, Vite, TailwindCSS, and features a mock backend using a JSON database.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [Core Functionality](#core-functionality)
- [Mock Database](#mock-database)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features
- **Photographer Discovery:** Browse a curated list of photographers with detailed profiles, portfolios, and reviews.
- **Advanced Filtering:** Filter by price, rating, style, city, and sort results.
- **Smart Suggestions:** AI-powered suggestions for top-rated photographers based on user preferences.
- **Responsive UI:** Fully responsive, modern design using TailwindCSS and Framer Motion for smooth animations.
- **Profile Pages:** View detailed photographer profiles, portfolios, and customer reviews.
- **Inquiry Modal:** Send inquiries directly to photographers via a modal form.
- **Pagination:** Easily navigate through large lists of photographers.
- **Loading Skeletons:** Beautiful skeleton loaders for improved UX during data fetches.

---

## Project Structure

```
Pixisphere/
│
├── index.html                # Main HTML entry point
├── package.json              # Project metadata and dependencies
├── vite.config.js            # Vite build configuration
├── README.md                 # Project documentation
├── vercel.json               # Vercel config for SPA navigation
├── public/db.json             # Mock database
├── src/                      # Source code
│   ├── App.jsx               # Main app component and routing
│   ├── main.jsx              # App bootstrap and context providers
│   ├── index.css             # Global styles (TailwindCSS)
│   ├── assets/               # SVGs and static images
│   ├── components/           # Reusable UI components
│   │   ├── Card.jsx              # Photographer card display
│   │   ├── HeroSection.jsx       # Hero/banner with search and suggestions
│   │   ├── FilterDrawer.jsx      # Side drawer for advanced filtering
│   │   ├── SmartSuggestion.jsx   # AI-powered suggestion box
│   │   ├── InquiryModal.jsx      # Modal for sending inquiries
│   │   ├── ImageLargeView.jsx    # Modal for zooming portfolio images
│   │   ├── RatingStars.jsx       # Star rating display
│   │   ├── Footer.jsx            # Footer with contact info
│   │   ├── Navbar.jsx            # Top navigation bar
│   │   └── Skeletons/            # Loading skeletons
│   ├── context/              # React Context for state management
│   │   ├── PhotographerContextProvider.jsx # Manages photographer data and filters
│   │   └── SuggestionContext.jsx           # Manages smart suggestion state
│   ├── pages/                # Main pages
│   │   ├── CategoryPage.jsx      # Main listing and filtering page
│   │   └── ProfilePage.jsx       # Detailed photographer profile page
│   └── ...
├── node_modules/             # Project dependencies
└── .gitignore                # Git ignore rules
```

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rohan04022003/pixisphere.git
   cd Pixisphere
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the mock backend (JSON Server):**
   ```bash
   npx json-server --watch db.json --port 3001
   ```
   This will serve the photographers data at `http://localhost:3001/photographers`.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as indicated in your terminal).

---

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/).

- **SPA Navigation:**
  - The included `vercel.json` file ensures that all routes are properly redirected to `index.html`, enabling client-side routing for your React app.
  - This is essential for Single Page Applications (SPA) so that refreshing or directly accessing any route works as expected.

**vercel.json**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**To deploy:**
1. Push your code to GitHub.
2. Import your repository into Vercel.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Deploy!

---

## Available Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint for code quality

---

## Core Functionality

### 1. **Photographer Listing & Filtering**
- **CategoryPage.jsx**: Displays all photographers with filtering (price, rating, style, city) and sorting. Uses a side drawer (`FilterDrawer.jsx`) for advanced filters and pagination for navigation.
- **Card.jsx**: Each photographer is shown as a card with their name, location, price, rating, tags, and a profile/portfolio preview.

### 2. **Smart Suggestions**
- **SmartSuggestion.jsx**: Uses context to suggest top-rated photographers in a city and price range, based on user filter activity.
- **SuggestionContext.jsx**: Stores and updates the current suggestion state.

### 3. **Profile Pages**
- **ProfilePage.jsx**: Shows detailed info for a selected photographer, including:
  - Profile picture, name, location, price, and rating
  - Tags and bio
  - Portfolio gallery (with zoomable images via `ImageLargeView.jsx`)
  - Customer reviews
  - Inquiry modal for contacting the photographer

### 4. **Inquiry Modal**
- **InquiryModal.jsx**: Modal form for users to send their name, email, and message to a photographer. (Currently, this triggers an alert and closes the modal.)

### 5. **UI/UX Enhancements**
- **HeroSection.jsx**: Top banner with search input and smart suggestions.
- **Skeletons/CategoryPageSkeleton.jsx**: Loading skeletons for a smooth experience during data fetches.
- **Footer.jsx**: Contains company info, support links, and contact details.
- **Navbar.jsx**: Top navigation bar (expandable for more features).
- **RatingStars.jsx**: Displays star ratings (full, half, empty) for photographers.
- **ImageLargeView.jsx**: Modal for zooming in on portfolio images.

### 6. **State Management**
- **PhotographerContextProvider.jsx**: Centralizes all photographer data, filter states, and filter logic using React Context. Handles fetching, searching, filtering, sorting, and resetting.
- **SuggestionContext.jsx**: Manages the smart suggestion state for the AI suggestion feature.

### 7. **Styling**
- **TailwindCSS**: Used for all styling, with custom classes for animations and effects.
- **index.css**: Imports Tailwind and adds custom utility classes (e.g., blinking dots for smart suggestions).

---

## Mock Database
- **db.json**: Contains an array of photographer objects, each with:
  - `id`, `name`, `location`, `price`, `rating`, `styles`, `tags`, `bio`, `profilePic`, `portfolio` (array of image URLs), and `reviews` (array of review objects).
- Used with [JSON Server](https://github.com/typicode/json-server) to simulate a REST API for development.

---

## Tech Stack
- **Frontend:** React 19, Vite, TailwindCSS, Framer Motion, React Router DOM, Axios
- **State Management:** React Context API
- **Mock Backend:** JSON Server (db.json)
- **Other:** ESLint, React Icons, react-medium-image-zoom

---

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## Contact
- **Email:** rohankumar993985@gmail.com
- **Phone:** +91 8404973614
- **Address:** 1459, block 34, sector 3, pushp Vihar, delhi 110017

---

## License
This project is for educational/demo purposes. Contact the author for commercial use.
