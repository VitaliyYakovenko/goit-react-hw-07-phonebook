import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
    "items/fetchContacts",
    async function (_, {rejectWithValue}) {
        try {
        const response = await fetch(`https://642ff007c26d69edc8870d51.mockapi.io/api/v1/contacts`)
        if (!response.ok) throw new Error("Not found")
            
        const data = await response.json(); 
        return data;
        }
        catch (error) {
        return rejectWithValue(error.message);
        }
      
    }
)

export const addContact = createAsyncThunk(
    "items/addContact",
    async function (user, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://642ff007c26d69edc8870d51.mockapi.io/api/v1/contacts/`,
            { method: "POST",
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify(user)
                })
            
            if (!response.ok) throw new Error("Can't add contact")
        
            const data = await response.json();
            dispatch(add(data));

            
         } catch (error) {
             return rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "items/deleteContact",
    async function (id, { rejectWithValue, dispatch}) {
    try {
        const response = await fetch(`https://642ff007c26d69edc8870d51.mockapi.io/api/v1/contacts/${id}`,
        { method: "DELETE" })
    
        if (!response.ok) throw new Error("Can't delete contact")
    
        dispatch(remove(id))
            
         }
    catch (error) {
        return rejectWithValue(error.message);
        }
    }
)




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
        },
        [deleteContact.rejected]: (state) => {
            state.isLoading = false;
            state.error = "rejected";
        },
        [addContact.rejected] : (state) => {
            state.isLoading = false;
            state.error = "rejected";
        }
    },
})

const { add, remove } = createContacts.actions


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


