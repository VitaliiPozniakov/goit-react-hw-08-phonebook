import React from 'react';
import { Span, Item, Btn } from './ContactListItem.styled';
import { useDeleteContactMutation } from '../../redux/contacts/contact-api';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <Span></Span>
      {name}: {phone}
      <Btn
        type="button"
        disabled={isDeliting}
        onClick={() => deleteContact(id)}
      >
        {isDeliting ? 'Deliting...' : 'Delete'}
      </Btn>
    </Item>
  );
};

export default ContactListItem;
