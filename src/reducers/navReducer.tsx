import { NavState, NavItemName } from "../types";
import {
  MenuActionTypes,
  SELECT_NAV_ITEM,
  SCROLL_TO_SECTION
} from "../actions/types";

const initialState: NavState = {
  activeNavItem: NavItemName.home,
  currentSection: NavItemName.home
};

export const navReducer = (
  state = initialState,
  action: MenuActionTypes
): NavState => {
  switch (action.type) {
    case SELECT_NAV_ITEM:
      return {
        ...state,
        activeNavItem: action.payload as NavItemName
      };
    case SCROLL_TO_SECTION:
      return {
        ...state,
        currentSection: action.payload as NavItemName
      };
    default:
      return state;
  }
};
