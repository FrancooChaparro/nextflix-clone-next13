"use client"
import React, { useState } from "react";
import styles from "@/styles/Card.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { MovieObject } from "@/app/types";

interface MyPropsCard {
  background: string
  date: string
  gender: string
  id: string
  idi: number
  image: string,
  language: string
  overview: string
  title: string
}



export const Card: React.FC<MyPropsCard> = ({ 
  background,
  date ,
  gender,
  id,
  idi,
  image,
  language,
  overview,
  title,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false)
    const cardProps: MovieObject = {
        id: "1",
        idi: 1008005,
        title: "The Communion Girl",
        language: "es",
        overview: "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home",
        image: "https://image.tmdb.org/t/p/original/sP6AO11a7jWgsmT9T8j9EGIWAaZ.jpg",
        date: "2023-02-10",
        background: "https://image.tmdb.org/t/p/original/54IXMMEQKlkPXHqPExWy98UBmtE.jpg",
        gender: "Terror"
    }

  const addMyListToStore = () => {
   
    }
    

  return (
    <div className={styles.containerCard}>

      <div className={styles.containerCardInfo}>
        <img
          src={background}
          alt={title}
          className={styles.image}
        />
      </div>



        <div className={styles.containerCardInfo2}>
          <div className={styles.details}>
            <img
              src={background}
              alt={title}
              className={styles.backgroundCard}
            />
          </div>
          <div className={styles.details2}>
            <div className={styles.icons}>
            <div className={styles.play}>
            <BsFillPlayFill/>
              </div>
              <div onClick={()=> setShowMenu(!showMenu)} className={styles.more}>
                <BsChevronDown className={showMenu ? styles.showOpen : styles.show}/>
              </div>
            </div>
            <div className={styles.date}>
              <span style={{ color: "greenyellow" }}>New</span>
              <span>{date}</span>
            </div>
            <div className={styles.duration}>
              <span>{title.substring(0, 37)}</span>
            </div>
            <div className={styles.gender}>
              <span>{gender}</span>
            </div>
          </div>
          {showMenu && <div className={styles.addMenu}>
            <div className={styles.addMenu1}>AddorOut</div>
            <div className={styles.addMenu2}>Ver Detalles</div>
          </div> }
        </div>
  


  
    </div>
  );
};
