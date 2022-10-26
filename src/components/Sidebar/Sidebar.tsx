import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarData from "./SidebarConfig/SidebarData";
import { Link } from "react-router-dom";
import Icon from "modules/Icon/Icon";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.container_topic}>
        <h1 className={styles.container_topic__heading}>Меню</h1>
        <div className={styles.container_content}>
          {SidebarData.map((menu) => (
            <li className={styles.container_content__list} key={menu.title}>
              <Link className={styles.container_content__link} to={menu.path}>
                <div className={styles.container_content__menu}>
                  <Icon
                    className={styles.container_content__menu_icon}
                    path={menu.icon.path}
                    viewBox={menu.icon.viewBox}
                  />
                  <span className={styles.test}>{menu.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
