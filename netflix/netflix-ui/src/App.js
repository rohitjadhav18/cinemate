import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/Movies";

export default function App() {
  const [language, setLanguage] = useState("en"); // central language state

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player language={language} />} />
        <Route exact path="/tv" element={<TVShows language={language} />} />
        <Route
          exact
          path="/movies"
          element={<MoviePage language={language} setLanguage={setLanguage} />}
        />
        <Route exact path="/new" element={<Player language={language} />} />
        <Route
          exact
          path="/mylist"
          element={<UserListedMovies language={language} />}
        />
        <Route
          exact
          path="/"
          element={<Netflix language={language} setLanguage={setLanguage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
