import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  username: Yup.string().min(3).max(20).required("Please enter your username"),
  password: Yup.string().min(6).required("Please enter your password"),
});
