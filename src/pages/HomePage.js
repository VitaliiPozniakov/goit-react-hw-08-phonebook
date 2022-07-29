import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Container from 'components/Container';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <p>
        Welcome 👋! With this application you will not forget your
        contacts!
      </p>

      {!isLoggedIn &&
       <p>Please, <b>Sign up</b> or <b>Log in</b> to have access to the Phonebook!</p> }
    </Container>
  );
};

export default HomePage;
