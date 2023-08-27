"use client"
import { createContext, useContext } from 'react';
import { MovieObject } from '@/app/types';

export type MyContextType = {
  MyList: MovieObject[] | [];
  AddMyList: (newValue: MovieObject) => void;
  DeleteMyList: (newValue: MovieObject) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext;

