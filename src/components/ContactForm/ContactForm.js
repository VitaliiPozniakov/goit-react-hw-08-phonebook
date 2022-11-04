import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateContactMutation } from '../../redux/contacts/contact-api';
import style from './ContactForm.module.css';
import { useNavigate } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useGetContactsQuery } from 'redux/contacts/contact-api';

function ContactForm() {
  
const { data: contacts } = useGetContactsQuery();


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
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatNumber = number => {
    return contacts?.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`Contact with name "${name}" is already in phonebook`);
    } else if (checkRepeatNumber(number)) {
      return toast(`Contact with phone "${number}" is already in phonebook`);
    } else if (checkEmptyQuery(name, number)) {
      return toast.info("Enter the contact's name and number phone!");
    } else {
      createContact({ name, number });
      navigate('/contacts');
      toast.info('Contact successfully add to your phonebook');
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          className={style.input}
        />
      </label>

      <label className={style.label}>
        Number
        <NumberFormat
          placeholder="Enter phone number"
          format="(###) ###-##-##"
          mask="_"
          pattern="^[0-9\s\(\)\-]{15}"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className={style.input}
        />
      </label>

      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
}

export default ContactForm;
