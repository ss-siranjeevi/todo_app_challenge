import firebase from "firebase";

export const AuthenticationService = {
  signin: (
    email: string,
    password: string,
    successHandler: Function,
    errorHandler: Function
  ) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => successHandler(res))
      .catch((err) => errorHandler && errorHandler(err));
  },
  signout: (successHandler: Function, errorHandler: Function) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        successHandler("SUCCESS");
      })
      .catch((err) => {
        errorHandler && errorHandler(err);
      });
  },
};
