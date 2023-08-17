"use client"
import { useState, useEffect } from "react";
import styles from "../styles/Nav.module.css";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";



export const Navbar = () => {
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

  return (
    <div
      className={
        showBackground ? styles.containerAll : styles.containerAllOpacity
      }
    >
        <div style={{display: "flex"}}>
      <div className={styles.containerLogo}>
        <img src="./images/Netflix_Logo.png" alt="LogoNetflix" />
      </div>
      <div className={styles.containerInfo}>   
          <span className={styles.span1}>Home</span>  
          <span className={styles.span1}>Series</span>
          <span className={styles.span1}>Films</span>
          <span className={styles.span1}>New & Popular</span>
          <span className={styles.span1}>My List</span>
          <span className={styles.span1}>Premium Netflix</span> 
      </div>


      <div className={styles.containerBrowse}>
          <span
            className={styles.btnBrowse}
            onClick={() => setShowBrowse(!showBrowse)}
          >
            Menu
          </span>
              <BsChevronDown  className={styles.btnBrowse}/>


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
            <BiSearch  />
            <IoNotificationsOutline  />
          <div className={styles.userDiv1}>
            <img src="/images/Netflix-avatar.png" alt="ProfilePick" />
            <div className={styles.arrow}>
              <BsChevronDown
                onClick={() => setShowMenu(!showMenu)}
                className={showMenu ? styles.showOpen : styles.show}
              />
            </div>
          </div>
          </div>
          {showMenu && 
          <div className={styles.showMenu}>
                
        <div className={styles.containerAvatar}>
            <div className={styles.imagen}>
                <img src="./images/Netflix-avatar.png" alt="Avatar" />
            </div>
            <div className={styles.username}>
                <span>Franco Chaparro</span>
            </div>
        </div>
        
        <div className={styles.containerLogout}><span className={styles.spans}>Sign out of Netflix</span></div>
    </div>
}
        </div>


          

      </div>

  );
};
