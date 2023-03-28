import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { contactsContext } from "../contexts/ContactsContext";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function ContactsCard({ item }) {
  const { contacts, getContacts, deleteContact } =
    React.useContext(contactsContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    getContacts();
  }, []);

  return (
    <Card sx={{ width: "18rem" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <div style={{ display: "flex", marginLeft: "10%" }}>
          <div>
            <Typography component="div" variant="h5">
              {item.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {item.surName}
            </Typography>
          </div>
          <div style={{ marginLeft: "10%" }}>
            <CardMedia
              component="img"
              sx={{ width: 120, height: "100%" }}
              image={item.photo}
              alt="Live from space album cover"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
              <h6>{item.phoneNumber}</h6>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon />
              <h6>{item.email}</h6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              onClick={(e) => {
                navigate(`/edit/${item.id}`);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                deleteContact(item.id);
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
