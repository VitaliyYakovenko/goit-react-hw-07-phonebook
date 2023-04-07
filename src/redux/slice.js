import { createSlice } from "@reduxjs/toolkit";




export const createContacts = createSlice({
    name: "contacts",
    initialState: {
        contacts : []
    },
    reducers: {
        add(state, action) {
        state.contacts.push(action.payload);
    
        },
        remove(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        }

    }
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