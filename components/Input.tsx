import React from "react";
import styles from "../app/(navigation)/register/register.module.css";

interface Props {
  Onchange: any;
  type: string;
  value: string;
  name: string;
  error?: string;
  placeholder: string;
  errormsg?: boolean;
}

export const Input: React.FC<Props> = ({
  Onchange,
  type,
  value,
  name,
  error,
  placeholder,
  errormsg
}) => {
  return (
    <>
      <input
      
        className={error ? (error && value ? styles.inputsError : styles.input ): (errormsg ? styles.inputsError : styles.input)}
        onChange={Onchange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && value.length > 0 && (
        <span className={styles.spanError}>{error}</span>
      )}
    </>
  );
};
