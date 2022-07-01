import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories.Context.jsx";
import CategoryPreview from "../../Components/Category-Preview/Category-Preview.Component.jsx";
import "./Shop.Styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
