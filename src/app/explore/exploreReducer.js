const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function exploreReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS_BEGIN":
      return {
        ...state,
        loading: true
      }
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.response
      }
    case "GET_ITEMS_FAIL":
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}
