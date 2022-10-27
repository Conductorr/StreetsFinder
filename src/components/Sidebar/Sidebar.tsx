import React from "react";
import SidebarData from "./SidebarConfig/SidebarData";
import { Link } from "react-router-dom";
import Icon from "modules/Icon/Icon";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.container_topic}>
        <h1 className={styles.container_topic__heading}>Меню</h1>
        <div className={styles.container_content}>
          {SidebarData.map((menu) =>
            menu.submenu?.length > 1 ? (
              <div className={styles.container_content__menu}>
                <Icon
                  className={styles.container_content__menu_icon}
                  path={menu.icon.path}
                  viewBox={menu.icon.viewBox}
                />
                <span className={styles.container_content__link}>
                  {menu.title}
                </span>
                <Icon
                  className={styles.test}
                  viewBox={menu.iconOpened.viewBox}
                  path={menu.iconOpened.path}
                />
              </div>
            ) : (
              <li className={styles.container_content__list} key={menu.title}>
                <Link className={styles.container_content__link} to={menu.path}>
                  <div className={styles.container_content__menu}>
                    <Icon
                      className={styles.container_content__menu_icon}
                      path={menu.icon.path}
                      viewBox={menu.icon.viewBox}
                    />
                    <span className={styles.container_content__link}>
                      {menu.title}
                    </span>
                  </div>
                </Link>
              </li>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
