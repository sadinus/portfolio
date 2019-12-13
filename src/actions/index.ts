import { MENU_ITEM_SELECTED, MenuActionTypes } from "./types";

export const scrollAction = (menuItem: string): MenuActionTypes => {
  return {
    type: MENU_ITEM_SELECTED,
    payload: menuItem
  };
};
