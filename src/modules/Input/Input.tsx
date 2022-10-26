import React from "react";
import styles from "./Input.module.scss";

type Props = {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ className, value, onChange }: Props) {
  return (
    <input
      style={{ font: "500 26px" }}
      className={styles.input}
      type="text"
      onChange={onChange}
      placeholder={"Введите интересующий вас адрес"}
    />
  );
}

export default Input;
