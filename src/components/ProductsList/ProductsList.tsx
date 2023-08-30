import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { useEffect, useState } from "react";
import { Element } from "../../redux/products/types";
import { filterProducts, getPaginatedItems } from "../../utils/utils";
import { BasicPagination } from "../../widgets/BasicPagination/BasicPagination";
import "./ProductsList.scss";

export const ProductsList = () => {
  const { elements, searchValue, costRange, selectedSections, currentPage } =
    useSelector((state: RootState) => state.products);
  const [products, setProducts] = useState<Element[]>([]);
  const [filteredLength, setFilteredLength] = useState<number>(0);

  useEffect(() => {
    if (elements.length > 0) {
      const filteredProducts = filterProducts(
        elements,
        searchValue,
        costRange,
        selectedSections
      );
      setFilteredLength(filteredProducts.length);
      setProducts(getPaginatedItems(filteredProducts, currentPage));
    }
  }, [searchValue, elements, costRange, selectedSections, currentPage]);

  return (
    <>
      {products.length > 0 ? (
        <div className="wrapper">
          <ul className="products">
            {products.map((el) => (
              <ProductsItem key={el.id} {...el} />
            ))}
          </ul>
          <BasicPagination itemsLength={filteredLength} />
        </div>
      ) : (
        <p className="products__not-found">
          По вашему запросу ничего не найдено. Попробуйте изменить параметры
          поиска
        </p>
      )}
    </>
  );
};
