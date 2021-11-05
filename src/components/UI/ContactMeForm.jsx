import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactMeForm.module.css";

// This function validates emails
const validateEmail = email => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(regex.test(String(email).toLowerCase()));
  return regex.test(String(email).toLowerCase());
};

export const ContactMeForm = () => {
  const form = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

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

    if (validateEmail(e.target.value)) {
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

  const sendEmail = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    if (enteredEmail.trim().length === 0) {
      setEnteredEmailIsValid(false);
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
  };

  const nameInputClasses = nameInputIsInvalid ? "invalid" : "";
  const emailInputClasses = emailInputIsInvalid ? "invalid" : "";

  return (
    <div className={styles["form-container"]}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
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
          type="email"
          name="email"
          value={enteredEmail}
          onChange={changeEmailHandler}
          onBlur={emailInputBlurHandler}
        />
        <label>Message</label>
        <textarea name="message" />
        <input className={styles.submit} type="submit" value="Send" />
      </form>
    </div>
  );
};
