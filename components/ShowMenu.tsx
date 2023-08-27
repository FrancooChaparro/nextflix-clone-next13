import React from "react";
import styles from "../styles/ShowMenu.module.css";
import { useRouter } from 'next/navigation';
import { useMyContext } from "@/context/ListContext";


const ShowMenu = () => {
  const router = useRouter();
  const { user, session, OutSign } = useMyContext();
  function signOut () { 
    OutSign()
    router.push('/login')
  }
  return (
    <div className={styles.showMenu}>
      <div className={styles.containerAvatar}>
        <div className={styles.imagen}>
          <img src="./images/Netflix-avatar.png" alt="Avatar" />
        </div>
        <div className={styles.username}>
          <span>{session ? user.username : "Franco Chaparro"}</span>
        </div>
      </div>
      <div className={styles.containerLogout}>
        <span className={styles.spans} onClick={() => signOut()}>Sign out of Netflix</span>
      </div>
    </div>
  );
};

export default ShowMenu;
