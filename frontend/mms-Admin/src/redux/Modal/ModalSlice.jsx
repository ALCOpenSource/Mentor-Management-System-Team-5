import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: {},
  modalName: "",
  show: false
};

export const modalSlice = createSlice({
  name: "modal",

  initialState,

  reducers: {
    showModalAction: (state, action) => {
      state.modalData = action.payload.modalData;
      state.modalName = action.payload.name;
      state.show = true;
    },

    hideModalAction: (state, action) => {
      state.modalData = {};
      state.modalName = action.payload.name;
      state.show = false;
    }
  }
});
export default modalSlice.reducer;

// Actions
const { showModalAction, hideModalAction } = modalSlice.actions;

export const showModal = (data) => async (dispatch) => {
  return dispatch(showModalAction(data));
};

export const hideModal = (data) => async (dispatch) => {
  return dispatch(hideModalAction(data));
};
