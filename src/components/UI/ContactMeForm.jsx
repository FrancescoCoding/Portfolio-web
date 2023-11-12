import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { Success } from "../../assets/Animations/Animations";

// Validation schema for the form
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").max(50, "Too long!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export const ContactMeForm = () => {
  const form = useRef();
  const storeLanguage = useSelector((state) => state.languages.language);
  const storeColour = useSelector((state) => state.colours);
  const isEnglish = storeLanguage === "EN";
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        "service_wp9ydnd",
        "template_28ozq9m",
        form.current,
        "user_3A2DqTXIldcHsNOG17QYb"
      )
      .then(
        (result) => {
          console.log(values.text);
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 4000);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const textFieldSx = {
    input: {
      color: storeColour.hex, // Use dynamic color from the state
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Input background color
    },
    "& label.Mui-focused": {
      color: storeColour, // Label color when focused
    },
    // also when the user clicks on the input or types in it

    "& .MuiInputLabel-root": {
      // Add enough space for the label
      padding: "0 5px",
      background: "var(--input-background)", // Match the input's background
      "&.Mui-focused": {
        color: "var(--label-color-focused)", // Label color when the input is focused
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `var(--${storeColour.colour}-active)`, // Use CSS variable for the border
      },
      // do same for textarea
      "& textarea": {
        borderColor: `var(--${storeColour.colour}-active)`, // Use CSS variable for the border
        shrink: true,
      },
      "& input:-webkit-autofill": {},
      "&:hover fieldset": {
        borderColor: `var(--${storeColour.colour}-active)`, // Border color when hovered
      },
      "&.Mui-focused fieldset": {
        borderColor: storeColour, // Border color when focused
      },
      "&.Mui-error fieldset": {
        borderColor: "red", // Border color when there is an error
      },
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "red", // Error message color
      fontSize: "13px", // Adjust the font-size as needed
      margin: 0,
    },

    width: "100%", // Full width
    mb: 2, // Margin bottom
  };

  return (
    <div>
      {!emailSent ? (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={sendEmail}
          innerRef={form}>
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label={isEnglish ? "Name" : "Nome"}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={textFieldSx}
                InputLabelProps={{
                  style: {
                    color: touched.name
                      ? storeColour
                      : "rgba(255, 255, 255, 0.7)",
                  },
                  shrink: true,
                }}
              />
              <Field
                as={TextField}
                type="email"
                name="email"
                label="Email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={textFieldSx}
                InputLabelProps={{
                  style: {
                    color: touched.email
                      ? storeColour
                      : "rgba(255, 255, 255, 0.7)",
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
                error={touched.message && !!errors.message}
                helperText={touched.message && errors.message}
                sx={{
                  ...textFieldSx, // Include other styles you have defined
                  "& .MuiInputBase-inputMultiline": {
                    color: `var(--${storeColour.colour}-primary-color)`, // Use the CSS variable for text color
                  },
                  // Include other styles for borders and such
                }}
                InputLabelProps={{
                  style: {
                    color: touched.message
                      ? `var(--${storeColour.colour}-active)`
                      : "rgba(255, 255, 255, 0.7)",
                  },
                  shrink: true,
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, bgcolor: storeColour.hex }}>
                Send
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <Success />
          <p>
            {isEnglish
              ? "Your message has been sent! I will get back to you as soon as possible."
              : "Il tuo messaggio è stato inviato! Ti risponderò il prima possibile."}
          </p>
        </div>
      )}
    </div>
  );
};
