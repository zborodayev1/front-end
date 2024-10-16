// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../../axios";

// export const fetchProfile = createAsyncThunk("posts/fetchProfile", async () => {
//     const { data } = await axios.get("/profile");
//     return data;
//   });
  
//   const initialState = {
//     data: null,
//     status: "loading",
//   };
  
//   const profilesSlice = createSlice({
//     name: "profile",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchProfile.pending, (state) => {
//           state.status = "loading";
//           state.data = null;
//         })
//         .addCase(fetchProfile.fulfilled, (state, action) => {
//           state.status = "loaded";
//           state.data = action.payload;
//         })
//         .addCase(fetchProfile.rejected, (state) => {
//           state.status = "error";
//           state.data = null;
//         });
//     },
//   });
  
//   export const profilesReducer = profilesSlice.reducer