"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext";
import { MovieObject } from "@/app/types";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [MyList, setMyList] = useState<MovieObject[]>([]);
   
  const AddMyList = (newValue: MovieObject) => {
    const existentMovie = MyList.find((e) => e.title === newValue.title);
    if (existentMovie) return alert("Ya esta en tu Lista")
    setMyList([...MyList, newValue]);
  }; 

  const DeleteMyList = (newValue: MovieObject) => {
    const updatedList = MyList.filter((movie) => movie.title !== newValue.title);
    setMyList(updatedList);
  }; 

  const contextValue: MyContextType = {
    MyList,
    AddMyList,
    DeleteMyList,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
