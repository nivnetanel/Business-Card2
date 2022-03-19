import React, { useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import isAlpha from "validator/es/lib/isAlpha";
import blacklist from "validator/es/lib/blacklist";
import contactFormUiString from "./ContactFormUiString";
import "./ContactForm.scss";

interface ContactFormValidator {
  name: boolean | null;
  email: boolean | null;
  length: boolean | null;
}

const ContactForm: React.FC = () => {
  const [formValidation, setFormValidation] = useState<ContactFormValidator>({
    name: null,
    email: null,
    length: null,
  });

  const isFormDisabled = () => {
    const { name, email, length } = formValidation;
    if (name && length && email) return false;
    return true;
  };

  const handleUserName = (name: string) => {
    // Check if name in english
    isAlpha(blacklist(name, " "))
      ? setFormValidation((pre) => ({ ...pre, name: true }))
      : setFormValidation((pre) => ({ ...pre, name: false }));

    // Check name length
    name.length >= 2 && name.length <= 30
      ? setFormValidation((pre) => ({ ...pre, length: true }))
      : setFormValidation((pre) => ({ ...pre, length: false }));
  };

  const handleUserEmail = (email: string) => {
    isEmail(email)
      ? setFormValidation((pre) => ({ ...pre, email: true }))
      : setFormValidation((pre) => ({ ...pre, email: false }));
  };

  const showNameErrors = () => {
    const { name, length } = formValidation;

    if (name === false && length === false) {
      return (
        <div className="alert alert-danger" role="alert">
          {contactFormUiString.errorMessages.name.NAME_MUST_BE_IN_ENGLISH}
        </div>
      );
    } else if (name === false) {
      return (
        <div className="alert alert-danger" role="alert">
          {contactFormUiString.errorMessages.name.NAME_MUST_BE_IN_ENGLISH}
        </div>
      );
    } else if (length === false) {
      return (
        <div className="alert alert-danger" role="alert">
          {contactFormUiString.errorMessages.name.NAME_MUST_BE_IN_RIGHT_RANGE}
        </div>
      );
    }
  };

  const showEmailErrors = () => {
    if (formValidation.email === false) {
      return (
        <div className="alert alert-danger" role="alert">
          {contactFormUiString.errorMessages.email}
        </div>
      );
    }
  };

  return (
    <div className="contact-form-wrapper">
      {window.screen.width >= 800 ? (
        <form
          data-aos="fade-right"
          autoComplete="off"
          action="https://formsubmit.co/nivnetanel96@gmail.com"
          method="post"
        >
          {/* Name */}
          <div className="control">
            <label htmlFor="Client name">
              {contactFormUiString.form.NAME.LABEL_NAME}
            </label>
            <input
              type="text"
              required
              aria-required="true"
              //@ts-ignore
              onInput={(e) => handleUserName(e.target.value)}
              placeholder={contactFormUiString.form.NAME.PLACEHOLDER}
              name="Client name"
              minLength={2}
              maxLength={30}
              id="Client name"
            />
          </div>
          {showNameErrors()}

          {/* Email */}
          <div className="control">
            <label htmlFor="Client email">
              {contactFormUiString.form.EMAIL.LABEL_EMAIL}
            </label>
            <input
              minLength={2}
              maxLength={100}
              type="email"
              required
              onChange={(e) => handleUserEmail(e.target.value)}
              aria-required="true"
              placeholder={contactFormUiString.form.EMAIL.PLACEHOLDER}
              name="Client email"
              id="Client email"
            />
          </div>
          {showEmailErrors()}

          {/* General notes */}
          <div className="control">
            <label htmlFor="Client message">
              {contactFormUiString.form.GENERAL_MESSAGE.LABEL_ANY_NOTES}
            </label>
            <textarea
              placeholder={contactFormUiString.form.GENERAL_MESSAGE.PLACEHOLDER}
              maxLength={200}
              name="Client message"
              aria-required="false"
              id="Client message"
            />
          </div>

          {/* Forms buttons */}
          <div className="form-buttons">
            {/* SEND */}
            <button
              type="submit"
              disabled={isFormDisabled()}
              className="btn btn-primary"
            >
              {contactFormUiString.form.SEND}
            </button>

            {/* RESET */}
            <button type="reset" className="btn btn-secondary">
              {contactFormUiString.form.RESET}
            </button>
          </div>
        </form>
      ) : (
        <form
          autoComplete="off"
          action="https://formsubmit.co/nivnetanel96@gmail.com"
          method="post"
        >
          {/* Name */}
          <div className="control">
            <label htmlFor="Client name">
              {contactFormUiString.form.NAME.LABEL_NAME}
            </label>
            <input
              type="text"
              required
              aria-required="true"
              onChange={(e) => handleUserName(e.target.value)}
              placeholder={contactFormUiString.form.NAME.PLACEHOLDER}
              name="Client name"
              minLength={2}
              maxLength={30}
              id="Client name"
            />
          </div>
          {showNameErrors()}

          {/* Email */}
          <div className="control">
            <label htmlFor="Client email">
              {contactFormUiString.form.EMAIL.LABEL_EMAIL}
            </label>
            <input
              minLength={2}
              maxLength={100}
              type="email"
              onChange={(e) => handleUserEmail(e.target.value)}
              required
              aria-required="true"
              placeholder={contactFormUiString.form.EMAIL.PLACEHOLDER}
              name="Client email"
              id="Client email"
            />
          </div>
          {showEmailErrors()}

          {/* General notes */}
          <div className="control">
            <label htmlFor="Client message">
              {contactFormUiString.form.GENERAL_MESSAGE.LABEL_ANY_NOTES}
            </label>
            <textarea
              placeholder={contactFormUiString.form.GENERAL_MESSAGE.PLACEHOLDER}
              maxLength={200}
              name="Client message"
              aria-required="false"
              id="Client message"
            />
          </div>

          {/* Forms buttons */}
          <div className="form-buttons">
            {/* SEND */}
            <button
              type="submit"
              disabled={isFormDisabled()}
              className="btn btn-primary"
            >
              {contactFormUiString.form.SEND}
            </button>

            {/* RESET */}
            <button type="reset" className="btn btn-secondary">
              {contactFormUiString.form.RESET}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
