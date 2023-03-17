import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getShowsUrl } from "../../../api/";

export const fetchShows = createAsyncThunk("fetchShows", async () => {
  const response = await axios.get(getShowsUrl());
  return response.data;
});

const initialState = {
  shows: [],
  status: "idle",
  error: null,
};
const tvShowSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shows = [...state.shows, ...action.payload];
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default tvShowSlice.reducer;
