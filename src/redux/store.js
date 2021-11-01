import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import commentReducer from "./comment/comment-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const commentPersistConfig = {
  key: "comment",
  storage,
};

export const store = configureStore({
  reducer: {
    comment: persistReducer(commentPersistConfig, commentReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
