import { useContext } from "react";
import { ProductsContext } from "../../Contexts/Products.Context.jsx";
import ProductCard from "../../Components/Product-Card/Product-Card.Component.jsx";
import "./Shop.Styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
