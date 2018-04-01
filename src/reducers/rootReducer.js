import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import testReducer from "../app/test/testReducer";
import exploreReducer from "../app/explore/exploreReducer";

const rootReducer = combineReducers({
  test: testReducer,
  items: exploreReducer,
  router: routerReducer
});

export default rootReducer;
