import {
  calendar,
  exit,
  finance,
  home,
  map,
  person,
  search,
  settings,
  subArrow,
  table,
  widget,
} from "assets/svg";
import { SidebarItem } from "core/types/SidebarItem";

const SidebarData: SidebarItem[] = [
  {
    title: "Главная",
    path: "/",
    icon: home,
  },
  {
    title: "Поиск Адресов",
    path: "/address",
    icon: search,
  },
  {
    title: "Таблицы",
    path: "/",
    icon: table,
  },
  {
    title: "Календарь",
    path: "/",
    icon: calendar,
  },
  {
    title: "Карты",
    path: "/",
    icon: map,
  },
  {
    title: "Виджеты",
    path: "/",
    icon: widget,
  },
  {
    title: "Настройки",
    path: "/",
    icon: settings,
    iconOpened: subArrow,
    subnav: [
      {
        title: "Настройки профиля",
        path: "/",
        icon: person,
      },
      {
        title: "Управление финансами",
        path: "/",
        icon: finance,
      },
    ],
  },
  {
    title: "Выход",
    path: "/",
    icon: exit,
  },
];

export default SidebarData;
