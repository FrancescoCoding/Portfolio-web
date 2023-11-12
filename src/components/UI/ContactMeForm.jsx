import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Success } from "../../assets/Animations/Animations";

import styles from "./ContactMeForm.module.css";

// Validation schema for the form
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required 🤭")
    .max(50, "Your name is a bit too long! 👀"),
  email: Yup.string()
    .email("Invalid email 🤔")
    .required("Email is required 🤭"),
  message: Yup.string().required("Message is required 🤭"),
});

export const ContactMeForm = () => {
  const form = useRef();
  const storeLanguage = useSelector((state) => state.languages.language);
  const storeColour = useSelector((state) => state.colours);
  const isEnglish = storeLanguage === "EN";
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    emailjs
      .send(
        "service_wp9ydnd",
        "template_28ozq9m",
        values,
        "user_3A2DqTXIldcHsNOG17QYb"
      )
      .then(
        (result) => {
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 4000);
          resetForm();
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setSubmitting(false));
  };

  const textFieldSx = {
    input: {
      color: storeColour.hex, // Use dynamic color from the state
    },
    "& label.Mui-focused": {
      color: storeColour, // Label color when focused
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `var(--${storeColour.colour}-active)`, // Use CSS variable for the border
      },
      // do same for textarea
      "& textarea": {
        shrink: true,
        color: `var(--${storeColour.colour}-primary-color)`, // Use the CSS variable for text color
      },
      "& input:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 1000px var(--input-background) inset`,
        WebkitTextFillColor: `var(--${storeColour.colour}-primary-color)`,
      },
      "&:hover fieldset": {
        borderColor: `var(--${storeColour.colour}-active)`, // Border color when hovered
      },
      "&.Mui-focused fieldset": {
        borderColor: storeColour.hex, // Border color when focused
      },
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "var(--error-color)",
      fontSize: "17px",
      margin: 0,
      fontWeight: 600,
    },
    width: "100%", // Full width
    mb: 2,
  };

  return (
    <Box className={styles.box}>
      {!emailSent && (
        <>
          {" "}
          <div className={styles.greetingMessage}>
            {isEnglish
              ? "Feel free to drop me a message using the form below!"
              : "Sentiti libero di mandarmi un messaggio qui sotto!"}
          </div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={sendEmail}
            innerRef={form}>
            {({ errors, touched, isValid, isSubmitting }) => (
              <Form>
                <Grid
                  container
                  spacing={2}>
                  <Grid item>
                    <Field
                      as={TextField}
                      name="name"
                      autoComplete="name"
                      label={isEnglish ? "Name" : "Nome"}
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      required
                      sx={textFieldSx}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        shrink: true,
                      }}
                    />
                    <Field
                      as={TextField}
                      type="email"
                      name="email"
                      label="Email"
                      autoComplete="email"
                      required
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={textFieldSx}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        shrink: true,
                      }}
                    />
                    <Field
                      as={TextField}
                      name="message"
                      label={isEnglish ? "Message" : "Messaggio"}
                      multiline
                      rows={4}
                      required
                      error={touched.message && !!errors.message}
                      helperText={touched.message && errors.message}
                      sx={{
                        ...textFieldSx,
                        "& .MuiInputBase-inputMultiline": {},
                      }}
                      InputProps={{
                        style: {
                          "::placeholder": {
                            color: "rgba(255, 255, 255, 0.7)",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!isValid || isSubmitting}
                      sx={{
                        bgcolor: `var(--${storeColour.colour}-active) !important`,
                        width: "150px !important",
                      }}>
                      {isSubmitting && isEnglish && "Sending..."}
                      {isSubmitting && !isEnglish && "Invio..."}
                      {!isSubmitting && isEnglish && "Send"}
                      {!isSubmitting && !isEnglish && "Invia"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </>
      )}
      {emailSent && (
        <div className={styles["success-container"]}>
          <Success />

          {isEnglish && (
            <p className={styles.success}>
              Your message has been sent! <br /> I will get back to you as soon
              as possible.{" "}
            </p>
          )}
          {!isEnglish && (
            <p className={styles.success}>
              Il tuo messaggio è stato inviato! <br /> Ti risponderò il prima
              possibile.{" "}
            </p>
          )}
        </div>
      )}
    </Box>
  );
};
