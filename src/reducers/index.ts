import { combineReducers } from "redux";
import { navReducer } from "./navReducer";

export const rootReducer = combineReducers({
  navigation: navReducer
});

export type RootState = ReturnType<typeof rootReducer>;
