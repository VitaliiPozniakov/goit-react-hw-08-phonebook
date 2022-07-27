// import Container from '../Container'
import {Wrapper} from './UserMeny.styled';
import { useSelector } from 'react-redux';
import { getName, getEmail } from 'redux/auth/auth-selectors';
import operations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));

  const logout = useLogoutUser();

  function useLogoutUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
      dispatch(operations.logoutUser());
      navigate('/');
    };

    return logout;
  }

  return (
    <Wrapper>
      <p>
        Welcome,
        {userName} {userEmail}
      </p>
      <button type="button" onClick={logout}>
        {' '}
        Logout
      </button>
    </Wrapper>
  );
};

export default UserMenu;
