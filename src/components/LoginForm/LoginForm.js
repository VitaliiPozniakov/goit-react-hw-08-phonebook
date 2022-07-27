import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';
import * as yup from 'yup';

function LoginForm() {

const dispatch = useDispatch();
  const navigate = useNavigate();

   const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(7).max(14),
  });

  const onSubmitForm = ({ email, password }) => {
    dispatch(operations.loginUser({ email, password }));
    navigate('/contacts');
  };

  return (
    <>
      <Title>Login</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={schema}
      >
        {({  isSubmitting }) => (
          <Form >
            <Label>
              <TitleInput>Please, enter your e-mail adress</TitleInput>
              <Input
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Please, enter your password?</TitleInput>
              <Input
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">{isSubmitting ? '...' : 'Login'}</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
