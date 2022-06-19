import { signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase-config";

const socialMediaAuth = (provider) => {
  signInWithPopup(auth, provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};
export default socialMediaAuth;
