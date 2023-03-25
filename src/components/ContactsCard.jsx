import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { contactsContext } from "../contexts/ContactsContext";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function ContactsCard() {
  const { contacts, getContacts, deleteContact } =
    React.useContext(contactsContext);

  const theme = useTheme();

  React.useEffect(() => {
    getContacts();
  }, []);

  return (
    <Card sx={{ display: "flex", width: "18rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {contacts.map((item) => {
            return (
              <div key={item.id}>
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
                  <div style={{ position: "relative", left: "40px" }}>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button
                      onClick={(e) => {
                        deleteContact(item.id);
                      }}
                    >
                      <HighlightOffIcon />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Box>
    </Card>
  );
}
