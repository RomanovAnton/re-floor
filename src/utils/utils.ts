import { Element, Section } from "../redux/products/types";
import { itemsPerPage } from "./constants";

export const filterProducts = (
  products: Element[],
  searchValue: string,
  costRange: number[],
  selectedSections: Section[]
) => {
  const getItems = () => {
    if (selectedSections.length > 0) {
      const filteredIds = selectedSections.flatMap((el) => el.items);
      const filteredBySections = [...products].filter((el) =>
        filteredIds.includes(el.id)
      );
      return filteredBySections;
    } else {
      return products;
    }
  };

  const items = getItems();
  const filteredBySearch = items.filter((el) =>
    el.title.toLowerCase().includes(searchValue)
  );

  const filteredByCost = filteredBySearch.filter(
    (el) => Number(el.price) >= costRange[0] && Number(el.price) <= costRange[1]
  );

  return filteredByCost;
};

export const getPaginatedItems = (array: Element[], page: number) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return array.slice(startIndex, endIndex);
};
