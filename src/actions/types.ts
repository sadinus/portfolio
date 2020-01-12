export const SELECT_NAV_ITEM = "SELECT_NAV_ITEM";
export const SCROLL_TO_SECTION = "SCROLL_TO_SECTION";

export type SelectNavItemAction = {
  type: typeof SELECT_NAV_ITEM;
  payload: string;
};

export type ScrollToSectionAction = {
  type: typeof SCROLL_TO_SECTION;
  payload: string;
};

export type MenuActionTypes = SelectNavItemAction | ScrollToSectionAction;
