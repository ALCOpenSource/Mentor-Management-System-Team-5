import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getCriteriaFromStorageData: {},
  saveCriteriaToStorageData: {}
};

export const criteriaSlice = createSlice({
  name: "criteria",

  initialState,

  reducers: {
    getCriteriaFromStorageAction: (state, action) => {
      state.getCriteriaFromStorageData = action.payload;
    },

    saveCriteriaToStorageAction: (state, action) => {
      state.saveCriteriaToStorageData = action.payload;
    }
  }
});
export default criteriaSlice.reducer;

const { getCriteriaFromStorageAction, saveCriteriaToStorageAction } = criteriaSlice.actions;

export const getCriteriaFromStorage = () => async (dispatch) => {
  const criteria = await JSON.parse(localStorage.getItem("criteria"));
  console.log(criteria, "criteria from storage redux");
  dispatch(getCriteriaFromStorageAction(criteria));
};

export const saveCriteriaToStorage = (data) => async (dispatch) => {
  console.log(data, "data to be saved redux");
  await localStorage.setItem("criteria", JSON.stringify(data));
  dispatch(saveCriteriaToStorageAction(data));
};
