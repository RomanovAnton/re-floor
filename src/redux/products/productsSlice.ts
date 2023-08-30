import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsState, Section } from "./types";
import fetchProducts from "./asyncAction";

const initialState: ProductsState = {
  elements: [],
  sections: [],
  isLoading: false,
  searchValue: "",
  costRange: [],
  selectedSections: [],
  currentPage: 1,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCostRange: (state, action: PayloadAction<number[]>) => {
      state.costRange = action.payload;
    },
    setSelecedSections: (state, action: PayloadAction<Section>) => {
      const selectedId = [...state.selectedSections].map((el) => el.id);
      if (selectedId.includes(action.payload.id)) {
        state.selectedSections = [...state.selectedSections].filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.selectedSections = [...state.selectedSections, action.payload];
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.error = "";
      state.isLoading = false;
      state.elements = Object.values(action.payload.elements);
      state.sections = action.payload.sections;
    });
    builder.addCase(fetchProducts.rejected, (state, payload) => {
      state.isLoading = false;
      state.error = "ServerError";
    });
  },
});

export const {
  setSearchValue,
  setCostRange,
  setSelecedSections,
  setCurrentPage,
} = productsSlice.actions;
export default productsSlice.reducer;
