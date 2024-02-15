import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
    console.log("inside main container")
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    console.log(movies);
  if (!movies) return;

  const mainMovies = movies[0];
  console.log("mainMovies ", mainMovies);

  const { title, overview } = mainMovies;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackGround />
    </div>
  );
};

export default MainContainer;
