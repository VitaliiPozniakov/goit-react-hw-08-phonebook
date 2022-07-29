import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import Notification from '../components/Notification';
import BtnAddContact from 'components/BtnAddContact';

function ContactsPage() {
  const { data: contacts } = useGetContactsQuery();

  return (
    <Container>
      <BtnAddContact text="Add new contact" />
      {contacts && contacts.length > 1 && <Filter />}
      {contacts && contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <Notification message="Your contactlist is empty" />
      )}
    </Container>
  );
}

export default ContactsPage;
