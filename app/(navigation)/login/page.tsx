"use client";
import { LoginForm } from "@/app/types";
import styles from "../register/register.module.css";
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { FcGoogle } from "react-icons/fc";
import { Captcha } from "@/components/Captcha";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";

export const Login = () => {
  const { user, LoginAction, session } = useMyContext();
  console.log(user);
  const router = useRouter();
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
      LoginAction(inputValues)
      if(session) router.push("/user")
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
              <div className={styles.containerbtn}>
                <button>
                  <FcGoogle />
                </button>
              </div>
              <span className={styles.Sign}>New to Netflix?</span>
              <span className={styles.SignLink} onClick={()=> router.push("/register")}>Sign up now.</span> <br />
              <Captcha open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
