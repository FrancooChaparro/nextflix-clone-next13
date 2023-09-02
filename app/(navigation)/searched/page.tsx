"use client";
import React, { useState } from "react";
import styles from "./searched.module.css";
import { MovieObject } from "@/app/types";
import { MoviesData } from "@/models/data";
import Image from "next/image";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Search = () => {
  let movie: Array<MovieObject> | [] = MoviesData;
  let database: Array<MovieObject> | [] = MoviesData;
 const router = useRouter()

  const [load, setLoad] = useState<boolean>(false);
  const [countrie, setCountrie] = useState<string>("");
  const [nameTitle, setnameTitle] = useState<string>("Movies");
  const [db, setDb] = useState<MovieObject[]>(database);
  const [pelis, setpelis] = useState<MovieObject[]>(movie);
  const countrieName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCountrie(e.target.value);
  };

  const FilterMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1300);
    let hola = movie.filter((mov) => mov.gender === e.currentTarget.value);
    setpelis(hola);
    setnameTitle(e.currentTarget.value);
  };

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    setpelis(db)
    if(countrie === "") {
        setTimeout(() => {
            setLoad(false);
          }, 1000);
          setCountrie("");
          setpelis(db)
          return 
    }
    const data: Array<MovieObject> = []
     pelis.map(e=> {
      if (e.title.toLowerCase().includes(countrie.toLowerCase())) {
        data.push(e)
      }
    })
     setpelis(data)
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    setCountrie("");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLoad(true);
      handleSearch(e);
      setnameTitle("Peliculas");
    }
  };

  function linktag(id: any) {
    router.push("/details/" + id);
  }

  return (
    <div className={styles.containerAll}>
      <div className={styles.containerNav}>
        <div className={styles.containerIcons}>
         <Link href={"/"}><MdOutlineWorkspacePremium className={styles.icon} /></Link>
         <Link href={"/"}> <AiOutlineHome className={styles.icon} /></Link>
        </div>
      </div>
      <div className={styles.containerBtn}>
        <div className={styles.Opaci}>
          <input
            name="Enter"
            className={styles.SearchBar}
            type="text"
            placeholder="Search Movie"
            value={countrie}
            onChange={countrieName}
            onKeyPress={(e) => handleEnter(e)}

          />
          <div className={styles.container}>
            <button value={"Comedy"} onClick={FilterMovie}>
              Comedy
            </button>
            <button value={"TV"} onClick={FilterMovie}>
              TV Films
            </button>
            <button value={"Music"} onClick={FilterMovie}>
              Music
            </button>
            <button value={"Terror"} onClick={FilterMovie}>
              Terror
            </button>
          </div>
        </div>
      </div>
      <div className={styles.containerMovies}>
        <h2>{nameTitle}</h2>
        <div className={styles.movieContainer}>
          {load ? (
            <div className={styles.center}>
              <div className={styles.spinner}></div>
            </div>
          ) : pelis?.length > 0 ? (
            <div className={styles.imageContainer}>
              {pelis.slice(0, 12).map((movie: MovieObject, index) => (
                <Image
                 onClick={() => linktag(movie.id)}
                  key={index}
                  src={movie.image}
                  className={styles.imgBackground}
                  alt={movie.id}
                  width={210}
                  height={350}
                  style={{ objectFit: "cover", filter: "brightness(110%)" }}
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
