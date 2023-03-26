import {
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactsContext } from "../contexts/ContactsContext";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const init = {
  name: "",
  surName: "",
  photo: "",
  phoneNumber: "",
  email: "",
};

function EditContactPage() {
  const { oneContact, getOneContact, editContact } =
    useContext(contactsContext);
  const [contact, setContact] = useState(init);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneContact(id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setContact(oneContact);
    }
  }, [oneContact]);

  function handleSubmit(e) {
    e.preventDefault();
    editContact(id, contact);
    setContact(init);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "50px" }}>
        <Card sx={{ display: "flex", width: "18rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div>
                <div style={{ display: "flex", marginLeft: "10%" }}>
                  <div>
                    <Typography component="div" variant="h5">
                      {contact.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {contact.surName}
                    </Typography>
                  </div>
                  <div style={{ marginLeft: "10%" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 120, height: "100%" }}
                      image={contact.photo}
                      alt="Live from space album cover"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "-30px",
                      }}
                    >
                      <LocalPhoneIcon />
                      <h6>{contact.phoneNumber}</h6>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <EmailIcon />
                      <h6>{contact.email}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Box>
        </Card>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "700px",
          }}
        >
          <TextField
            id="standard-basic"
            label="name"
            name="name"
            value={contact.name}
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            id="standard-basic"
            label="surName"
            name="surName"
            value={contact.surName}
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            id="standard-basic"
            label="phoneNumber"
            name="phoneNumber"
            value={contact.phoneNumber}
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            id="standard-basic"
            label="email"
            name="email"
            value={contact.email}
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            id="standard-basic"
            label="photo"
            name="photo"
            value={contact.photo}
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            SAVE
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditContactPage;
