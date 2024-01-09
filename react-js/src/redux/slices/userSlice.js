import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsers as getUserApi } from "../api/userApi.js";

const getUsers = createAsyncThunk("users/fetchByIdStatus", async () => {
  const response = await getUserApi();
  return response.data;
});

const initialState = {
  entities: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  builder: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice;
