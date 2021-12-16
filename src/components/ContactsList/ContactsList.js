import React from 'react';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/actions/contacts-actions';
// import { deleteContact, getContacts } from '../../redux/operations/operations';
// import { contactFilter } from '../../redux/PhoneBook-selectors';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.scss';
import { useDeleteContactMutation, useGetContactsQuery } from '../../redux/contactSlice';
// import { useGetPokemonByNameQuery } from '../../redux/contactSlice';
// import { useGetContactsByQuery } from '../../redux/contactSlice';

const ContactsList = () => {
  const { data, isFetching, error } = useGetContactsQuery();

  const contacts = data;

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // const contacts = useSelector(contactFilter);

  return (
    <div>
      {isFetching ? <h2 className={s.title}>loading...</h2> : <h2 className={s.title}>Contacts</h2>}

      {data && (
        <ul className={s.contact_list}>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={deleteContact}
              deleting={isDeleting}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
