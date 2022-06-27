import { useState, useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../Utils/Firebase/Firebase.Utils";

import FormInput from "../Form-Input/Form-Input.Component.jsx";
import "./Sign-In-Form.Styles.scss";
import Button from "../Button/Button.Component.jsx";
import { userContext } from "../../Contexts/User.Context.jsx";

const defaultFormFeilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormfeilds] = useState(defaultFormFeilds);
  const { email, password } = formFields;

  const { setCurrentuser } = useContext(userContext);

  const resetFormFeilds = () => {
    setFormfeilds(defaultFormFeilds);
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentuser(user);
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentuser(user);
      resetFormFeilds();
      if (user) {
        console.log("user loged in ");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("no user with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfeilds({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already hav an account</h2>
      <span>Sign in with your email and passsword</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          lable="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={SignInWithGoogle} type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
