import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import { createContacts, createFilter } from "./slice";



const persistConfig = {
  key: "contacts",
  storage,
}

const persistedReducer = persistReducer(persistConfig, createContacts.reducer);


export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: createFilter.reducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);








