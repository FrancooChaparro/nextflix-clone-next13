"use client";
import { RegisterForm } from "@/app/types";
import styles from "./register.module.css";
import { useState } from "react";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
function validate(input: RegisterForm) {
  let errors = {
    username: "",
    email: "",
    password: "",
  };
  const regexName = /^([a-zA-Z ]+)$/i;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!input.username) {
    errors.username = "username is required";
  }

  if (input.username && !regexName.test(input.username)) {
    errors.username = "insert username valid";
  }

  if (input.username.length > 15 || input.username.length < 4) {
    errors.username = "insert username valid";
  }
  if (!input.password) {
    errors.password = "password is required";
  }

  if (input.password.length > 12) {
    errors.password = "Max 20 caracteres";
  }

  if (input.password.length < 8) {
    errors.password = "Min 8 Caracteress, 1 Mayusc, 1 Minus";
  }

  if (input.email && !regexEmail.test(input.email)) {
    errors.email = "insert email valid";
  }
  if (!input.email) {
    errors.email = "email is required";
  }

  return errors;
}

const Register = () => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...inputValues,
        [e.target.name]: e.target.value,
      })
    );
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
            <h2>Register</h2>
            <div className={styles.containerInput}>
              <Input
                Onchange={handleChange}
                value={inputValues.username}
                name={"username"}
                type={"text"}
                placeholder={"Username"}
                error={errors.username}
              />

              <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"email"}
                type={"text"}
                placeholder={"Email"}
                error={errors.email}
              />

              <Input
                Onchange={handleChange}
                value={inputValues.password}
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                error={errors.password}
              />

              <button className={styles.btn}>Sign up</button>
              <span className={styles.Sign}>Already have an account?</span>
              <span className={styles.SignLink} onClick={()=> router.push("/login")}>Login.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
