export interface ProductsState {
  elements: Element[];
  sections: Section[];
  searchValue: string;
  isLoading: boolean;
  error: string;
  costRange: number[];
  selectedSections: Section[];
  currentPage: number;
}

export type Element = {
  currency: string;
  id: string;
  photo: Photo[];
  price: string;
  src: string;
  title: string;
};

type Photo = {
  id: number;
  src: string;
};

export type Section = {
  id: number;
  items: string[];
  title: string;
};
