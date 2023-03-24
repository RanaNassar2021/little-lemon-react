import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../shared/Logo-svg.png";

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

    </>
  );
}

export default Header;