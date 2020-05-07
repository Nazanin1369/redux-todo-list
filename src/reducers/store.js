import { combineReducers } from "redux";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoAppStore = combineReducers({
  todos,
  visibilityFilter
});

export default todoAppStore;
