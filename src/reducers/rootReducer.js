import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import testReducer from "../app/test/testReducer";
import exploreReducer from "../app/explore/exploreReducer";
import formReducer from "../app/campaign/formReducer";

const rootReducer = combineReducers({
  test: testReducer,
  items: exploreReducer,
  form: formReducer,
  router: routerReducer
});

export default rootReducer;
