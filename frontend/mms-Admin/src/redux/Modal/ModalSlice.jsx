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

    showModal: (state, action) => {
      state.modalData = action.payload.modalData;
      state.modalName = action.payload.name;
      state.show = true;
    },

    hideModal: (state, action) => {
      state.modalData = {};
      state.modalName = action.payload.name;
      state.show = false;
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;