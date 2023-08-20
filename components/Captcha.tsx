import React from "react";
import styles from "@/app/(navigation)/register/register.module.css";

interface Props {
  open: boolean;
  setOpen: any;
}

export const Captcha: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <>
      <span className={styles.Sign}>
        This page is protected by Google CAPTCHA to ensure you're not a bot.
      </span>
      {open && (
        <span onClick={() => setOpen(!open)} className={styles.capchap}>
          Learn more.
        </span>
      )}
      {!open && (
        <span className={styles.Sign}>
          The information collected by Google reCAPTCHA is subject to the Google
          <span className={styles.capchap}>Privacy Policy</span> and
          <span className={styles.capchap}> Terms of Service </span>, and is
          used for providing, maintaining, and improving the reCAPTCHA service
          and for general security purposes (it is not used for personalized
          advertising by Google).
        </span>
      )}
    </>
  );
};
