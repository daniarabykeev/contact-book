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
import { CardMedia, TextField } from "@mui/material";
import { authContext } from "../contexts/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

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
  const { user, logout } = React.useContext(authContext);
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
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <NavLink style={{ marginRight: "50px" }} to="/">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                  Home
                </div>
              </NavLink>
              {user && user.email === "daniarabykeev@gmail.com" ? (
                <NavLink onClick={handleClickOpen}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AddBoxIcon
                      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    Add Contact
                  </div>
                </NavLink>
              ) : null}
            </div>
          </div>
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
        <div>
          {user ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <h5>{user.email}</h5>
              <CardMedia
                component="img"
                sx={{ width: 30, height: 30, borderRadius: "50%" }}
                image="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
                alt="photo"
              />
              <LogoutIcon style={{ marginLeft: "10px" }} onClick={logout} />
            </div>
          ) : (
            <NavLink
              style={{
                marginLeft: "500px",
                display: "flex",
                alignItems: "center",
              }}
              to="/login"
            >
              <h4>login</h4>
              <LoginIcon style={{ marginLeft: "10px" }} />
            </NavLink>
          )}
        </div>
      </Container>
    </AppBar>
  );
}
export default Navbar;
