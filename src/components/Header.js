import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from 'react-bootstrap'


const Header = () => {




  const [state, setState] = React.useState(true);

  return (
    <nav className="navbar">
      <div className="container justify-content-between">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">



              <h2 style={{ color: '#ffffff', fontWeight: "bold" }} > MONZU < span style={{ color: '#BA4A00 ' }}>.COM</span> </h2>

            </div>
          </ul>
          {state ? (


            <ul className="navbar__right">
              <li>

                <Nav.Link className="navmenu" as={HashLink} to='/home#header'>Home</Nav.Link>
              </li>
              <li>

                <Nav.Link className="navmenu" as={HashLink} to='/home#skills'>Skills</Nav.Link>
              </li>
              <li>

                <Nav.Link className="navmenu" as={HashLink} to='/home#projects'>Projects</Nav.Link>
              </li>

              <li>

                <Nav.Link className="navmenu" as={HashLink} to='/home#contact'>Contact Me</Nav.Link>
              </li>
              <li>

                <Nav.Link className="navmenu" as={HashLink} to='/blog'>Blog</Nav.Link>
              </li>
              <li>

                <Nav.Link className="navmenu" as={HashLink} to='/home#about'>About Me</Nav.Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>

      </div >
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav >
  );
};

export default Header;
