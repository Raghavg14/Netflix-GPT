# Netflix-GPT

## Overview

Netflix-GPT is a web application that provides **personalized movie recommendations** using **Google’s Gemini AI**. It fetches real-time movie data from **TMDB API** and allows users to explore trending movies, watch trailers, and get AI-powered movie suggestions. The app is built with **React, Firebase, Redux, TailwindCSS**, and **TMDB API** for a seamless and dynamic user experience.

## Features

- **Sign Up & Sign In**: Uses Firebase database and API for authentication.
- **Dynamic Movie Trailers**: Displays the latest movie trailers as a background video on the homepage.
- **Movie Categories**: Fetches **Trending, Popular, Top Rated, and Now Playing** movies from TMDB API.
- **Movie Details Modal**: Clicking on a movie shows a modal with detailed information.
- **AI-Powered Recommendations**: Uses **Gemini AI** to provide movie suggestions based on user prompts (e.g., “retro comedy movies”).
- **State Management**: Redux is used to efficiently manage application state.

## Project Structure

- **Authentication**: Firebase API is used for storing and validating user credentials.
- **Data Fetching**: TMDB API is used to get real-time movie data.
- **AI Integration**: Gemini AI suggests movies based on user queries.
- **State Management**: Redux Toolkit is used for caching and efficient data handling.
- **Styling**: TailwindCSS ensures a clean, responsive UI.

## Technologies Used

- **React** (v19.0.0)
- **React Router** (v7.2.0) for page navigation
- **Redux Toolkit** (v2.5.1) for state management
- **Firebase** (v11.3.1) for user authentication and database
- **TMDB API** for fetching movie data
- **Google Gemini AI** for intelligent movie recommendations
- **TailwindCSS** (v3.4.17) for styling

## Environment Variables Configuration

To set up the project, create a `.env` file in the root directory and add the required API keys.

```env
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

# API Keys
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_GEMINI_AI_API_KEY=your_google_ai_api_key

```

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Raghavg14/AI-Trip-Planner.git
   cd travel-planner
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the variables provided above.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Build the application**:
   ```bash
   npm run build
   ```
