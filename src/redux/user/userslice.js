import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        userRole: action.payload.userRole,
        address1: action.payload.address1,
        stores: action.payload.stores,
        selectedStoreId: action.payload?.stores[0]?.storeId
      };

    },
    logoutUser: (state, action) => {
      return {
       
      }
    },
   
  },
});
export const { addUser, logoutUser } = userSlice.actions;
// export default userSlice.reducer;
