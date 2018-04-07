import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import testReducer from "../app/test/testReducer";
import exploreReducer from "../app/explore/exploreReducer";
import formReducer from "../app/campaign/formReducer";
import userReducer from "../app/user/userReducer";
import authReducer from "../app/user/authReducer";

const rootReducer = combineReducers({
  test: testReducer,
  items: exploreReducer,
  form: formReducer,
  router: routerReducer,
  user: userReducer,
  auth: authReducer
});

export default rootReducer;
