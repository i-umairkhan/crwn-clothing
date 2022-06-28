import "./Cart-Dropdown.Styles.scss";
import Button from "../Button/Button.Component.jsx";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHCHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
