import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/actions/contacts-actions';
import { deleteContact, getContacts } from '../../redux/operations/operations';
import { contactFilter } from '../../redux/PhoneBook-selectors';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.scss';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch(getContacts());

    fetchContacts();
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  const contacts = useSelector(contactFilter);

  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
