import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Container from 'components/Container';
import AnimatedText from 'react-animated-text-content';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
        <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
Welcome 👋!
 With this application you will not forget your
        contacts!
</AnimatedText>
  

      {!isLoggedIn &&
  <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
<p>Please, <b>Sign up</b> or <b>Log in</b> to have access to the Phonebook!</p> 
</AnimatedText>
       
}
    </Container>
  );
};

export default HomePage;
