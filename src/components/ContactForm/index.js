import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import * as React from "react";
import { ContactUsSchema } from "../../helpers/validationSchema";
import Firebase from "../../service/firebase";
import Snackbar from "node-snackbar";
import { LoaderContext } from "../../providers/LoaderProvider";

const ContactForm = () => {
  const { setLoader } = React.useContext(LoaderContext);

  async function handleSubmit(values) {
    setLoader(true);
    try {
      await Firebase.addDataToCollection(values);
      Snackbar.show({
        text: "Message has been recieved successfully. I will follow up soon!",
        pos: "bottom-center",
        actionTextColor: "#ec6ead",
      });
    } catch (error) {
      Snackbar.show({
        text: error?.message || "Something went wrong! Please try again",
        pos: "bottom-center",
        actionTextColor: "#ec6ead",
        showAction: false,
        duration: 2000,
      });
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    }
  }

  return (
    <section className="quick-view-section">
      <div id="contact" style={{ paddingBottom: 50 }}></div>
      <motion.section
        className="contact-form-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 1,
          ease: "easeOut",
        }}
      >
        <motion.h1
          className="contact-form-title"
          initial={{ opacity: 0, scale: 1.2, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 1.5,
            ease: "easeOut",
          }}
        >
          Get in touch
        </motion.h1>
        <Formik
          initialValues={{ fullName: "", email: "", message: "" }}
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
            <Form className="contact-form-styled" onSubmit={handleSubmit}>
              <div className="contact-form-left-section">
                <motion.img
                  initial={{ opacity: 0, scale: 1.2, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 1.7,
                    ease: "easeOut",
                  }}
                  src={"/images/envelope.png"}
                />
              </div>
              <div className="contact-form-right-section">
                <motion.div
                  className="contact-form-input-container"
                  initial={{ opacity: 0, scale: 1.2, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 1.7,
                    ease: "easeOut",
                  }}
                >
                  <label htmlFor="fullName">
                    Full Name <span>*</span>
                  </label>
                  <input
                    name="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="contact-form-error-message">
                      {errors.fullName}
                    </div>
                  )}
                </motion.div>
                <motion.div
                  className="contact-form-input-container"
                  initial={{ opacity: 0, scale: 1.2, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 2,
                    ease: "easeOut",
                  }}
                >
                  <label htmlFor="email">
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
                </motion.div>
                <motion.div
                  className="contact-form-input-container"
                  initial={{ opacity: 0, scale: 1.2, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 2.3,
                    ease: "easeOut",
                  }}
                >
                  <label htmlFor="message">
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
                </motion.div>
                <motion.button
                  className="contact-form-ripple-button"
                  onClick={handleSubmit}
                >
                  Submit
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.section>
    </section>
  );
};

export default ContactForm;
