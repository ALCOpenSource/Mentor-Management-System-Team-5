import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modalData: Record<string, unknown>;
  modalName: string | undefined;
  show: boolean;
};

const initialState: ModalState = {
  modalData: {},
  modalName: "",
  show: false
};

export const modalSlice = createSlice({
  name: "modal",

  initialState,

  reducers: {

    showModal: (state, action: PayloadAction<{ name: string; modalData: Record<string, unknown>; }>) => {
      state.modalData = action.payload.modalData;
      state.modalName = action.payload.name;
      state.show = true;
    },

    hideModal: (state, action: PayloadAction<{ name: string | undefined ; }>) => {
      state.modalData = {};
      state.modalName = action.payload.name;
      state.show = false;
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;