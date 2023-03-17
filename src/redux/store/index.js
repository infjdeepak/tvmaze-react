import { configureStore } from "@reduxjs/toolkit";
import tvShowReducer from "../slice/tvshow/tvShowSlice";
import showDetailReducer from "../slice/detail/showDetailSlice";

const store = configureStore({
  reducer: {
    tvShow: tvShowReducer,
    showDetail: showDetailReducer,
  },
});

export default store;
