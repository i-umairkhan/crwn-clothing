import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import "./Navigation.Styles.scss";
import { userContext } from "../../Contexts/User.Context.jsx";
import { signOutUser } from "../../Utils/Firebase/Firebase.Utils";
import CartIcon from "../../Components/Cart-Icon/Cart-Icon.Component.jsx";
import CartDropdown from "../../Components/Cart-Dropdown/Cart-Dropdown.Component.jsx";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo " />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
