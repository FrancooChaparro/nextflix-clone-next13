"use client";
import React from "react";
import styles from "@/styles/Landing.module.css";
import { Card } from "./Card";
import { MoviesData } from "@/models/banner";
import { MovieObject } from "@/app/types";

interface Props { 
  movie: Array<MovieObject> ;
  isNew: boolean;
  title: string;
}
export const Landing: React.FC<Props> = ( {
  movie,
  isNew,
  title
}) => {
  return (

     <div className={styles.containerAll}>
        <h3>{title}</h3>
        <div className={styles.container}>
          {movie.map((e) => {
            return (
              <Card
               isNew={isNew}
                key={e.id}
                background={e.background}
                date={e.date}
                gender={e.gender}
                id={e.id}
                idi={e.idi}
                image={e.image}
                language={e.language}
                overview={e.overview}
                title={e.title}
              />
            );
          })}
        </div>
      </div>
  );
};
