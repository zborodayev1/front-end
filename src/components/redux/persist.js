import storage from "redux-persist/lib/storage"; // or 'localforage' or 'sessionstorage'

const persistConfig = {
  key: "store",
  storage,
};

export { persistConfig };
