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
    .min(8, "Must be above 8 characters"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .min(8, "Must Contain at least 8 Characters")
    .oneOf([Yup.ref("password")], "Passwords must and should match")
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

export const settingsSupportSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required")
});

export const createTaskSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(32, "The title must contain a maximum of 32 characters"),
  details: Yup.string().required("Task details is required")
});

export const editTaskSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(32, "The title must contain a maximum of 32 characters"),
  details: Yup.string().required("Task details is required")
});
