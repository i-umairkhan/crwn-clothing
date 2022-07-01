import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories.Context.jsx";
import ProductCard from "../../Components/Product-Card/Product-Card.Component.jsx";
import { Fragment } from "react";
import "./Shop.Styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
