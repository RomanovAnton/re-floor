import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDebounce } from "../../hooks/useDebounce";
import {
  setCostRange,
  setCurrentPage,
} from "../../redux/products/productsSlice";
import "./RangeSlider.scss";

export default function RangeSlider() {
  const products = useSelector((state: RootState) => state.products.elements);
  const [value, setValue] = useState<number[]>([]);
  const [limits, setLimits] = useState<number[]>([]);
  const debouncedValue = useDebounce(value, 800);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products.length > 0) {
      const prices = [...products].map((el) => Number(el.price));
      const minCost = Math.min(...prices);
      const maxCost = Math.max(...prices);
      setLimits([minCost, maxCost]);
      setValue([minCost, maxCost]);
    }
  }, [products]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setCostRange(value));
  }, [debouncedValue]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="slider">
      <p className="slider__title">Цена, ₽</p>
      <div className="slider__range-container">
        <div className="slider__value">
          <span>от</span>
          <span>{value[0]}</span>
        </div>
        <div className="slider__value">
          <span>до</span>
          <span>{value[1]}</span>
        </div>
      </div>
      <Box>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          min={limits[0]}
          max={limits[1]}
        />
      </Box>
    </div>
  );
}
