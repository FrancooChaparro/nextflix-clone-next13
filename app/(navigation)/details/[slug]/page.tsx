"use client";
import { useEffect, useState } from "react";
import styles from "../Details.module.css";
import { MoviesData } from "@/models/data";
import { MovieObject } from "@/app/types";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const [movieID, setMovieID] = useState<MovieObject>();
  const router = useRouter();

  useEffect(() => {
    const AllMovies: Array<MovieObject> = MoviesData;
    const foundMovie = AllMovies.find((movie) => movie.id === slug);
    if (foundMovie) {
      setMovieID(foundMovie);
    } else {
      router.push("/");
    }
  }, [slug, router]);


  if (movieID === undefined) {
    return (
      <div className={styles.containerSpinner}>
        <div className={styles.spinner} />
      </div>
    );
  }

  return (
    <div className={styles.center}>
      <div className={styles.containerBack}>
        <button onClick={() => router.push("/")}><IoMdArrowRoundBack /></button>
      </div>
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img src={movieID?.image} alt={movieID?.title} />
        </div>
        <div className={styles.containerData}>
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
  );
}
