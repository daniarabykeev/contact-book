import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { contactsContext } from "../contexts/ContactsContext";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const init = {
  name: "",
  surName: "",
  phoneNumber: "",
  email: "",
  photo: "",
};

function Navbar() {
  const { addContact } = React.useContext(contactsContext);
  const navigate = useNavigate();
  const [contact, setContact] = React.useState(init);
  const [open, setOpen] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    addContact(contact);
    console.log(contact);
    setContact(init);
    handleClose();
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "50px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink style={{ marginRight: "50px" }} to="/">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              Home
            </div>
          </NavLink>
          <NavLink onClick={handleClickOpen}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddBoxIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              Add Contact
            </div>
          </NavLink>
          <div>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Button autoFocus color="inherit" onClick={handleSubmit}>
                    save
                  </Button>
                </Toolbar>
              </AppBar>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <form
                  action=""
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  style={{
                    marginTop: "50px",
                    marginLeft: "50px",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "700px",
                  }}
                >
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    id="outlined-basic"
                    label="name"
                    variant="outlined"
                    name="name"
                    value={contact.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    id="outlined-basic"
                    label="surName"
                    variant="outlined"
                    name="surName"
                    value={contact.surName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    id="outlined-basic"
                    label="photo"
                    variant="outlined"
                    name="photo"
                    value={contact.photo}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    id="outlined-basic"
                    label="phoneNumber"
                    variant="outlined"
                    name="phoneNumber"
                    value={contact.phoneNumber}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    name="email"
                    value={contact.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Button variant="outlined" onClick={handleSubmit}>
                    SAVE
                  </Button>
                </form>
              </div>
            </Dialog>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
