"use client";
import Image from "next/image";
import styles from "./user.module.css";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";

const User = () => {
  const { user, session } = useMyContext();
  const router = useRouter();

  return (
    <div className={styles.containerAll}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>Who's Watching?</h1>
        </div>
        <div className={styles.bot}>
          <Image
            width={160}
            height={160}
            src="/images/Netflix-avatar.png"
            alt="Logo"
            className={styles.Hover}
            onClick={() => router.push("/")}
          />
          <h4>{session ? user.username : "Franco Chaparro"}</h4>
        </div>
      </div>
    </div>
  );
};

export default User;
