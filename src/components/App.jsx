import Container from './Container'
import Loader from './Loader'
import AppBar from './AppBar'
import { Routes, Route  } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const HomePage = lazy(()=>
  import('../pages/HomePage' /* webpackCgunkName: "home-page" */)
)
const LoginPage = lazy(()=>
  import('../pages/LoginPage' /* webpackCgunkName: "login-page" */)
)
const RegisterPage = lazy(()=>
  import('../pages/RegisterPage' /* webpackCgunkName: "register-page" */)
)
const ContactsPage = lazy(()=>
  import('../pages/ContactsPage' /* webpackCgunkName: "contacts-page" */)
)

export default function App() {

  return (
    // <Container>
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/contacts/*" element={< ContactsPage/>} />
        <Route path="/login" element={< LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </Suspense>
      </>
    // </Container>
  );

  
  // const { data: contacts } = useGetContactsQuery();

  // const [createContact] = useCreateContactMutation();

  // return (
  //   <Container>
  //     <Section title="Phonebook">
  //       <ContactForm contacts={contacts} createContact={createContact} />
  //     </Section>
  //     <Section title="Contacts">
  //       {contacts && contacts.length > 0 && <Filter />}
  //       {contacts && contacts.length > 0 ? (
  //         <ContactList contacts={contacts} />
  //       ) : (
  //         <Notification message="Your contactlist is empty" />
  //       )}
  //     </Section>
  //   </Container>
  // );
}
