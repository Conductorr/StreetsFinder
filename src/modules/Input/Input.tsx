import React from "react";
import styles from "./Input.module.scss";

type Props = {
  className?: string;
  value: string;
};

function Input({ className, value }: Props) {
  return (
    <input
      style={{ font: "500 26px" }}
      className={styles.input}
      type="text"
      placeholder={"Введите интересующий вас адрес"}
    />
  );
}

export default Input;
