"use client";
import { useEffect, useState } from "react";
import styles from "../Details.module.css";
import { MoviesData } from "@/models/data";
import { MovieObject } from "@/app/types";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";

export default function Page({ params }: { params: { slug: string } }) {
  const [movieID, setmovieID] = useState<MovieObject>();
  const AllMovies: Array<MovieObject> | [] = MoviesData;
  const router = useRouter();

  const param = async () => {
    const mov = AllMovies.find((e) => e.id === params.slug);
    if (mov) {
      setmovieID(mov);
    } else {
      router.push("/")
    }
  };

  useEffect(() => {
    param();
    // eslint-disable-next-line
  }, [params.slug]);

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
