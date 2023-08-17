"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Banner.module.css";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MoviesData } from "@/models/banner";
import { MovieObject } from "@/app/types";

const Banner = () => {
  const Movies = MoviesData;
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    if (num === 19) {
      setNum(0);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (num === 13) {
        setNum(0);
      } else {
        setNum((num) => num + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [num]);

  const poster: MovieObject = Movies[num];
  return (
    <div className={styles.ContainerBackground}>
      <img src={poster.background} alt="logo" className={styles.background} />
      <div className={styles.containerData}>
        <p className={styles.title}>{poster.title}</p>
        <p className={styles.description}>{poster.overview}</p>
        <div className={styles.containerBtn}>
          <button className={styles.btnAdd}>
            <IoMdAdd className={styles.icon} />
            Add List
          </button>
          <button className={styles.btnInfo}>
            <AiOutlineInfoCircle className={styles.icon} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
