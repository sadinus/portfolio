export const MENU_ITEM_SELECTED = "MENU_ITEM_SELECTED";

export type ScrollAction = {
  type: typeof MENU_ITEM_SELECTED;
  payload: string;
};

export type MenuActionTypes = ScrollAction;
