// import Container from '../Container'
import {CustomLink} from './Navigation.styled'
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(state => getIsLoggedIn(state));

   return (
        // <Container>
    
    <div>
    <nav>
        <CustomLink to='/'>Home</CustomLink>
        {isLoggedIn && (
      <CustomLink to='/contacts'>Contacts</CustomLink>
      )}
    </nav>
    </div>
    // </Container>
    )
}

export default Navigation