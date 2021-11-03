import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactMeForm.module.css";

export const ContactMeForm = props => {
  const form = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState("");

  const nameInputChangeHandler = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };
  const changeNameHandler = e => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const sendEmail = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
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
          onBlur={nameInputChangeHandler}
        />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input className={styles.submit} type="submit" value="Send" />
      </form>
    </div>
  );
};
