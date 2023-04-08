import { createAsyncThunk } from "@reduxjs/toolkit";
import { remove } from "redux/slice";



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