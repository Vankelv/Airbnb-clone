import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "../assets/styles/header.css";
import UserIcon from "./UserIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavLink from "react-bootstrap/esm/NavLink";
import { PiGlobeLight } from "react-icons/pi";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar>
        <Container>
          <Row className="header">
            <Col>
              <Navbar.Brand className="logo">
                <img src="/images/Airbnb.png" alt="Airbnb Logo" />
              </Navbar.Brand>
            </Col>
            <Col className="navMiddle">
              <Nav className="menu">
                <Nav.Link href="#">Anywhere</Nav.Link>
                <span className="bbtn"></span>
                <Nav.Link href="#">Any week</Nav.Link>
                <span className="bbtn"></span>
                <p className="searchP">
                  Add guess
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </p>
              </Nav>
            </Col>
            <Col className="user">
              <Nav.Link href="#" className="first">
                Airbnb your home
              </Nav.Link>
              <PiGlobeLight className="icon globe" />
              <NavLink
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="navLast flex"
              >
                <FontAwesomeIcon icon={faBars} />
                <span>
                  <UserIcon />
                </span>
              </NavLink>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="dropMenu"
              >
                <MenuItem onClick={handleClose} className="active">Sign up </MenuItem>
                <MenuItem onClick={handleClose}>Log in </MenuItem>
                <hr></hr>
                <MenuItem onClick={handleClose}>Airbnb your home</MenuItem>
                <MenuItem onClick={handleClick}>Help center</MenuItem>
              </Menu>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
