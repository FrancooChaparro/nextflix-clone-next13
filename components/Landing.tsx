"use client";
import React from "react";
import styles from "@/styles/Landing.module.css";
import { Card } from "./Card";
import { MoviesData } from "@/models/banner";
import { MovieObject } from "@/app/types";

export const Landing = () => {

  return (

     <div className={styles.containerAll}>
        <h3>Section</h3>
        <div className={styles.container}>
          {MoviesData.map((e) => {
            return (
              <Card
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
