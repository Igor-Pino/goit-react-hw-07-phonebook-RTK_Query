import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61b73cf9c95dd70017d413d0.mockapi.io';

const getContacts = createAsyncThunk('contacts/getContacts', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export { getContacts, addContact, deleteContact };

// import {
//   // getContactError,
//   // getContactRequest,
//   // getContactSuccess,
//   // addContactSuccess,
//   // addContactError,
//   // addContactRequest,
//   // deleteContactRequest,
//   // deleteContactSuccess,
//   // deleteContactError,
// } from '../actions/contacts-actions';

// const getContacts = () => async dispatch => {
//   dispatch(getContactRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(getContactSuccess(data));
//   } catch (error) {
//     getContactError(error);
//   }
// };

// const addContact = contact => dispatch => {
//   dispatch(addContactRequest());
//   axios
//     .post('/contacts', contact)
//     .then(response => response.data)
//     .then(data => dispatch(addContactSuccess(data)))
//     .catch(error => addContactError(error));
// };

// const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => deleteContactError(error));
// };
