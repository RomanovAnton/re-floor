import { useState, ReactNode } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-icon.svg";
import "./Accordion.scss";

interface AccordionProps {
  children: ReactNode;
  title: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={toggleActive}>
        <p className="accordion__title">{title}</p>
        <Arrow
          className={
            isActive
              ? "accordion__arrow accordion__arrow_active"
              : "accordion__arrow"
          }
        />
      </div>
      <ul
        className={
          isActive
            ? "accordion__content accordion__content_active"
            : "accordion__content"
        }
      >
        {children}
      </ul>
    </div>
  );
};
