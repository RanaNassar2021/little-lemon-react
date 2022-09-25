import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/">Menu</Nav.Link>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
   

    </>
  );
}

export default Header;