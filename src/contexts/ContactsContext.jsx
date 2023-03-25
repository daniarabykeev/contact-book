import axios from "axios";
import React, { createContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";

export const contactsContext = createContext();

const initialState = {
  contacts: [],
  oneContact: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ACTIONS.GET_ONE_CONTACT:
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
}

function ContactsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getContacts() {
    const { data } = await axios(API);
    dispatch({
      type: ACTIONS.GET_CONTACTS,
      payload: data,
    });
  }

  async function addContact(newContact) {
    await axios.post(`${API}`, newContact);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function getOneContact(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_CONTACT,
      payload: data,
    });
  }

  async function editContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  const value = {
    contacts: state.contacts,
    oneContact: state.oneContact,
    getContacts,
    getOneContact,
    addContact,
    deleteContact,
    editContact,
  };
  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  );
}

export default ContactsContext;
