import Container from '../Container';
import { Wrapper } from './AppBar.styled';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <Container>
      <Wrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </Container>
  );
};

export default AppBar;
