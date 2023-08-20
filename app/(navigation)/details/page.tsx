import styles from "./Details.module.css";
// import { useState, useEffect } from "react";


export const Details = () => {
const movieID = { 
    id: "33",
    idi: 1048300,
    title: "Adrenaline",
    language: "en",
    overview: "A female FBI agent holidaying in Eastern Europe with her family gets her life upside down when her daughter is kidnapped. She has to team up with a criminal on the run to save her daughter before time runs out.",
    image: "https://image.tmdb.org/t/p/original/qVzRt8c2v4gGBYsnaflXVVeQ9Lh.jpg",
    date: "2022-12-15",
    background: "https://image.tmdb.org/t/p/original/nDmPjKLqLwWyd4Ssti8HCdhW5cZ.jpg",
    gender: "Action"
}
  return (
    <div className={styles.center}>
        <div className={styles.containerBack}>
            <button>Volver</button>
        </div>
        <div className={styles.container}>
          <div className={styles.containerImg}>
            <img src={movieID?.image} alt={movieID?.title} />
          </div>
          <div className={styles.containerData}>
            {/* <div> */}
              <h1>{movieID?.title}</h1>
              <h3>
                {movieID?.date} · {movieID?.gender} · (
                {movieID?.language.toUpperCase()})
              </h3>
              <h2>Overview</h2>
              <p>{movieID?.overview}.</p>
            </div>
          </div>
        </div>
      
    //  </div>
  );
};


export default Details;