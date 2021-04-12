import * as Yup from "yup";

export const ContactUsSchema = Yup.object({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter valid email")
    .required("Email is required"),
  message: Yup.string()
    .trim()
    .min(15, "Please enter atleast 15 characters")
    .required("Message is required"),
});
