"use client"
import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { MovieObject } from "@/app/types";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MoviesData } from "@/models/data"


export const Search = () => {
  let movie: Array<MovieObject> | [] = MoviesData; 
  const [load, setLoad] = useState<boolean>(true);
  const [countrie, setCountrie] = useState<string>("");
  const [nameTitle, setnameTitle] = useState<string>("Peliculas");


  return (
    <div className={styles.containerAll}>
      <div className={styles.containerNavbar}>
        <div className={styles.containerIcons}>
          
            <MdOutlineWorkspacePremium className={styles.icon} />
          
            <AiOutlineHome className={styles.icon} />
         
        </div>
      </div>
      <div className={styles.containerLeft}>
        <div className={styles.containerInput}>
          <input
            name="Enter"
            className={styles.SearchBar}
              
            type="text"
            placeholder="Search Movie"
          />
        </div>
        <div className={styles.containerBtn}>
          <button >
            Comedia
          </button>
          <button >
            TV Programas
          </button>
          <button >
            Music
          </button>
          <button>
            Terror
          </button>
        </div>
      </div>
      <div className={styles.containerRight}>
        <h1>{nameTitle}</h1>


        
        <div className={styles.movieContainer}>
  { movie?.length > 0 ? (
    <div className={styles.imageContainer}>
      {movie.slice(0, 12).map((movie: MovieObject, index) => (
        <img
          key={index}
          src={movie.image}
          className={styles.imgBackground}
          alt={movie.id}
        />
      ))}
    </div>
  ) : (
    <h3>No se encontraron resultados</h3>
  )}
</div>
      </div>
    </div>
  );
};

export default Search;