import { combineReducers } from "redux";
import { scrollSpy } from "./scrollSpy";

export const rootReducer = combineReducers({
  menuItem: scrollSpy
});

export type RootState = ReturnType<typeof rootReducer>;
