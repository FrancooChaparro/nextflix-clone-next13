"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext";
import { LoginForm, MovieObject, RegisterForm } from "@/app/types";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [session, setSession] = useState<boolean>(false);
  const [user, setUser] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
  });

  const [MyList, setMyList] = useState<MovieObject[]>([]);

  const AddMyList = (newValue: MovieObject) => {
    const existentMovie = MyList.find((e) => e.title === newValue.title);
    if (existentMovie) return alert("Ya está en tu Lista");

    const updatedList = [...MyList, newValue];
    setMyList(updatedList);
  };

  const DeleteMyList = (newValue: MovieObject) => {
    const updatedList = MyList.filter(
      (movie) => movie.title !== newValue.title
    );
    setMyList(updatedList);
  };

  const OutSign = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
    setSession(false);
  };

  const RegisterAction = (newValue: RegisterForm) => {
    setUser(newValue);
  };

  const LoginAction = (newValue: LoginForm) => {
    if (user.email === newValue.email && user.password === newValue.password) {
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
