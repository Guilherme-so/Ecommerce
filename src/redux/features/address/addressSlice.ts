import { createSlice } from "@reduxjs/toolkit";

export interface AddressState {
  value: {
    nome?: string;
    cep?: string;
    estado?: string;
    cidade?: string;
    bairro?: string;
    rua?: string;
    numero?: string;
    complemento?: string;
    email?: string;
  };
}

const initialState: AddressState = {
  value: {},
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAddress } = addressSlice.actions;

export default addressSlice.reducer;
