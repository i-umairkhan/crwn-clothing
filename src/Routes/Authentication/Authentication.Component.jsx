import SignUpForm from "../../Components/Sign-Up-Form /Sign-Up-Form.Component";
import SignInForm from "../../Components/Sign-In-Form/Sign-In-Form.Component";

import "./Authentication.Styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-case">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
