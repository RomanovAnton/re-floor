import { useState } from "react";
import { Element } from "../../redux/products/types";
import placeholderImage from "../../assets/no-image.png";
import { BASE_URL } from "../../utils/constants";
import "./ProductsItem.scss";

export const ProductsItem: React.FC<Element> = (element) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoad() {
    setImageLoaded(true);
  }
  return (
    <li className="product">
      <div className="product__image">
        <img
          onLoad={handleImageLoad}
          src={
            imageLoaded && element.src
              ? BASE_URL + element.src
              : placeholderImage
          }
          alt="productImage"
        />
      </div>
      <div className="product__content">
        <h2 className="product__name">{element.title}</h2>
        <p className="product__text">
          {element.price} {element.currency}
        </p>
      </div>
    </li>
  );
};
