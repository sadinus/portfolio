import { SystemState } from "../types";
import { MENU_ITEM_SELECTED, MenuActionTypes } from "../actions/types";

const initialState: SystemState = {
  currentMenuItem: "home"
};

export const scrollSpy = (
  state = initialState,
  action: MenuActionTypes
): SystemState => {
  switch (action.type) {
    case MENU_ITEM_SELECTED:
      return {
        ...state,
        currentMenuItem: action.payload
      };
    default:
      return state;
  }
};
