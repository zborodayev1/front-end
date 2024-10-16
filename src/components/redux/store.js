import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistConfig } from './persist'
// import { profilesReducer } from "./slices/profiles";

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  // profile: profilesReducer,
});

 
const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

const persistor = persistStore(store);


export { store, persistor };
