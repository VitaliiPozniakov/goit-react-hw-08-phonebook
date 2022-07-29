import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Container from 'components/Container';
import style from './Home.module.css';

const Home = () => {
     const isLoggedIn = useSelector(getIsLoggedIn);
  
     const variants = {
        initial: {  rotate: -180},
        animate: { rotate: 0 },
        transition: { ease: 'easeOut', duration: 0.5 },
      };

    return (
        <Container>
      <div className={style.wrapper}>
        <AnimatePresence>
          <motion.h2
            className={style.title}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Welcome!
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            className={style.text}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
        With this application you will not forget your
        contacts!
          </motion.p>
        </AnimatePresence>
        {!isLoggedIn && (
          <AnimatePresence>
            <motion.p
              className={style.text}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              variants={variants}
            >
              Please, <b>Sign up</b> or <b>Log in</b> to have access to the
              Phonebook!
            </motion.p>
          </AnimatePresence>
        )}
      </div>
      </Container>
    );
  };
  
  export default Home;



// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/auth-selectors';
// import Container from 'components/Container';
// import AnimatedText from 'react-animated-text-content';

// const HomePage = () => {
//   const isLoggedIn = useSelector(getIsLoggedIn);

//   return (
//     <Container>
//         <AnimatedText
//   type="words" // animate words or chars
//   animation={{
//     x: '200px',
//     y: '-20px',
//     scale: 1.1,
//     ease: 'ease-in-out',
//   }}
//   animationType="float"
//   interval={0.06}
//   duration={0.8}
//   tag="p"
//   className="animated-paragraph"
//   includeWhiteSpaces
//   threshold={0.1}
//   rootMargin="20%"
// >
// Welcome 👋!
//  With this application you will not forget your
//         contacts!
// </AnimatedText>
  

//       {!isLoggedIn &&
//   <AnimatedText
//   type="words" // animate words or chars
//   animation={{
//     x: '200px',
//     y: '-20px',
//     scale: 1.1,
//     ease: 'ease-in-out',
//   }}
//   animationType="float"
//   interval={0.06}
//   duration={0.8}
//   tag="p"
//   className="animated-paragraph"
//   includeWhiteSpaces
//   threshold={0.1}
//   rootMargin="20%"
// >
// Please, 'Sign up' or 'Log in' to have access to the Phonebook!
// </AnimatedText>
       
// }
//     </Container>
//   );
// };

// export default HomePage;
