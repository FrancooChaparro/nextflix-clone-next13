"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Nav.module.css";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import ShowMenu from "./ShowMenu";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showBrowse, setShowBrowse] = useState<boolean>(false);
  const TOP_OFFSET = 66;
  const [showBackground, setShowBackground] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (topp: number) => {
    window.scrollTo({
      top: topp,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleShow = () => { 
    setShowMenu(!showMenu)
    setShowBrowse(false)
  }
  const handleShow2 = () => { 
    setShowMenu(false)
    setShowBrowse(!showBrowse)
  }

  return (
    <div
      className={
        showBackground ? styles.containerAll : styles.containerAllOpacity
      }
    >
      <div className={styles.flex}>
        <div className={styles.containerLogo}>
        <Image
            src="/images/Netflix_Logo.png"
            alt="LogoNetflix"
            onClick={() => handleClick(0)}
            width={70}
            height={40}
            priority
            loading="eager"
          />
        </div>
        <div className={styles.containerInfo}>
          <span className={styles.span1} onClick={() => handleClick(0)}>Home</span>
          <span className={styles.span1} onClick={() => handleClick(550)}>Series</span>
          <span className={styles.span1} onClick={() => handleClick(950)}>Films</span>
          <span className={styles.span1} onClick={() => handleClick(1250)}>New & Popular</span>
          <span className={styles.span1} onClick={() => handleClick(950)}>My List</span>
          <span className={styles.span1}>Premium Netflix</span>
        </div>

        <div className={styles.containerBrowse}>
          <span
            className={styles.btnBrowse}
            onClick={() => handleShow2()}
          >
            Menu
          </span>
          <BsChevronDown className={styles.btnBrowse} />

          {showBrowse && (
            <div
              className={showBackground ? styles.Browse : styles.BrowseOpacity}
            >
              <p>Home</p>
              <p>Series</p>
              <p>Films</p>
              <p>New & Popular</p>
              <p>My List</p>
              <p>Premium Netflix</p>
           </div>
          )}
        </div>
      </div>

      <div className={styles.containerUser}>
        <div className={styles.containerUser1}>
          <BiSearch className={styles.icon} onClick={() => router.push('/searched')}/>
          <IoNotificationsOutline className={styles.icon}/>
          <div className={styles.userDiv1}>
          <Image
            src="/images/Netflix-avatar.png"
            alt="ProfilePick"
            width={25}
            height={25}
            loading="lazy"
          />
            <div className={styles.arrow}>
              <BsChevronDown
                onClick={() => handleShow()}
                className={showMenu ? styles.showOpen : styles.show}
              />
            </div>
          </div>
        </div>
        {showMenu && (
          <ShowMenu />
        )}
      </div>
    </div>
  );
};
