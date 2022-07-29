import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './RegisterForm.module.css';
import operations from 'redux/auth/auth-operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('Please fill in all fields!');
    } else if (password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
        dispatch(operations.registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
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
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={style.textField}
      />

      <TextField
        label="Password"
        variant="outlined"
        color="primary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={style.textField}
      />

  
        <Button
          variant="outlined"
          color="primary"
          size="large"
          type="submit"
        >
          Sign up
        </Button>



    </form>
  );
}


