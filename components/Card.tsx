"use client";
import React, { useState } from "react";
import styles from "@/styles/Card.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { MovieObject } from "@/app/types";

interface MyPropsCard {
  background: string;
  date: string;
  gender: string;
  id: string;
  idi: number;
  image: string;
  language: string;
  overview: string;
  title: string;
  isNew: boolean;
}

export const Card: React.FC<MyPropsCard> = ({
  background,
  date,
  gender,
  id,
  idi,
  image,
  language,
  overview,
  title,
  isNew,
}) => {
 
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // const addMyListToStore = (props: MovieObject, text: string ) => {
  //   if (text === "Quitar de mi lista") { 
  //     const OutList = OutMyList(props);
  //     setShowMenu(!showMenu)
  //    return dispatch(OutList);
  //   }
    
  //   const existentMovie = MyListMovies.find((e) => e.title === props.title);

  //   if (existentMovie) {
  //     setShowMenu(!showMenu)
  //     alert("Ya está en tu lista");
  //   } else {
  //     const action = addMyList(props);
  //     setShowMenu(!showMenu)
  //     dispatch(action);
  //   }
  // };

  function linktag () { 
  
  }

  return (
    <div className={styles.containerCard}>
      <div className={styles.containerCardInfo}>
        <img src={background} alt={title} className={styles.image} />
      </div>

      <div className={styles.containerCardInfo2}>
        <div className={styles.details}>
          <img src={background} alt={title} className={styles.backgroundCard} />
        </div>
        <div className={styles.details2}>
          <div className={styles.icons}>
            <div className={styles.play}>
              <BsFillPlayFill />
            </div>
            <div onClick={() => setShowMenu(!showMenu)} className={styles.more}>
              <BsChevronDown
                className={showMenu ? styles.showOpen : styles.show}
              />
            </div>
          </div>
          <div className={styles.date}>
            <span style={{ color: "greenyellow" }}>{isNew ? "New" : null}</span>
            <span>{date}</span>
          </div>
          <div className={styles.duration}>
            <span>{title.substring(0, 37)}</span>
          </div>
          <div className={styles.gender}>
            <span>{gender}</span>
          </div>
        </div>
        {showMenu && (
          <div className={styles.addMenu}>
            <div className={styles.addMenu1}>AddorOut</div>
            <div className={styles.addMenu2}>Ver Detalles</div>
          </div>
        )}
      </div>
    </div>
  );
};
