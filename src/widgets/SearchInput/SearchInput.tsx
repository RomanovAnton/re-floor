import { useEffect, useState } from "react";
import searchIcon from "../../assets/search-icon.svg";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import {
  setCurrentPage,
  setSearchValue,
} from "../../redux/products/productsSlice";
import "./SearchInput.scss";

export const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(value, 800);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue]);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value.toLowerCase());
  }

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Название продукта..."
        value={value}
        onChange={handleOnChange}
      />
      <img src={searchIcon} alt="search-icon" className="search__icon" />
    </div>
  );
};
