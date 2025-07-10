import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsApi } from "../../api/api";
export const getGenresThunk = createAsyncThunk(
    'getGenresThunk',
    async (_, { dispatch }) => {
        const res = await FilmsApi.getGenres()
        // dispatch(getGenres(res.data.genres))
        return res.data
    }
)
export const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: [],
        isFettching : false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getGenresThunk.pending, (state) => {
            state.isFettching = true
        })
        builder.addCase(getGenresThunk.fulfilled, (state, action) => {
            state.genres = action.payload.genres
            state.isFettching = false
        })
    }
})
export default genresSlice.reducer