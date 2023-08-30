import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const { data } = await axios.get(`${BASE_URL}/test/json/`);
  return data;
});

export default fetchProducts;
