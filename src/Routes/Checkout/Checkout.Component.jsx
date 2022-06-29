import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.Context.jsx";
import "./Checkout.Styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <h4>{quantity}</h4>
              <button onClick={() => addItemToCart(cartItem)}>Increment</button>
              <button onClick={() => removeItemFromCart(cartItem)}>
                Decrement
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
