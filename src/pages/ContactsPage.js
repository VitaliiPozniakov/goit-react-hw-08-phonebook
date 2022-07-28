
import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import Notification from '../components/Notification';
import ContactForm from 'components/ContactForm';
import Section from 'components/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ContactsPage() {
  const { data: contacts } = useGetContactsQuery();

//   const dispatch = useDispatch();
//   useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (

    <Container>
    <Section title="Phonebook">
      <ContactForm contacts={contacts}/>
    </Section>

    <Section title="Contacts">
      {contacts && contacts.length > 1 && <Filter />}
      {contacts && contacts.length > 0 ? (
        <ContactList contacts={contacts}/>
      ) : (
        <Notification message="Your contactlist is empty" />
      )}
    </Section>
  </Container>


    // <Container title="Contacts">
    //   <AddButton text="Add new contact" />
    //   <Filter />
    //   {contacts && contacts.length > 0 ? (
    //     <ContactList />
    //   ) : (
    //     <Notification message="Your contact list is empty" />
    //   )}
    // </Container>
  );
}

export default ContactsPage;