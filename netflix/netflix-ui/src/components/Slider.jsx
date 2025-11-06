import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
import { translate } from "../utils/translate";

export default function Slider({ movies, language }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title={translate("Trending Now", language)} />
      <CardSlider data={getMoviesFromRange(10, 20)} title={translate("New Releases", language)} />
      <CardSlider data={getMoviesFromRange(20, 30)} title={translate("Blockbuster Movies", language)} />
      <CardSlider data={getMoviesFromRange(30, 40)} title={translate("Popular on Cinemate", language)} />
      <CardSlider data={getMoviesFromRange(40, 50)} title={translate("Action Movies", language)} />
      <CardSlider data={getMoviesFromRange(50, 60)} title={translate("Epics", language)} />
    </Container>
  );
}

const Container = styled.div``;
