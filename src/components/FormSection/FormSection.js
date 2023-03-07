import styled from "styled-components";
import Snackbar from "node-snackbar";
import { useContext } from "react";
import { Form, Formik } from "formik";
import Firebase from "@/service/firebase";
import { ContactUsSchema } from "@/helpers/validationSchema";
import { LoaderContext } from "@/providers/LoaderProvider";
import { useSnackbar } from "@/hooks/useSnackbar";
import { motion } from "framer-motion";

const inputs = [
  {
    label: "What's your name?",
    type: "text",
    placeholder: "Type your full name",
    name: "name",
  },
  {
    label: "What's your email address?",
    type: "email",
    placeholder: "example@gmail.com",
    name: "email",
  },
  {
    label: "What's your organization's name?",
    type: "text",
    placeholder: "Type your organization's name",
    name: "organization",
  },
  {
    label: "What services are you interested in?",
    type: "text",
    placeholder: "Enter your services of interest",
    name: "services",
  },
  {
    label: "Tell us about your project",
    type: "textarea",
    placeholder: "Please describe your project in detail",
    name: "message",
  },
];

export default function FormSection() {
  const { setLoader } = useContext(LoaderContext);
  const showSnackbar = useSnackbar();

  async function handleSubmit(values) {
    setLoader(true);
    try {
      await Firebase.addDataToCollection(values);
      showSnackbar({
        text: "Message has been recieved successfully. I will follow up soon!",
        variant: "success",
        key: "success",
      });
    } catch (error) {
      console.log(error);
      showSnackbar({
        text: error?.message || "Something went wrong! Please try again",
        variant: "error",
        key: "error",
      });
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    }
  }
  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          organization: "",
          services: "",
        }}
        enableReinitialize
        validateOnChange
        validateOnBlur
        validationSchema={ContactUsSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            {inputs.map((input, index) => {
              return (
                <FormSection.Input
                  key={index}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  index={index}
                  value={values[input.name]}
                  touched={touched[input.name]}
                  error={errors[input.name]}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name={input.name}
                />
              );
            })}
            <Button>
              SEND MESSAGE <span>→</span>
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
}

FormSection.Input = ({
  label,
  type,
  placeholder,
  index,
  touched,
  error,
  value,
  onBlur,
  onChange,
  name,
}) => {
  const Component = type === "textarea" ? TextArea : Input;
  const maxDelay = 2;
  const labelDelay = index * 0.5 + 0.5;
  const inputDelay = index * 0.5 + 0.8;
  return (
    <InputContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: labelDelay > maxDelay ? maxDelay : labelDelay }}
      position={index}
    >
      <Label
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: labelDelay > maxDelay ? maxDelay : labelDelay }}
      >
        {label}
      </Label>
      <Component
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: inputDelay > maxDelay ? maxDelay : inputDelay }}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  position: relative;
  padding-left: 72px;

  &:before {
    content: "0${({ position }) => position + 1}";
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 18px;
    font-weight: 300;
    color: #aaa;
    border: 1px solid #aaa;
    padding: 0px 16px;
    border-radius: 20px;
  }
`;

const Label = styled(motion.label)`
  font-weight: 400;
  margin-bottom: 6px;
  letter-spacing: 2px;
`;

const Input = styled(motion.input)`
  background-color: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  font-weight: 300;
  border-bottom: 1px solid #aaa;
  padding: 16px 0;
  letter-spacing: 1px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    border-bottom: 1px solid #e5008d;
  }
`;

const ErrorMessage = styled.p`
  color: #cb303d;
  font-weight: 300;
  margin-top: 4px;
  letter-spacing: 1px;
  position: absolute;
  bottom: -20px;
  font-size: 12px;
`;

const TextArea = styled(motion.textarea)`
  background-color: transparent;
  box-shadow: none;
  outline: none;
  letter-spacing: 1px;
  border: none;
  letter-spacing: 1px;
  font-weight: 300;
  color: #fff;
  border-bottom: 1px solid #aaa;
  padding: 16px 0;
  font-family: "Poppins", sans-serif;
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    border-bottom: 1px solid #e5008d;
  }
`;

const Button = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #e5008d;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e5008d;
    color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
  & span {
    margin-left: 10px;
    margin-bottom: 2px;
    font-weight: 900;
  }
`;
