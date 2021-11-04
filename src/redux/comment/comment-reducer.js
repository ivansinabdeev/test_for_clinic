// import { combineReducers } from "redux";

// import { createReducer } from "@reduxjs/toolkit";
// import actions from "./comment-actions";

// const comments = createReducer([], {
//   [actions.addComment]: (state, { payload }) => {
//     const comment = [...state, payload];

//     return comment;
//   },
//   [actions.deleteComment]: (state, { payload }) => {
//     const comment = state.filter(({ id }) => id !== payload);

//     return [...comment];
//   },
// });
// const filter = createReducer("", {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   comments,
//   filter,
// });

import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import actions from "./comment-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const contacts = [...state, payload];

    return contacts;
  },
  [actions.deleteContact]: (state, { payload }) => {
    const contacts = state.filter(({ id }) => id !== payload);

    return [...contacts];
  },
});
const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
