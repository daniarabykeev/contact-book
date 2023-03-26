import React, { useContext, useEffect } from "react";
import ContactsCard from "../components/ContactsCard";
import { authContext } from "../contexts/AuthContext";
import { contactsContext } from "../contexts/ContactsContext";

function MainPage() {
  const { contacts, getContacts } = useContext(contactsContext);
  const { user } = useContext(authContext);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {user ? (
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
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>To get access to Contacts, you must be loggined in</h2>
        </div>
      )}
    </div>
  );
}

export default MainPage;
