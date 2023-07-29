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
