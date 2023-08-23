import React from "react";
import { MovieObject } from "@/app/types";
import { MoviesData } from "@/models/data";
import { Landing } from "./Landing";

export const ContainerLands = () => {
  const AllMovies: Array<MovieObject> | [] = MoviesData;

  const terror: Array<MovieObject> | [] = AllMovies.filter(
    (movie: MovieObject) => movie.gender === "Terror"
  ).slice(0, 17);
  const trending: Array<MovieObject> | [] = AllMovies.filter(
    (movie: MovieObject) => movie.gender === "Trending"
  ).slice(0, 17);
  const comedy: Array<MovieObject> | [] = AllMovies.filter(
    (movie: MovieObject) => movie.gender === "Comedy"
  ).slice(0, 17);
  const Music: Array<MovieObject> | [] = AllMovies.filter(
    (movie: MovieObject) => movie.gender === "Music"
  ).slice(0, 17);
  const tv: Array<MovieObject> | [] = AllMovies.filter(
    (movie: MovieObject) => movie.gender === "TV"
  ).slice(0, 17);

  return (
    <>
      <Landing isNew={true} title={"Trending Now"} movie={trending} />
      {/* {MyListMovies.length > 0 && (
            <MyList isNew={false} title={"My List"} movie={MyListMovies} />
          )} */}
      <Landing isNew={false} title={"Music"} movie={Music} />
      <Landing isNew={false} title={"Terror"} movie={terror} />
      <Landing isNew={false} title={"Programas TV"} movie={tv} />
      <Landing isNew={false} title={"Comedy"} movie={comedy} />
    </>
  );
};
