"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Banner.module.css";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MoviesData } from "@/models/banner";
import { MovieObject } from "@/app/types";
import { useMyContext } from "@/context/ListContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Banner = () => {
  const router = useRouter();
  const Movies = MoviesData;
  const [num, setNum] = useState<number>(0);
  const { AddMyList } = useMyContext();
  const poster: MovieObject = Movies?.[num] ?? {};

  useEffect(() => {
    const interval = startInterval();
    return () => clearInterval(interval);
  }, []);

  const startInterval = () => {
    return setInterval(() => {
      setNum((num) => (num === 13 ? 0 : num + 1));
    }, 8000);
  };

  
  return (
    <div className={styles.ContainerBackground}>
       <Image
        src={poster?.background}
        alt="poster"
        className={styles.background}
        fill
        // loading="lazy"
        priority
        // placeholder="blur" 
        // blurDataURL="/images/ajax_poster_blur.webp"
      />
      <div className={styles.containerData}>
        <p className={styles.title}>{poster.title}</p>
        <p className={styles.description}>{poster.overview}</p>
        <div className={styles.containerBtn}>
          <button className={styles.btnAdd} onClick={()=> AddMyList(poster)}>
            <IoMdAdd className={styles.icon} />
            Add List
          </button>
          <button className={styles.btnInfo} onClick={() => router.push(`/details/${poster.id}`)}>
            <AiOutlineInfoCircle className={styles.icon} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
