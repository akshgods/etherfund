import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import testReducer from "./testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  router: routerReducer
});

export default rootReducer;
