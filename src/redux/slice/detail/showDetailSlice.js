import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getShowDetailUrl } from "../../../api";

export const fetchDetail = createAsyncThunk("fetchDetail", async (id) => {
  const response = await axios.get(getShowDetailUrl(id));

  return response.data;
});

const initialState = {
  show: {},
};
const detailSlice = createSlice({
  name: "showDetail",
  initialState,
  reducers: {
    resetState: (state) => {
      state.show = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.show = action.payload;
    });
  },
});

export const { resetState } = detailSlice.actions;
export default detailSlice.reducer;
