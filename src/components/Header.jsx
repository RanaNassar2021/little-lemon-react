import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../shared/Logo-svg.png";
import About from './AboutComponent';
import { Routes, Route } from "react-router-dom";
import Home from './Home';

function Header() {
  return (
    <>
   
      <Navbar bg="secondary" variant="dark">
        <Container>
        <img src={logo} alt="logo" className="me-4"  />
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/">Menu</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Menu" element={<Home/>}/>   
                </Routes>
              
              

    </>
  );
}

export default Header;