import { NavItemName } from "./../types/index";
import { SELECT_NAV_ITEM, MenuActionTypes, SCROLL_TO_SECTION } from "./types";

export const setActiveNavItem = (navItem: NavItemName): MenuActionTypes => {
  return {
    type: SELECT_NAV_ITEM,
    payload: navItem
  };
};

export const setCurrentSection = (section: NavItemName): MenuActionTypes => {
  return {
    type: SCROLL_TO_SECTION,
    payload: section
  };
};
