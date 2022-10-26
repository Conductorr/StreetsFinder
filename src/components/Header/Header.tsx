import React from "react";
import styles from "./Header.module.scss";
import Icon from "modules/Icon";
import { wrench, person } from "assets/svg";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_logo}>
          <Icon
            className={styles.container_content_logo__icon}
            path={wrench.path}
            viewBox={wrench.viewBox}
          />
          <h1 className={styles.container_content_logo__heading}>Wrench CRM</h1>
        </div>
        <div className={styles.container_content_user}>
          <Icon
            className={styles.container_content_user__icon}
            path={person.path}
            viewBox={person.viewBox}
          />
          <h1 className={styles.container_content_user__heading}>
            Имя Фамилия
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
