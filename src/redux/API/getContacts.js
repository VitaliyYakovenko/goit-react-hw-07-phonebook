import { createAsyncThunk } from "@reduxjs/toolkit";


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