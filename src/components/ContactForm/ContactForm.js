import React from 'react';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useCreateContactMutation,
} from '../../redux/contacts/contact-api';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(32)
    .trim()
    .matches()
    .required('Please enter name'),
  number: yup.number().required('Please enter phone number'),
});

const initialValues = {
  name: '',
  number: '',
};



const ContactForm = ({ contacts }) => {


  const [createContact] = useCreateContactMutation();


  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = (values, actions) => {
    const { name, number } = values;

    if (checkRepeatName(name)) {
      Notify.warning(`Contact with name "${name}" is already in phonebook`);
    } else if (checkRepeatNumber(number)) {
      Notify.warning(`Contact with phone "${number}" is already in phonebook`);
    } else {
      createContact({ name, number });
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.forma}>
        <label htmlFor="name" className={css.label}>
          <span className={css.labelText}>Name</span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label htmlFor="number" className={css.label}>
          <span className={css.labelText}>Number</span>
          <Field type="tel" name="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <div className={css.btnWraper}>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
