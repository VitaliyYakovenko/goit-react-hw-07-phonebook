import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./API/getContacts";


export const createContacts = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        add(state, action) {
        state.items.push(action.payload);
        }, 

        remove(state, action) {
        state.items = state.items.filter(contact => contact.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchContacts.rejected]: (state) => {
            state.isLoading = false;
            state.error = "rejected";
        }
    },
})
 
export const { add, remove } = createContacts.actions


export const createFilter = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        changeFilter(state, action) {
         return state = action.payload;
        }
    }
})



export const { changeFilter } = createFilter.actions;

