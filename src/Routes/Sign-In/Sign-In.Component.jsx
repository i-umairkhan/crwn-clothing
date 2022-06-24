import { signInWithGooglePopup } from "../../Utils/Firebase/Firebase.Utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const reponse = await signInWithGooglePopup();
    console.log(reponse);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>SignIn With Google</button>
    </div>
  );
};

export default SignIn;
