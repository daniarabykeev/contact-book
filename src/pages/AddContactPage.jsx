// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { contactsContext } from "../contexts/ContactsContext";

// const init = {
//   name: "",
//   surName: "",
//   phoneNumber: "",
//   email: "",
//   photo: "",
// };

// function AddContactPage() {
//   const { addContact } = useContext(contactsContext);
//   const navigate = useNavigate();
//   const [contact, setContact] = useState(init);

//   function handleSubmit(e) {
//     e.preventDefault();
//     addContact(contact);
//     setContact(init);
//     navigate("/");
//   }

//   function handleChange(e) {
//     let obj = {
//       ...contact,
//       [e.target.name]: e.target.value,
//     };
//     setContact(obj);
//   }
//   return <div>AddContactPage</div>;
// }

// export default AddContactPage;
