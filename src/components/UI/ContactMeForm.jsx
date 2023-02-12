import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactMeForm.module.css";
import { useSelector } from "react-redux";
import { Success } from "../../assets/Animations/Animations";

const validateEmail = email => {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regex.test(String(email).toLowerCase());
};

export const ContactMeForm = () => {
  const form = useRef();

  const storeLanguage = useSelector(state => state.languages.language);
  const isEnglish = storeLanguage === "EN";

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  let nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  let emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const [emailSent, setEmailSent] = useState(false);

  const changeNameHandler = e => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } else {
      setEnteredNameIsValid(true);
    }
  };

  const changeEmailHandler = e => {
    setEnteredEmail(e.target.value);

    if (validateEmail(e.target.value.trim() !== "")) {
      setEnteredEmailIsValid(true);
    }
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);

    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    } else {
      setEnteredEmailIsValid(true);
    }
  };

  const sendEmailHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    if (!validateEmail(enteredEmail)) {
      setEnteredEmailIsValid(false);
      return;
    }
    if (form.current.message.value.trim() === "") {
      return;
    }

    emailjs
      .sendForm(
        "service_wp9ydnd",
        "template_28ozq9m",
        form.current,
        "user_3A2DqTXIldcHsNOG17QYb"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    setEnteredName("");
    setEnteredEmail("");

    form.current.name.value = "";
    form.current.email.value = "";
    form.current.reset();

    setEnteredNameIsValid(true);
    setEnteredEmailIsValid(true);

    // Set email was sent state
    setEmailSent(true);
    console.log("running");

    // after 3 seconds, reset the form
    setTimeout(() => {
      setEmailSent(false);
    }, 4000);
  };

  const nameInputClasses = nameInputIsInvalid ? "invalid" : "";
  const emailInputClasses = emailInputIsInvalid ? "invalid" : "";

  return (
    <div className={styles["form-container"]}>
      {!emailSent && (
        <form ref={form} onSubmit={sendEmailHandler} className={styles.form}>
          <label>{isEnglish ? "Name" : "Nome"}</label>
          <input
            className={styles[`${nameInputClasses}`]}
            value={enteredName}
            type="text"
            name="name"
            onChange={changeNameHandler}
            onBlur={nameInputBlurHandler}
          />
          <label>Email</label>
          <input
            className={styles[`${emailInputClasses}`]}
            value={enteredEmail}
            type="email"
            name="email"
            onChange={changeEmailHandler}
            onBlur={emailInputBlurHandler}
          />
          <label>{isEnglish ? "Message" : "Messaggio"}</label>
          <textarea name="message" />
          <input className={styles.submit} type="submit" value="Send" />
        </form>
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
    </div>
  );
};
