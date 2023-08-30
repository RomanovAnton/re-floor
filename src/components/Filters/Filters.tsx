import { useEffect } from "react";
import { Accordion } from "../../widgets/Accordion/Accordion";
import { SearchInput } from "../../widgets/SearchInput/SearchInput";
import RangeSlider from "../../widgets/Slider/RangeSlider";
import { SectionList } from "../SectionList/SectionList";
import "./Filters.scss";

export const Filters = () => {
  useEffect(() => {}, []);

  return (
    <div className="filters">
      <div className="filters__wrapper">
        <SearchInput />
        <RangeSlider />
        <Accordion title="Категории">
          <SectionList />
        </Accordion>
      </div>
    </div>
  );
};
