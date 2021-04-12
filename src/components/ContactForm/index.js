import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import { ContactUsSchema } from "../../helpers/validationSchema";
import Envelope from "../../images/envelope.png";

const ContactForm = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: 1,
        ease: "easeOut",
      }}
    >
      <Heading
        initial={{ opacity: 0, scale: 1.2, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 1.5,
          ease: "easeOut",
        }}
      >
        Get in touch
      </Heading>
      <Formik
        initialValues={{ fullName: "", email: "", message: "" }}
        enableReinitialize
        validateOnChange
        validateOnBlur
        validationSchema={ContactUsSchema}
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
            <Left>
              <motion.img
                initial={{ opacity: 0, scale: 1.2, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 1.7,
                  ease: "easeOut",
                }}
                src={Envelope}
              />
            </Left>
            <Right>
              <InputContainer
                initial={{ opacity: 0, scale: 1.2, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 1.7,
                  ease: "easeOut",
                }}
              >
                <label for="fullName">
                  Full Name <span>*</span>
                </label>
                <input
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && (
                  <ErrorMessage>{errors.fullName}</ErrorMessage>
                )}
              </InputContainer>
              <InputContainer
                initial={{ opacity: 0, scale: 1.2, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 2,
                  ease: "easeOut",
                }}
              >
                <label for="email">
                  Email <span>*</span>
                </label>
                <input
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                )}
              </InputContainer>
              <InputContainer
                initial={{ opacity: 0, scale: 1.2, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 2.3,
                  ease: "easeOut",
                }}
              >
                <label for="message">
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                />
                {errors.message && touched.message && (
                  <ErrorMessage>{errors.message}</ErrorMessage>
                )}
              </InputContainer>
              <RippleButton onClick={handleSubmit}>Submit</RippleButton>
            </Right>
          </StyledForm>
        )}
      </Formik>
    </Section>
  );
};

export default ContactForm;

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  max-width: 1360px;
  margin: 0 auto;
  background-color: #545454;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 60px;
  @media only screen and (max-width: 1440px) {
    max-width: calc(100vw - 40px);
    margin: 0 20px;
  }
  @media only screen and (max-width: 940px) {
    margin-top: 60px;
  }
`;

const Heading = styled(motion.h1)`
  text-align: center;
  margin: 0px;
  font-size: 3vw;
  margin-bottom: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: 10px;
  color: #ffc837;
  font-size: 12px;
  font-weight: bold;
`;

const InputContainer = styled(motion.div)`
  position: relative;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    span {
      color: #fd4c59;
      font-size: 18px;
    }
  }
  input,
  textarea {
    background-color: #e6e6e6;
    outline: none;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    padding: 20px;
  }
  textarea {
    min-height: 120px;
  }
`;

const RippleButton = styled(motion.button)`
  background-position: center;
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #846add;
  outline: none;
  transition: background 0.8s;
  &:hover {
    background: #947aed radial-gradient(circle, transparent 1%, #947aed 1%)
      center/15000%;
  }
  &:active {
    background-color: #745acd;
    background-size: 100%;
    transition: background 0s;
  }
`;
