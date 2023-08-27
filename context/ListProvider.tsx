"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext";
import { LoginForm, MovieObject, RegisterForm } from "@/app/types";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [session, setSession] = useState<boolean>(() => {
    const storedsession = localStorage.getItem("session");
    return storedsession ? JSON.parse(storedsession) : false;
  });

  const [user, setUser] = useState<RegisterForm>(() => {
    const storeduser = localStorage.getItem("user");
    return storeduser
      ? JSON.parse(storeduser)
      : {
          username: "",
          email: "",
          password: "",
        };
  });

  const [MyList, setMyList] = useState<MovieObject[]>(() => {
    const storedList = localStorage.getItem("myList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const AddMyList = (newValue: MovieObject) => {
    const existentMovie = MyList.find((e) => e.title === newValue.title);
    if (existentMovie) return alert("Ya está en tu Lista");

    const updatedList = [...MyList, newValue];
    setMyList(updatedList);

    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const DeleteMyList = (newValue: MovieObject) => {
    const updatedList = MyList.filter(
      (movie) => movie.title !== newValue.title
    );
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const OutSign = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
    setSession(false);
    localStorage.setItem("session", JSON.stringify(false));
    localStorage.removeItem("user");
  };
  const RegisterAction = (newValue: RegisterForm) => {
    setUser(newValue);
    localStorage.setItem("user", JSON.stringify(newValue));
  };
  const LoginAction = (newValue: LoginForm) => {
    if (user.email === newValue.email && user.password === newValue.password) {
      localStorage.setItem("session", JSON.stringify(true));
      return setSession(true);
    }

    return alert("Usuario o contraseña invalido");
  };
  const contextValue: MyContextType = {
    MyList,
    AddMyList,
    DeleteMyList,
    user,
    RegisterAction,
    LoginAction,
    session,
    OutSign,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
