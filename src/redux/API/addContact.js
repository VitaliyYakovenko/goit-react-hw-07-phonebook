import { createAsyncThunk } from "@reduxjs/toolkit";
import { add } from "redux/slice";


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
