import { signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase-config";

const socialMediaAuth = (provider) => {
  signInWithPopup(auth, provider)
    .then((res) => {
      window.location.href = "/success";
      console.log(res);
      return res.user;
    })
    .catch((err) => {
      window.location.href = "/failure";
      console.log(err);
      return err;
    });
};
export default socialMediaAuth;
