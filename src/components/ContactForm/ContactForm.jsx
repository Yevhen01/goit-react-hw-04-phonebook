import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  FormWrapper,
  InputBox,
  InputLabel,
  SubmitBtn,
} from "./ContactForm.styled";

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", number: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({
      name: "",
      number: "",
    });
  };

  const { name, number } = form;

  return (
    <>
      <FormWrapper onSubmit={handleSubmit} autoComplete="on">
        <InputLabel>Name</InputLabel>
        <InputBox
          type="text"
          name="name"
          placeholder="Please enter your name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <InputLabel>Number</InputLabel>
        <InputBox
          type="tel"
          name="number"
          placeholder="Please enter your phone"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </FormWrapper>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
