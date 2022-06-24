import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/Firebase.Utils";

import SignUpForm from "../../Components/Sign-Up-Form/Sign-Up-Form.Component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>SignIn With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
