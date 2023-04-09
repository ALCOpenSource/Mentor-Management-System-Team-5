import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .max(50, "Must be 50 characters or less")
    .min(6, "Must be above 6 characters")
});
