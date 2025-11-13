import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
import { translate } from "../utils/translate";

function Netflix({ language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch genres
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  // Fetch movies when genres are loaded
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  // Auth check
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  // Scroll effect
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
    return () => (window.onscroll = null);
  };

  // Translate movies dynamically
  const translatedMovies = movies.map((movie) => ({
    ...movie,
    title: translate(movie.title, language),
    overview: translate(movie.overview, language),
  }));

  return (
    <Container>
      <Navbar isScrolled={isScrolled} language={language} setLanguage={setLanguage} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt={translate("background", language)}
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt={translate("Movie Logo", language)} />
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <FaPlay />
              {translate("Play", language)}
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              {translate("More Info", language)}
            </button>
          </div>
        </div>
      </div>

      {/* Pass language prop to Slider */}
      <Slider movies={translatedMovies} language={language} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem 2.4rem 0.5rem 2rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export default Netflix;
