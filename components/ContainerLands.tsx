import React from "react";
import { MovieObject } from "@/app/types";
import { MoviesData } from "@/models/data";
import { Landing } from "./Landing";

export const ContainerLands = () => {
  const AllMovies: Array<MovieObject> | [] = MoviesData;

  const filterAndSliceMovies = (
    genre: string,
    limit: number,
    movies: Array<MovieObject>
  ): Array<MovieObject> => {
    return movies.reduce(
      (accumulator: Array<MovieObject>, movie: MovieObject) => {
        if (accumulator.length < limit && movie.gender === genre) {
          accumulator.push(movie);
        }
        return accumulator;
      },
      []
    );
  };
  
  const terror: Array<MovieObject> = filterAndSliceMovies(
    "Terror",
    17,
    AllMovies
  );
  
  const trending: Array<MovieObject> = filterAndSliceMovies(
    "Trending",
    17,
    AllMovies
  );
  
  const comedy: Array<MovieObject> = filterAndSliceMovies(
    "Comedy",
    17,
    AllMovies
  );
  
  const Music: Array<MovieObject> = filterAndSliceMovies(
    "Music",
    17,
    AllMovies
  );
  
  const tv: Array<MovieObject> = filterAndSliceMovies(
    "TV",
    17,
    AllMovies
  );
  
console.log(terror.length, "+2");

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
