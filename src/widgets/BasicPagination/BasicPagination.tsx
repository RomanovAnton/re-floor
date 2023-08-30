import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/products/productsSlice";
import { itemsPerPage } from "../../utils/constants";
import { RootState } from "../../redux/store";

export const BasicPagination: React.FC<{ itemsLength: number }> = ({
  itemsLength,
}) => {
  const [pageCount, setPageCount] = useState<number>();
  const page = useSelector((state: RootState) => state.products.currentPage);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, [itemsLength]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        color="primary"
        onChange={handleChange}
        page={page}
      />
    </Stack>
  );
};
