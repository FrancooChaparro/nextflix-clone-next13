"use client";
import React, { useState } from "react";
import styles from "@/styles/Card.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";

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
  AddorOut: string;
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
  AddorOut,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();
  const { AddMyList, DeleteMyList } = useMyContext();

  function addList() {
    AddMyList({
      id,
      idi,
      title,
      language,
      overview,
      image,
      date,
      background,
      gender,
    });
    setShowMenu(!showMenu);
  }
  function deleteList() {
    DeleteMyList({
      id,
      idi,
      title,
      language,
      overview,
      image,
      date,
      background,
      gender,
    });
    setShowMenu(!showMenu);
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
            <div
              className={styles.play}
              onClick={() => router.push(`/details/${id}`)}
            >
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
            {AddorOut == "Add List" ? (
              <div className={styles.addMenu1} onClick={() => addList()}>
                {AddorOut}
              </div>
            ) : (
              <div className={styles.addMenu1} onClick={() => deleteList()}>
                {AddorOut}
              </div>
            )}
            <div
              className={styles.addMenu2}
              onClick={() => router.push(`/details/${id}`)}
            >
              View Details
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
