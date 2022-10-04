import { combineReducers } from "redux";

import { dataReducer } from "./dataReducer";
import { equalReducer } from "./equalReducer";
import { loadReducer } from "./loadReducer";

export const rootReduser = combineReducers({
  dataReducer,
  equalReducer,
  loadReducer
})