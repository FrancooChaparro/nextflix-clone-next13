"use client"
import React from "react";
import styles from "@/styles/Landing.module.css";
import { Card } from "./Card";
import { MoviesData } from "@/models/banner";
import { MovieObject } from "@/app/types";

export const Landing = () => {
  return (
    <div className={styles.containerAll}>
      <h1>Section</h1>
       {/* <div className={styles.containercarru}>
          <button className={styles.butn}>1</button>
          <button className={styles.butn}>1</button>
      </div> */}
      <div  className={styles.container}>
        {
          MoviesData.map(e => { 
            return <Card  background={e.background}
            date={e.date} 
            gender={e.gender}
            id={e.id}
            idi={e.idi}
            image={e.image}
            language={e.language}
            overview={e.overview}
            title={e.title}
            />
          })
        }
        </div>

     </div>
  );
};
