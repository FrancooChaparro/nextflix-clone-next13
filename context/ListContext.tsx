"use client"
import { createContext, useContext } from 'react';
import { LoginForm, MovieObject, RegisterForm } from '@/app/types';

export type MyContextType = {
  MyList: MovieObject[] | [];
  AddMyList: (newValue: MovieObject) => void;
  DeleteMyList: (newValue: MovieObject) => void;
  user: RegisterForm;
  RegisterAction: (newValue: RegisterForm) => void;
  LoginAction: (newValue: LoginForm) => void;
  session: boolean;
  OutSign:() => void; 
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

