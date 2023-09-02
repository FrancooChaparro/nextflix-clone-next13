"use client";
import React from "react";
import { MovieObject } from "@/app/types";
import { MoviesData } from "@/models/data";
import { Landing } from "./Landing";
import { useMyContext } from "@/context/ListContext";

export const ContainerLands = () => {
  const AllMovies: Array<MovieObject> | [] = MoviesData;
  const { MyList } = useMyContext();

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

  const tv: Array<MovieObject> = filterAndSliceMovies("TV", 17, AllMovies);

  return (
    <>
      <Landing
        isNew={true}
        title={"Trending Now"}
        movie={trending}
        AddorOut={"Add List"}
      />
      {MyList.length > 0 && (
        <Landing
          isNew={false}
          title={"My List"}
          movie={MyList}
          AddorOut={"Remove List"}
        />
      )}
      <Landing
        isNew={false}
        title={"Music"}
        movie={Music}
        AddorOut={"Add List"}
      />
      <Landing
        isNew={false}
        title={"Terror"}
        movie={terror}
        AddorOut={"Add List"}
      />
      <Landing
        isNew={false}
        title={"Programs TV"}
        movie={tv}
        AddorOut={"Add List"}
      />
      <Landing
        isNew={false}
        title={"Comedy"}
        movie={comedy}
        AddorOut={"Add List"}
      />
    </>
  );
};
