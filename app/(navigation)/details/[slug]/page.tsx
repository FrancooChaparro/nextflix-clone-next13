"use client";
import { useEffect, useState } from "react";
import styles from "../Details.module.css";
import { MoviesData } from "@/models/data";
import { MovieObject } from "@/app/types";
import { useRouter } from "next/navigation";
export default function Page({ params }: { params: { slug: string } }) {
  const [movieID, setmovieID] = useState<MovieObject>();
  const AllMovies: Array<MovieObject> | [] = MoviesData;
  const router = useRouter();
  const param = async () => {
    // eslint-disable-next-line
    const mov = await AllMovies.filter((e) => {
      if (e.id === params.slug) return e;
    });
    setmovieID(mov[0]);
  };

  useEffect(() => {
    param();
    // eslint-disable-next-line
  }, [AllMovies]);

  return (
    <div className={styles.center}>
      <div className={styles.containerBack}>
        <button onClick={() => router.push("/")}>Volver</button>
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
  );
}
