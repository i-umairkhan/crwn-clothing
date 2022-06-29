import "./Cart-Dropdown.Styles.scss";
import Button from "../Button/Button.Component.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/Cart.Context.jsx";
import CartItem from "../Cart-Item/Cart-Item.Component.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutPage = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button onClick={goToCheckOutPage}>GO TO CHCHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
