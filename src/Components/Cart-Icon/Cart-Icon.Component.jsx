import "./Cart-Icon.Styles.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.Context.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
