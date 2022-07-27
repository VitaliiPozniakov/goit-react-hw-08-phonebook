import Container from '../Container'
import {Wrapper, CustomLink} from './AppBar.styled'
import AuthNav from './AuthNav'
import Navigation from './Navigation'
import UserMenu from './UserMenu'

const AppBar = () => (
    <Container>
    <Wrapper>
<Navigation/>
<AuthNav/>
<UserMenu/>
</Wrapper>
 </Container>
)

export default AppBar