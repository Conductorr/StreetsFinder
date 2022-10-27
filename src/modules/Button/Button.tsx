import React from "react";
import Icon from "modules/Icon";
import { search } from "assets/svg";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  onClick?: () => void;
};

function Button({ onClick }: Props) {
  return (
    <button onClick={onClick} className={styles.button}>
      <div className={styles.button_container}>
        <Icon
          className={styles.button_container__icon}
          path={search.path}
          viewBox={search.viewBox}
        />
        <h1 className={styles.button_container__heading}>Поиск</h1>
      </div>
    </button>
  );
}

export default Button;
