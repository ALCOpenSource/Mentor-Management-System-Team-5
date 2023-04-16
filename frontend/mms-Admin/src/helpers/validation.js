import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .max(50, "Must be 50 characters or less")
    .min(8, "Must be above 8 characters")
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required")
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .max(50, "Must be 50 characters or less")
    .min(8, "Must be above 8 characters")
});

export const settingsGeneralSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required")
});

export const settingsPasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .required("Password is required")
    .min(8, "Must Contain at least 8 Characters"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .min(8, "Must Contain at least 8 Characters")
    .oneOf([Yup.ref("newPassword")], "Passwords must and should match")
});
