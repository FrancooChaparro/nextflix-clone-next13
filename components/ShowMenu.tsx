import React from "react";
import styles from "../styles/ShowMenu.module.css";

const ShowMenu = () => {
  return (
    <div className={styles.showMenu}>
      <div className={styles.containerAvatar}>
        <div className={styles.imagen}>
          <img src="./images/Netflix-avatar.png" alt="Avatar" />
        </div>
        <div className={styles.username}>
          <span>Franco Chaparro</span>
        </div>
      </div>
      <div className={styles.containerLogout}>
        <span className={styles.spans}>Sign out of Netflix</span>
      </div>
    </div>
  );
};

export default ShowMenu;
