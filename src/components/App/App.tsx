import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { Filters } from "../Filters/Filters";
import { ProductsList } from "../ProductsList/ProductsList";
import fetchProducts from "../../redux/products/asyncAction";
import { Loader } from "../../widgets/Loader/Loader";
import "./App.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="app">
      <div className={isLoading ? "app__overlay visible" : "app__overlay"}>
        <Loader />
      </div>
      <Filters />
      <ProductsList />
    </div>
  );
}

export default App;
