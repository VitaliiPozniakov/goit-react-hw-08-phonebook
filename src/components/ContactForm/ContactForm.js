import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
} from '../../redux/contacts/contact-api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './ContactForm.module.css';
import {  useNavigate } from 'react-router-dom';

function ContactForm({ contacts }) {
  const navigate = useNavigate();
  const [createContact] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts?.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts?.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const checkTypeOfNumber = number => {
    return typeof(number) !== Number;
  };


  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`Contact with name "${name}" is already in phonebook`);
    } else if (checkRepeatNumber(number)) {
      return toast(`Contact with phone "${number}" is already in phonebook`);
    } else if (checkEmptyQuery(name, number)) {
      return toast.info("Enter the contact's name and number phone!");
    } 
    else if (checkTypeOfNumber(number)) {
      return toast.error("Invalid phone format. Enter numbers.");
    }
    else {
      createContact({ name, number });
      navigate("/contacts")      
      toast.info("Contact successfully add to your phonebook");
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} autoComplete="off" onSubmit={handleSubmit}>
     <TextField
        label="Name"
        variant="outlined"
        color="primary"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={style.textField}
      />
     
     <TextField
        label="Number"
        variant="outlined"
        color="primary"
        format="(###) ###-##-##"
        mask="_"
        pattern="^[0-9\s\(\)\-]{15}"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        className={style.textField}
      />
     
  
     <Button
          variant="outlined"
          color="primary"
          size="large"
          type="submit"
        >
      Add
        </Button>


    </form>
  );
}

export default ContactForm;



// import React from 'react';
// import css from './ContactForm.module.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import {
//   useCreateContactMutation,
// } from '../../redux/contacts/contact-api';

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2)
//     .max(32)
//     .trim()
//     .matches()
//     .required('Please enter name'),
//   number: yup.number().required('Please enter phone number'),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };



// const ContactForm = ({ contacts }) => {


//   const [createContact] = useCreateContactMutation();


//   const checkRepeatName = name => {
//     return contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   const checkRepeatNumber = number => {
//     return contacts.find(contact => contact.number === number);
//   };

//   const handleSubmit = (values, actions) => {
//     const { name, number } = values;

//     if (checkRepeatName(name)) {
//       Notify.warning(`Contact with name "${name}" is already in phonebook`);
//     } else if (checkRepeatNumber(number)) {
//       Notify.warning(`Contact with phone "${number}" is already in phonebook`);
//     } else {
//       createContact({ name, number });
//     }

//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}
//     >
//       <Form className={css.forma}>
//         <label htmlFor="name" className={css.label}>
//           <span className={css.labelText}>Name</span>
//           <Field type="text" name="name" className={css.input} />
//           <ErrorMessage name="name" component="span" className={css.error} />
//         </label>
//         <label htmlFor="number" className={css.label}>
//           <span className={css.labelText}>Number</span>
//           <Field type="tel" name="number" className={css.input} />
//           <ErrorMessage name="number" component="span" className={css.error} />
//         </label>
//         <div className={css.btnWraper}>
//           <button type="submit" className={css.btn}>
//             Add contact
//           </button>
//         </div>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
