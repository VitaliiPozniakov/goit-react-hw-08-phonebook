import { Button, ButtonText } from './BtnAddContact.styled';
import { TiPlus } from "react-icons/ti";
import propTypes from 'prop-types';

function DtnAddContact({ text }) {
  return (
    <Button to="/contacts/add">
              <TiPlus size={20} />
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

DtnAddContact.prototype = {
  text: propTypes.string,
};

export default DtnAddContact;