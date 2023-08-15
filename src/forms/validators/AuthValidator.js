import * as yup from "yup";

// LOGIN
export const loginInitialValues = {
  email: "",
  password: "",
};
export const loginFormSchema = yup.object({
  password: yup.string().required("No password provided.").min(8, "Password is too short - should be 8 chars minimum."),
  email: yup.string().email().required("Please enter a valid email address"),
});

// REGISTER
export const registerInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
export const registerFormSchema = yup.object({
  email: yup.string().email().required("Entrez un format valid pour email."),
  password: yup.string().min(8, "Password is too short - should be 8 chars minimum.").required("No password provided."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Les deux mot de passe doivent être identiques.")
    .required("No password provided."),
});
