import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  setCurrentPage,
  setSelecedSections,
} from "../../redux/products/productsSlice";
import { Section } from "../../redux/products/types";
import "./SectionList.scss";

export const SectionList: React.FC = () => {
  const { sections } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (section: Section) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelecedSections(section));
  };
  return (
    <>
      {sections.map((item, idx) => (
        <li className="list-item" key={idx}>
          <label className="checkbox" onChange={() => handleClick(item)}>
            <input type="checkbox" className="checkbox__real" />
            <div className="checkbox__custom"></div>
            <p className="checkbox__text">{item.title}</p>
          </label>
        </li>
      ))}
    </>
  );
};
