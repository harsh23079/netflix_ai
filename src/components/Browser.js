import React, { useEffect } from "react";
import useNowPlaying from "../hooks/useNowPlaying";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const Browser = () => {
  useNowPlaying();
   const dispatch = useDispatch();
   
  return <div>Browser</div>;
};

export default Browser;
