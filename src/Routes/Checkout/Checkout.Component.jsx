import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.Context.jsx";
import "./Checkout.Styles.scss";
import CheckoutItem from "../../Components/Checkout-Item/Checkout-Item.Component.jsx";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quntity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total:0</span>
    </div>
  );
};

export default Checkout;
