import { configureStore } from "@reduxjs/toolkit";
import { createContacts, createFilter } from "./slice";



export const store = configureStore({
    reducer: {
        contacts: createContacts.reducer,
        filter: createFilter.reducer,
    },
})










