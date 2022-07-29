// import Container from '../Container'
import { Wrapper, Avatar, Name, Btn } from './UserMeny.styled';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/auth-selectors';
import operations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import defaultAvatar from '../../../img/avatar.png';

const UserMenu = () => {
  const userName = useSelector(state => getName(state));
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Avatar src={defaultAvatar} alt="Default Avatar" width="42" />
      <Name>
        Welcome,
        <b>{userName} </b>
      </Name>
      <Btn type="button" onClick={() => dispatch(operations.logoutUser())}>
        Log out
      </Btn>
    </Wrapper>
  );
};

export default UserMenu;
