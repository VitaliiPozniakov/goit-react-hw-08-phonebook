// import Container from '../Container'
import {Wrapper, Avatar, Name, Btn} from './UserMeny.styled';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/auth-selectors';
import operations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../../../img/avatar.png';
// import Button from '@material-ui/core/Button';

const UserMenu = () => {
  const userName = useSelector(state => getName(state));
  const dispatch = useDispatch();

  // const logout = useLogoutUser();
  // function useLogoutUser() {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const logout = () => {
  //     dispatch(operations.logoutUser());
  //     navigate('/');
  //   };

  //   return logout;
  // }

  return (
    <Wrapper>
       <Avatar
        src={defaultAvatar}
        alt="Default Avatar"
        width="42"
      />
      <Name>
        Welcome,
       <b>{userName} </b> 
      </Name>


      <Btn
        type="button"
        onClick={()=>dispatch(operations.logoutUser())}
      >
        Log out
      </Btn>
    </Wrapper>
  );
};

export default UserMenu;
