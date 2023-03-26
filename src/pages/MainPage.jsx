import React, { useContext } from "react";
import ContactsCard from "../components/ContactsCard";
import { contactsContext } from "../contexts/ContactsContext";

function MainPage() {
  const { contacts } = useContext(contactsContext);
  return (
    <div
      style={{
        marginLeft: "50px",
        marginTop: "50px",
        borderRadius: "9px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {contacts.map((item) => {
        return <ContactsCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default MainPage;
