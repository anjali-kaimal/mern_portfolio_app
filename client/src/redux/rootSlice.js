import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    reloadData:false,
  },
  reducers: {
    ShowLoading: (state, action) => {
      state.loading = true;
    },
    HideLoading: (state, action) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    reloadData:(state,action)=>{
      state.reloadData=action.payload;
    }
  },
});

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, setPortfolioData, reloadData } =
  rootSlice.actions;
