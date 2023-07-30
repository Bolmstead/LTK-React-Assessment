import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { iconStyle, linkStyle, navbarStyle } from "../styles/styles";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={navbarStyle} position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Link to="/" style={linkStyle}>
              <img
                style={iconStyle}
                className="logo"
                src="images/LtkLogo.png"
                alt="logo"
              ></img>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome!
            </Typography>

            <Button color="inherit">
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/create-todo" variant="contained" style={linkStyle}>
                Create To Do
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
