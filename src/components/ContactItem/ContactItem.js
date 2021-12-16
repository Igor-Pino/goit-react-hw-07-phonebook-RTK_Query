import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.scss';

const ContactItem = ({ id, name, phone, onDeleteContact }) => (
  <li className={s.contactItem}>
    <div>
      <span className={s.contact_name}>{name}</span>
      <span className={s.contact_phone}>{phone}</span>
    </div>
    <button onClick={() => onDeleteContact(id)} className={s.contact_btn}>
      X
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
