import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './RegisterForm.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ name, email, password }) => {
    dispatch(operations.registerUser({ name, email, password }));
    // navigate('/contacts');
  };

  const schema = yup.object({
    name: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().min(7).max(14),
  });

  return (
    <>
      <Title>Registration</Title>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <Form >
            <Label>
              <TitleInput>Enter your name</TitleInput>
              <Input
                type="text"
                name="name"
             
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <TitleInput>Enter your e-mail</TitleInput>
              <Input
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Create a password</TitleInput>
              <Input
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">
              {isSubmitting ? '...' : 'Registration'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm;
