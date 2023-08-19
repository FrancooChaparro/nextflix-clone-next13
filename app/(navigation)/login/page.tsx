"use client";
import { LoginForm } from "@/app/types";
import styles from "../register/register.module.css";
import React, { useState } from "react";
import { Input } from "@/components/Input";

export const Login = () => {
  const [errormsg, setErrormsg] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);
  const [inputValues, setInputValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    if (!inputValues.password || !inputValues.email) {
      setErrormsg(true);
      setTimeout(() => {
        setErrormsg(false);
      }, 5000);
      return;
    } else {
      return;
    }
  }

  return (
    <div className={styles.containerAll}>
      <div className={styles.containerOpacity}>
        <nav className={styles.nav}>
          <img
            src="/images/Netflix_Logo.png"
            alt="Logo"
            className={styles.img}
            height={70}
          />
        </nav>
        <div className={styles.containerForm}>
          <div className={styles.Form}>
            <h2>Login</h2>
            <div className={styles.containerInput}>
              <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"email"}
                type={"text"}
                placeholder={"Email"}
                errormsg={errormsg}
              />
              <Input
                Onchange={handleChange}
                value={inputValues.password}
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                errormsg={errormsg}
              />
              {errormsg && (
                <span className={styles.spanError}>
                  Password or email invalid
                </span>
              )}
              <button onClick={() => handleSubmit()} className={styles.btn}>
                Login
              </button>
              <span className={styles.Sign}>New to Netflix?</span>
              <span className={styles.SignLink}>Sign up now.</span> <br />
              <span className={styles.Sign}>
                This page is protected by Google CAPTCHA to ensure you're not a
                bot.
              </span>
              {open && (
                <span onClick={() => setOpen(!open)} className={styles.capchap}>
                  Learn more.
                </span>
              )}
              {!open && (
                <span className={styles.Sign}>
                  {" "}
                  The information collected by Google reCAPTCHA is subject to
                  the Google{" "}
                  <span className={styles.capchap}>
                    Privacy Policy
                  </span> and{" "}
                  <span className={styles.capchap}>Terms of Service</span>, and
                  is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                  is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                  is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                  is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                  is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
